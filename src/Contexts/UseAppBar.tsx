// context/AppBarContext.tsx
import gsap from "gsap";
import React, { createContext, useContext, useEffect, useState } from "react";

type AppBarContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleMenu: () => void;
};

const AppBarContext = createContext<AppBarContextType | undefined>(undefined);

export const AppBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
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
        console.log('changed----------------------------');
        setIsOpen(prev => {
            console.log('prev : ', prev);
            return !prev;
        });
    }

    useEffect(() => {
        console.log(isOpen, 'isopen changed---');
    }, [ isOpen ]);

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
