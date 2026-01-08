import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import profileImg from "../assets/idris2.jpg";
import Sapa from "../assets/sapa_app.jpg";
import Tourism from "../assets/tourism.jpg";
import Dailynine from "../assets/daily_nine.jpg";
import Counter from "../assets/counter.jpg";
import Chef from "../assets/chef.jpg";
import vote from "../assets/vote.jpg";
import eto from "../assets/etoAriya.jpg";


export default function Projects() {
    const projects = [
        {
            title: "etoAriya (Event planning platform)",
            description: "A real-world digital event management platform developed as a final project, combining front-end development with backend fundamentals to deliver a live, production-deployed solution for event organizers, attendees and vendors. Built with HTML, Tailwind CSS, JavaScript, React, Node.js, APIs, Database concepts",
            image: eto,
            link: "https://dev.etoariya.com.ng/"
        },
        {
            title: "SAPA APP (fundraising platform)",
            description: "A fundraising web platform developed as a capstone project for frontend mastery, designed to enable users to create, manage, and support fundraising campaings efficiently. Built with HTML, TAILWIND CSS, JavaScript and React",
            image: Sapa,
            link: "https://sapa-app-biwb-git-m-05ddbf-abdulsalam-idris-oladimejis-projects.vercel.app/"
        },
        {
            title: "Tourism platform",
            description: "A tourism web application built in preparation for a final project, emphasizing the accurate translation of figma designs from product designers into responsive and user-friendly interfaces. Built with HTML, TAILWIND CSS, JavaScript, React and Figma",
            image: Tourism,
            link: "https://tourism-gilt-tau.vercel.app/"
        },
        {
            title: "Daily Nine",
            description: "A personal productivity web application created as a solution-driven project to help users plan, prioritize, track and improve their daily productivity habits and routines. Built with HTML, Tailwind CSS, JavaScript and React.",
            image: Dailynine,
            link: "https://daily-nine-ten.vercel.app/"
        },
        {
            title: "Counter App",
            description: "A simple React web application built during the early stages of learning React, demonstrating effective state management using the useState hook. Built with HTML, Tailwind CSS, JavaScript and React.",
            image: Counter,
            link: "https://counter-delta-roan.vercel.app/"
        },
        {
            title: "ChefClaude",
            description: "A recipe-generating web application that enables users to discover meal ideas dynamically, built to practice component-based architecture and conditional rendering in React. Built with HTML, Tailwind CSS, JavaScript and React.",
            image: Chef,
            link: "https://chef-cluade-theta.vercel.app/"
        },
        {
            title: "Vote with Hydrees",
            description: "A JavaScript-based voting web page developed to demonstrate core JavaScript concepts, including DOM manipulation and event handling, prior to transitioning into React development. Built with HTML, Tailwind CSS, JavaScript.",
            image: vote,
            link: "https://hydrees.github.io/voting-html/index.html"
        },
    ];

    return (
        <section
            className="min-h-screen bg-[#f5f7fa] flex flex-col items-center  py-25 px-6">
            {/* animated gradient background */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-60"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], }}
                transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    backgroundSize: "400% 400%",
                    filter: "blur(50px)",
                }} />

            {/* header */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                My Projects
            </motion.h2>

            {/* project grid */}
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link} />
                ))}
            </div>
        </section>
    );
}