function Play() {
    
var posibilities = ["Rock", "Paper", "Scissors"];
// We need two random variables, one for 'user
var user = posibilities [Math.floor(Math.random() * 3)];
// and one for the 'computer'
var computer = posibilities [Math.floor(Math.random() * 3)];

// Now invoke function

    if (computer === "Rock");
        console.log ("Computer choice: Rock");
    

    if (user === "Paper");
        console.log ("User choice: Paper");
    

    
    if (user==="Rock" && computer === "Scissors") || (user === "Paper" && computer==="Rock")||(user==="Scissors"&&computer==="Paper"); 
         console.log ("User wins!");
     
        else {
         console.log ("You've lost!");
        }
}
    
