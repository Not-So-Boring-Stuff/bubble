import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Command
} from 'discord.js';

export const Ping: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription(
      'Replies with a Pong!. (Just to check if the bot is alive)'
    ),
  execute: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply('Pong!');
  }
};
