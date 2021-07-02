var contacts =[
{
    "firstName":"Ashwin",
    "lastName":"Sibu",
    "number":"0543236747",
    "likes":["Pizza","Coding","Brownie Points"]
},
{
    "firstName":"Manav",
    "lastName":"Bhadoria",
    "number":"0547382987",
    "likes":["Hogwarts","Magic","Hagrid"]
},
{
    "firstName":"Rithik",
    "lastName":"Maurdappa",
    "number":"0493720023",
    "likes":["Intriguing Cases","Violin"]
},
{
    "firstName":"Roshan",
    "lastName":"Kuriakose",
    "number":"0845726493",
    "likes":["JavaScript","Gaming","Foxes"]
},
];

function lookUpProfile(name,prop){
 for (var i=0; i<contacts.lenghts;i++){
   if(contacts[i].firstName === name){
return contacts[i][prop] || "no such properties"
   } 
 }
 return "No such contact";
}

var data= lookUpProfile("Ashwin","likes");

console.log(data);