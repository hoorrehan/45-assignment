//store the location in a array. Make sure array is not in alphabetic order.
let places : string[] = ['Italy' , 'Germany' , 'Dubai' , 'paris']

//print your array in its original order.
console.log('original ' + places);

//print your array in alphabetical order without modifying the actual list.
console.log('copy ' +[...places].sort());

//Show that your array is still in its original order by printing it
console.log('Original ' + places);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log('original ' + places);

// Reverse the order of your list. Print the array to show that its
// order has changed.
console.log('original ' + places.reverse());

//Reverse the order of your list again. Print the list to show itâ€™s back to its original order.
console.log('original ' + places.reverse());

//¢ Sort your array so itâ€™s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('original ' + places.sort);

//Sort to change your array so itâ€™s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());
