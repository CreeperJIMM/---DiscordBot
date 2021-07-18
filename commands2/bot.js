const Discord = require("discord.js")
const fs = require("fs")
const request = require("request");
const lan = require('../commands/lang.json');
const gameX = require('../language/bot.json');
module.exports= {
    "close":{
        description: "測試",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            if (message.author.id !== '546144403958398988') return;
            message.channel.send(k.bot.close , {tts:true}).then(() => {
                process.exit(0);})
        }
    },
    "ram": {
        description: "記憶體",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            var os = require('os');
            var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
            var  getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%'
            let ramEmbed = new Discord.MessageEmbed()
            .setTitle(k.bot.info)
            .addField(k.ram.all, (usedMemory/ Math.pow(1024, 3)).toFixed(2) +"GB / " + (totalMemory/ Math.pow(1024, 3)).toFixed(2) + "GB" )
            .addField(k.ram.use , getpercentage);
             message.channel.send(ramEmbed);
        }
    },
    "cpu": {
        description: "CPU",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            var os 	= require('os-utils');
            os.cpuFree(function(f){
            let cpuEmbed = new Discord.MessageEmbed()
            .setTitle(k.bot.info)
            .addField(k.cpu.core, os.platform()+ " / " + os.cpuCount() )
            .addField(k.cpu.all, (2.50 - f).toFixed(2) + "Ghz / "+ "2.50" + "Ghz" )
            .addField(k.cpu.use , (((2.50 - f).toFixed(2) /2.50) *100).toFixed(2) + "%")
            .addField(k.cpu.runing, (os.sysUptime()/60).toFixed(1) + l.time.minute )
             message.channel.send(cpuEmbed);   
            }
        )
    }
    },
    "restart": {
        description: "重啟",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            if (message.author.id !== '546144403958398988') return;
            message.channel.send(k.bot.restart , {tts:true}).then(() => {
              process.exit(1);
          });
        }
    },
    "debug": {
        description: "紀錄",
        fun: function(bot,message) {
            let l = lan.zh_TW,k = gameX.zh_TW;
            if (message.author.id !== '546144403958398988') return;
            let debug = new Discord.MessageEmbed()
            .setTitle("紀錄(Log)")
            .setDescription(console.log)
            .setTimestamp()
            message.channel.send(debug)
        }
    },
    "test": {
        description: "測試",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            if (message.author.id !== '546144403958398988') return;
            message.author.send("uwu!")
        }
    },
    "times": {
        description: "測試",
        fun: function(bot,message) {
        }
    },
    "getchannel": {
        description: "測試",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            if (message.author.id !== '546144403958398988') return;
            message.author.send("uwu!")
            async function * messagesIterator (channel) {
                let before = null;
                let done = false;
                while (!done) {
                    const messages = await channel.messages.fetch({ limit: 100, before });
                    if (messages.size > 0) {
                        before = messages.lastKey();
                        yield messages;
                    } else done = true;
                };
            };
    
            async function * loadAllMessages (channel) {
                for await (const messages of messagesIterator(channel)) {
                    for (const message of messages.values()) yield message;
                };
            };
    
            imageChannels = [args[0]]
            imageChannels.forEach(ID => {
                var image = [];
                var numbers = new Object();
                message.client.channels.fetch(ID)
                    .then(channel =>{
                        (async () => {
                            message.channel.send(`Fetching ${channel.name}`);
                            var total = 0
                            let time = 0;
                            for await (const messages of loadAllMessages(channel)) {
                                if (messages.attachments.size > 0) {
                                    var images = new Object();
                                    images.author = messages.author.username;
                                    var urlArray = [];
                                    messages.attachments.each(attachments => {
                                        var file = new Object();
                                        file.name = attachments.name;
                                        file.url = attachments.url;
                                               urlArray.push(file)
                                               time++
                                               download(attachments.name,attachments.url,attachments)
                                            });
                                    function download(name,url,attachments) {
                                        setTimeout(() => {
                                    request(attachments.url ,function (error ,response,body) {
                                        console.log("Running & Downing: " + attachments.name + " || "+attachments.url+" || ")
                                    }).pipe(fs.createWriteStream("./pitrue/download/"+attachments.name),function (err) {
                                           if (err) {console.log("儲存失敗" + attachments.name);}});
                                        }, 1500 * time);
                                    }
                                   // images.attachments = urlArray;
                                   // images.createdAt = messages.createdAt;
                                  //  image.push(images);
                                  //  var name = messages.author.username
                                  //  if (!name in numbers || numbers[name] === undefined) {
                                 //       numbers[name] = messages.attachments.size;
                                  //  } else {
                                 //       numbers[name] += messages.attachments.size;
                                   // };
                                };
                                total += messages.attachments.size
                            };
                            console.log(channel.name)
                            console.log(numbers)
                            console.log(`Total: ${total}`)
                            let data = JSON.stringify(image, null, 2);
                            var filename = channel.name + '.json';
                            fs.writeFileSync(filename, data);
                            message.channel.send(`Done fetching ${channel.name}`)
                            message.channel.send(`Download ${total} photo`)
                        })();
                    });
                })
        }
    },
    "guild": {
        description: "測試",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            if (message.author.id !== '546144403958398988') return;
            var list = new Array();
            for(let guild_ of bot.guilds.cache.array()) {
                if(guild_.memberCount < 10) {
                    var exp = "000"+ guild_.memberCount}
                else if(guild_.memberCount < 100) {
                var exp = "00"+ guild_.memberCount}
                else if(guild_.memberCount <1000) {
                    var exp = "0" + guild_.memberCount}
                    else{var exp = guild_.memberCount}
                list.push(exp+" | "+guild_.name+" | "+guild_.id)
                list.sort(function(a, b) {return a > b;})
            }
            setTimeout(() => {
                list.sort();
                list.splice(40);
                  }, 900);
                  setTimeout(() => {
                    let levelembed = new Discord.MessageEmbed()
                    .setColor('#2d9af8')
                    .setTitle("📦所有咖啡廳☕")
                    .setDescription("群名稱| ID        |  成員數\n ```js\n"+list.join("\n") + "\n```")
                    .setFooter("此為全部群")
                    message.channel.send(levelembed)
                }, 1000);
        }
    },
    "guildleave": {
        description: "測試",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            if(message.author.id !== '546144403958398988') return message.channel.send("❌執行發生錯誤!\n```你不是擁有者```")
            if(args == null || args == "" || args == " ") return message.channel.send("❌執行發生錯誤!\n```請填入ID```")
            message.channel.send("🔄執行動作...").then((ingmessage) => {
            var name = bot.guilds.cache.get(args[0]).name
            bot.guilds.cache.get(args[0]).leave()
            .then(() => {return ingmessage.edit("✅成功離開!" + name)})
            .catch(err => {return ingmessage.edit("❌執行發生錯誤!\n```無法離開 "+name+" 伺服器\n"+err+"```")})
            })
        }
    },
    "bot": {
        description: "測試",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            fs.readFile('./server.json',function (err,userInfo) {
                if(err) {return message.channel.send(l.error.Run_Command_error)}else{var user = userInfo.toString();user = JSON.parse(user);
            let bot = new Discord.MessageEmbed()
            .setColor('#2d9af8').setTitle(k.status.list)
            .setDescription(k.status.info)
            .addField("智乃小幫手#5407",k.status.inv1+"\n"+ user.chino.member+"  |  "+user.chino.guild+"  |  "+user.chino.status+" |  `cr!`   |  ✅  |  ✅  |  ✅  |  ✅  |  ❌  | [[邀請]](https://discord.com/oauth2/authorize?client_id=731408794948730961&scope=bot&permissions=2134900215) | [[top.gg]](https://top.gg/bot/731408794948730961)")
            .addField("智乃小幫手2#5127",k.status.inv2+"\n"+ user.chino2.member+"  |  "+user.chino2.guild+"  |  "+user.chino2.status+" |  `cr?`   |  ✅  |  ❌  |  ✅  |  ✅  |  ✅  | [[邀請]](https://discord.com/oauth2/authorize?client_id=775702812348776478&scope=bot&permissions=2134900215)")
            .addField("智乃小幫手•Canary#9156",k.status.inv3+"\n"+user.chinoc.member+"  |  "+user.chinoc.guild+"  |  "+user.chinoc.status+" |  `cr*`  |  ❌  |  ❌  |  ❌  |  ✅  |  ❌  |[[邀請]](https://discord.com/oauth2/authorize?client_id=747992207323168808&scope=bot&permissions=2134900215)")
            .setFooter(k.status.footer)
            .setTimestamp()
            message.channel.send(bot)
        }})
        }
    },
    "post": {
        description: "測試",
        fun: function(bot, message, prefix , language, args ,...ag) {
            let l = lan.zh_TW,k = gameX.zh_TW
            if(language === "zh_TW") {l = lan.zh_TW;k = gameX.zh_TW}else if(language === "zh_CN") {l = lan.zh_CN;k = gameX.zh_CN}else if(language === "ja_JP") {l = lan.ja_JP;k = gameX.ja_JP
            }else if(language === "en_US") {l = lan.en_US;k = gameX.en_US}
            message.channel.send("<a:load:776980097054933063> "+k.post.loading).then((loadmessage) => {
            let bots = message.guild.me
            fs.readFile('./data.json',function (err, userInfo) {
                if(err) {return message.channel.send(l.error.Run_Command_error)}
                var user = userInfo.toString();
                user = JSON.parse(user);
                let Time = new Date()
            setTimeout(() => {
                let post = new Discord.MessageEmbed()
                .setColor('#2d9af8').setTitle(k.post.title)
                .setDescription(`${k.post.post} / ${k.post.notice} / ${k.post.update}`)
                .addField(k.post.post,"```json\n"+user.post.post+"\n```")
                .addField(k.post.notice,"```json\n"+k.post.closed+ (24 - Time.getHours())+` ${l.time.hour} `+(60 - Time.getMinutes())+` ${l.time.minute}`+"\n"+k.post.daily+"\n```")
                .addField(k.post.update,"```json\n"+user.post.update+"\n```")
                .setFooter(k.post.time+user.post.time+" | ").setTimestamp()
                loadmessage.edit(k.post.success_load)
                loadmessage.edit(post)
            }, 2000);
        })})}
    },
}