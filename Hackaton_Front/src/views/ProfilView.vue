<template>
    <div class="bg-slate-100  ">
        <div class="  max-w-2xl mx-auto">
            <div class="page__heading py-6 ">

                <h1 class="font-bold text-3xl"> Scientific profile </h1>
            </div>
            <div class="mt-6 mb-20 text-sm font-medium text-gray-600 dark:text-white/80">

                <div
                    class="bg-white border rounded-xl shadow-sm md:py-12 md:px-20 p-6 overflow-hidden dark:border-slate-700 dark:bg-dark2">

                    <div class="space-y-6">

                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Academic education </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your formation"
                                    class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1 ">
                            </div>
                        </div>

                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Expertise </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your expertise"
                                    class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>

                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Scientific Method </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Enter your method"
                                    class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1 ">
                            </div>
                        </div>
                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32  text-right"> Technology and Tools </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Enter your technologie and tools"
                                    class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>
                        <div class="md:flex items-center gap-10">
                            <label class="md:w-32 text-right"> Research Ethics </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your ethic"
                                    class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>
                        <div class="md:flex items-start gap-10">
                            <label class="md:w-32 text-right"> Bio </label>
                            <div class="flex-1 max-md:mt-4">
                                <textarea class="w-full bg-slate-100 h-32 border-gray-400 border-2 rounded-md p-1 " rows="5"
                                    placeholder="Inter your Bio"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-4 mt-16">
                        <button type="submit"
                            class="button lg:px-6 bg-slate-900 rounded-md h-9 text-white hover:bg-transparent hover:text-slate-900 hover:border-slate-900 hover:border-2 max-md:flex-1">
                            Cancel</button>
                        <button type="submit"
                            class="button lg:px-10 bg-primary bg-slate-900 rounded-md h-9  hover:bg-transparent hover:text-slate-900 hover:border-slate-900 hover:border-2 text-white max-md:flex-1">
                            Save <span class="ripple-overlay"></span></button>
                    </div>

                </div>

            </div>

        </div>
     <Slidebar></Slidebar>  
    </div>
    
</template>
<script>
import Slidebar from '../components/slidebar.vue'
export default {
  components: { Slidebar },

}
</script>