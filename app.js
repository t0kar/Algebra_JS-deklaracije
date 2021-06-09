var name = "Bimbo";
var sex = "F";
var breed = "Shih-Tzu";
var age = 8;
var aboutMale = name + ", " + age + " years old " + breed + ", is a good boy!";
var aboutFemale = name + ", " + age + " years old " + breed + ", is a good girl!";

if (sex == "M") {
    console.log(name + ", " + age + " years old " + breed + ", is a good boy!");
} if (sex == "F") {
    console.log(name + ", " + age + " years old " + breed + ", is a good girl!");
}

//Using string concatenation
console.log("String concatenation method used:");
if (sex == "M") {
    console.log(aboutMale);
} if (sex == "F") {
    console.log(aboutFemale);
}
