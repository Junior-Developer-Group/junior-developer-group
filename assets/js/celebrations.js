
//Creating an array of users that will be used to hold all of the information provided by team members regarding their wins

//Create a new user with this template for easy copy pasta

// {
//     'fname': '',
//     'lName': '',
//     'celebration': '',
//     'image': '/assets/images/team-members/'
// }


const users = [
    {
        'fName': 'Joe',
        'lName': 'Smith',
        'celebration': 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'image': '/assets/images/team-members/likii.jpg'
    },
    {
        'fName': 'Sandy',
        'lName': 'Shores',
        'celebration': 'morem ipsum more ipsum more ipsum more ipsum more ipsum more ipsum',
        'image': '/assets/images/team-members/denice.png'
    },
    {
        'fName': 'Jeff',
        'lName': 'Jessie',
        'celebration': 'Winning at life and having a blast contributing to the Junior Developer Group',
        'image': '/assets/images/team-members/'
    }
]

//Sorting through this array and picking a random user to display on the site in the celebrations section

let pickedUser = users[Math.floor(Math.random()*users.length)];




//Creating our HTML template markup to take the above object information and populate it into our HTML file in a structured way that makes it cleaner inside the HTML file
const markup = `

<div class="card">
    <div class="card-cover">
    “
    </div>
    <div class="avatar">
    <img class="avatar-image" src= ${pickedUser.image} />
</div>
    <div class="card-content">
    ${pickedUser.celebration}
    </div>
    <p class='card-text'> - ${pickedUser.fName} ${pickedUser.lName}</p>

</div>

`;
//Setting our markup to replace the innerHTML of our <div> element with the ID of celebrate

document.getElementById('celebrate').innerHTML= markup;

console.log(typeof(User));
// ToDo -Figure out how to randomize the picking of a user object to display in the html template string markup