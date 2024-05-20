//Name Cases: Store a personâ€™s name in a variable, and then print that personâ€™s name in lowercase, uppercase, and titlecase.



let personName: string = " ";

personName = prompt("whats your name?")||" ";

let upperCase : string= personName.toUpperCase();
let lowerCase : string = personName.toLowerCase();
let titleCase : string = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word .slice(1).toLowerCase()).join(" ");
if (personName !== null && personName !== " "){
    alert(`Hello ${personName} here's your name in
    upperCase ${upperCase}
    lowerCase ${lowerCase}
    titleCase ${titleCase}`)
}
else{
    ("fill your name" )
}