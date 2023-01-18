export const navVariants = {
    hidden:{
        // opacity:0,
        y: -72,
        opacity: 0,
        transition:{
            type:"spring",
            stiffness: 300,
            damping: 140,
            
        },
    },
    show:{
        opacity:1,
        y: 20,
        transition:{
            type:"spring",
            stiffness: 80,
            delay: 1,

        },
    },
}

export const staggerContainer =(staggerChildren, delayChildren)=>({
    hidden:{},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        }
    }
});

export const textVarient = (delay) => ({
    hidden: {
      y: 80,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
        delay,
      },
    },
});

export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? '-100vw' : direction === 'right' ? '100vw' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
export const slideInAndFade = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    show: {
      opacity:1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
        stiffness: 80,

      },
    },
  });
export const fade = ( delay, duration) => ({
    hidden: {
     opacity:0
    },
    show: {
      opacity:1,
      transition: {
        // type:'fade',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  export const roll = (direction, delay) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay
      },
    },
  });
  export const footerVariant = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
      },
    },
  };
  