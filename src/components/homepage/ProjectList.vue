<template>
    <section class="projects">
        <h2>  Our group projects </h2>

        <div class="projects-list">
            <div class="projects__single" v-for="project in projects.slice(0, 4)" :key="project.name">

                <a :href="project.url" target="_blank">
                    <aside class="projects__single--image">
                        <img src="../../assets/logo-with-background.png" :alt="project.name"/> 
                    </aside>
                    <aside class="projects__single--text">
                        <p class="project-title"> {{project.name}}</p>
                        <p> <strong>Status:</strong> {{project.status}} </p>

                    </aside>
                </a>

            </div>
        </div>

        <a href="/projects" class="view-all-projects">
            view all projects
        </a>
    </section>
</template>


<script>
import db_projects from '../../data/projects.json'
export default {
    // eslint-disable-next-line
    name: 'ProjectList',
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
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    min-height: 850px;

    h2 {
        margin-bottom: 60px;
         text-decoration-color: #22a1f5;
         text-underline-offset: 5px;
         text-decoration-line: underline;
         text-decoration-style: wavy;
         width: 100%;
         text-align: center;
    }

    aside {
        width: 200px;
        margin-right: 10px;
        img {
            width: 120px;
            height: 120px;
        }

        @media (max-width: 400px) {
            width: 120px;
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

.projects__single {
    border: 1px solid grey;
    margin: 5px;
    max-width: 45%;
}

.projects-list {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        max-width: 800px;
        margin: 0 auto;
}
.view-all-projects {
    background: #fc5b5b;
    border-radius: 10px;
    color: #28282E!important;
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

@media (max-width: 700px) {
    .projects-list {
        flex-direction: column;
    }
    .projects__single {
        max-width: 100%;
    }
}

</style>