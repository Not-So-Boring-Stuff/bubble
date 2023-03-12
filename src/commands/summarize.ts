import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Command,
  Message,
  TextChannel
} from 'discord.js';
import { SummarizeChat } from '../modules/ai/ask-ai';

export const Summarize: Command = {
  data: new SlashCommandBuilder()
    .setName('summarize')
    .setDescription('Summarizes last 50 messages.'),
  execute: async (interaction: ChatInputCommandInteraction) => {
    const channel = await interaction.client.channels.fetch(
      interaction.channelId
    );

    if (!channel) {
      interaction.reply({
        content: 'Available only in Text Channels'
      });
      return;
    }

    if (!(channel instanceof TextChannel)) {
      interaction.reply({
        content: 'Available only in Text Channels'
      });
      return;
    }

    const { lastMessageId } = channel;

    if (!channel || !lastMessageId) {
      interaction.reply({
        content: 'Available only in Text Channels'
      });
      return;
    }

    let messages: Message[] = [];
    const fetchMessages = await channel.messages.fetch({
      limit: 12,
      before: lastMessageId
    });

    messages = messages.concat(Array.from(fetchMessages.values()));

    const ParsedMessages = messages
      .map((item) => `${item.author.username}: ${item.content}`)
      .reverse()
      .join('\n');

    const SummarizedMessage = await SummarizeChat(ParsedMessages);

    interaction.reply({
      content: SummarizedMessage
    });
  }
};
