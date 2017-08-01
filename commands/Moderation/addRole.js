exports.run = async (client, msg, [user, role]) => {
  if (msg.guild.roles.exists('name', role)) {
        msg.mentions.members.first().addRole(msg.guild.roles.find('name', role));
        msg.reply('', {embed: {
            color: 3447003,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            description: `${user} has been given the ${role} role. :smiley:`,
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: '© Esports Zodiac League LLC (EZL)'
            }
        }
        });
    } else {
        msg.reply('', {embed: {
            color: 3447003,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            description: `I am sorry but ${role} role does not exist. :cry:`,
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: '© Esports Zodiac League LLC (EZL)'
            }
        }
        });
    }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['arole', 'ar'],
  permLevel: 2,
  botPerms: ['MANAGE_ROLES'],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "addrole",
  description: "Assign a role to another user.",
  usage: "<user:user> <role:str>",
  usageDelim: " ",
  extendedHelp: "1) User must have a role called Moderators to use this command.\.2) Bot must have Manage Role permissions. The bot will not be able to assign a role higher than its highest role.",
};