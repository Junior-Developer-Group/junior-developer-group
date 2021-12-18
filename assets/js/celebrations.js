
//Creating an array of users that will be used to hold all of the information provided by team members regarding their wins


const users = [
    {
        'fName': 'Matea',
        'lName': 'Howard',
        'celebration': 'Created our first HacktoberFest challenge in 2020 🎉',
        'image': './assets/images/team-members/likii.jpg',
        'alt': 'Matea | takes a selfie in a tanned overcoat on teal background',
    },
    {
        'fName': 'Matea',
        'lName': 'Howard',
        'celebration': 'Created our second HacktoberFest challenge in 2021 🎉',
        'image': './assets/images/team-members/likii.jpg',
        'alt': 'Matea | takes a selfie in a tanned overcoat on teal background',
    },
    {
        'fName': 'Matea',
        'lName': 'Howard',
        'celebration': 'Established Junior Developer Group in 2020 🎉',
        'image': './assets/images/team-members/likii.jpg',
        'alt': 'Matea | takes a selfie in a tanned overcoat on teal background',
    },
    {
        'fName': 'Denice',
        'lName': 'Soper',
        'celebration': 'Joined Junior Developer Group 🎉',
        'image': './assets/images/team-members/denice.png',
        'alt': 'Denice | smiles with black colour framed spectacles',
    },
    {
        'fName': 'onlyasmall',
        'lName': 'lizard',
        'celebration': 'Joined Junior Developer Group 🎉',
        'image': './assets/images/team-members/lizard.jpg',
        'alt': 'Lizard | white mouse on the shoulder in a black t-shirt',
    },
    {
        'fName': 'Uriel',
        'lName': 'Ofir',
        'celebration': 'Joined Junior Developer Group 🎉',
        'image': './assets/images/team-members/uriel.jpg',
        'alt': 'Uriel | Sat in the blurred background in a blue t-shirt',
    },
    {
        'fName': 'Francesca',
        'lName': 'De Laurentis',
        'celebration': 'Joined Junior Developer Group 🎉',
        'image': './assets/images/team-members/franny.jpg',
        'alt': 'Francesca | smiles in dark background with her red lipstick',
    },
    {
        'fName': 'Oghenekparobo',
        'lName': 'O.',
        'celebration': 'Joined Junior Developer Group 🎉',
        'image': './assets/images/team-members/jay.jpg',
        'alt': 'Oghenekparobo | gives pose in a white striped red coat and white shirt',
    }

]

//Sorting through this array and picking a random user to display on the site in the celebrations section

let pickedUser = users[Math.floor(Math.random()*users.length)];




//Creating our HTML template markup to take the above object information and populate it into our HTML file in a structured way that makes it cleaner inside the HTML file
const markup = `

<div class="card">

    <span class="card-cover">
     “
    </span>

    <div class="avatar">
        <img class="avatar-image" src= ${pickedUser.image} alt="${pickedUser.alt}"/>
    </div>

    <p class="card-content">
        ${pickedUser.celebration}
    </p>

    <p class='card-text'> - ${pickedUser.fName} ${pickedUser.lName}</p>
</div>

`;
//Setting our markup to replace the innerHTML of our <div> element with the ID of celebrate

document.getElementById('celebrate').innerHTML= markup;
