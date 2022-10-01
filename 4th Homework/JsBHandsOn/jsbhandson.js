var x = [ "John Doe |, M |, BMI:24 |,Normal Weight" ];

var y = ["Marry Anne |, F |, BMI:30 |,Obese" ];

var names  = [x,y]

console.log(names);

//Need to determine the constant of some id functions.
var bmi;
var height = parseInt(prompt("height (cm)"));
//The value of the weight slider
var weight = parseInt(prompt("weight (kg)"));
//Now I have added the formula for calculating BMI in "bmi"
bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
//When the BMI is less than 18.5, you can see the text below
if(bmi < 18.5) {
    console.log("Underweight");
}
//If BMI is >=18.5 and <=25
else if( bmi >= 18.5 && bmi <= 25 ){
    console.log("Normalweight");
}
//If BMI is >= 25 and <= 30
else if( bmi >= 25 && bmi <= 30 ){
    console.log("Overweight");
}
//If BMI is >= 30
else{
    console.log("Obese");
}
