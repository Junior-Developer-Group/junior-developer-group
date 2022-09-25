<template>

    <section class="contact__main">
        <section class="contact__header-wrapper">
            <div class="contact__header">
                <div class="image__holder">
                    <img src="../../assets/logo-with-background.png"  class="header__image" alt="Junior Developer Group Logo | A butterfly with a blue and a purple wing">
                </div>

                <div class="header__description">
                <h1 class="description__title">Have a question for us?</h1>

                <p class="description__paragraph">
                    Always humans, never bots. Our admin team is always happy to
                    answer your queries. Please fill out the form and we'll get
                    in touch shortly.
                </p>
                </div>
            </div>
            </section>

            <section class="contact__form-wrapper">
            <form
                class="contact__form"
                action="https://formspree.io/f/mayvnjln"
                method="POST"
            >
                <label class="form__label" for="Name">Your Name:</label>
                <input
                    class="form__input"
                    type="text"
                    name="Name"
                    id="name"
                    aria-required="true"
                    required
                    placeholder="e.g   Sasha Smith (they/them)"
                    autocomplete="name"
                />

                <label class="form__label" for="Email"> Your Email:</label>
                <input
                    class="form__input"
                    type="text"
                    name="Email"
                    id="email"
                    aria-required="true"
                    required
                    placeholder="e.g   sasha.smith@email.com"
                    autocomplete="email"
                />

                <label class="form__label" for="Message">Your Message:</label>
                <textarea
                    class="form__text"
                    name="Message"
                    id="message"
                    aria-required="true"
                    required
                    rows="8"
                    cols="50"
                    placeholder="e.g   Hi! I would like to ask you..."
                ></textarea>

                <button class="form__button" type="submit">Submit</button>
            </form>
            </section>
    </section>
</template>


<script> 
export default {
    name: 'Contact'
}
</script>


<style lang="scss" scoped >
    
.contact__main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 800px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 160px;
}

.contact__header-wrapper,
.contact__form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.contact__header,
.contact__form {
  display: flex;
  flex-direction: column;
}


/*** LEFT COLUMN ***/
.contact__header {
  align-items: center;
}

.header__image {
  height: 210px;
  width: 210px;
}

.header__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description__title {
  text-align: center;
  font-size: 28px;
}

.description__paragraph {
  font-size: 15px;
  padding: 0 3rem;
  text-align: center;
}


/*** RIGHT COLUMN ***/
.contact__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.form__label {
  margin: 15px 0 5px;
  color: var(--purple);
  font-weight: 800;
  font-size: 20px;
  max-width: 200px;
}

.form__input {
  margin-bottom: 8px;
  height: 35px;
}

.form__button {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    padding: 10px 60px;

    background: var(--purple);
    border-radius: 4px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.2em;
    color: #ffffff;
    padding: 10px 40px;
    margin-top: 20px;
    display: flex;
    align-self: center;
    justify-self: center;
    outline: none;
    border: none;
}

@media (max-width: 800px) {

  .contact__main {
    flex-direction: column;
    margin-top: 120px;
    margin-bottom: 80px;
    width: 100%;
  }

  .contact__header-wrapper,
  .contact__form-wrapper {
    width: 80%;
  }

  .description__title {
    font-size: 20px;
  }
  .description__paragraph {
    padding: 0;
  }

  .contact__form {
    margin-top: 40px;
    width: 90%;
  }

}

</style>