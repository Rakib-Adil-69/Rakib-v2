module.exports = {
        config: {
                name: "goiadmin",
                author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
                role: 0,
                shortDescription: " ",
                longDescription: "",
                category: "BOT",
                guide: "{pn}"
        },

onChat: function({ api, event }) {
        if (event.senderID !== "100075808585925") {
                var aid = ["100075808585925"];
                for (const id of aid) {
                if ( Object.keys(event.mentions) == id) {
                        var msg = ["❁𝗥𝗔𝗞𝗜𝗕𖣘 বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো ম্যানশন নাহ দিয়া সিংগেল ❁𝗥𝗔𝗞𝗜𝗕𖣘 রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","ম্যানশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না ❁𝗥𝗔𝗞𝗜𝗕𖣘 প্রচুর বিজি 🥵🥀🤐"];
                        return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
                }
                }}
},
onStart: async function({}) {
        }
};
