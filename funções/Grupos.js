const markDAgua = [
	/🔛 \*\*BY:\*\* @Skynet02Robot|\*\*|• |`|🔍 | 🔍|🔎/,
	/🔛 .*/, 
	/👤.*/, 
	/\*/gi,
	/\`/gi,
	/\+/gi, 
	/\[/gi, 
	/\]/gi, 
    /\(/gi, 
	/\)/gi, 
	/\•/gi, 
	/\n\n\n/gi, "\n\n",
	/CONSULTA DE CPF 2 \n\n/gi, 
	/🔍 CONSULTA DE CPF1 COMPLETA 🔍/gi, "CONSULTA DE CPF ",
	/🔍 CONSULTA DE CPF3 COMPLETA 🔍/gi, "CONSULTA DE CPF ",
	/🔍 CONSULTA DE CPF 4 🔍/gi, "CONSULTA DE CPF ",
	/BY: @MkBuscasRobot/gi, "",
	/\n\nUSUÁRIO: matheus/gi, '',
	/USUÁRIO: matheus\n\n/gi, '',
	/ USUÁRIO: matheus/gi, '',
	/🔍|V1|V2/gi, '',
	/COMPLETA/gi, '',
	/CONSULTA DE CPF 2/gi, 'CONSULTA DE CPF',
	/\n\nBY: @MkBuscasRobot/gi, "",
	/\n\nREF: @refmkbuscas/gi, '',
	/\nREF: @refmkbuscas/gi, '',
	/REF: @refmkbuscas/gi, '',
	/EMPTY/gi, "",
	/\n\n\n\n/gi, "\n\n",
	/USUÁRIO: matheus/gi, '',
	/COMPLETA/gi, '',
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗖𝗣𝗙\n\n/gi, '',
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗣𝗟𝗔𝗖𝗔\n\n/gi, '',
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘\n\n/gi, 
	/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗡𝗢𝗠𝗘\n\n/gi, '',
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
];
const Grupos = [
	{
		chat: "consultas_fre",
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
		stringSession: "1AQAOMTQ5LjE1NC4xNzUuNTQBuycZpg+0LQtliGVwpYpU1Ev2flPuFZoQQmJTVThsGgCkjbYVHkqzBeU3YIPt0wOtc4KXX82/0espc2WowO+SmdjdgRd7ESIY2/+1RPkaM9Qpm36O2HQxiM4JNBuKj32uu+jURwRM7oGH5oZAq8foG9x5Fh9U67eFHjqMXMlgs+bxFfMVrgxNGuXDBhQxObNeaBDN8S+/1opX2yDrnDYW9PJurVdkSn+TKbrF4GmMRAZLaHjRegeHTzB5+WCRvgvScS67qMNCI5aF56FGOGXWOij68W+a3sfDdqk6MvSmnxtoPBlxJYXggamKtWlOY+onklvPk7YJ8X3AL2fIN5FNTXo=", // coloque a string aqui 
		number: "+5561986757412", // coloque o número do telegram aqui 
	},
];

module.exports = {
	markDAgua,
	Types,
	Grupos,
	tgApis,
};
