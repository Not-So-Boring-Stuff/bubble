import { Message } from 'discord.js';

declare module 'discord.js' {
  export interface Client {
    commands: Collection<unknown, Command>;
  }

  export interface Command {
    data: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
  }
}
