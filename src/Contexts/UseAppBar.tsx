import gsap from "gsap";
import React, { createContext, useContext, useState } from "react";

type AppBarContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleMenu: () => void;
};

const AppBarContext = createContext<AppBarContextType | undefined>(undefined);

export const AppBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handle_cross_icon = () => {
        const gsapTl = gsap.timeline();
        if(!isOpen){
            gsapTl.to(".l1", {
                top : "0rem"
            }, "a1")
            gsapTl.to(".l1", {
                rotate : "45deg",
                duration : 0.3
            }, "a2")
            gsapTl.to(".l2", {
                top : "0rem"
            }, "a1")
            gsapTl.to(".l2", {
                rotate : "-45deg" ,
                duration : 0.3
            }, "a2")
        } else {
            gsapTl.to(".l1", {
                rotate: "0deg",
            }, "a2")
            gsapTl.to(".l1", {
                top: "-0.3rem"
            }, "a1")
            gsapTl.to(".l2", {
                rotate: "0deg",
            }, "a2")
            gsapTl.to(".l2", {
                top: "0.3rem"
            }, "a1")
        }
    }
    
    const handleMenu = () => {
        handle_cross_icon();
        const gsapTl = gsap.timeline();
        gsapTl.to(".menu_options", {
            top: isOpen ? "3.5rem" : 0,
            stagger: isOpen ? -0.1 : 0.1,
            delay: isOpen ? 0 : 0.5,
            ease: isOpen ? "power3.in" : "power4.inOut",
        }, "abc").to(".menu_bg", {
            left: isOpen ? "100%" : "0%",
            duration: 1,
            delay: isOpen ? 0.5 : 0.2,
            ease: "power3.inOut",
        }, "abc");
        setIsOpen(prev => {
            return !prev;
        });
    }

    return (
        <AppBarContext.Provider value={{ isOpen, setIsOpen, handleMenu }}>
            {children}
        </AppBarContext.Provider>
    );
};

export const useAppBar = () => {
    const context = useContext(AppBarContext);
    if (!context) {
        throw new Error("useAppBar must be used within AppBarProvider");
    }
    return context;
};
