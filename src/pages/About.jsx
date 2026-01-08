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
        <section className="bg-[#f5f7fa] md:bg-transparent  relative flex flex-col md:flex-row items-center justify-center px-6 pt-10  min-h-screen  text-gray-300 overflow-hidden  ">

            {/* background motion */}
            {/* <motion
                className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-800 via-gray-900 to-black opacity-60"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ backgroundSize: "400% 400%", filter: "blur(50px)", }}
            /> */}

            {/* profile picture */}
            <motion.div
                className="flex items-center justify-center w-100 h-100 round overflow-hidden border-4 border-[#e5e7eb] shadow-lg mb-6 md:mb-0 md:mr-10 "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={profileImg}
                    alt="Profile"
                    className="flex w-80 h-80 md:w-full md:h-full object-cover border-rounded rounded-full " />
            </motion.div>

            {/* About text */}
            <motion.div
                className="max-w-xl text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
                <p className="mb-4 text-[#1e2a3a]">I am <span className="text-blue-400 font-semibold">ABDULSALAM IDRIS</span>, A <strong>Front-end Developer</strong> who builds modern, responsive, and functional web applications.</p>

                <p className="text-[#1e2a3a]">I dont just design interfaces, I focus on usability, performance and clean implementation. I am currently growing into <strong>Back-end Development</strong> to become a well-rounded full-stack developer and deliver more complete solutions.</p>

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