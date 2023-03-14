import dotenv from 'dotenv';
dotenv.config();

import { Bubble } from './discord';

const { DISCORD_BOT_TOKEN } = process.env;

(async () => {
  try {
    await Bubble.login(DISCORD_BOT_TOKEN);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
    process.exit(1);
  }
})();
