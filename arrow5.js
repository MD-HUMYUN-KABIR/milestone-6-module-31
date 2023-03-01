//function declration can use from anywhere
function add(first,second){
    return first + second;
}
//function express cannot use from anywhere
const add1 = function add1(first,second){
    return first + second;
}
//function express with anonymus function cannot use from anywhere
const add2 = function (first,second){
    return first + second;
}
// arrow function
const add5 = (first,second) => first + second;//juug kore automatic return kore dibe
//defference between function declaration,function expression and arrow function
const result = add5(10,20);
console.log(result);
