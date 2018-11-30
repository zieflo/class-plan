<template>
    <b-container class="home">
        <b-row>
            <div class="row">
                <b-jumbotron header="Organisation de salle de classe" class="text-center col mt-5"></b-jumbotron>
            </div>
        </b-row>
        <b-row>
            <b-col>
                <img src="/static/img/logo.png" class="logo">
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
        };
    }
}
</script>

<style lang="scss">
@import '../assets/main.scss';

.home {
    h1 {
        color: white;
        font-size: 4.5rem;
        text-align: center;
    }

    .jumbotron {
        background-color: $light-primary;
        margin-left: 45px;
    }

    .logo {
        width: 20%;
        height: 100%;
        margin-left: 10px;
    }
}
</style>
