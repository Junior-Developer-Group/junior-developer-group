<template>
    <main>
        <section class="team-header">
           <h1>  Meet the team 👋</h1>
        </section>

        <section class="team-listing--admins">

            <h2> Admin Team / Here to help </h2>
            <article  v-for="admin in developers.admins" :key="admin.name">
                <span class="column team-member">
                    <img :src="admin.image_url" :alt="admin.name" class="team-member-image"/>
                    <div class="team-member-details">
                        <h3> {{admin.name}} ~ {{admin.job_title}}</h3> 
                        <small> {{admin.location}}</small>
                        <p> {{admin.description}}</p>

                        <span class="team-member-details__socials">
                            <ul>
                                <li v-if="admin.socials.github !== '' "> <a href="" target="_blank" class="github">
                                    <img src="../../assets/socials/github-logo.png" alt="github"/>
                                </a></li>

                                <li v-if="admin.socials.linkedin !== '' " > <a href="" target="_blank" class="linkedin"> 
                                    <img src="../../assets/socials/linkedin.png" alt="linkedin"/>
                                </a></li>

                                <li v-if="admin.socials.twitter !== '' "> <a href="" target="_blank" class="twitter">
                                    <img src="../../assets/socials/twitter.png" alt="twitter"/>
                                </a></li>

                                <li v-if="admin.socials.instagram !== '' "> <a href="" target="_blank" class="instagram"> 
                                    <img src="../../assets/socials/instagram-logo.png" alt="instagram"/>
                                </a></li>

                                <li v-if="admin.socials.twitch !== '' "> <a href="" target="_blank" class="twitch"> 
                                    <img src="../../assets/socials/twitch.jpg" alt="twitch"/>
                                </a></li>
                            </ul>
                        </span>
                    </div>
                </span>
            </article>
        </section>
    </main>
</template>

<script> 
import developers from '../../data/developers.json'
export default {
    name:"Developer-Team",
    data() {
        return {
            developers: developers
        }
    }
}
</script>

<style scoped lang="scss">
    main {
        margin-top: 140px;
    }

    .team-header {
        h1 {
            font-size: 2.8rem;
            text-align: center;
        }
    }

    .team-listing--admins {
        width: 100%;
        h2 {
            text-align: center;
        }
        
        span.team-member {
            display: flex;
            // box-shadow: 2px 5px 4px -2px rgb(0 0 0 / 10%);
            max-width: 600px;
            margin: 0 auto;
            margin-bottom: 30px;
            border-image: linear-gradient(#016492, #cddc39) 30;
            border-width: 4px;
            border-style: solid;
            padding: 10px;
            width: 80%;

            @media (max-width:650px) {
                flex-direction: column;
                }

            img.team-member-image {
                max-width: 180px;
                max-height: 180px;
                border-radius: 100%;
                margin-right: 20px;


                @media (max-width:650px) {
                    width: 100px;
                    height: 100px;
                }
            }

            .team-member-details {
                display: flex;
                flex-direction: column;
                align-items: flex-start;


                p {
                    max-width: 450px;
                    text-align: left;
                    width: 100%;
                }
            }
        }
    }

    .team-member-details__socials {
        width: 100%;
        margin: 0 auto;
        ul {
            margin-block-start: 0;
            padding-inline-start: 0;
            display: flex;
            

            li {
                list-style: none;
                text-align: left;
                margin: 5px;
                
                
                a img {
                    height: 30px;
                    width: 30px;
                    padding: 5px;
                    border-radius: 0;
                }
            }
        }
    }

</style>