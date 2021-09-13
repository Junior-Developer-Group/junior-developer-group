

const user = {
    id: '1',
    fName: 'Joe',
    lName: 'Smith',
    celebration: '"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"',
    image: '/assets/images/team-members/likii.jpg'
}


const markup = `

<div class="card">
    <!-- Cover -->
    <div class="card-cover">
    </div>
    <div class="avatar">
    <!-- Avatar image -->
    <img class="avatar-image" src= ${user.image} />
</div>
    <!-- Content -->
    <div class="card-content">
    ${user.celebration}
    </div>
    <p class='card-text'>${user.fName} ${user.lName}</p>

</div>

`;

document.getElementById('celebrate').innerHTML= markup;