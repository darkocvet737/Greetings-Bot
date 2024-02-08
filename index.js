import { REST, Routes } from 'discord.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url)
require('dotenv').config()

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

let TOKEN;
let CLIENT_ID;
CLIENT_ID = process.env.CLIENT_ID
TOKEN = process.env.TOKEN;


const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'H') {
    await interaction.reply('Lol');
  }
});

client.login(TOKEN);