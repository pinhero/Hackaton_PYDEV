<template>
  <!-- <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ " " }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div> -->

      <div class="flex flex-col h-screen justify-center items-center">


          <div class="max-w-sm mx-auto md:px-10 p-4 w-full">


              <div>

                  <!-- logo -->
                  <div class="flex justify-center mb-12"
                      uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">
                      <img src="assets/images/logo.png" alt=""
                          class="w-auto h-16 shrink-0 bg-fuchsia-100 px-3 rounded-2xl p-2.5">
                  </div>


                  <form method="#" action="#" class="space-y-3"
                      uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">

                      <input class="!w-full h-10 border-gray-400 border-2 rounded-md p-1" id="email" name="email" type="email"
                          autofocus="" placeholder="Email" required="">
                      <input class="!w-full h-10 border-gray-400 border-2 rounded-md p-1" id="password" name="password" type="password"
                          autofocus="" placeholder="Password" required="">

                      <a href="#" class="hidden">
                          <div class="text-sm text-right text-gray-400 py-4"> Forget password </div>
                      </a>

                      <button type="submit"
                          class="font-medium w-full  hover:bg-white hover:border-slate-900 hover:border-2 hover:text-slate-900 rounded-lg bg-slate-900 py-1.5 px-4 text-white h-[38px] active:scale-[0.97] transition-all duration-150">
                          <span>Sign in</span> </button>
                      <button type="submit"
                          class="font-medium   hover:bg-white hover:border-blue-900 hover:border-2 hover:text-blue-900  w-full rounded-lg bg-blue-900 py-1.5 px-4 text-white h-[38px] active:scale-[0.97] transition-all duration-150">
                          <span>Sign in with ORCM</span> </button>

                      <div class="flex gap-3 justify-center text-2xl py-5 text-slate-500">

                          <a href="#"> <ion-icon name="logo-facebook"></ion-icon> </a>
                          <a href="#"> <ion-icon name="logo-google"></ion-icon> </a>
                          <a href="#"> <ion-icon name="logo-apple"></ion-icon> </a>

                      </div>

                      <div class="space-x-2 text-sm text-center text-slate-400 dark:text-white/70">
                          <span> No account? </span>
                          <span>—</span>
                          <a href="form-register.html" class="text-gray-600 hover:text-gray-500">Join now</a>
                      </div>
                      <p class="text-center"><a href="form-forgot.html"
                              class="text-gray-600 text-sm text-center  hover:text-gray-500">Forgot Password
                              ?</a>
                      </p>
                  </form>



              </div>
          </div>
      </div>
</template>
