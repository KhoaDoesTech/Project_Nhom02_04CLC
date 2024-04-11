'use strict';

const { Client, GatewayIntentBits } = require('discord.js');
const { discord } = require('../configs/environment');
const os = require('os');

class DiscordLogger {
  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
      ],
    });
    this.channelId = discord.channelId;

    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user.tag}`.green);
    });
    this.client.login(discord.token);
    this.start;
  }

  isEmpty(value) {
    return (
      value === null ||
      value === undefined ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (Array.isArray(value) && value.length === 0)
    );
  }

  checkMacAddress() {
    const networkInterfaces = os.networkInterfaces();

    for (const name of Object.keys(networkInterfaces)) {
      for (const net of networkInterfaces[name]) {
        // Skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal && name === 'Wi-Fi') {
          return net.mac;
        }
      }
    }

    return 'Khong dung wifi';
  }

  sendRequestLog(logData, start) {
    const { ip, query, body, title, url } = logData;
    const queryInfo = this.isEmpty(query)
      ? 'No query'
      : '```json\n' + JSON.stringify(query, null, 2) + '```';
    const bodyInfo = this.isEmpty(body)
      ? 'No body'
      : '```json\n' + JSON.stringify(body, null, 2) + '```';

    const macAddress = this.checkMacAddress();
    this.start = start;

    const longestLabelLength = Math.max(
      'OS:'.length,
      'IP:'.length,
      'MAC:'.length
    );

    const paddedOs = 'OS:'.padEnd(longestLabelLength);
    const paddedIp = 'IP:'.padEnd(longestLabelLength);
    const paddedMac = 'MAC:'.padEnd(longestLabelLength);

    const logMessage = {
      content: 'Request Information',
      embeds: [
        {
          title: url,
          description: `\`\`\`${paddedOs} ${os.type()}\n${paddedIp} ${ip}\n${paddedMac} ${macAddress}\`\`\``,
          color: parseInt('FFA500', 16),
        },
        {
          title: title,
          color: parseInt('4169E1', 16),
          fields: [
            {
              name: 'Body',
              value: bodyInfo,
            },
            {
              name: 'Query',
              value: queryInfo,
            },
          ],
        },
      ],
    };

    this.sendMessage(logMessage);
  }

  sendResponseLog(logData, typeResponse) {
    const { message, status } = logData;

    let diff = process.hrtime(this.start);
    console.log(`Response time: ${diff[0] * 1e9 + diff[1]} nanoseconds`);

    let color, title;
    if (typeResponse === 'success') {
      title = 'Success Response';
      color = parseInt('32CD32', 16);
    } else {
      title = 'Error Response';
      color = parseInt('FF0000', 16);
    }
    const logMessage = {
      embeds: [
        {
          title,
          description: `**Response time:** ${
            (diff[0] * 1e9 + diff[1]) / 1e9
          } seconds`,
          color,
          fields: [
            {
              name: 'Status',
              value: status,
              inline: true,
            },
            {
              name: 'Message',
              value: message,
              inline: true,
            },
          ],
        },
      ],
    };

    this.sendMessage(logMessage);
  }

  sendMessage(message) {
    const channel = this.client.channels.cache.get(this.channelId);
    if (!channel) {
      console.error(`Channel not found with id ${this.channelId}`);
      return;
    }

    channel.send(message).catch((err) => {
      console.error(`Error sending message: ${err}`);
    });
  }
}

module.exports = new DiscordLogger();
