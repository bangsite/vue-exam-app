<template>
  <div>
    <form class="login">
      <h1>Sign in</h1>
      <label>Email</label>
      <input type="email" required v-model="email" placeholder="Name" />
      <label>Password</label>
      <input
        type="password"
        required
        v-model="password"
        placeholder="Password"
      />
      <hr />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch((error) => console.log(error));
    },
  },
};
</script>
