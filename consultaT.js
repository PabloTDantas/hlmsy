yubi = process.cwd()


// const do Telegram
var express = require('express');
var router = express.Router();
var input = require("input");
var cors = require('cors');
var fs = require('fs');
var fetch = require('node-fetch');

var achou = false;
var countNumber = -1;
var countChat = -1;

const { 
NewMessage
 } = require("telegram/events");
 
const {
 telegram
 } = require("./funções/connection");
 
const { isLimit,
verificar_apikey, 
adicionar_limit, 
verificar_limit } = require("./db/db");

const { markDAgua,
Types, 
Grupos, 
tgApis, 
} = require("./funções/Grupos.js");

router.get("/puxar", async (req, res) => {
const type = req?.query?.type?.toLowerCase() || '';
const query = req?.query?.q?.toLowerCase().replace(/\.|\-|\(|\)|\+/gi, "") || '';
const token = req?.query?.token || '';
var db = JSON.parse(fs.readFileSync("./db.json"));
if (query == '') return res.json({http_code: 400,error: "Query não pode ser vazio"});
const check = await verificar_apikey(token);
if (!check) return res.status(403).send({status: 403, result: `apikey: ${token} não encontrada, por favor compre premium! wa.me/5511978018726`});
const limitzin = await verificar_limit(token);
let limit = await isLimit(token);
if (limit) return res.status(403).send({status: 403, result: 'seu limit acabou compre o premium...'});
adicionar_limit(token);
if (!Types.includes(type))
return res.json({
http_code: 400,
error: 'tipo de consulta invalida'
});
if (query === "11978018726") return res.json({
http_code: 500,
error: "este numero esta proibido de ser consultado!"
})
countNumber++;
if (countNumber >= tgApis.length) countNumber = 0;
countChat++;
if (countChat >= Grupos.length) countChat = 0;
while (!Grupos[countChat].cmd[type]) {
countChat++;
if (countChat >= Grupos.length) countChat = 0;
}
if (db?.[Grupos[countChat].bot]?.[type]?.[query]) {
console.log(`[CONSULTA-DB] ${token}: ${type} = ${query}`);
achou = true;
res.json({
http_code: 200,
limite: limitzin, 
result: db[Grupos[countChat].bot][type][query]
});
return;
}
let send = await telegram[countNumber].sendMessage(Grupos[countChat].chat, {
message: `${Grupos[countChat].cmd[type]} ${query}`
}).catch(err => {
console.log("Nao foi possivel enviar a mensagem:", err);
});
while (!send) {
console.log("Nao foi possivel enviar a mensagem, tentando novamente...");
countChat++;
if (countChat >= Grupos.length) countChat = 0;
send = await telegram[countNumber].sendMessage(Grupos[countChat].chat, {
message: `${Grupos[countChat].cmd[type]} ${query}`
});
}
console.log(`[CONSULTA] ${token}: Type: ${type}(${Grupos[countChat].cmd[type]}), Query: ${query}, Number: ${tgApis[countNumber].number}, Chat: ${Grupos[countChat].chat}, Bot: ${Grupos[countChat].bot}`);
const Reply = (response) => {
let botx = Grupos[countChat].bot;
let chatx = Grupos[countChat].bot;
if (db?.[botx]?.[type]) {
db[botx][type][query] = response;
}
else if (db?.[botx]) {
db[botx][type] = {
[query]: response
};
}
else {
db[botx] = {
[type]: {
[query]: response
}
};
}
fs.writeFileSync("./db.json", JSON.stringify(db, null, "\t"));
console.log(`[SAVE-DB] ${token}: ${chatx}: ${botx}: ${type} = ${query}`);
return res.json({
http_code: 200,
limite: limitzin, 
result: response
});
}
async function OnMsg(event) {
try {
const message = event.message;
const textPure = message?.text ?? message?.message;
const text =
message && message.text ?
message.text.toLowerCase() :
message && message.message ?
message.message.toLowerCase() : '';
const msgMarked = await message.getReplyMessage();
const msgMarkedText =
msgMarked && msgMarked.text ?
msgMarked.text.toLowerCase() :
msgMarked && msgMarked.message ?
msgMarked.message.toLowerCase() : '';
const sender = await message.getSender();
const senderId = sender && sender.username ? sender.username : '';
const chat = await message.getChat();
const chatId = chat && chat.username ? chat.username : '';
if ((chatId == Grupos[countChat].chat && senderId == Grupos[countChat].bot) &&
((msgMarkedText.includes(query)) ||
text.includes(query))) {
achou = true;
await telegram[countNumber].markAsRead(chat);
console.log(`textPure: ${textPure}, text: ${text}, msgMarked: ${msgMarkedText}`)
if (text.includes("encontrad")) {
return Reply("Não encontrado");
} else if (text.includes("inválid") || text.includes("invalid")) {
return Reply("Inválido");
} else if (message?.media) {
if (message.media.hasOwnProperty("photo")) {
const buffer = await telegram[countNumber].downloadMedia(message.photo, {});
let json = {
image: true,
file: false,
base64: Buffer.from(buffer).toString("base64")
};
return Reply(json);
} else if (message.media.hasOwnProperty("document")) {
const buffer = await telegram[countNumber].downloadMedia(message, {});
let json = {
image: false,
file: true,
base64: Buffer.from(buffer).toString("base64")
}
return Reply(json);
}
} else {
await telegram[countNumber].markAsRead(chat);
let str = textPure;
markDAgua.forEach((f) => {
rex = RegExp(f, "gi");
str = str.replace(rex, '');
})
str = str.trim();
return Reply(str);
}
}
} catch (e) {
if (achou) return;
res.json({
http_code: 500,
error: "error no servidor, não foi possivel fazer a consulta"
})
console.log(e);
}
}
telegram[countNumber].addEventHandler(OnMsg, new NewMessage({}));
setTimeout(() => {
if (achou) return;
res.json({
http_code: 500,
error: "servidor demorou muito para responder"
});
}, 40000);
});


module.exports = router