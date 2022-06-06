// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮BayMax Bot© 2022 ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮BayMax Bot SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF BayMax BOT SOFTWARE EMAIL US
//▮developerwrld@gmail.com
//▮WHATSAPP US : https://wa.me/263780699988
//▮OWNER NUMBER https://wa.me/263780699988
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃BayMax SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING BayMax BOT
//┃THANKS TO Mr Juice & EVERYONE WHO HELPED
//┗━━━━━━━━━━━━━━━━━━━━━━━━━

const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//settings
global.owner = ['2637806899988',''] //owner number +27634090203
global.pemilik = ['263780699988'] //owner number +263780699988
global.premium = ['263780699988'] //premium number +263780699988
global.pengguna = 'Mr Juice' //username
global.footer = 'BayMax BOT'
global.botnma = 'BayMax BOT' //bot name
global.ownernma = 'Mr Juice' //owner name
global.packname = 'Mr Juice' //sticker package name
global.author   = 'Mr Juice' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/','+'] //prefix
global.sp = '🔵' //sp
global.mess = {
    success: 'MrJuice!',
    admin: '*This feature is only for Mr Juice*',
    botAdmin: '*BayMax Bot must be admin first!*',
    owner: '*this feature is only for Mr Juice*',
    group: '*Feature is only for groups!*',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: '*wait a moment BayMax proccessing*',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./BayMax/Mr Juice.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
