import { Phone, CheckCircle2, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

export default function Home() {
    useDocumentTitle("Best Rehabilitation Centre");
    return (
        <div className="overflow-hidden">
            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden px-6 bg-orange-50/50">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/sativa.png')" }}></div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative z-10 order-2 lg:order-1">
                        <FadeIn delay={0.1}>
                            <div className="inline-block bg-orange-100 text-orange-800 text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide border border-orange-200">
                                #1 Rated in North India
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 font-serif">
                                A New Beginning for <span className="text-orange-600">Your Loved Ones</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
                                At Sambhav, we blend modern medical science with traditional Indian values of care, family, and spiritual healing. Your recovery is our sacred duty.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="tel:+917467845235"
                                    className="inline-flex justify-center items-center gap-2 bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    Divya Sampark (Contact Us)
                                </motion.a>
                                <Link to="/services">
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex justify-center items-center gap-2 bg-white text-gray-800 font-bold px-8 py-4 rounded-full border-2 border-orange-100 hover:border-orange-500 hover:text-orange-600 transition-all cursor-pointer w-full sm:w-auto"
                                    >
                                        Our Seva (Services)
                                    </motion.span>
                                </Link>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <p className="mt-8 text-sm text-gray-600 flex items-center gap-4">
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-5 h-5 text-green-600" /> Government Approved</span>
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-5 h-5 text-green-600" /> Spiritual Healing</span>
                            </p>
                        </FadeIn>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <FadeIn direction="left" delay={0.3}>
                            <div className="relative rounded-t-[10rem] rounded-b-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                                <motion.img
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                    src="/sambhav-rehab-building.jpg"
                                    alt="Sambhav De-addiction Center Setup"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent pointer-events-none"></div>
                            </div>
                        </FadeIn>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl hidden md:block border-l-4 border-orange-500"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-full">
                                    <HeartHandshake className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Trusted by</p>
                                    <p className="text-xl font-bold text-gray-900 font-serif">500+ Families</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT PREVIEW ================= */}
            <section className="py-24 px-6 relative bg-white overflow-hidden">
                {/* Decorative Mandala/Pattern Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="relative flex justify-center">
                        {/* "Arch" Frame Implementation */}
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 border-2 border-orange-200 rounded-t-full rounded-b-3xl translate-x-4 translate-y-4"></div>
                            <FadeIn direction="right">
                                <div className="relative rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
                                    <img
                                        src="/rehab-center-director.jpg"
                                        alt="Director of Sambhav Nasha Mukti Kendra"
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                        <p className="font-serif text-lg font-bold">Mr. Kartik Barthwal</p>
                                        <p className="text-sm text-orange-100 opacity-90">Director & Founder</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                    <div>
                        <FadeIn delay={0.1}>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-0.5 w-12 bg-orange-500"></span>
                                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Our Mission</h2>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                                Bringing Happiness Back to <span className="italic text-orange-600">Indian Families</span>
                            </h3>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                In our culture, family is everything. Addiction doesn't just hurt the individual; it shatters the entire household. At Sambhav, we understand this pain. We are not just a hospital; we are a home where your loved one receives traditional Indian hospitality mixed with modern medical care.
                            </p>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                We treat every patient like our own brother or son, ensuring they return to society with dignity and respect.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <Link
                                to="/about"
                                className="text-orange-700 font-bold hover:text-orange-800 flex items-center gap-2 group text-lg"
                            >
                                Read Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ================= FACILITIES PREVIEW ================= */}
            <section className="py-20 px-6 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <FadeIn>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Safe, secure, and comfortable environment for recovery.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { img: "/nasha-mukti-kendra-dormitory.jpg", title: "Hygienic Living" },
                            { img: "/meditation-session-dehradun.jpg", title: "Holistic Healing" },
                            { img: "/sambhav-signage-exterior.jpg", title: "Peaceful Environment" }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="group relative overflow-hidden rounded-2xl shadow-md h-64">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <p className="text-white font-bold">{item.title}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <FadeIn delay={0.4}>
                            <Link to="/life-at-sambhav">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-white text-green-700 border border-green-200 font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition cursor-pointer"
                                >
                                    See Life at Sambhav Gallery
                                </motion.span>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS SECTION ================= */}
            <section className="py-20 px-6 bg-green-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-12">Stories of Hope</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { text: "My brother’s life changed completely after treatment at Sambhav. The staff is caring and the environment is peaceful.", author: "Family Member", loc: "Dehradun" },
                            { text: "Best nasha mukti kendra in Dehradun. Proper counseling, discipline, and continuous medical support helped me recover.", author: "Recovered Patient", loc: "Haridwar" },
                            { text: "We searched for a reliable center and Sambhav gave us hope. The director personally guides every patient.", author: "Parent", loc: "Rishikesh" }
                        ].map((t, i) => (
                            <FadeIn key={i} delay={i * 0.2}>
                                <div className="bg-green-800/50 backdrop-blur p-8 rounded-2xl border border-green-700 h-full">
                                    <p className="mb-6 italic text-green-100 text-lg">"{t.text}"</p>
                                    <div>
                                        <p className="font-bold">{t.author}</p>
                                        <p className="text-green-300 text-sm">{t.loc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
