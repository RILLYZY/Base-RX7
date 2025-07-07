/*
Base Created By RilzX7 
© 2025 ( RX7 )
Tele : t.me/Rilyzyishere

Gunakanlah Base Ini Untuk Sc Kalian, Tapi Jangan Hapus Credits Author Diatas ! 

Base Created By RilzX7 
© 2025 ( RX7 )
Tele : t.me/Rilyzyishere
*/
const { Telegraf, Markup } = require("telegraf");
const fs = require("fs");
const chalk = require("chalk");
const config = require("./config");
const fetch = require("node-fetch");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    downloadContentFromMessage,
    emitGroupParticipantsUpdate,
    emitGroupUpdate,
    generateWAMessageContent,
    generateWAMessage,
    makeInMemoryStore,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    MediaType,
    areJidsSameUser,
    WAMessageStatus,
    downloadAndSaveMediaMessage,
    AuthenticationState,
    GroupMetadata,
    initInMemoryKeyStore,
    getContentType,
    MiscMessageGenerationOptions,
    useSingleFileAuthState,
    BufferJSON,
    WAMessageProto,
    MessageOptions,
    WAFlag,
    WANode,
    WAMetric,
    ChatModification,
    MessageTypeProto,
    WALocationMessage,
    ReconnectMode,
    WAContextInfo,
    proto,
    WAGroupMetadata,
    ProxyAgent,
    waChatKey,
    MimetypeMap,
    MediaPathMap,
    WAContactMessage,
    WAContactsArrayMessage,
    WAGroupInviteMessage,
    WATextMessage,
    WAMessageContent,
    WAMessage,
    BaileysError,
    WA_MESSAGE_STATUS_TYPE,
    MediaConnInfo,
    URL_REGEX,
    WAUrlInfo,
    WA_DEFAULT_EPHEMERAL,
    WAMediaUpload,
    jidDecode,
    mentionedJid,
    processTime,
    Browser,
    MessageType,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    Mimetype,
    relayWAMessage,
    Browsers,
    GroupSettingChange,
    DisconnectReason,
    WASocket,
    getStream,
    WAProto,
    isBaileys,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    templateMessage,
    InteractiveMessage,
    Header,
} = require('@whiskeysockets/baileys');
const pino = require("pino");
let Ril = null;
let WaConect = false;

async function ThanksTo() {
  console.log(chalk.green(`
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
- 2025 ( RX7 ) 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
Terimakasih Telah Membeli Script Ini
Saya RilzX7 Tidak Bertanggung Jawab
Jika Script Ini Disalah Gunakan!
© Developer By RilzX7
`));
}

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

const Connection = async () => {
    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const { version } = await fetchLatestBaileysVersion();

    const connectionOptions = {
        version,
        keepAliveIntervalMs: 30000,
        printQRInTerminal: false,
        logger: pino({ level: "silent" }), 
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        getMessage: async (key) => ({
            conversation: 'RilzXTenSiror',
        }),
    };

    Ril = makeWASocket(connectionOptions);

    Ril.ev.on('creds.update', saveCreds);
    store.bind(Ril.ev);

    Ril.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'open') {
            WaConect = true;
        }

        if (connection === 'close') {
    const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;

    if (shouldReconnect) {
        Connection();
        }

         WaConect = false;
       }
    });
}

(async () => {
  await ThanksTo();
  Connection();

 const bot = new Telegraf(config.BOT_TOKEN);

let db = require("./database.json");

const saveDatabase = () => {
  fs.writeFileSync("./database.json", JSON.stringify(db, null, 2));
};

if (!db.owners.includes(config.OWNER_ID)) {
  db.owners.push(config.OWNER_ID);
  saveDatabase();
}

const isPrem = (ctx, next) => {
  const userId = ctx.from.id;

  if (
    !db.prem.includes(userId) &&
    !db.owners.includes(userId) &&
    config.OWNER_ID !== userId
  ) {
    return ctx.reply("Hi Bruh You Not Acces This Fitur");
  }

  return next();
};

bot.start(async (ctx) => {
  const message = `
\`\`\`
⟣───────────────────
「 ⼢ 」 Hi Konnichiwa, watashi wa
SpectraNoise V10 ga sakusei shita Telegram Bot de, uebu saito o kõgeki suru kinō o motte imasuga

┌───── >
├── Informasi ( 𖣂 )
┠─ ▢ ! ( 🍁 ) ─!s RX7
├
├ ☇  ㅊ\`TraVisZap\`ㅊ  ☇
├> Developer: RilzX7
├> Script: SpectraNoise
├> Version: 10X
├> Prefix: Multi
├
┠─ ▢ !
├─ - VzTZap
└── >
\`\`\`
`;

  await ctx.replyWithPhoto("https://files.catbox.moe/4gl0lw.jpg", {
    caption: message,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "𝐎͢𝐰ͯ𝐧͢𝐞ͯ𝐫", callback_data: "owner_menu" },
          { text: "𝐕͢𝐳ͯ𝐓͢𝐙ͯ𝐚͢𝐩", callback_data: "bug_Menu" }
        ]
      ]
    }
  });
});
bot.action('main_menu', async (ctx) => {
  try {
    await ctx.deleteMessage();
  } catch (error) {
    console.error("Error deleting message:", error);
  }
const message = `
\`\`\`
⟣───────────────────
「 ⼢ 」 Hi Konnichiwa, watashi wa
SpectraNoise V10 ga sakusei shita Telegram Bot de, uebu saito o kõgeki suru kinō o motte imasuga

┌───── >
├── Informasi ( 𖣂 )
┠─ ▢ ! ( 🍁 ) ─!s RX7
├
├ ☇  ㅊ\`TraVisZap\`ㅊ  ☇
├> Developer: RilzX7
├> Script: SpectraNoise
├> Version: 10X
├> Prefix: Multi
├
┠─ ▢ !
├─ - VzTZap
└── >
\`\`\`
`;

  await ctx.replyWithPhoto("https://files.catbox.moe/4gl0lw.jpg", {
    caption: message,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "𝐎͢𝐰ͯ𝐧͢𝐞ͯ𝐫", callback_data: "owner_menu" },
          { text: "𝐕͢𝐳ͯ𝐓͢𝐙ͯ𝐚͢𝐩", callback_data: "bug_Menu" }
        ]
      ]
    }
  });
});
bot.action('bug_Menu', async (ctx) => {
  try {
    await ctx.deleteMessage();
  } catch (error) {
    console.error("Error deleting message:", error);
  }

  const ownerMenuMessage = `\`\`\`
 ⟣───────────────────
「 ⼢ 」 Hi Konnichiwa, watashi wa
SpectraNoise V10 ga sakusei shita Telegram Bot de, uebu saito o kõgeki suru kinō o motte imasuga

┌───── >
├── Informasi ( 𖣂 )
┠─ ▢ ! ( 🍁 ) ─!s RX7
├
├ ☇  ㅊ\`TraVisZap\`ㅊ  ☇
├> Developer: RilzX7
├> Script: SpectraNoise
├> Version: 10X
├> Prefix: Multi
├
┠─ ▢ !
├─ - VzTZap
└── >

┌───── >
├── Exploit ( 𖣂 )
┠─ ▢ ! ( 🍁 ) ─!s RX7
├
├ ☇  ㅊ\`TraVisZap\`ㅊ  ☇
├> /x 628xxx
├
┠─ ▢ !
├─ - VzTZap
└── >\`\`\``;

  const ownerKeyboard = [
    [{
      text: "𝐁͢𝐚ͯ𝐜͢𝐤🐉",
      callback_data: "main_menu"
    }]
  ];

  await ctx.replyWithPhoto("https://files.catbox.moe/4gl0lw.jpg", {
    caption: ownerMenuMessage,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: ownerKeyboard
    }
  });
});
bot.action('owner_menu', async (ctx) => {
  try {
    await ctx.deleteMessage();
  } catch (error) {
    console.error("Error deleting message:", error);
  }

  const ownerMenuMessage = `\`\`\`
 ⟣───────────────────
「 ⼢ 」 Hi Konnichiwa, watashi wa
SpectraNoise V10 ga sakusei shita Telegram Bot de, uebu saito o kõgeki suru kinō o motte imasuga

┌───── >
├── Informasi ( 𖣂 )
┠─ ▢ ! ( 🍁 ) ─!s RX7
├
├ ☇  ㅊ\`TraVisZap\`ㅊ  ☇
├> Developer: RilzX7
├> Script: SpectraNoise
├> Version: 10X
├> Prefix: Multi
├
┠─ ▢ !
├─ - VzTZap
└── >

┌───── >
├── OwnerCmd ( 𖣂 )
┠─ ▢ ! ( 🍁 ) ─!s RX7
├
├ ☇  ㅊ\`TraVisZap\`ㅊ  ☇
├> /addprem
├> /delprem
├> /addowner
├> /delowner
├> /pair
├> /delsesi
├
┠─ ▢ !
├─ - VzTZap
└── >\`\`\``;

  const ownerKeyboard = [
    [{
      text: "𝐁͢𝐚ͯ𝐜͢𝐤🐉",
      callback_data: "main_menu"
    }]
  ];

  await ctx.replyWithPhoto("https://files.catbox.moe/4gl0lw.jpg", {
    caption: ownerMenuMessage,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: ownerKeyboard
    }
  });
});

bot.command("addowner", (ctx) => {
  if (ctx.from.id !== config.OWNER_ID) {
    return ctx.reply("Hi Bro You Not My Owner!");
  }

  let args = ctx.message.text.split(" ");
  if (args.length < 2) return ctx.reply("Example: /addowner <id>");

  let userId = parseInt(args[1]);
  if (isNaN(userId)) return ctx.reply("ID tidak valid!");

  if (!db.owners.includes(userId)) {
    db.owners.push(userId);
    saveDatabase();
    ctx.reply(`Succes Add ${userId} To Owner!`);
  } else {
    ctx.reply("User udah jadi owner bang ngapain di add lagi.");
  }
});


bot.command("addprem", (ctx) => {
  if (!db.owners.includes(ctx.from.id)) {
    return ctx.reply("Hi Bro You Not My Owner!");
  }

  let args = ctx.message.text.split(" ");
  if (args.length < 2) return ctx.reply("Example: /addprem <id>");

  let userId = parseInt(args[1]);
  if (isNaN(userId)) return ctx.reply("ID tidak valid!");

  if (!db.prem.includes(userId)) {
    db.prem.push(userId);
    saveDatabase();
    ctx.reply(`Succes Add ${userId} To Premium!`);
  } else {
    ctx.reply("User Udah Jadi Prem bang ngapain di add lagi");
  }
});
bot.command("delowner", (ctx) => {
  if (ctx.from.id !== config.OWNER_ID) {
    return ctx.reply("Hi Bro You Not My Owner!");
  }

  let args = ctx.message.text.split(" ");
  if (args.length < 2) return ctx.reply("Example: /delowner <id>");

  let userId = parseInt(args[1]);
  if (isNaN(userId)) return ctx.reply("ID tidak valid!");

  if (db.owners.includes(userId)) {
    db.owners = db.owners.filter(id => id !== userId);
    saveDatabase();
    ctx.reply(`Succes Remove ${userId} From Owner!`);
  } else {
    ctx.reply("User bukan owner bang, ngapain dihapus.");
  }
});
bot.command("pair", async (ctx) => {
    if (ctx.from.id !== config.OWNER_ID) return ctx.reply("You Not My Owner!");

    const args = ctx.message.text.split(" ");
    if (args.length < 2) {
        return await ctx.reply("Syntax Eror!\nExample: /pair 628xxxxx");
    }

    let number = args[1].replace(/[^0-9]/g, '');

    if (WaConect) {
    return await ctx.reply("Syntax Eror!: WhatsApp Sudah Terhubung");
}

    try {
        const code = await Ril.requestPairingCode(number, "12RilzX7");

        const PesanYgy = `\`\`\`
╭─────────────────
│    𝐑͢𝐗ͯ͢𝟕 </> 𝐃͢𝐄ͯ𝐕   
│────────────────
│ Nomor: ${number}
│ Code: ${code}
│ © RX7🐉
╰─────────────────\`\`\``;

        await ctx.replyWithMarkdown(PesanYgy);
    } catch (error) {
        console.error("Gagal pairing:", error);
        await ctx.reply("Gagal melakukan pairing mungkin nomor tidak valid atau sudah terhubung, lakukan /delsesi terlebih dahulu !");
    }
});

bot.command('delsesi', async (ctx) => {
 if (ctx.from.id !== config.OWNER_ID) return ctx.reply("You Not My Owner!");
  try {
    const sesiPath = path.resolve('./session');

    if (fs.existsSync(sesiPath)) {
      fs.rmSync(sesiPath, { recursive: true, force: true });
      await ctx.reply('Succes Delete Session\nbot otomatis Restart Panel !');

     
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    } else {
      await ctx.reply('Folder session tidak ditemukan.');
    }
  } catch (err) {
    console.error('Gagal hapus session:', err);
    await ctx.reply('Gagal menghapus folder session.');
  }
});
bot.command("delprem", (ctx) => {
  if (!db.owners.includes(ctx.from.id)) {
    return ctx.reply("Hi Bro You Not My Owner!");
  }

  let args = ctx.message.text.split(" ");
  if (args.length < 2) return ctx.reply("Example: /delprem <id>");

  let userId = parseInt(args[1]);
  if (isNaN(userId)) return ctx.reply("ID tidak valid!");

  if (db.prem.includes(userId)) {
    db.prem = db.prem.filter(id => id !== userId);
    saveDatabase();
    ctx.reply(`Succes Remove ${userId} From Premium!`);
  } else {
    ctx.reply("User bukan premium bang, ngapain dihapus.");
  }
});

const Reply = async (isTarget, ctx) => {
    const caption = `\`\`\`
╭─────────────────
│    𝐑͢𝐗ͯ͢𝟕 </> 𝐃͢𝐄ͯ𝐕   
│────────────────
│⌬ Target: ${isTarget}
│⌬ Virus: Crash Invisible
│© RX7🐉
╰─────────────────\`\`\``;

    await ctx.replyWithPhoto("https://files.catbox.moe/u35pzn.jpg", {
        caption,
        parse_mode: "Markdown",
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "𝐑͢𝐗ͯ͢𝟕 </> 𝐃͢𝐄ͯ𝐕", url: "https://t.me/Rilyzyishere" }
                ]
            ]
        }
    }).then(() => {
        console.log('Succes Sending Bug');
    }).catch((error) => {
        console.error('Error sending:', error);
    });
};
bot.command("x", isPrem, async ctx => {
  if (!Ril) return ctx.reply("WhatsApp belum terhubung. Gunakan /pair untuk menghubungkan ");

  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Syntax Eror!\nExample: crash 62×××`);

  let isTarget = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

  for (let i = 0; i < 1; i++) {
    await HaloKak(isTarget);
  }

  await Reply(isTarget, ctx);
});

// Function 
async function HaloKak(isTarget) {
  if (Ril) Ril.sendMessage(isTarget, { text: "Halo Bang" });
}
bot.launch();
})();
