const max = Math.max(12,14,26);
console.log(max);
//array
const numbers = [12,85,999,78];
const largest1 = Math.max(...numbers);
console.log(numbers)//[12 85 999 78];
console.log(...numbers); //12 85 999 78
console.log(largest1);//999
//const largest = Math.max(numbers);
//console.log(largest);//nan


//const numbers = [12,85,999,78];
const numbers2 = numbers;
numbers.push(55); // jekuno akta te push korle 2 ta te set hoye jabe
console.log(numbers);//[ 12, 85, 999, 78, 55 ]
console.log(numbers2);//[ 12, 85, 999, 78, 55 ]

const numbers3 = [...numbers];//numbers array er value gula k sudu nie numbers3 akta array creat hobe
numbers3.push(44);//akhn sudu akta te set hobe
console.log(numbers3);//[ 12, 85, 999, 78, 55, 44 ]
//
const numbers4 = [12,'helleo',...numbers, 45];
console.log(numbers4);//[ 12, 'helleo', 12, 85, 999, 78, 55, 45 ]
