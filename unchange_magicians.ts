// . Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magiciansâ€™ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magicianâ€™s name.

let magician: string[] = ['Harry Potter' , 'Hermino Granger' , 'Ron weasley' , 'Dumbledore'];

function copyArray(arr:string[]){
    return [...arr]
}


function make_great (magicianArray: string[]){

    for(let i=0; i<magicianArray.length; i++){

      magicianArray[i] = 'the Great ' + magicianArray[i]
    }
}


function show_magicians(magician: string[]){
    magician.forEach(element => {
        console.log(element);
        
    })
}
const copyMagicArray = copyArray(magician);

make_great(magician);

console.log('\n\nThis is my original array:');
show_magicians(magician);

console.log('\n\nThis is my modify copy of the array:');
show_magicians(copyMagicArray);
