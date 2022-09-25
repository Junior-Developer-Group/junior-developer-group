<template>
    <main>
        <header>
            <img src="../../assets/logo-with-background.png" alt="Junior Developer Group Logo | A butterfly with a blue and a purple wing"/>
            <h1> New Members</h1>
            <p> Application form </p>
        </header>
        <form action="https://formspree.io/f/xlezdnoj" method="POST">

            <fieldset>
                <legend> Personal details: </legend>

                <label for="name"> Your Name:</label>
                <input id="name" type="text" name="Your Name:" required placeholder="e.g Maria (she/her)"/>

                <label for="email"> Your email address: </label>
                <input id="email" type="email" name="Your email address:" required placeholder="e.g maria@email.com"/>

                <label for="location"> Your location/timezone: </label>
                <input id="location" type="text" name="Your location/timezone:" required placeholder="e.g UK/GMT"/>

                <p> Can you confirm you're over the age of 18?</p>

                <span>
                    <input id="over-18" type="checkbox" name="Can you confirm you're over the age of 18?" value="yes"/> 
                    <label for="over-18"> Yes </label> 
                </span>

                <span>
                    <input id="not-over-18" type="checkbox" name="Can you confirm you're over the age of 18?" value="no"/>
                    <label for="not-over-18"> No </label> 
                </span>


                <p> Are you already a member of our Discord channel? </p>

                <span>
                    <input id="on-discord" type="checkbox" name="Are you already a member of our Discord channel?"  value="yes"/> 
                    <label for="on-discord"> Yes </label> 
                </span>

                <span>
                    <input id="not-on-discord" type="checkbox" name="Are you already a member of our Discord channel?"  value="no"/>
                    <label for="not-on-discord"> No </label> 
                </span>

            </fieldset>


            <fieldset>
                <legend> Skills & Experience: </legend>

                <label for="skills"> Your current skills:</label>
                <textarea id="skills" type="textarea" placeholder="e.g HTML, CSS, JS, Vue" rows="8" cols="50" name="Your current skills:"></textarea>

                <label for="language">Are you able to communicate using English? </label>
                <input type="text" id="language" placeholder="e.g Yes, it shouldn't be a problem"/>

                <label for="experience"> Are you currently employed or have work experience as a developer?</label>
                <textarea id="experience" name="Are you currently employed or have work experience as a developer?" rows="8" cols="50"></textarea>

            </fieldset>

            <fieldset>
                <legend> Intents & Interests: </legend>

                <label for="joining"> What would you like to achieve by joining our group? </label>
                <textarea id="joining" name="What would you like to achieve by joining our group?" rows="8" cols="50"></textarea>

                <label for="inactivity"> How likely are you to become inactive after joining? </label>
                <textarea id="inactivity" name="How likely are you to become inactive within the next couple of weeks/months?" rows="8" cols="50"></textarea>

                <label for="finding"> How have you found about our group? </label>
                <textarea id="finding" name="How have you found about our group?" rows="8" cols="50"></textarea>

            </fieldset>

            <button type="submit"> Submit</button>

        </form>
    </main>
</template>

<script>
export default {
    name: 'MemberApplicationForm'
}
</script>

<style scoped lang="scss">

    header {
        text-align: center;
    }
    main {
        margin-top: 140px;
        margin-bottom: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 80%;
        max-width: 600px;
        margin: 0 auto;
        margin-top: 50px;

        fieldset {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 20px;
            border-image: linear-gradient(#016492, #cddc39) 30;
            border-width: 4px;
            border-style: solid;
            margin-bottom: 30px;

            span {
                display: flex;
                align-items: baseline;

                label {
                    font-weight: normal;
                    margin-bottom: 0!important;
                }
            }

            span.buttons {
                justify-content: space-between;
                width: 100%;
            }
        }

        legend {
            text-align: left;
            font-weight: bold;
            font-size: 1.5rem;
            color: #434ba1;

        }

        input, textarea {
            margin-bottom: 20px;
            width: 100%;
            text-indent: 10px;
            border-radius: 4px;
            border-color: grey;
            background-color: white;
            border: 1px solid;
            outline: none;
        }

        input:not(input[type=checkbox]) {
            height: 35px;
        }

        input[type=checkbox] {
            accent-color: #016492;
            margin-right: 5px;

 
        }


        label, p {
            
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 10px;
        }

        button {
            background: #434ba1;
            color: white;
            border: none;
            outline: none;
            padding: 10px 20px;
            border-radius: 10px;
        }
    }
</style>