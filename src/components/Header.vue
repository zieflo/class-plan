<template>
<div>
  <b-navbar class="navbar" toggleable="md">

  <b-navbar-brand href="#" :to="{ name: 'Home' }" class="text-white" >
    <img src="/static/img/logo.png" class="d-inline-block align-center logo">
      Class Organizer
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
          <b-nav-item href="#" :to="{ name: 'Plans' }">
          <div>
            Plans
          </div>
            <img src="/static/img/logo.png" class="logo-hover">
          </b-nav-item>
      <b-nav-item href="#" :to="{ name: 'Class' }">
          <div>
            Classes
          </div>
          <img src="/static/img/logo.png" class="logo-hover">
      </b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <template slot="button-content">
          <em>Profil</em>
        </template>
        <b-dropdown-item href="#">Voir le profil</b-dropdown-item>
        <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</div>
</template>

<script>
import Plans from '../components/Plans'

export default {
  name: 'Header',
  components: {
    Plans,
  }
}
</script>

<style lang="scss">
@import '../assets/main.scss';

  .navbar {
    height: 80px;
    background-color: $light-primary;

    .logo {
      width: 80px;
    }

    .logo-hover {
      width: 30px;
      margin-left: 10px;
      display: none;
    }

    .nav-item {
      width: 100px;
      margin-right: 5px;

      .nav-link {
        color: white;

        &:hover, &.active{
          color: $light-primary;
          border-radius: 25px;
          border: 1px solid $light-primary;
          background-color: white;
        }
      }
    }
  }

</style>
