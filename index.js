import { Client } from "discord.js";
import { config } from "dotenv";
config();

export const handler = async function () {
  const client = new Client();
  try {
    client.on("ready", () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
    await client.login(process.env.DISCORD_BOT_TOKEN);
  } finally {
    await client.destroy();
  }
};
