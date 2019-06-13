export var people = [
    {
        id: 0,
        name: "Jacob Peterson",
        phone: "214-555-555",
        email: "jacob.peterson@parivedasolutions.com",
        slack: "UANQBHVPS",
        cohort: "C1",
        market: "DAL", 
        photo: "https://theoceanapi.azurewebsites.net/people/jacob-peterson/image_2x?dateTime=636960514248500000",
        endorsements: [
            {
                skill: "Python",
                tag: "machine-learning",
                giver: "Chris Dixon"
            },
            {
                skill: "Python",
                tag: "django",
                giver: "Scott Roush"
            },
            {
                skill: "Javascript",
                tag: "",
                giver: "Chris Dixon"
            },
            {
                skill: "Javascript",
                tag: "",
                giver: "Chris Dixon"
            },
        ]

    },
    {
        id: 1,
        name: "Chris Dixon",
        phone: "214-555-555",
        email: "chris.dixon@parivedasolutions.com",
        slack: "UK5UY08QY",
        cohort: "C1",
        market: "PHI", 
        photo: "https://theocean.parivedasolutions.com/assets/images/person.svg",
        endorsements: [
            {
                skill: "HTML",
                tag: "",
                giver: "Jacob Peterson"
            },
            {
                skill: "HTML",
                tag: "",
                giver: "Scott Roush"
            },
            {
                skill: "HTML",
                tag: "",
                giver: "Pierre"
            },
            {
                skill: "HTML",
                tag: "",
                giver: "Susan Paul"
            },
        ]
    }
]

// // var filteredPeople = people.filter(p => p.endorsements.map(e => e.skill).includes("HTML"))
// var mappedPeople = people.map(p => ({
//     name: p.name,   
//     count: p.endorsements.filter(e => e.skill === "HTML").length
//     }));
// console.log(mappedPeople);