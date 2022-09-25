<template>
    <section class="about-us-wrapper">
      <div class="about-us-content column">
            <div class="about-us__image">
                <img src="../../assets/logo-with-background.png" alt="Junior Developer Group Logo | A butterfly with a blue and a purple wing">
            </div>

            <div class="about-us__text column">
                <p>
                    We're a small, international community with a main goal of
                    helping early career developers gain new skills, 
                    make meaningful connections and provide guidance to those 
                    entering their first roles in tech.
                </p>

                <p>
                    We started working together in December 2020 and have been building
                    projects, <br>
                    exploring Scrum ceremonies and debugging JavaScript ever since.
                </p>

                <p> 
                    We're run by Likii and our Admin Team who help us learn more, 
                    support our experiments and are always there to share some funny memes
                </p>

                <p> 
                    If you'd like to join us, collaborate with us or recruit some of our members, 
                    please note we're not interested in receiving any kind of payments.
                </p>
            </div>
        </div>
    </section>

        <section class="about-us-content faq">
            <div class="about-us__text column">
                <h2> FAQ</h2>
                <details>
                    <summary> <strong>Q:</strong> What projects have we done so far?</summary>
                        <div class="about-us_faq_answers">
                            <strong>Answer: </strong>
                            
                            <a href="https://junior-developer-group.github.io/junior-coding-team/" target="_blank"> 👉 Our first Team Page  </a>
                            <a href="https://junior-developer-group.github.io/sleep-quality-calculator/" target="_blank"> 👉 Sleep Quality Calculator  </a>
                            <a href="https://junior-developer-group.github.io/tamagotchi-game/" target="_blank">  👉 Tamagotchi inpired game </a>
                            <a href="https://github.com/Junior-Developer-Group/cat-match" target="_blank"> 👉  Cat Match </a>
                            <a href="https://junior-developer-group.github.io/HacktoberPet/" target="_blank"> 👉 Hacktoberfest  Challenge 2021</a>
                            <a href="https://mateahoward.github.io/hacktoberfest-2020/" target="_blank"> 👉 Hacktoberfest  Challenge 2020</a>
                        </div>
                </details>

                <details>
                    <summary> <strong>Q:</strong> What tools and technologies we use?</summary>
                        <div class="about-us_faq_answers">
                            <strong>Answer: </strong>

                            <p> For a large majority of our projects we use HTML/CSS and vanilla JavaScript. 
                                However, we're slowly moving on to building projects using JS frameworks such as Vue.
                            </p>
                            <p>
                                As for tools, we use Figma for our designs, Jira for ticket management (we work in sprints), Discord as a main communication platform and GatherTown for our group meetings.
                            </p>

                            <p> Links to all of the above can either be found in our site's footer or (if it's project related) inside of each project's readme files.</p>
                        </div>
                </details>

                <details>
                    <summary> <strong>Q:</strong> Is there a skill level required to join the team?</summary>
                        <div class="about-us_faq_answers">
                            <strong>Answer: </strong>

                            <br>
                            <sub><strong style="color:#434ba1">Members:</strong></sub>
                            <p> The team is purposely created for beginners and junior developers alike. 
                                We have no skill or experience requirements and hope you'll be able to 
                                gain some while participating on our projects instead.
                            </p>

                            <br>
                            <sub> <strong style="color:#434ba1">Mentors &amp; Team Leads:</strong></sub>
                            <p> If you'd like to help broaden our skills and share your knowledge with us
                                - we'd absolutely love to have you! Please speak to Likii who can help you get started.
                            </p>
                        </div>
                </details>

                <details>
                    <summary> <strong>Q:</strong> Are there team meetings? </summary>
                        <div class="about-us_faq_answers">
                            <strong>Answer: </strong>

                            <p> 
                                Since the group was created we've always tried to meet once a week. 
                                Sometimes, we will schedule an extra workshop/event which is always advertised
                                on our Discord channel in advance. 
                            </p>

                        </div>
                </details>

                <details>
                    <summary> <strong>Q:</strong> Do I need to be online and participating every day?</summary>
                        <div class="about-us_faq_answers">
                            <strong>Answer: </strong>

                            <p> 
                                In short, no. We run this group in a very casual way and we respect everyone has jobs and other responsibilities outside of it.
                                Participation is completely optional.  
                            </p>

                            <p>
                                That being said, <i>absolute inactivity</i> will not be welcomed and if it so happens we'll have to remove you from our group. 
                            </p>

                            <sub> * Absolute inactivity <br> - no messages in any of our chats, <br> - no code activity or updates on tickets over a period of 3 months and onwards</sub>
                        </div>
                </details>

            </div>
        </section>

        <section class="socialMedia__discord">
            <iframe src="https://discord.com/widget?id=787411703901978684&amp;theme=dark" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>

    section {
        max-width: 100%;
    }

.column {
    display: flex;
    flex-direction: column;
}
.about-us-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 80px;
    width: 80%;
    min-height: 600px;
    flex-wrap: wrap;
    padding: 20px;
}

.about-us-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-us__image {
    margin-top: 40px;
    img {
        max-width: 100%;
    }
}

.about-us__text {
    display: flex;
    justify-content: center;
    max-width: 600px;
    width: 100%;
}


.faq {
    margin-bottom: 40px;
    margin-top: 50px;
    width: 80%;
}


details {
    margin-bottom: 20px;
    max-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

details strong {
    margin-bottom: 15px;
}

summary {
    color: #21243d;
    margin-bottom: 15px;
    max-width: 100%;
}

summary strong {
    color: #6E798C;
    font-size: 18px;
}

.about-us_faq_answers {
    display: flex;
    flex-direction: column;
}

details a {
    text-decoration: none;
    color: #016492;
    font-size: 16px;
    margin-bottom: 5px;
}

.socialMedia__discord {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 50px;
}

.socialMedia__discord>iframe {
    width: 90%;
    max-width: 500px;
}
</style>