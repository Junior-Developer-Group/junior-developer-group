<template>
    <section>

        <h1> We'd love to meet you🤗</h1>
        <aside>
            <h2> Become a Member</h2>
            <p> 
                To us, becoming a member means a lot more than joining a discord channel - you'll be required to participate in team events, projects and happenings. 
            </p>
            <a href="/member-application-form" class="button"> Member application form </a>
        </aside>

        <aside>
            <h2> Become a Mentor</h2>
            <p> Mentoring is an important part of our career progression, with us, you'll get a chance to improve your communication skills and help people who are willing to learn more.</p>
            <a href="/mentor-application-form" class="button"> Mentor application form </a>
        </aside>

    </section>
</template>

<script>
export default {
    name: "Become-A-Member"
}
</script>

<style lang="scss" scoped>

    section {
        margin-top: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 50px;

        h1 {
            margin-bottom: 60px;
            text-align: center;
        }
    }

    aside {
            display: flex;
            flex-direction: column;
            align-items:flex-start;
            // box-shadow: 2px 5px 4px -2px rgb(0 0 0 / 10%);
            max-width: 600px;
            margin: 0 auto;
            margin-bottom: 30px;
            border-image: linear-gradient(#016492, #18c355) 30;
            border-width: 4px;
            border-style: solid;
            padding: 20px;
            width: 80%;
            transition: 200ms ease-in-out;

            p {
                text-align: left;
                max-width: 600px;
                width: 100%;
            }

            &:hover {
                border-image: linear-gradient(#016492, yellow) 30;
            }

            .button {
                background: #016492;
                padding: 15px;
                border-radius: 10px;
                color: white;
                text-transform: capitalize;
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 0.1em;
                margin-bottom: 20px;
                transition: 200ms ease-in-out;
                cursor: pointer;

                &:hover {
                    background: darken( #016492, 10%);
                    padding: 15px 25px;
                }
            }
    }
</style>