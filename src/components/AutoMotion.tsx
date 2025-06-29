import { motion } from "motion/react"
import type { ReactNode } from "react"

const AutoMotion = ({ children } : { children : ReactNode }) => {
    
    return (
        <motion.div
            initial={{}}
            animate={{
                y: [-5, 0, 5, 0],
            }}
            transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity,
                repeatType: "loop",
            }}
        >
            {children}
        </motion.div>
    )
}

export default AutoMotion