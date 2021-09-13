

const user = {
    id: '1',
    fName: 'Joe',
    lName: 'Smith',
    celebration: '"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"',
    image: '/assets/images/team-members/likii.jpg'
}


const markup = `

<div class="card">
    <div class="card-cover">
    “
    </div>
    <div class="avatar">
    <img class="avatar-image" src= ${user.image} />
</div>
    <div class="card-content">
    ${user.celebration}
    </div>
    <p class='card-text'> - ${user.fName} ${user.lName}</p>

</div>

`;

document.getElementById('celebrate').innerHTML= markup;

