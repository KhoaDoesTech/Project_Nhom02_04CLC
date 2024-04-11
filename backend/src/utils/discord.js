'use strict';

const { Client, GatewayIntentBits } = require('discord.js');
const { discord } = require('../configs/environment');

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
  }

  isEmpty(value) {
    return (
      value === null ||
      value === undefined ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (Array.isArray(value) && value.length === 0)
    );
  }

  sendRequestLog(logData) {
    const { ip, query, body, title, url } = logData;
    const queryInfo = this.isEmpty(query)
      ? 'No query'
      : '```json\n' + JSON.stringify(query, null, 2) + '```';
    const bodyInfo = this.isEmpty(body)
      ? 'No query'
      : '```json\n' + JSON.stringify(body, null, 2) + '```';

    const logMessage = {
      content: 'Request Information',
      embeds: [
        {
          title: url,
          description: `From: ${ip}`,
          color: parseInt('FFA500', 16), //FFA500
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

    let color;
    if (typeResponse === 'success') {
      color = parseInt('32CD32', 16);
    } else {
      color = parseInt('FF0000', 16);
    }
    const logMessage = {
      embeds: [
        {
          title: 'Error Response',
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
