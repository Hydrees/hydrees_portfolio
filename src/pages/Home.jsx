import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundMotion from "../components/BackgroundMotion";

import { useState, useEffect } from "react";


export default function Home() {

    const texts = [
        "Idris Abdulsalam...",
        " A Front-end Developer."


    ];

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);



    return (
        <section className="relative flex flex-col items-center justify-center text-center py- px-4 overflow-hid min-h-screen bg-[#f5f7fa]">
            <BackgroundMotion />
            <motion.h1 className="text-4xl sm:text-6xl font-bold mb-4 relative z-10 text-[#0f172a]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                Hi, I am <span className="text-blue-400">{text}</span>
            </motion.h1>

            <motion.p className="text-[#475569] max-w-xl mb-6 relative z-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
                A result-driven Front-end Developer & Back-end enthusiast building clean,
                modern and impactful web experiences.
            </motion.p>

            <Link
                to="/projects"
                className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg transition relative z-10 text-[#ffffff]"
            >
                View My Projects
            </Link>
        </section>
    );
}