<template>
    <div class="events">

        <h2> Events & Meetups 📣 </h2>
        <p>
            We're a chatty bunch! Our group likes to organise meetings where we run workshops, plan future projects, answer questions or provide some help with tasks we're stuck on.
            When each of the meetings (or workshops) are planned we always check in with our members to make sure everyone is available - because, you know, timezones!
        </p>
        <p> 
            Our meetings are organised on Discord, but sometimes, we like to pop over to our Gather castle and have some fun as well. 
        </p>

        <a href="https://discord.com/invite/JdGZbZYDvd"> Join our Discord</a>
    </div>
</template>


<script>
export default {
    // eslint-disable-next-line
    name: 'Events'
}
</script>

<style scoped lang="scss">
    .events {
        width: 100%;
        max-width: 950px;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
        padding-top: 30px;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
    }
    p {
        text-align: center;
        font-size: 1.1rem;
        max-width: 70%;
    }

    a {
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
</style>