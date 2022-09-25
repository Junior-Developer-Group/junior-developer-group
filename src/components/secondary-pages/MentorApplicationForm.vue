<template>
    <main>
        <section class="mentor-application-form">
            <h1> Thank you for your interest! </h1>
            <p> We're not currently recruiting new mentors</p>

            <a href="/"> return to homepage</a>
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
        background: grey;
        padding: 60px;
        color: white;
        max-width: 100%;
        display: flex;
        flex-direction: column;
    }

    h1, p {
        margin: 0;
        padding: 0;
    }



    a {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        border: 1px solid white;
        padding: 10px;
        color: white;
        margin-top: 30px;

        &:hover {
            background: white;
            color: var(--dark);
        }
    }
</style>