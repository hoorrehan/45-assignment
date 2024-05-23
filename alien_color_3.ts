// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Write three version of this program , making sure each msg is printed for the appropriate color alien.

let alienColor : string = "green";
// â€¢ If the alien is green, print a message that the player earned 5 points.

// â€¢ If the alien is yellow, print a message that the player earned 10 points.

// â€¢ If the alien is red, print a message that the player earned 15 points.
if(alienColor === "green")

    if(alienColor === "green"){
        console.log("player earned 5 point,"); 
    }
    else if(alienColor === "yellow"){
        console.log("player earned 10 point,"); 
    }
    else if(alienColor === "red"){
        console.log("please select right color,"); 
    }


// version 2 of of the program
alienColor = "yellow";

if(alienColor === "green"){
    console.log("player earned 5 point,"); 
}
else if(alienColor === "yellow"){
    console.log("player earned 10 point,"); 
}
else if(alienColor === "red"){
    console.log("please select right color,"); 
}

//version 3 of the program 

alienColor = "red";

if(alienColor === "green"){
    console.log("player earned 5 point,"); 
}
else if(alienColor === "yellow"){
    console.log("player earned 10 point,"); 
}
else if(alienColor === "red"){
    console.log("please select right color,"); 
}



