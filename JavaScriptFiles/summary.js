let firstPerson = 'Elka';
let secondPerson = 'Tomas';
let thirdPerson = 'Mira';
let jobElka = 'painter';
let jobTomas = 'coder';
let ageMira = '18';

const birthYearElka = 2009;
const birthYearTomas = 1991;
const currentYear = 2022;

console.log("We're " + firstPerson + ' and ' + secondPerson + '.');

const elka = `I'am ${firstPerson}, a ${
  currentYear - birthYearElka
} year old, ${jobElka}.`;
console.log(elka);

const tomas = `I'am ${secondPerson}, a ${
  currentYear - birthYearTomas
} year old, ${jobTomas}.`;
console.log(tomas);

const ageElka = currentYear - birthYearElka;
const ageTomas = currentYear - birthYearTomas;

const averageAge = (ageElka + ageTomas) / 2;
console.log(averageAge);

let olderElka = ageElka > ageTomas;
let olderTomas = ageElka < ageTomas;

console.log(ageMira == 18);
console.log(ageMira >= 18);
console.log(ageMira <= 18);
console.log(firstPerson == secondPerson);
console.log(typeof firstPerson === typeof secondPerson);
console.log(firstPerson != secondPerson);
console.log(olderElka, olderTomas);
