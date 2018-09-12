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
                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i
                        class="fab fa-linkedin"></i></a></li>
                <li><a href="#"
                       target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i class="fa fa-rss"></i></a></li>
            </ul>
        </div>
        <div>
            <nuxt/>
        </div>
    <ParticlesJS/>
    </div>
</template>
<script>
import ParticlesJS from '../components/ParticlesJS'
export default {
  name:'default',
  components: {
    ParticlesJS
  }
}
</script>
<style lang="scss">
</style>

