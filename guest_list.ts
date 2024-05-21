let guest_list :string[] = ['Imran khan' , 'Nawaz sharif' , 'Asif ali zardari'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + '\n\nIt is our pleasure to invite you in our party.\n\n')
// }

let absent_guest : string = 'Imran khan' ;

let new_guest : string = 'Kamram tessori' ;

guest_list[0] = new_guest ;

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. '+ guest_list[i] + '\n\n is our pleasureto invite you in our party. \n\n Thank You!\n\n')

// }
console.log(`Mr. ${absent_guest} is not coming to the party`);

console.log(`Good News! We find big table so we are inviting 3 more guest.`)

guest_list.unshift('Sir Zia Khan');
guest_list.splice(2 , 0 , 'Maryam Nawaz');
guest_list.push('Bilawal Bhutto Zardari');

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. '+ guest_list[i] + '\n\n is our pleasureto invite you in our party. \n\n Thank You!\n\n')

}

console.log('\nsorry we can not arrange big table, Only two people will be invited for dinner. ');

while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Mr. ${remove_guest}, You are not invited for dinner.`);
    
}

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited .\n\nThank You! \n\n')
    
}

guest_list.splice(0 , 2);

console.log(guest_list);
