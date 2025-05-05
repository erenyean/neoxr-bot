const models = {
   users: Object.freeze({
      afk: -1,
      afkReason: '',
      afkObj: {},
      banned: false,
      ban_temporary: 0,
      ban_times: 0,
      premium: false,
      expired: 0,
      lastseen: 0,
      hit: 0,
      warning: 0,
      example: []
   }),
   groups: Object.freeze({
      activity: 0,
      antidelete: true,
      antilink: false,
      antivirtex: false,
      antitagsw: true,
      filter: false,
      left: false,
      localonly: false,
      mute: false,
      viewonce: true,
      autosticker: true,
      member: {},
      text_left: '',
      text_welcome: '',
      welcome: true,
      expired: 0,
      stay: false
   }),
   chats: Object.freeze({
      chat: 0,
      lastchat: 0,
      lastseen: 0
   }),
   setting: Object.freeze({
      autodownload: true,
      antispam: true,
      debug: false,
      error: [],
      hidden: [],
      pluginDisable: [],
      receiver: [],
      groupmode: false,
      sk_pack: 'Made By',
      sk_author: 'ɳoɓꀤʈɑ 👑🖤🎧',
      self: false,
      noprefix: false,
      multiprefix: true,
      prefix: ['.', '#', '!', '/'],
      toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"],
      online: true,
      onlyprefix: '+',
      owners: ['923112345043'],
      lastReset: new Date * 1,
      msg: 'Привет +tag 🪸\nЯ — автоматизированная система (WhatsApp-бот), которая поможет вам выполнять различные задачи, искать и получать данные / информацию прямо через WhatsApp.\n◦ *Модуль*: +module\n◦ *База данных*: +db\n◦ *Библиотека*: Baileys v+version\n◦ *INSTA*: https://www.instagram.com/ayazaliofc?igsh=OWdlcXg4dHdtN2Zk\n◦ *Исходный код*: https://github.com/ayazaliofc\nЕсли вы обнаружили ошибку или хотите перейти на премиум-план, свяжитесь с владельцем.',
      style: 4,
      cover: 'https://files.catbox.moe/rx4f9u.jpeg',
      link: 'https://chat.whatsapp.com/HIcgfURfAZiKS8AOWCSu4z'
   })
}

module.exports = { models }
