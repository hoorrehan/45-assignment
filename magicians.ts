// Magicians: Make a array of magicianâ€™s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magician: string[] = ['Harry Potter' , 'Hermino Granger' , 'Ron weasley' , 'Dumbledore'];

function show_magicians(magician: string[]){
    magician.forEach(element => {
        console.log(element);
        
    })
}
show_magicians(magician);