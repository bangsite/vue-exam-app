<template>
  <div>
    <h4>Register</h4>
    <form>
      <label for="name">Name</label>
      <div>
        <input type="text" id="name" v-model="name" required autofocus />
      </div>
      <label for="email">E-Mail Address</label>
      <div>
        <input type="email" id="email" v-model="name" required />
      </div>
      <label for="email">Password</label>
      <div>
        <input type="password" id="password" v-model="password" required />
      </div>
      <label for="email">Confirm Password</label>
      <div>
        <input
          type="password-confirm"
          id="password"
          v-model="password_confirmation"
          required
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    register: function() {
      let data = -{
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register,data")
        .dispatch("register", data)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
