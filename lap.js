


function odd(number) {
    
}

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}


function scoor(number) {
    
if (number>=90) {
    console.log("above then 90 the grade is A ");
}
else if (number>= 80|| number<= 89) {
    console.log("then the grade is B ");
}

else if (number>= 70|| number<= 79) {
console.log("then the grade is c ");
}

else if (number>= 60|| number<= 69) {
console.log("then the grade is d ");
}

 else {
    console.log("number is less then 59 ");}
    


    

function year(number) {
    
    if((number % 4==0) && (number%100!=0) || ((number%400!=0))) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}


