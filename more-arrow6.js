// for one parameter arrow funtion 
const add = (num) => num + 2;
//or
const add2 = num => num +2;
//for no parameter in arrow function 
const getpi = () => 3.142;
console.log(getpi());
// for multiline arrow function
const add3 = (x,y,z) => {
const firstsum = x +y;
const secondsum = y +z;
const thirdsum = firstsum + secondsum;
const finalresult = thirdsum / 2;
return finalresult; }// for multiline arrow function have to return otherwise no need

// const division = num1,num2 => console.log(num1/num2);//syntex erro
const a = [1,2,3,4];
const b = [a];//[ [ 1, 2, 3, 4 ] ]
const c = [...a];//[ 1, 2, 3, 4 ]
console.log(c);
