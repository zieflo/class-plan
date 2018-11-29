<template>
    <b-container class="pt-4">
        <b-row>
            <b-col v-for="plan in plans" :key="plan.id">
                <b-card :title="plan.title" :img-src="plan.img" class="d-flex mb-4">
                    <p class="card-text">{{ plan.description }}</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Plans',
    data() {
        return {
            plans: [
                {
                    id: 1,
                    img: '../static/img/plan1.jpg',
                    title: "Plan 1",
                    description: "Plan 1, matière : SVT, bat B classe 2",
                },
                {
                    id: 2,
                    img: '../static/img/plan2.jpg',
                    title: "Plan 2",
                    description: "Plan 1, matière : Anglais, bat A classe 3",
                },
                {
                    id: 3,
                    img: '../static/img/plan2.jpg',
                    title: "Plan 3",
                    description: "Plan 2 \n, matière : Anglais, bat A classe 3",
                },
                {
                    id: 4,
                    img: '../static/img/plan2.jpg',
                    title: "Plan 4",
                },
                {
                    id: 5,
                    img: '../static/img/plan1.jpg',
                    title: "Plan 5",
                },
                {
                    id: 6,
                    img: '../static/img/plan1.jpg',
                    title: "Plan 6",
                },
            ]
        };
    },
}
</script>

<style lang="scss">
@import '../assets/main.scss';

.card {

    width: 300px;
    height: 350px;

    img {
        width: 300px;
        height: 200px;
        align-content: center;
    }

    .card-body {
        max-height: 30px;
    }
}
</style>
