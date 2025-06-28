import { motion } from "motion/react";
import type React from "react";

interface ButtonInterface {
    onClick?: () => void;
    variant: 'Filled' | 'Empty';
    children?: React.ReactNode;
    className?: String;
}


const Button = ({ onClick, variant, children, className } : ButtonInterface) => {
    return (
        <motion.div 
            whileHover={{
                scale: 1.03,
                // boxShadow: '0px 1px 2px #D1D5DB'
            }}
            whileTap={{
                scale: 0.96
            }}
            style={{ fontSize: 'f2, sans' }} 
            onClick={onClick} 
            className={`h-[55px] min-w-[80px] cursor-pointer w-full font-bold whitespace-nowrap text-[15px] py-[12px] px-[30px] rounded-[8px] text-black flex justify-center items-center ${ variant === 'Filled' ? 'bg-[#FF7E3E]': 'bg-white'} ${className} `} 
        >
            { children }
        </motion.div>
    )
}

export default Button