import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);   

export const motionDot = () => {
    gsap.to("#Ov", {
        scrollTrigger: {
            trigger: "#motionPath",
            start: "top 50%",
            end: "bottom 60%",
            scrub: 1,
            markers: false,
        },
        motionPath: {
            path: "#motionPath",
            align: "#motionPath",
            alignOrigin: [0.5, 0.5],
        },
        duration: 10,
        ease: "none",
    });
}
