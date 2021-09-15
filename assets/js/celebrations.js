
//Creating an array of users that will be used to hold all of the information provided by team members regarding their wins


const users = [
    {
        'fName': 'Matea',
        'lName': 'Howard',
        'celebration': 'Founder of Junior Developer Group. Working way too many hours.',
        'image': '/assets/images/team-members/likii.jpg'
    },
    {
        'fName': 'Denice',
        'lName': 'Soper',
        'celebration': 'Junior Software Developer at Change Grow Live',
        'image': '/assets/images/team-members/denice.png'
    },
    {
        'fName': 'David',
        'lName': 'Maidment',
        'celebration': 'CTO/VP Engineering WONDR',
        'image': '/assets/images/team-members/david.jpeg'
    },
    {
        'fName': 'onlyasmall',
        'lName': 'lizard',
        'celebration': 'Bootcamp Grad working tirelessly to pursue my dreams.',
        'image': '/assets/images/team-members/lizard.jpg'
    },
    {
        'fName': 'Uriel',
        'lName': 'Ofir',
        'celebration': 'Fullstack Web Developer',
        'image': '/assets/images/team-members/uriel.jpg'
    },
    {
        'fName': 'Francesca',
        'lName': 'De Laurentis',
        'celebration': 'Happy learner - happy coder. Delivers accessible and user friendly web & mobile apps.',
        'image': '/assets/images/team-members/franny.jpg'
    },
    {
        'fName': 'Oghenekparobo',
        'lName': 'O.',
        'celebration': 'Software Engineering Student @ALX || Founder of Lesous Technology',
        'image': '/assets/images/team-members/jay.jpg'
    },
    {
        'fName': 'Debra-Kaye',
        'lName': 'Elliott',
        'celebration': 'Front End Developer',
        'image': '/assets/images/team-members/debra-kaye.jpg'
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
