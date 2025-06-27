import React from 'react'
import { motion } from 'framer-motion'

const TransitionWrapper = ({children}) => {
  return (
    <>
          <motion.div
              initial={{ y: 40, opacity: 0}}
                whileInView={{
                duration: 0.9,
                opacity: 1,
                y: 0,
                ease: "easeInOut",
                }}  
                style={{width: '100%'}}          
          >
            {children}
          </motion.div>
    </>
  )
}

export default TransitionWrapper;