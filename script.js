// console.log("Hello world")
// a=10;
// b=20;
// c=a+b;
// console.log("result of c is:",c)

// var name="Adarsh";
// var age=22;
// var address="patahnamthitta"
// var phoneNumber=8589913698;
// console.log("name",name)
// console.log("age",age)
// console.log("address",address)
// console.log("phonenumber",phoneNumber)


console.log(a)

//global scope
var a=20;
console.log(a,"after the line")

{
    //block
    var b=30;
    console.log(b,"aftr the line")
}
console.log(b,"before the line")

function fun(){

    var c=40;
    console.log(c,"after the line")
}
fun()

console.log(c,"before the line")