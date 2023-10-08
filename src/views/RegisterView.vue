<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <div class="max-w-sm mx-auto md:px-10 p-4 w-full">
      <div>
        <!-- logo -->
        <div class="flex justify-center mb-12">
          <!-- <img
            src="assets/images/logo.png"
            alt=""
            class="w-auto h-16 shrink-0 bg-fuchsia-100 px-3 rounded-2xl p-2.5"
          /> -->
        </div>

        <form @submit.prevent="register" class="space-y-3">
          <input
            class="!w-full h-10 border-gray-400 border-2 rounded-md p-1"
            v-model="name"
            type="text"
            placeholder="Full name"
            required
          />
          <input
            class="!w-full h-10 border-gray-400 border-2 rounded-md p-1"
            v-model="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            class="!w-full h-10 border-gray-400 border-2 rounded-md p-1"
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />

          <a href="forget" class="hidden">
            <div class="text-sm text-right text-gray-400 py-4">Forget password</div>
          </a>

          <button
            type="submit"
            class="font-medium w-full hover:bg-white hover:border-slate-900 hover:border-2 hover:text-slate-900 rounded-lg bg-slate-900 py-1.5 px-4 text-white h-[38px] active:scale-[0.97] transition-all duration-150"
          >
            <span>Get Started</span>
          </button>

          <div class="space-x-2 text-sm text-center text-slate-400 dark:text-white/70">
            <span>I have an account?</span>
            <span>—</span>
            <router-link to="/" class="text-gray-600 hover:text-gray-500">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      // username: '',
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Envoyer les données d'inscription au backend avec Axios
      const userData = {
        // username: this.username,
        name: this.name,
        email: this.email,
        password: this.password
      };
      axios.post("https://pydev-sac.yes.bj/api/register", userData)
        .then(response => {
          // Gérer la réponse du backend ici
          console.log(response.data);
          this.$router.push('/login');
          // Rediriger l'utilisateur vers une autre page ou afficher un message de succès, etc.
        })
        .catch(error => {
          // Gérer les erreurs ici
          alert(error.response.data.message);
        });
    }
  }
};
</script>