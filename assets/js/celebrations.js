
//creating our User object that will be used to setup the rest of the objects that we utilize for this template string

function User(fName, lName, celebration, image) {
    this.fName= fName;
    this.lName= lName;
    this.celebration= celebration;
    this.image= image;
}


//Creating our first New User based on our object template and passing in the values
let user1 = new User("Joe", "Smith", '"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"', '/assets/images/team-members/likii.jpg');


//Creating our HTML template markup to take the above object information and populate it into our HTML file in a structured way that makes it cleaner inside the HTML file
const markup = `

<div class="card">
    <div class="card-cover">
    “
    </div>
    <div class="avatar">
    <img class="avatar-image" src= ${user1.image} />
</div>
    <div class="card-content">
    ${user1.celebration}
    </div>
    <p class='card-text'> - ${user1.fName} ${user1.lName}</p>

</div>

`;
//Setting our markup to replace the innerHTML of our <div> element with the ID of celebrate

document.getElementById('celebrate').innerHTML= markup;


// ToDo -Figure out how to randomize the picking of a user object to display in the html template string markup