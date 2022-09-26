<template>
    <section class="hero_header">
        <aside class="hero_header-information">
            <h1>Junior Developer Group</h1>
            <p>
            We're an international community helping early career
            developers gain new skills, make meaningful connections and provide
            guidance to those entering their first roles in tech.
            </p>
            <a href="/about.html">Find out more</a>
        </aside>
        <aside class="hero_header-logo">
            <img src="../../assets/logo-with-background.png" alt="Junior Developer Group Logo | A butterfly with a blue and a purple wing"> 
        </aside>
    </section>
</template>

<style lang="scss" scoped>
.hero_header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;

    min-height: 950px;

    @media (max-width: 500px ){
        padding: 0;
    }

    aside {
        width: 50%;
    }

    .hero_header-information {
        text-align: left;

        h1 {
            font-weight: bold;
            font-size: 44px;
            margin-block-start: 0;
            margin-block-end: 0;
        }

        p {
            font-size: 18px;
            line-height: 23px;
            margin-bottom: 30px;
            max-width: 90%;
        }

        a {
            background: #fc5b5b;
            border-radius: 10px;
            color: white;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 29px;
            text-align: center;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
            padding: 10px 10px;
            max-width: 80%;
        }
    }

    .hero_header-logo {
        display: flex;
        justify-content: center;
        img {
            width: 280px;
            height: 280px;

            @media (max-width: 350px) {
                width: 150px;
                height: 150px;
                margin-top: 90px;
            }
        }
    }
}


@media (max-width: 890px) {
    .hero_header {
        flex-direction: column-reverse;

        aside {
            width: 80%;
        }
    }

    .hero_header-logo {
        margin-bottom: 60px;
    }
}


@media (max-width: 590px) {
   .hero_header-information h1 {
        font-size: 2em!important;
    }

    .hero_header-information a {
        font-size: 1em!important;
    }
}

</style>