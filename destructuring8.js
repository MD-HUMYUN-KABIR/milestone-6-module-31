const fish = {
    name:'king hilsa',
    color: 'silver',
    phone:'01316748907',
    price:4000,
    address:'chandpur'
}
const phone = fish.phone;
const color = fish.color;
//console.log(phone,color); //01316748907 silver
//
const {age,name} = {name:'ummmak',age:12};//const e object er sei property name e dite hobe jekuno name dewa jabe na but array te dewa jabe
console.log(age,name);//12 ummmak {age,name} declaration er serial wise dej=khabe
//
const [first,second] = [44,55,66];
//console.log(first,second);//44 55 array er jonno const e jekuno name dewa jay but seriul wise show korbe
//
function getname(){
    return ['alim','halim'];
}
const [baba,chacha] = getname();
//console.log(chacha,baba);//halim alim