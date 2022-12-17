const {YopSDK} = require("../dist");

const yopSDK = new YopSDK({
    apiToken: "ioC4TlY8VUqEwNyMrqgUy9LTJJIh3dRe",
    botId: "782667133716791316"
});

yopSDK.postStats({
    serverCount: 1,
    userCount: 232
}).then(r => {
    console.log(r);
});