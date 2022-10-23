<template>
    <section class="our-forest">
      <div class="forest-wrapper green">
        <div class="forest-details">
          <img src="../../assets/images/forest.png" alt="">
          <h2>We planted some trees</h2>
          <p>
            Having a positive impact and making the world a better place is very important to us 🖤
          </p>
        </div>
        <div class="counter">
          <p> Trees planted so far:</p>
          <span id="number">
            86
          </span>
          <img src="../../assets/images/forest.png" alt="">
            <p class="disclaimer"> *Planted trough third party applications</p>
        </div>
      </div>

    </section>
</template>


<script>
export default {
    // eslint-disable-next-line
    name: 'OurForest',
}
</script>


<style lang="scss" scoped>
.our-forest {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    min-height: 550px; 
    max-width: 1200px;

    p.disclaimer {
        text-align: right;
        width: 100%;
        font-size: 10px;
       
    }

    p:not(.disclaimer) {
        max-width: 400px;
        margin: 0 auto;
        font-size: 20px;
    }
}

.forest-wrapper {
    display: flex;
    flex-direction: row;
    padding: 0.8em;
    font-family: 'Heebo', sans-serif;
    font-style: normal;
    font-weight: bold;
    color: #00000099;
    width: 80%;
    min-height: 130px;
}

.green {
    // background: linear-gradient(132.9deg, #63F7A1 1.3%, #27AE60 98.06%), linear-gradient(143.36deg, #D6FF94 3.66%, #3DC24B 103.19%);
    border-radius: 16px;
}

.forest-details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 60%;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    padding: 10px;
    border-right: 2px solid #0b4211;

    img {
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    h2 {
        margin-left: 30px;
    }
}

.counter {
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-left: 20px;
    width: 30%;

    img {
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    span {
        padding: 0.5em;
        margin: 0em 1em;
        width: 90px;
        height: 30px;
        font-size: 25px;
        color: white;
        border-radius: 40px;
        background-color: #0b4211;
        display: inline-block;
    }
}

@media (max-width: 890px) {
    .forest-wrapper {
        flex-direction: column;
        margin-bottom: 90px;
    }

    .forest-details {
        border: none;
        width: 90%;
    }

    .counter {
        flex-direction: column;
        border-top:2px solid #0b4211;
        width: 90%;
        justify-content: center;
        align-items: center;

        p {
            text-align: center!important;
        }
    }
}

</style>