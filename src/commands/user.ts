import {
  Command,
  ChatInputCommandInteraction,
  SlashCommandBuilder
} from 'discord.js';

export const User: Command = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about the user.'),
  execute: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply(`This command was run by  ${interaction.member}.`);
  }
};
