
// ========================Lab1=======================================


// 1-حساب مساحة المستطيل

// let recH=2
// let recW=4
// const R=(recH*recW)
// let message = `The area of the rectangle is:` + R;
// console.log(message)

// // ==============================================================

// // 2-محول درجة الحرارة
// let C=15
// let F= (9/5)*C+32
// console.log(`${F} F° is ${C} C°
// `);

// // ==================================================================
// // 3-من ساعة الى ثانية

// hour = 2
// seconds = hour * 60 * 60
// console.log(`${hour} hours = ${seconds} Seconds
// `);

// let price=10;
// let budget=9;
// if(budget>=price){
//     console.log("i can buy")
// }
// else{
//     console.log("i can't buy")
// }



// ========================Lab2=======================================



// ===exersise2====
var musicians= 0


if(musicians <= 0){
    console.log("not a group")
}
else if (musicians = 1){
    console.log("solo")

}
else if (musicians = 2){
    console.log("duet")

}
else if (musicians = 3){
    console.log("trio")

}
else if (musicians = 4){
    console.log("quartet")

}
else if (musicians > 4){
    console.log("this is a large group")

}
else {
    console.log("invalid value")

}


// ===exersise4===

var balance = -325;
var checkBalance = true;
var isActive = true;
if((isActive && checkBalance)==true){
    console.log("your balance is:"+balance)

}



// ===exersise6===

var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
if((shirtWidth<=19.99)&&(shirtLength<=28.99)&&(shirtSleeve<=8.379)){
    console.log("your size is : S")

}
else if((shirtWidth<=20)&&(shirtLength<=29)&&(shirtSleeve<=8.38)){
    console.log("your size is : M")

}
else if((shirtWidth<=22)&&(shirtLength<=30)&&(shirtSleeve<=8.63)){
    console.log("your size is : L")

}
else if((shirtWidth<=24)&&(shirtLength<=31)&&(shirtSleeve<=8.88)){
    console.log("your size is : XL")

}
else if((shirtWidth<=27.99)&&(shirtLength<=33.99)&&(shirtSleeve<=10.129)){
    console.log("your size is : 2XL")

}
else if((shirtWidth<=28)&&(shirtLength<=34)&&(shirtSleeve<=10.13)){
    console.log("your size is : 3XL")

}
else{
    console.log("NA")
}