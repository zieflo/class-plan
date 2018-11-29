<template>
    <b-container>
        <div class="row align-items-center">
            <b-jumbotron header="Organisation de salle de classe" class="text-center col mt-5"></b-jumbotron>
        </div>
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

h1 {
    color: white;
    font-size: 6rem;
    text-align: center;
}

.jumbotron {
    background-color: $light-primary;
}

</style>
