<template>
    <section class="projects">
        <h2>  Previous Group Projects </h2>
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
        margin-bottom: 60px;
        text-decoration-color: #22a1f5;
        text-underline-offset: 5px;
        text-decoration-line: underline;
        text-decoration-style: wavy;
        width: 100%;
        text-align: center;
        font-weight: bold;
    }

    aside {
        width: 50%;
        img {
            width: 50%;
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
    }

    .project-title {
        color: #016492;
        font-weight: bold;
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

</style>