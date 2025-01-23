var listEvent = [
    {
        name: "Birthday Star x B Ray",
        time: "00:00 Monday, 11 January",
        fans: [
            "./assets/img/tabExplore/events/fans/singer1/fan1.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan2.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan3.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan4.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan5.jpg",
        ],
        fanAmount: "1K",
        image: "./assets/img/tabExplore/events/event1.jpg",
        action: "Open RADIO"
    },
    {
        name: "Birthday Star x ERIK",
        time: "00:00 Wednesday, 13 January",
        fans: [
            "./assets/img/tabExplore/events/fans/singer2/fan1.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan2.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan3.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan4.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan5.jpg",
        ],
        fanAmount: "330",
        image: "./assets/img/tabExplore/events/event2.jpg",
        action: "Congratulations"
    },
    {
        name: "Birthday Star x Đông Nhi",
        time: "00:00 Wednesday, 13 January",
        fans: [
            "./assets/img/tabExplore/events/fans/singer3/fan1.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan2.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan3.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan4.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan5.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan6.jpg",
        ],
        fanAmount: "361",
        image: "./assets/img/tabExplore/events/event3.jpg",
        action: "Congratulations"
    },
];

const EVENT_STORAGE_KEY = 'VIK_EVENT';

localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(listEvent));
