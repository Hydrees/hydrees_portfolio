import { motion } from "framer-motion";
import profileImg from "../assets/idris2.jpg"

export default function About() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git / Github",
        "Node.js (Learning)",
        "Express (Learning)",
    ];
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center px-6 pt-10  min-h-screen  text-gray-300 overflow-hidden bg-[#f5f7fa]">

            {/* background motion */}
            <motion
                className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-800 via-gray-900 to-black opacity-60"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ backgroundSize: "400% 400%", filter: "blur(50px)", }}
            />

            {/* profile picture */}
            <motion.div
                className="w-100 h-100 round overflow-hidden border-4 border-[#e5e7eb] shadow-lg mb-6 md:mb-0 md:mr-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover" />
            </motion.div>

            {/* About text */}
            <motion.div
                className="max-w-xl text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
                <p className="mb-4 text-[#475569]">I am <span className="text-blue-400 font-semibold">IDRIS ABDULSALAM</span>, A passionate <strong>Front-end Developer</strong> currently expanding my knowledge into <strong>Back-end Development</strong>. I love building functional, visually appealing, and user-focused web applications.</p>

                <p className="text-[#475569]">I am constantly learning and experimenting with new technologies to improve performance, maintainability, and design quality.</p>

                {/* skill list */}
                <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">Skills</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skills.map((skill, index) => (
                        <motion.li
                            key={skill}
                            className="bg-gray-800 text-[#ffffff] rounded-lg px-4 py-2 text-sm shadow hover:shadow-blue-500/30 transition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};