<template>   
    <div id="images-transition" class="h-auto col-12 d-flex d-lg-none justify-content-center align-items-start">           
        <img class="front col-12" v-if="mobileImages[currentImage]" :src="require(`@/assets/${mobileImages[currentImage]}`)" :key="mobileImages[currentImage]" alt="image-banner"/>
        <img class="back col-12 position-absolute" v-if="mobileImages[currentImage + 1]" :src="require(`@/assets/${mobileImages[currentImage + 1]}`)" :key="mobileImages[currentImage + 1]" alt="image-banner"/>               
    </div> 
    <div id="images-transition" class="h-auto col-12 d-none d-lg-flex justify-content-center align-items-start">           
        <img class="front col-12" v-if="desktopImages[currentImage]" :src="require(`@/assets/${desktopImages[currentImage]}`)" :key="desktopImages[currentImage]" alt="image-banner"/>
        <img class="back col-12 position-absolute" v-if="desktopImages[currentImage + 1]" :src="require(`@/assets/${desktopImages[currentImage + 1]}`)" :key="desktopImages[currentImage + 1]" alt="image-banner"/>               
    </div> 
</template>
    
<script> 

export default {
    name: 'ImageTransitionContainer',  
        data() {
            return {
                currentImage: 0,        
                desktopImages: [
                    'transition-desktop-1.webp',
                    'transition-desktop-2.webp',
                    'transition-desktop-3.webp',
                ],
                mobileImages: [
                    'transition-mobile-1.webp',
                    'transition-mobile-2.webp',
                    'transition-mobile-3.webp',
                ],
            }   
        },
    methods: {
        imageTransition() {

            this.currentImage++                   

            if(this.currentImage > 2) {
                this.currentImage = 0
            }            
        }
    },
    mounted() {
        const transitionInterval = setInterval(() => {
            this.imageTransition();
        }, 15000)
    }
}

</script>   
    
<style scoped>   

#desktopImages-transition {
    overflow: hidden;
} 

.front {
    animation: front 10s  ease-in;
    animation-delay: 5s;
    opacity: 1;
    transition: 3s;
}

@keyframes front {

    0% {
        opacity: 1;          
    }

    100% {
        opacity: 0;        
    }

}

.back {
    animation: back 10s  ease-in;
    animation-delay: 5s;
    opacity: 0;
    transition: 3s;
}

@keyframes back {
    0% {
        opacity: 0; 
    }

    100% {
        opacity: 1; 
    }
} 

</style>

