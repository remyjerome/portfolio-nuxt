<template>
    <div id="home">
        <div id="nav_bar">
            <a class="logo" href="">
                <img src="https://via.placeholder.com/24x32" alt="">
                <img src="https://via.placeholder.com/24x9" alt="">
            </a>
            <nav>
                <nuxt-link to="/">
                    <span class="lnr lnr-home"></span>
                </nuxt-link>
                <nuxt-link to="/about">
                    <span class="lnr lnr-user"></span>
                </nuxt-link>
                <nuxt-link to="/skills">
                    <span class="lnr lnr-cog"></span>
                </nuxt-link>
                <nuxt-link to="/portfolio">
                    <span class="lnr lnr-layers"></span>
                </nuxt-link>
                <nuxt-link to="/contact">
                    <span class="lnr lnr-envelope"></span>
                </nuxt-link>
            </nav>
            <ul>
                <li><a href="https://twitter.com/JeznachJacek" target="_blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://pl.linkedin.com/pub/jacek-jeznach/40/9b6/a9" target="_blank"><i
                        class="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/pages/JJ-Front-End-Web-Developer/1065969103428564"
                       target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://jacekjeznach.com/feed/" target="_blank"><i class="fa fa-rss"></i></a></li>
            </ul>
        </div>
        <div>
            <nuxt/>
        </div>
    </div>
</template>
<script>
  export default {
    components: {}
  }
</script>
<style lang="scss">
</style>

