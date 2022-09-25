<template>
    <section class="remove-my-data">
        <img src="../../assets/logo-with-background.png" alt="Junior Developer Group Logo | A butterfly with a blue and a purple wing">
        <h1> Removing your data </h1>

        <section class="remove-my-data__content">
            <p> If you are an existing member of Junior Developer group, the data collected would contain the following:</p>

            <ul>
                <li> Your Discord Profile (name, image, nickname, description) </li>
                <li> Your GitHub Profile (name, image, description, url)</li>
                <li> Your Jira Profile (name, image) </li>
                <li> Your email address (used only to add you to GitHub and Jira)</li>
                <li> Your personalised card on our Members page (name, image, socials, description)</li>
            </ul>

            <p> 
                As you're aware, to manually remove your data from Discord, Github and Jira you're required to leave the server or the group. 
                <br>
                After you leave the mentioned services your data will no longer be shared or stored within Junior Developer Group.
            </p>

            <p>
                If you'd like us to remove you from our members page please email <a href="mailto:email@matea@junior-developer-group.com?subject=Remove my data">Likii</a> and she'll make sure you're no longer displayed there. 
            </p>

            <p>
                For any other enquiries about data collection please visit <a href="/contact"> our contact page</a> or talk to us over <a href="https://discord.com/invite/JdGZbZYDvd"> discord</a>.
            </p>

        </section>
    </section>


</template>


<script>
export default {
    // eslint-disable-next-line
    name: 'RemoveMyData'
}
</script>


<style lang="scss" scoped>
    .remove-my-data {
        min-height: 900px;
        margin-top: 140px;
        display: flex;
        flex-direction: column;
        align-content: center;
        max-width: 80%;

        img {
            max-width: 200px;
            max-height: 200px;
            margin: 0 auto;
        }
    }

    h1 {
        text-align: center;
    }

    a {
        text-decoration: underline;
    }
</style>