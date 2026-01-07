import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link }) {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between w-full sm:w-80 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            {/* project image */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover rounded-lg mb-4" />
            </div>

            {/* project info */}
            <div className="p-4">
                <h3 className="text-[#0f172a] text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[#475569] mb-4">{description}</p>

                {/* link button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">View Project</a>
            </div>
        </motion.div>
    );
}