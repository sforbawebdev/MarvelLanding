import * as React from "react";
import { Waypoint } from "react-waypoint";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export default function Reveal({element = "div"}){
    const controls = useAnimation();
    const Component = motion[element];
    return(
        <Component
        initial="hidden"
        animate={controls}

        transition={{ ease: "easeInOut" }}
      >
        <Waypoint onEnter={onEnter} fireOnRapidScroll={false} />
        {children}
      </Component>
    )
}