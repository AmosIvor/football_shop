import { Variants } from 'framer-motion'

const backdrop: Variants = {
  initial: {
    opacity: 0
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },

  exit: {
    opacity: 0
  }
}

const modal: Variants = {
  initial: {
    opacity: 0
  },

  visible: {
    transition: {
      ease: 'easeOut',
      duration: 0.3
    },
    opacity: 1
  },

  exit: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.2
    }
  }
}

const VARIANT = {
  backdrop,
  modal
}

export default VARIANT
