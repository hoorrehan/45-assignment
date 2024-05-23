// . No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// â€¢ If the list is empty, print the message We need to find some users!
// â€¢ Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ["admin", "hoor", "mahnoor", "umaima"];
if (userNames.length === 0) {
    console.log("We need to find some user!");
}
else {
    userNames = [];
    console.log('All user Name have been removed. ' + userNames.length);
}
export {};
