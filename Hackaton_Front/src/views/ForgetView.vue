<template>
    <div class="flex flex-col h-screen justify-center items-center">


        <div class="max-w-sm mx-auto md:px-10 p-4 w-full">


            <div>

                <!-- logo -->
                <div class="flex justify-center mb-12"
                    uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">
                    <img src="assets/images/logo.png" alt=""
                        class="w-auto h-16 shrink-0 bg-fuchsia-100 px-3 rounded-2xl p-2.5">
                </div>


                <form method="#" action="#" class="space-y-3">

                    <input class="!w-full h-10 border-gray-400 border-2 rounded-md p-1 bg-slate-100 " id="email"
                        name="email" type="email" autofocus="" placeholder="Enter your email" required="">


                    <a href="#" class="hidden">
                        <div class="text-sm text-right text-gray-400 py-4"> Forget password </div>
                    </a>

                    <button type="submit"
                        class="font-medium w-full hover:bg-white hover:border-slate-900 hover:border-2 hover:text-slate-900 rounded-lg bg-slate-900 py-1.5 px-4 text-white h-[38px] active:scale-[0.97] transition-all duration-150">
                        <span>Send reset link</span> </button>

                    <div class="flex gap-3 justify-center text-2xl py-5 text-slate-500">

                        <a href="#"> <ion-icon name="logo-facebook"></ion-icon> </a>
                        <a href="#"> <ion-icon name="logo-google"></ion-icon> </a>
                        <a href="#"> <ion-icon name="logo-apple"></ion-icon> </a>

                    </div>

                    <div class="space-x-2 text-sm text-center text-slate-400 dark:text-white/70">
                        <span> Back to sign in </span>
                        <span>—</span>
                        <a href="register" class="text-gray-600  hover:text-gray-500">Join now</a>
                    </div>

                </form>


            </div>
        </div>

    </div>
</template>
<script>
export default {

}
</script>