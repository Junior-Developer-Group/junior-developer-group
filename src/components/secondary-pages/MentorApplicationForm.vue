<template>
    <main>
        <section class="mentor-application-form">
            <h1> Thank you for your interest! </h1>
            <p> We're not currently recruiting new mentors</p>

            <span> Please return to <a href="/"> homepage</a> or visit our <a href="/contact"> contact form </a></span>
        </section>
    </main>
</template>

<script>
export default {
    name: 'MentorApplicationForm'
}
</script>

<style lang="scss" scoped>
    main {
        min-height: 900px;
    }

    .mentor-application-form {
        background: lightblue;
        padding: 60px;
        color: var(--dark);
        max-width: 100%;
        display: flex;
        flex-direction: column;
    }

    h1, p {
        margin: 0;
        padding: 0;
    }



    a {
        color: darkblue;
        text-decoration: underline!important;
    }
</style>