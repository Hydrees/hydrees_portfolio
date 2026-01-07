import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative px-6 py-25 text-gray-300 overflow-hidden">
            {/* background motion */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-60"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], }}
                transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    backgroundSize: "400% 400%",
                    filter: "blur(50px)",
                }}
            />

            {/* header */}
            <motion.div className="mb-5">
                <h2
                    className="text-3xl font-bold text-blue-400 text-center"
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >Contact Me</h2>
                <h3 className=" text-[#475569] text-center">Contacts: +2348064354794 || +2348100738854</h3>
                <h3 className="text-[#475569] text-center">Email: idrisbnabdussalam@gmail.com</h3>
            </motion.div>


            {/* contact form */}
            <motion.form
                className="max-w-xl mx-auto bg-gray-900/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-800"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                {/* name filed */}
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white ">Full Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                {/* email field */}
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        placeholder="you@example.com"
                    />
                </div>

                {/* message field */}
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white">Message</label>
                    <textarea
                        rows="5"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Type your message here..."
                    ></textarea>
                </div>

                {/* submit button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg transition font-medium"
                >Send Message</button>
            </motion.form>
        </section>
    )
}