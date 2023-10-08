<template>
    <div class="  max-w-2xl mx-auto">
        <div class="page__heading py-6 mt-6">

            <h1 class="font-bold text-3xl"> Scientific profile </h1>
        </div>
        <div class="mt-6 mb-20 text-sm font-medium text-gray-600 dark:text-white/80">
            <form @submit.prevent="update" method="#" action="#" class="space-y-3"
                uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">
                <div
                    class="bg-white border rounded-xl shadow-sm md:py-12 md:px-20 p-6 overflow-hidden dark:border-slate-700 dark:bg-dark2">

                    <div class="space-y-6">

                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Academic education </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your formation" v-model="academic"
                                    class="w-full h-10 border-gray-400 border-2 rounded-md p-1 ">
                            </div>
                        </div>

                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Expertise </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your expertise" v-model="expertise"
                                    class="w-full h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>

                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Scientific Method </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Enter your method" v-model="method"
                                    class="w-full h-10 border-gray-400 border-2 rounded-md p-1 ">
                            </div>
                        </div>
                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32  text-right"> Technology and Tools </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Enter your technologie and tools" v-model="technology"
                                    class="w-full h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>
                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Research Ethics </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your ethic" v-model="ethics"
                                    class="w-full h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>
                        <div class="md:flex items-start gap-10">
                            <label class="md:w-32 text-right"> Bio </label>
                            <div class="flex-1 max-md:mt-4">
                                <textarea class="w-full h-32 border-gray-400 border-2 rounded-md p-1 " rows="5" v-model="bio"
                                    placeholder="Inter your Bio"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-4 mt-16">
                        <button type="button"
                            class="button lg:px-6 bg-slate-900 rounded-md h-9 text-white hover:bg-transparent hover:text-slate-900 hover:border-slate-900 hover:border-2 max-md:flex-1">
                            Cancel</button>
                        <button type="submit"
                            class="button lg:px-10 bg-primary bg-slate-900 rounded-md h-9  hover:bg-transparent hover:text-slate-900 hover:border-slate-900 hover:border-2 text-white max-md:flex-1">
                            Save <span class="ripple-overlay"></span></button>
                    </div>

                </div>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            // username: '',
            academic: '',
            expertise: '',
            method: '',
            technology: '',
            ethics: '',
            bio: ''
        };
    },
    methods: {
        update() {
            // Envoyer les données d'inscription au backend avec Axios
            const userData = {
                // username: this.username,
                name: this.name,
                email: this.email,
                password: this.password
            };
            axios.post("https://pydev-sac.yes.bj/api/update-user-information", userData)
                .then(response => {
                    // Gérer la réponse du backend ici
                    console.log(response.data);
                    this.$router.push('/projets');
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