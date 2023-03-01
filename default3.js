
/* function add(first,second){
    if(second === undefined){
        second = 0;
        //second = second || 0; second er value asle seta thakbe, ar na thakle sekhane 0 add hobe
    }
    const total = first + second;
    return total;
} // function e perameter na pathale undefined dekhabe
 */

// akhane paremeter e argument hisebe kuno value na asle defalult value hisebe 0 add hobe
function add(first = 0,second = 0){
    const total = first + second;
    return total;
}
//const result = add(); result NAN dibe
const result = add(10);
console.log(result);

// fullname
function fullname(first, last = 'chowdury'){
    const fullname = first + last ;
    return fullname;
}

const nameresult = fullname('geam');
console.log(nameresultame);
