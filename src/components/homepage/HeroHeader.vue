<template>
    <section class="hero_header">
        <aside class="hero_header-information">
            <h1>Junior Developer Group</h1>
            <p>
            We're a friendly, international community, 
            providing an additional way of gaining  experience, 
            practicing your skills and creating meaningful connections while working together
            </p>

            <a href="/about">Find out more</a>
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
    width: 90%;
    max-width: 1200px;
    

    min-height: 950px;

    @media (max-width: 500px ){
        padding: 0;
    }

    aside {
        width: 50%;
        margin: 0 auto;
    }

    .hero_header-information {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-weight: bold;
            font-size: 44px;
            margin-block-start: 0;
            margin-block-end: 0;
            text-align: center;
        }

        p {
            font-size: 18px;
            line-height: 23px;
            margin-bottom: 30px;
            max-width: 90%;
            text-align: center;

            @media(max-width:500px) { 
                max-width: 100%;
                margin-top: 30px;
            }
        }

        a {
            background: #ff3e3e;
            border-radius: 10px;
            color: white;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 29px;
            text-align: center;
            letter-spacing: 2px;
            text-transform: uppercase;

            margin-top: 15px;
            padding: 10px 150px;
            transition: 300ms all ease-in-out;

            &:hover {
                padding: 10px 165px;
            }

            @media(max-width:500px) {
                padding: 10px 50px;

                &:hover {
                    padding: 10px 65px;
                }
            }
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