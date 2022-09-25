<template>
    <footer>
        <section class="columns">
            <aside class="left-column">
                <p> Join us: </p>

                <a href="https://discord.com/invite/JdGZbZYDvd" target="_blank">
                    <img src="../assets/images/footer/discord.png" alt=""/> 
                    discord
                </a>

                <a href="https://github.com/Junior-Developer-Group" target="_blank">
                    <img src="../assets/images/footer/github-logo.png" alt=""/> 
                    github
                </a>

                <a href="https://www.instagram.com/juniordevelopergroup/" target="_blank">
                    <img src="../assets/images/footer/instagram-logo.png" alt=""/> 
                    instagram
                </a>

                <a href="https://gather.town/app/EXCj9n8cz6KDtw3p/Junior%20Dev%20HQ" target="_blank">
                    <img src="../assets/images/footer/gather.png" alt="" /> 
                    gather
                </a>
                
            </aside>

            <aside class="right-column">
               <p> Important Links: </p>

                <a href="https://junior-developer-group.github.io/group-resources/" target="_blank">
                    group resources
                </a>
                
                <a href="/privacy">
                    privacy policy
                </a>

                <a href="/remove-data">
                    Remove my data
                </a>
            </aside>
        </section>

        <section class="copyright">
            <p> © Junior Developer Group, {{ currentYear }}</p>
        </section>
    </footer>
</template>


<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer-Component',
    data() {
        return {
            date: new Date()
        }
    },
    computed: {
        currentYear() {
            return this.date.getFullYear()
        }
    }

}
</script>


<style lang="scss" scoped>


    footer {
        // position: fixed;
        // left: 0;
        // right: 0;
        // bottom: 0;
        background: #2c3e50;
        color: white;
        display: flex;
        padding: 20px;

        justify-content: center;
        flex-direction: column;

        .columns {
            display: flex;
            align-items: baseline;

            aside {
                display: flex;
                flex-direction: column;
                width: 50%;
                justify-content: center;
                align-items: center;

                p {
                    font-weight: bold;
                    font-size: 1.4em;
                    text-decoration-line: underline;
                    text-decoration-style: dashed;
                    text-decoration-color: #4358d8;
                    text-underline-offset: 5px;
                }

                a {
                    color: white;
                    display: flex;
                    align-items: center;
 
                    text-transform: capitalize;
                    margin: 5px;

                    img {
                        width: 30px;
                        margin-right: 10px;
                    }
                }
            }

            .left-column a {
                width: 120px;
                padding: 3px;
            }
        }


        .copyright {
            margin-top: 30px;
            text-align: center;
        }
    }



    @media (max-width: 520px) {
        .columns {
            flex-direction: column;
            justify-content: center;
            align-items: center!important;

            aside {
                width: 90%!important;
                margin-bottom: 30px;
            }
        }
    }


    @media (max-width: 350px) {
        footer .columns aside{
            p {
                font-size: 1.2em;
            }
        }
    }

</style>