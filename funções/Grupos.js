const markDAgua = [
	/🔛 \*\*BY:\*\* @Skynet02Robot|\*\*|• |`|🔍 | 🔍|🔎/,
	/🔛 .*/, 
	/👤.*/, 
	/👤Yubi .*/, 
	/🤖 .*/,  
    /\n\nBY: @MkBuscasRobot/, 
	/REF: .*/, 
    /CONSULTA DE TELEFONE\n\n/,
	/CONSULTA DE CPF\n\n/,
	/USUÁRIO: .*/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗖𝗣𝗙\n\n/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗣𝗟𝗔𝗖𝗔\n\n/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘\n\n/,
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 .*\n\n/,
	/CONSULTA DE CPF 🔎\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n「👤」DADO BÁSICOS\n\n/,
	/CONSULTA DE .*/,
	/\n\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nCANAL: https:\/\/t\.me\/SpaceXconsultas/,
	/「.*」/,
	/▱/,
	/▁| ▂| ▃| ▄| ▅ |▄/,
	/ID DA MENSAGEM:.*/,
	/┏• |┠• |┗• |/,
	/CANAL: https:\/\/t\.me\/SpaceXconsultas/,
	/CONSULTA FEITA POR: .*/,
	/┏|┠|┗|/,
	/CONSULTA NOME SIMPLES \n👤\n/,
	/\n\nBY: @MkBuscasRobot/gi, "",
   /EMPTY/gi, "",
   /\n\n\n\n/gi, "\n\n",
   /USUÁRIO: matheus/gi, '',
   /\n\nUSUÁRIO: matheus/gi, '',
   /USUÁRIO: matheus\n\n/gi, '',
   / USUÁRIO: matheus/gi, '',

];
const Grupos = [
	{
		chat: "PUXADAS_VIP",
		bot: "MkBuscasRobot",
		cmd: {
			
			cpf1: `/cpf1`,
			cpf2: `/cpf2`,
			cpf3: `/cpf3`,
			cpf4: `/cpf4`,
			nome: `/nome`,
			telefone: `/tel1`,
			telefone2: `/tel2`,
			telefone3: `/tel3`,
			cnpj: `/cnpj`,
			placa1: `/placa1`,
			placa2: `/placa2`,
			parentes: `/parentes`,
			beneficios: `/beneficios`,
			vizinhos: `/vizinhos`,
		}
	},
];
var Types = [];
Grupos.forEach((i) =>
	Object.keys(i.cmd).forEach((j) => {
		if (!Types.includes(j)) Types.push(j);
	})
);

const tgApis = [
	{
		apiId: 24216953, // coloque apild aqui 
		apiHash: "0512d08ef5adbaa122eee0a00ad9242a ", // coloque a apiHash aqui 
		stringSession: "1AQAOMTQ5LjE1NC4xNzUuNTQBuz3RPuhzj8B90LlCq1j0A/emZy470JjLSWR7Rojyx9utZiZ1ZXEG0en5v3Ibs93nluUIPH3mDiVlWbr2sSdasmKW/RowZIm7UEwQAYdCoDY5x/23tSuOzhmvlp+YRY8scgecJZY5h2rbvgZLFLcbGX9H6tpbHgBXgjo2/oYwG0bK8nifWxYtufq3Hh/HpQgnIxFRP4IyJiRze4BAsvHuYHez5ncb89fYcgCQ6LSGHb1tJCPpOTm5EyL9LGiK0eViSe7VyR0JGvZrbcAQ+LXye9ybt4RtXWGjgOnLUVHhwcC384oTJdLeA0G/ypT7lhEaSyM6Fufo4Jth1vCGDrK0WtQ=", // coloque a string aqui 
		number: "+5561986757412", // coloque o número do telegram aqui 
	},
];

module.exports = {
	markDAgua,
	Types,
	Grupos,
	tgApis,
};
