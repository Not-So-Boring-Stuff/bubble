import dotenv from 'dotenv';
import { Bubble } from './discord';

dotenv.config();

const { DISCORD_BOT_TOKEN } = process.env;

(async () => {
  try {
    await Bubble.login(DISCORD_BOT_TOKEN);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
