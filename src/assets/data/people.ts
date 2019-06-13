export var people = [
    {
        name: "Jacob Peterson",
        phone: "214-555-555",
        email: "jacob.peterson@parivedasolutions.com",
        slack: "UANQBHVPS",
        cohort: "C1",
        market: "DAL", 
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
        name: "Chris Dixon",
        phone: "214-555-555",
        email: "chris.dixon@parivedasolutions.com",
        slack: "UK5UY08QY",
        cohort: "C1",
        market: "PHI", 
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