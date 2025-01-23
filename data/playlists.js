var listPlaylist = [
    {
        name: "V-Pop: The A-List",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist1.jpg"
    },
    {
        name: "Let's Go Now",
        creator: "Nal",
        image: "./assets/img/playlists/playlist2.jpg"
    },
    {
        name: "World Music",
        creator: "Lạc Trôi",
        image: "./assets/img/playlists/playlist3.jpg"
    },
    {
        name: "The Best Rap Hits of Vietnam",
        creator: "Bigcityboi",
        image: "./assets/img/playlists/playlist4.jpg"
    },
    {
        name: "Top 100 Best Young Songs",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist5.jpg"
    },
    {
        name: "The Best Dance Tracks",
        creator: "Đạt Tấn",
        image: "./assets/img/playlists/playlist6.jpg"
    },
    {
        name: "I Sing, Who Listens",
        creator: "Ngọc Trâm",
        image: "./assets/img/playlists/playlist7.jpg"
    },
    {
        name: "Chill with Đen Vâu",
        creator: "Trà My",
        image: "./assets/img/playlists/playlist8.jpg"
    },
    {
        name: "The Best Hits of Sơn Tùng MTP",
        creator: "Nguyễn Thành Công",
        image: "./assets/img/playlists/playlist9.jpg"
    },
    {
        name: "The World of V-Pop Vol. 3",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist10.jpg"
    },
    {
        name: "BodyTalk",
        creator: "Lâm Huy",
        image: "./assets/img/playlists/playlist11.jpg"
    },
    {
        name: "This Playlist is Chill",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist12.jpg"
    },
    {
        name: "BlackJack",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist13.jpg"
    },
    {
        name: "4U - On Repeat",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist14.jpg"
    },
    {
        name: "The Best Songs of Mr. Siro",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist15.jpg"
    },
    {
        name: "Top EDM Songs of 2018",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist16.jpg"
    },
    {
        name: "Melodies and Viral Trends",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist17.jpg"
    },
    {
        name: "The Best Songs of HKT",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist18.jpg"
    },
    {
        name: "100% Addictive",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist19.jpg"
    },
    {
        name: "The Most Played Vietnamese Songs",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist20.jpg"
    },
    {
        name: "The Best Dance Music in Vietnam",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist21.jpg"
    }
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));
