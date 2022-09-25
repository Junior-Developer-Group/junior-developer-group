<template>
    <nav class="navigation">
        <div class="navigation-logo">
            <a href="/">
                <img src="../assets/logo-with-background.png" alt="JDG Logo | A butterfly with a blue and a purple wing">
            </a>
        </div>
        <div class="navigation-links">
            <ul>
                <li> <a href="/about"> About </a>                </li>
                <li> <a href="/developers"> Team </a>      </li>
                <li> <a href="/become-a-member"> Get involved </a>    </li>
                <li> <a href="/contact"> Contact </a>               </li>
                <li> <a href="/blog"> Blog </a>                  </li>
            </ul>
        </div>
        <button
            class="navigation-hamburger"   
            v-show="!showMobileLinks" 
        >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </button>

        <div class="navigation-close" v-show="showMobileLinks" role="button">
            close
        </div>

        <div class="navigation__mobile-links" v-show="showMobileLinks">

            <ul>
                <li> <a href="/about"> About </a>                </li>
                <li> <a href="/developers"> Team </a>      </li>
                <li> <a href="/become-a-member"> Get involved </a>    </li>
                <li> <a href="/contact"> Contact </a>               </li>
                <li> <a href="/blog"> Blog </a>                  </li>
            </ul>
              
        </div>
  </nav>
</template>

<script lang="ts">

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Navigation-Component',
        data() {
            return {
                showMobileLinks: false
            }
        },
    }
</script>


<style lang="scss">
.navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 5;
    padding-top: 15px;
    box-shadow: 2px 5px 4px -2px rgb(0 0 0 / 10%);
}

.navigation-logo {
    margin-left: 20px;

    img {
        width: 80px;
        height: 80px;
    }
}

.navigation-links {
   margin-right: 20px;

   ul {
    display: flex;

    li {
        list-style-type: none;
    }
   }
   a {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #2c3e50;
    padding: 10px;
   }
}

.navigation-hamburger {
    display: none;
}


@media (max-width: 795px) {
    .navigation-links {
        display: none;
    }

    .navigation-hamburger {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 60px;
        height: 60px;
        cursor: pointer;
        margin-right: 20px;
        background: none;
        border: 1px solid #2c3e50;

        .line {
            width: 25px;
            border: 1px solid #2c3e50;
            margin: 3px;
        }
    }

    .navigation__mobile-links.visible {
        background: #2c3e50;
        position: fixed;
        left: 0;
        right: 0;
        top: 100px;
        height: 100vh;

        display: flex!important;
        flex-direction: column;
        align-content: center;
        padding: 40px;

        li {
            list-style-type: none;
            margin: 10px;

            a {
                color: white;
                font-size: 1.2em;
            }
        }


    }

    .navigation-close {
        margin-right: 20px;
        font-size: 1.2em;
        display: flex;
        align-items: center;
        cursor: pointer;

        &::before {
            display: inline-block;
            content: "\00d7";
            font-size: 1.3em;
            margin-right: 5px;
        }
    }
}
</style>