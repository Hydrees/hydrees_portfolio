import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    // const { pathname } = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <motion.nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-sm bg-[#f5f7fa]" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-4">
                <h1 className="text-2xl font-bold text-blue-400">Hydrees</h1>

                <ul className="hidden md:flex items-center space-x-8 text-white">
                    {links.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                // className={`hover:text-blue-400 transition ${pathname === link.path ? "text-blue-400" : "text-white"}`}
                                className="text-[#0f172a] hover:text-blue-400 transition"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* mobile hamburger */}
                <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                    {open ? <x size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* mobile menu */}
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-black/90 backdrop-blur-md text-white">
                    <ul className="flex flex-col space-y-4 p-6">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className="block text-lg hover:text-blue-300 transition">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}