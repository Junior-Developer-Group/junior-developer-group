<template>
    <section class="projects">
        <h2> 👇 Our Group Projects 👇 </h2>
        <p>
            Here is a list of all projects we've been working on so far
        </p>

        <section class="projects-list">
            <div class="projects__single" v-for="project in projects" :key="project.name">

            <a :href="project.url !== '' ? project.url : '' " target="_blank">
                <aside class="projects__single--image">
                    <img src="../../assets/logo-with-background.png" :alt="project.name"/> 
                </aside>
                <aside class="projects__single--text">
                    <p class="project-title"> {{project.name}}</p>
                    <p> <strong>Status:</strong> {{project.status}} </p>

                </aside>
            </a>

            </div>
        </section>
    </section>
</template>


<script>
import db_projects from '../../data/projects.json'
export default {
    // eslint-disable-next-line
    name: 'Projects',
    data() {
        return{
            projects: db_projects.projects
        }
    }
}
</script>

<style lang="scss" scoped>
.projects {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    margin-top: 140px;

    h2 {
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 0;
    }
    p {
        max-width: 600px;
        text-align: center;
        margin-bottom: 60px;

    }

    aside {
        width: 70%;


    }

    .projects__single--image {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        width: 30%;
        img {
            width: 90%;
        }
    }

    a {
        color: black;
    }

    .projects__single a {
        display: flex;
        align-items: center;
        max-width: 450px;
        margin-bottom: 10px;
        text-align: left;
        margin-bottom: 20px;
        border-image: linear-gradient(#016492, #18c355) 30;
        border-width: 4px;
        border-style: solid;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        transition: 300ms all ease-in-out;

        &:hover {
            border-image: linear-gradient(#e9df09, #eb00e4) 30;
        }

        @media (max-width: 400px) {
            flex-direction: column;
            aside {
                width: 90%;
            }
        }
    }

    .project-title {
        color: #016492;
        font-weight: bold;
        margin-bottom: 0;
        font-size: 1.2rem;
    }


}
.view-all-projects {
    background: #fc5b5b;
    border-radius: 10px;
    color: white!important;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    padding: 10px 30px;
    max-width: 80%;
}

.projects-list {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 80%;
    padding-bottom: 40px;
}

</style>