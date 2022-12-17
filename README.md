# YopBotList - SDK for YopBotList API

# Links

- [YopBotList](https://www.yopbotlist.me)
- [Discord Server](https://discord.gg/HgDKy7FcVJ)

## Installation

```bash
npm install @yopbotlist/sdk
```

## Usage

```js
const { YopSDK } = require('@yopbotlist/sdk');

const yopApi = new YopSDK({
    apiToken: "YOUR_API_TOKEN", // Can be found at https://www.yopbotlist.me/bots/[BOT_ID]/edit
    botId: "BOT_ID"
});

yopApi.postStats({
    guildCount: 1000,
    shardCount: 1
}).then(() => {
    console.log("Posted stats to YopBotList");
}).catch((err) => {
    console.error("Error while posting stats to YopBotList", err);
});
```