<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name:'home'}">Conduit</router-link>

      <ul class="navbar-nav" v-if="!isAuthenticated">
        <li class="nav-item active">
          <router-link class="nav-link" active-class="active" exact:to="{name:'home'}">
            Home
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" active-class="active" exact:to="{name:'login'}">
            Sign in
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" active-class="active" exact:to="{name:'register'}">
            Sign up
          </router-link>
        </li>

      </ul><!--/login -->
      <ul class="navbar-nav" v-else>
        <li class="nav-item active">
          <router-link class="nav-link" active-class="active" exact:to="{name:'home'}">
            Home
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" active-class="active" exact:to="{name:'article-edit'}">
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" active-class="active" exact:to="{name:'settings'}">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" active-class="active"
                       exact:to="{name:'profile',params:{username:currentUser.username}">
            {{currentUser.username}}
          </router-link>
        </li>

      </ul>
    </div>


  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'RwvHeader',
    computed: {
      ...mapGetters(['currentUser', 'isAuthenticated']),
    },
  };
</script>

<style scoped>

</style>
