<template>
    <section class="projects">
        <h2>  Take a look at what we're working on 👇 </h2>

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
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    min-height: 950px;
    background: #2c3e50;
    padding-bottom: 20px;

    h2 {
        margin-bottom: 60px;
         color: white;
         width: 80%;
         text-align: center;
         font-size: 2rem;

    }

    .projects__single--image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    aside {
        width: 200px;
        margin-right: 10px;
        img {
            width: 100px;
            height: 100px;
            padding: 10px;
        }

        @media (max-width: 400px) {
            width: 900px;
        }

        @media (max-width: 300px) {
           img {
            width: 60px;
            height: 60px;
           }
        }
    }

    a {
        color: white;
    }

    .projects__single a {
        display: flex;
        align-items: center;
        max-width: 650px;
        margin-bottom: 10px;
        text-align: left;
    }

    .project-title {
        color: white;
        font-weight: bold;
    }


}

.projects__single {
    border: 1px solid grey;
    margin: 5px;
    max-width: 45%;
    border-radius: 10px;
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
    background: #ffc22b;
    border-radius: 10px;
    color: var(--dark)!important;
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
    transition: 300ms all ease-in-out;

    &:hover {
        padding: 10px 50px;
    }
}

@media (max-width: 700px) {
    .projects-list {
        flex-direction: column;
    }
    .projects__single {
        max-width: 80%;
    }
}

</style>