import {
  Command,
  ChatInputCommandInteraction,
  SlashCommandBuilder
} from 'discord.js';

import * as dotenv from 'dotenv';
dotenv.config();

export const User: Command = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about the user.'),
  execute: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply(`This command was run by  ${interaction.member}.`);
  }
};
