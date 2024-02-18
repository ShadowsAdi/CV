
function Project(technologies,complexity,ide,description){
    this.technologies = technologies;
    this.complexity = complexity;
    this.ide = ide;
    this.description = description;
}

//proiecte
const transport = new Project("HTML, CSS, SASS, JavaScript, Git", "advanced", "Visual Studio Code", "When the pandemic came, I had more free time and started working on a website for my father's transport company. The technologies I became familiar with are HTML, CSS,Javascript and Git with the help of The Odin Project. The project has been continuously modified but not finished yet and you can see it here: https://github.com/MazereAndreea");
const industrialprocesses = new Project("HTML, CSS, JavaScript", "easy", "Visual Studio Code", "Calculation program for indicating the general limit deviations at a given linear dimension");
const rockpaperscissors = new Project("Kotlin", "easy", "Android Studio", "A game app that uses users choice and a random (computer) choice to decide who the winner/loser is");
const unitconverter = new Project("Kotlin", "intermediate", "Android Studio", "An app with the role of converting units by using a formula that is changing based on the user choice of the units to convert. For example centimeters in feet. ");

//date personale
const data = {
    personalData: {
        phone: "+40 736 847 371", 
        email: "andreeamazere.am@gmail.com",
        linkedIn: "https://www.linkedin.com/in/mazere-andreea",
        address: "Splaiul Independentei 313C,Bucharest,Romania",
        github: "https://github.com/MazereAndreea",
        driverslicense: "AM,B1,B"
    },
    summary: {
        text: "I am a second year student at the Faculty of Industrial Engineering and Robotics, UNSTPB, Bucharest. My top qualities are that I am a determined person who learns quickly and Ilike to work as efficiently as possible in terms of time and productivity"
    },
    education: {
        highschool: ["“Unirea” National College, Focsani, Romania","Specialising in mathematics and computer science","09/2018-06/2022"],
        learn_in_hs: ["C++, Pseudocode"],
        undegrad: ["BS in Industrial Engineering and Robotics","National University of Science and Technology Politehnica Bucharest", "Specialising in industrial informatics","10/2022-present"],
        learn_in_undegrad: ["Fusion360, AutoCAD, OOP, IoT"]
    },
    skills : {
        hard: {
            software: "Fusion360, AutoCad, Labview, Arduino IDE",
            webdev: ["HTML,CSS and SASS","intermediate","JavaScript, React","beginner"],
            mobile: ["Kotlin","beginner"],
            multipurpose: ["C++","intermediate"],
            versioncontrol: ["Git","beginner"]
        },
        soft: "Analytical thinker, Excellent problem solver, Creativity, Adaptability, Determination,Teamworker",
        languages: ["romanian","native","english","B2"]
    }

};

export default data;
