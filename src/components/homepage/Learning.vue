<template>
    <div class="learning">

        <section class="learning-image">
            <img src="../../assets/images/learning.jpg" alt=""/>
        </section>

        <section class="learning-details">
            <h2> Things you can learn about 💡 </h2>
            <p>
                From the very beginnings of our group we wanted to be the place where early career developers gain additional skills that make them stand out and help secure their first roles in tech. 
                Because of that we've included the follwing topics into every project we've built so far:
            </p>

            <ul>

                <li> Practicing Effective Communication</li>
                <li> Planning & Collaborating by using Jira  </li>
                <li> Exploring Agile Ways Of Working</li>
                <li> Nurturing Psychological Safety </li>
                <li> Encouraging Public Speaking </li>
                <li> Empowering Future Leaders </li>
            </ul>

        </section>
    </div>
</template>

<script>
export default {
    name: 'Learning'
}
</script>

<style lang="scss" scoped>
.learning {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width:900px) {
        flex-direction: column;
    }
}
.learning-details {
    width: 40%;
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
        width: 100%;
        text-align: center;
        font-size: 2rem;
    }

    @media (max-width:900px) {
        width: 80%;
    }
}
.learning-image {
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width:900px) {
        width: 80%;
    }

   img {
    height: auto;
    width: 80%
   }
}
</style>