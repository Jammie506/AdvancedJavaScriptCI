console.log("Start");

//------------------------------------------------------------------------------------ .map() method - Basic Arrays

/*
let nums = [1, 2, 3, 4, 5];
console.log(nums);
let results = []
for (let num of nums){
    results.push(num*2)
}
console.log(results)

let numsTwo = [1, 2, 3, 4, 5];
console.log(numsTwo);
const resultsTwo = numsTwo.map(piss => piss*2); //also : nums.map(function (num) {return num * 2})
console.log(resultsTwo)
*/

//----------------------------------------------------------------------------------------- .map() method - Objects

/*
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'CSS'
    },
];
console.log(students);

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds)
*/

//----------------------------------------------------------------------------- .filter() method - Simple Filtering

/*
const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianna',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];
console.log(people);

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const justPaul = people.filter(p => p.name === 'Paul');
console.log(justPaul);
*/

//---------------------------------------------------------------------------- .filter() method - Complex Filtering

/*
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  //Using external function to for reusability & clarity
  const has5YearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0;
  const candidates = students.filter(hasStrongSkills);

  //console.log(candidates);

  const candidateNames = candidates.map(student => [student.name]);
  
  console.log(candidateNames);
  */

//------------------------------------------------------------------------------- .reduce() method - Summing Arrays

/*
//Basic Use
const nums = [0, 1, 2, 3, 4];
//Shortens To : let sum = nums.reduce((acc, curr) => acc + curr, 0);
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc+curr
    );
    return acc + curr;
}, 10);
console.log(sum);
*/

//-------------------------------------------------------------------------------------- .reduce() method - Objects

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];

//------------------------------------------------------------------------- .reduce() method - Totalling Properties

let totalExperiece = teamMembers.reduce((acc, curr) => acc +curr.yrsExperience, 0);
console.log(totalExperiece);

//-------------------------------------------------------------------------- .reduce() method - Grouping Properties

let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] =+ curr.yrsExperience;
    }
    return acc;
}, {});

console.log(experienceByProfession);