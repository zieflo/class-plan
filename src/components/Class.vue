<template>
    <div>
        <b-container>
            <b-row>
                <b-col class="mt-4">
                    <b-form-select v-model="selected" :options="classes" class="mb-3" />
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-list-group v-for="student in students" :key="student.id">
                    <b-col>
                        <b-list-group-item class="student">{{student.name}}</b-list-group-item>
                    </b-col>
                </b-list-group>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
     data() {
    return {
      classes: [],
      students: [],
    };
  },
  mounted() {
    this.$axios.get("https://classorganizerws.azurewebsites.net/api/enseignants/getenseignants")
    .then(response => {
      this.classes = response.data.$values;
    })
    console.log(this.classes);

    this.$axios.get("https://classorganizerws.azurewebsites.net/api/eleves/geteleves")
    .then(response => {
      this.students = response.data.$values;
    })
    console.log(this.students);
  }
    // data () {
    //     return {
    //         selected: null,
    //         classes: [
    //                 { value: 'null', text: 'Choix de la classe' },
    //                 { value: '6ieme', text: '6ieme 1' },
    //                 { value: '6ieme', text: '6ieme 2' },
    //             ],
    //         students: [
    //             {
    //                 name: 'Bob',
    //             },
    //             {
    //                 name: 'Martin',
    //             },
    //             {
    //                 name: 'John',
    //             }
    //         ]
    //         };
        // }
}
</script>


<style lang="scss">
@import '../assets/main.scss';

.list-group {
    .student {
        width: 100px;
    }
}
</style>
