var listPost = [
    [
        {
            name: "Jang Mi",
            time:"14 January at 11:07",
            content: "Which Flower Doesn't Fade (Cover by JangMi)",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist1.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist1.jpg"
        },
        {
            name: "BlackBi",
            time:"14 January at 00:40",
            content: "DON'T ACT IN FRONT OF ME ANYMORE - I just play with you for entertainment =))",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist2.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist2.jpg"
        },
        {
            name: "Yến Tatoo",
            time:"14 January at 00:37",
            content: "Who would know that looking like this?",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist3.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist3.jpg"
        },
        {
            name: "Quang Hùng MasterD",
            time:"14 January at 00:36",
            content: "😚",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist4.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist4.jpg"
        },
        {
            name: "Chi Pu",
            time:"14 January at 00:36",
            content: "The truth is always simple, but people make it complicated, so I just enjoy this moment",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist5.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist5.jpg"
        },
    ],
    [
        {
            name: "Lăng LD",
            time:"14 January at 00:35",
            content: "Looking neat to go buy take away coffee but haven’t sat down yet 😁",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist6.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist6.jpg"
        },
        {
            name: "Sơn Tùng M-TP",
            time:"14 January at 00:33",
            content: "I guess your name is Google. </br>Because you have everything I’m searching for ❤️",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist7.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist7.jpg"
        },
        {
            name: "JayKii",
            time:"14 January at 00:31",
            content: "The net of heaven is vast </br>Where can I escape 😎",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist8.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist8.jpg"
        },
        {
            name: "Ninh Dương Lan Ngọc",
            time:"14 January at 14:36",
            content: "At home with a photo of Rio that I fixed for so long 🤣🤣🤣 couldn’t make it look better. Please help me edit this picture, how can it be beautiful?",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist9.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist9.jpg"
        },
        {
            name: "Bích Phương",
            time:"14 January at 14:35",
            content: "Dark today, a bit quiet 😘",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist10.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist10.jpg"
        },
    ]
];

const POST_STORAGE_KEY = 'VIK_POST';

localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(listPost));
