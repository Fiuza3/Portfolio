import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useAnimations() {
  const isVisible = ref(false)
  
  const fadeInUp = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay,
        ease: "power2.out"
      }
    )
  }
  
  const fadeInLeft = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        x: -50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        delay,
        ease: "power2.out"
      }
    )
  }
  
  const fadeInRight = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        x: 50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        delay,
        ease: "power2.out"
      }
    )
  }
  
  const scaleIn = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        delay,
        ease: "back.out(1.7)"
      }
    )
  }
  
  const staggerAnimation = (elements, animation = 'fadeInUp', stagger = 0.1) => {
    const animations = {
      fadeInUp: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
      fadeInLeft: { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 } },
      fadeInRight: { from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 } },
      scaleIn: { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } }
    }
    
    const anim = animations[animation]
    
    gsap.fromTo(elements, anim.from, {
      ...anim.to,
      duration: 0.8,
      stagger,
      ease: "power2.out"
    })
  }
  
  const scrollTriggerAnimation = (element, animation = 'fadeInUp') => {
    const animations = {
      fadeInUp: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
      fadeInLeft: { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 } },
      fadeInRight: { from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 } },
      scaleIn: { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } }
    }
    
    const anim = animations[animation]
    
    gsap.fromTo(element, anim.from, {
      ...anim.to,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
  }
  
  const floatingAnimation = (element) => {
    gsap.to(element, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    })
  }
  
  const pulseAnimation = (element) => {
    gsap.to(element, {
      scale: 1.05,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    })
  }
  
  return {
    isVisible,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerAnimation,
    scrollTriggerAnimation,
    floatingAnimation,
    pulseAnimation
  }
}