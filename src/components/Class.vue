<template>
    <div>
        <b-container>
            <b-row>
                <b-col class="mt-4">
                    <b-form-select v-model="selected" class="mb-3" @input="getStudents">
                        <option v-for="classe in classes" :key="classe.classeId" :value="classe.classeID">
                            {{ classe.niveau }} {{ classe.numeroClasse}}
                        </option>
                    </b-form-select>
                </b-col>
            </b-row>
            <b-list-group>
                <b-row class="justify-content-center">
                    <b-col v-for="student in getStudentsSelected" :key="student.id" >
                        <b-list-group-item class="student mt-2">{{ student.prenomEleve }} {{ student.nomEleve }}</b-list-group-item>
                    </b-col>
                </b-row>
            </b-list-group>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classes:[],
            students: [],
            studentsClasseSelected: [],
            selected: null,
        };
  },
  mounted() {
    this.$axios.get("https://classorganizerws.azurewebsites.net/api/classes/getclasses")
    .then(response => {
        let test = [];
        let classe = [];
        test.push({classeID:"null", niveau:"Choisir une classe"});
        this._.each(response.data.$values, function(key, value) {
            test.push(key);
        });
        this.classes = test;
    });

    this.$axios.get("https://classorganizerws.azurewebsites.net/api/eleves/geteleves")
    .then(response => {
        let student = [];
        this._.each(response.data.$values, function(key, value) {
            student.push(key);
        });
        this.students = student;
    });
  },
  computed: {
      getClasses() {
          return this.classes;
      },
      getSelected() {
          return this.selected;
      },
      getStudentsSelected() {
          return this.studentsClasseSelected;
      }
  },
  methods: {
        getStudents() {
            this.studentsClasseSelected = [];
            let students = [];
            let selected = this.getSelected;
            console.log(selected);
            this._.each(this.students, function(key, value) {
                if (key.classGUID == selected) {
                    students.push(key);
                }
            });
            this.studentsClasseSelected = students;
            return this.studentsClasseSelected;
        },

  }
}
</script>


<style lang="scss">
@import '../assets/main.scss';

.list-group {
    .student {
        width: 300px;
    }
}
</style>
