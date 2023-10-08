<template>
    <div class="bg-slate-100  ">
         <!-- <Popup ref="popup"></Popup> -->
        <div class="  max-w-2xl mx-auto">
            <div class="page__heading py-6 ">

                <h1 class="font-bold text-3xl"> Create a project</h1>
            </div>
            <div class="mt-6 mb-20 text-sm font-medium text-gray-600 dark:text-white/80">

                <div
                    class="bg-white border rounded-xl shadow-sm md:py-12 md:px-20 p-6 overflow-hidden dark:border-slate-700 dark:bg-dark2">

                    <div class="space-y-6">

                        <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Project Title </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Project title "
                                 name="titre"   class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1 ">
                            </div>
                        </div>

                        <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Introduction </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your introduction"
                                  name="introduction"  class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>

                        <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Research Objectives </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Enter your objectives"
                                  name="objectifs"  class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1 ">
                            </div>
                        </div>
                        <div class="md:flex items-center gap-10">
                            <label class="sm:w-36  text-right"> Methodology </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder=" Your methodologie"
                                   name="methodologie" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>
                        <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Data </label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your data"
                                  name="donnees"  class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                            </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Collaboration</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your collaborations"
                                   name="collaboration" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Expected Results</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your results"
                                   name="resultats_attendus" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Schedule</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your schedule"
                                   name="calendrier" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Funding</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Funding"
                                   name="financement" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> References</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your references"
                                   name="reference" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Ethics and Transparency</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your ethics"
                                   name="ethique_transparence" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Communication and Dissemination</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your methods"
                                   name="communication_dissémination" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Conclusion</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Conclusion"
                                   name="conclusion" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
                          </div>
                        </div>
                         <div class="md:flex items-center gap-10">
                            <label class="sm:w-36 text-right"> Contact Information</label>
                            <div class="flex-1 max-md:mt-4">
                                <input type="text" placeholder="Your contact"
                                   name="coordonnees" class="w-full bg-slate-100 h-10 border-gray-400 border-2 rounded-md p-1">
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
import Popup from '../components/popup.vue'
import Slidebar from '../components/slidebar.vue'
export default {
  components: {
    Popup, Slidebar },
     mounted() {
    this.$refs.popup.openPopup();
  },
}
</script>



