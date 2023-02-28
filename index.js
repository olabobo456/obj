// Question 1

function  insta (handle, content, imagelink,numberofviews,numberoflikes) {
    this.handleofAuthor= handle;
    this.content = content;
    this.imagelink = imagelink;
    this.numberofviews = numberofviews;
    this.numberoflikes = numberoflikes;
}

// Question 2

let person1 = new insta( 'seventhass', 'yardcloth','www.yardpics.com',500, 250)
console.log(person1)

let person2 = new insta('martinez','trophy','www.facuptrophy.com',100000,50000)
console.log(person2)

//Question 3

function createPerson(name,age,location) {
    return{
        name:name,
        age:age,
        location:location,

    }
}
let student1 = createPerson ('musa',19, 'lagos')
//console.log(student1)

function jambscores( eng, govt, lit, crk) {
    return{
        eng:eng,
        govt:govt,
        lit:lit,
        crk:crk
    }
}

let musajambscores = jambscores(75,68,70,80)
//console.log(musajambscores)

student1.jambscores = musajambscores
console.log(student1)


// Question 4
//we can clone an object an object using 
 //a. Spread Syntax b. Object.assign() method C. using the JSON.parse()method

//Question 5
const presidentialcandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imunolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP:'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for(const value in presidentialcandidates) {
    console.log(presidentialcandidates[value] + " is the presidential candidate of " + value)
}