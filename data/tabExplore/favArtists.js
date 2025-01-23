var listFavArtist = [
    {
        explication: "From your Library",
        name: "Chi Dân",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist1.jpg",
    },
    {
        explication: "Because you listen a lot",
        name: "Binz",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist2.jpg",
    },
    {
        explication: "From your Library",
        name: "Sơn Tùng M-TP",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist3.jpg",
    },
    {
        explication: "You might like",
        name: "Hương Ly",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist4.jpg",
    },
    {
        explication: "You cared about",
        name: "AMEE",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist5.jpg",
    },
    {
        explication: "Because you listen a lot",
        name: "Bích Phương",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist6.jpg",
    },
    {
        explication: "Because you love",
        name: "Han Sara",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist7.jpg",
    },
    {
        explication: "You recently listened to",
        name: "SOOBIN",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song3.png",
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist8.jpg",
    },
    {
        explication: "You might like",
        name: "Tlinh",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist9.jpg",
    },
    {
        explication: "Because you love",
        name: "Mamamoo",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist10.jpg",
    },
    {
        explication: "You recently listened to",
        name: "Mr. Siro",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist11.jpg",
    },
];


const FAVORITE_ARTIST_STORAGE_KEY = 'VIK_FAVORITE_ARTIST';

localStorage.setItem(FAVORITE_ARTIST_STORAGE_KEY, JSON.stringify(listFavArtist));
