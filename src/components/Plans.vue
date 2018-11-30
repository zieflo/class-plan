<template>
    <b-container class="pt-4">
        <b-row>
            <b-col v-for="plan in plans" :key="plan.id">
                <a v-b-modal.modal1 class="btn-a" @click="activeImageUrl = plan.img">
                    <b-card :title="plan.title" :img-src="plan.img" class="d-flex mb-4">
                        <p class="card-text">{{ plan.description }}</p>
                    </b-card>
                </a>
            </b-col>
            <b-modal id="modal1">
                <img :src="activeImageUrl"/>
            </b-modal>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Plans',
    data() {
        return {
            activeImageUrl: null,
            plans: [
                {
                    id: 1,
                    img: '../static/img/plan1.jpg',
                    title: "Plan 1",
                    description: "Plan 1, matière : SVT, bat B 4ième1",
                },
                {
                    id: 2,
                    img: '../static/img/plan2.jpg',
                    title: "Plan 2",
                    description: "Plan 1, matière : Anglais, bat A 4ième2",
                },
                {
                    id: 3,
                    img: '../static/img/plan2.jpg',
                    title: "Plan 3",
                    description: "Plan 2 \n, matière : Anglais, bat A 6ième1",
                },
                {
                    id: 4,
                    img: '../static/img/plan2.jpg',
                    title: "Plan 4",
                    description: "Plan 2 \n, matière : Arts plastiques, bat C 6ième1",
                },
                {
                    id: 5,
                    img: '../static/img/plan1.jpg',
                    title: "Plan 5",
                    description: "Plan 1 \n, matière : Maths, bat D 4ième1",
                },
                {
                    id: 6,
                    img: '../static/img/plan1.jpg',
                    title: "Plan 6",
                    description: "Plan 1 \n, matière : Physique, bat D 4ième2",
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

.btn-a {
    :hover {
        cursor: pointer;
    }
}

.modal-content {
    width: 800px;
    height: 600px;
    margin-left: -150px;
}

.modal-footer {
    display: none;
}
</style>
