<template>
    <div id="app">
        <Header></Header>
        <img src="./assets/img/logo.png">
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
