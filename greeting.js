"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each personâ€™s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the personâ€™s name.
let Greetings = ['Hoor', 'Umaima', 'Mahnoor', 'Habiba'];
const message = 'welcome to typescript class:';
for (let i = 0; i < Greetings.length; i++) {
    console.log(message + Greetings[i]);
}
