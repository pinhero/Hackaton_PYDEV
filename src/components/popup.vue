
<template>
  <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="popup-container">
      <div class="popup-content"  ref="" >
        <p>Welcome</p>
      </div>
      <button @click="closePopup" class="popup-close-button">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
.popup-container {

}
</style>

