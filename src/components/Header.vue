<template>
  <SocialMediaInHeader />
  <header id="header" class="d-flex justify-content-between align-items-center">         
     <router-link to="/"><img class="m-3 mt-0 mb-0 m-lg-5 mt-lg-0 mb-lg-0" src="../assets/logo.webp" alt="logo"></router-link>
      <svg @click="toggleMenu" id="close" v-if="showClose" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg d-lg-none m-3" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg>
      <svg @click="toggleMenu" id="bar" v-if="showBar" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-list d-lg-none m-3" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
      <div id="menu-mobile" v-if="showNav" class="d-flex justify-content-center align-items-center text-center m-lg-5 mt-lg-0 mb-lg-0"> 
         <Nav @toggle-menu="toggleMenu" />                
      </div>
      <div id="menu-desktop" class="d-none d-lg-flex justify-content-center align-items-center text-center m-lg-5 mt-lg-0 mb-lg-0"> 
         <Nav @toggle-menu="toggleMenu" />                
      </div> 
  </header>
</template>

<script>
import SocialMediaInHeader from '@/components/SocialMediaInHeader.vue';
import Nav from '@/components/Nav.vue'; 

export default {
  name: 'Header',     
  components: {
    SocialMediaInHeader,
    Nav, 
  },
  data() {
    return {
      showNav: false,
      showBar: true,
      showClose: false,
      screenWidth: window.innerWidth,
    }   
  },
  computed: {
    screenSizeMessage() {
      return this.screenWidth;
    },
  },
  methods: {
    updateScreenSize() {
      this.screenWidth = window.innerWidth;              
    },
    toggleMenu() {   
         
      if(this.screenWidth <= 991) {
        this.showNav = !this.showNav;
        this.toggleIcon();
        this.emitToggleScroll();
      }   
    },  
    toggleIcon() {
      this.showBar = !this.showBar;
      this.showClose = !this.showClose;
    },
    emitToggleScroll() { 
      this.$emit('toggle-scroll'); 
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenSize);
    this.updateScreenSize(); 
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
}
</script>  

  
<style scoped> 

   
  #header {
    width: 100%;
    background-color: var(--pearl-bush);    
  }

  #header img {
    width: 150px;
    height: auto;
  }  

  @media(max-width: 992px) {
    #header img {
      width: 120px;
      height: auto;
    }  
  }

</style>
  
  