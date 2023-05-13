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
		stringSession: "1AQAOMTQ5LjE1NC4xNzUuNTQBu3AIsirVZA9mk1PI7efyOohq00n7OWVSfsvT5xepiB7a/c6Rr/T3jfqOperjRVo6GdR2ydL22EsEuVksbVed7oXJfnJJwg5Nkl6YwfzHgmzHLFcik9CZcxA6c/KAH52RpULomumSRzdudWHDKi2vAYYBHuS6kv+6nP21L2xxyU1NuG2PByn+QL3Dgymq5kvpFoWxCyFkIe6SGoAIeyiFzL/N8S7ZHKYGYmsj9KS54iYzgsC3IWDGmnI0VIrocq+uUmJCFI2fMzP0y7fqIUftwOVYPytHAa3XpAnCWWSgk8WlUTGg2dskLivpuvPwkQzutlt5/tHO5k8T18VK7d574A4=", // coloque a string aqui 
		number: "+5561986757412", // coloque o número do telegram aqui 
	},
];

module.exports = {
	markDAgua,
	Types,
	Grupos,
	tgApis,
};
