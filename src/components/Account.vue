<template>
     <b-container>
        <b-row>
            <b-col class="mt-5">
                <b-jumbotron header="Profil enseignant"></b-jumbotron>
            </b-col>
        </b-row>
        <b-row>
            <b-col >
                <b-card :title="getTeacher">
                    <p>Matière : {{ lesson }}</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            teachers:[],
            teacher: '',
            lesson: '',
        };
    },
    mounted() {
        this.$axios.get("https://classorganizerws.azurewebsites.net/api/enseignants/getEnseignants")
        .then(response => {
            let teacher = [];
            this._.each(response.data.$values, function(key, value) {
                teacher.push(key);
                console.log(key.Matiere);
            });
            this.teachers = teacher;
            this.teacher = this.teachers[0].nomEnseignant + " " + this.teachers[0].prenomEnseignant;
            this.lesson = this.teachers[0].Matiere.$values[0].intituleMatiere;
        });
    },
    computed: {
        getTeacher() {
            return this.teacher;
        }
    },
}
</script>

<style lang="scss">
@import '../assets/main.scss';

h1 {
    color: white;
    font-size: 3rem !important;
    text-align: center;
    margin-top: -25px;
}

.jumbotron {
    background-color: $light-primary;
    height: 50px;
}
</style>
