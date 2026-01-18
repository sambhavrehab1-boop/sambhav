import { Calendar, PartyPopper, Users, X, ZoomIn } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";

export default function LifeAtSambhav() {
    useSEO(
        "Life at Sambhav - Recovery Stories & Gallery",
        "Take a look at the life at Sambhav Nasha Mukti Kendra. Explore our gallery of recovery milestones, daily routines, and community celebrations in Dehradun."
    );
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const moments = [
        {
            img: "/recovery-birthday-celebration.webp",
            title: "Celebrating Milestones",
            desc: "Every birthday in recovery is a victory. We celebrate life, joy, and the strength of our residents."
        },
        {
            img: "/recovery-cake-cutting.webp",
            title: "Shared Joy",
            desc: "Recovery is not a lonely journey. At Sambhav, we are a family that celebrates together."
        },
        {
            img: "/recovery-birthday-cake-closeup.webp",
            title: "Small Moments, Big Wins",
            desc: "Cutting a cake might seem simple, but for someone in recovery, it represents a new chapter of dignity."
        },
        {
            img: "/recovery-celebration-moment.webp",
            title: "Building Bonds",
            desc: "Support from peers is crucial. These celebrations foster a sense of belonging and hope."
        },
        {
            img: "/meditation-session-dehradun.webp",
            title: "Morning Discipline",
            desc: "Yoga and meditation sessions to start the day with peace and mental clarity."
        },
        {
            img: "/sambhav-rehab-building.webp",
            title: "Our Home",
            desc: "A safe, secure, and peaceful environment designed for healing and personal growth."
        }
    ];

    return (
        <div className="bg-orange-50/30 min-h-screen">
            {/* HEADER */}
            <section className="relative bg-orange-900 text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/sativa.png')" }}></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Life at <span className="text-orange-300">Sambhav</span></h1>
                        <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
                            Recovery is about more than just medical treatment. It's about finding joy again, building relationships, and celebrating life with our extended family.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* MASONRY GALLERY */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 auto-rows-max">
                    {moments.map((m, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                            <div onClick={() => setSelectedImage(m.img)} className="block w-full h-full relative">
                                <img
                                    src={m.img}
                                    alt={m.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="font-bold text-white text-xl mb-1">{m.title}</h3>
                                    <p className="text-gray-200 text-sm line-clamp-2">{m.desc}</p>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur p-2 rounded-full">
                                        <ZoomIn className="text-white w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* DAILY ROUTINE HIGHLIGHT */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-12 text-gray-900">A Day in Recovery</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FadeIn delay={0.2} className="p-8 bg-stone-50 rounded-3xl hover:shadow-xl transition-shadow border border-stone-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Calendar className="w-8 h-8 text-green-700" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Structure</h3>
                            <p className="text-gray-600">Fixed schedules for waking up, meals, therapy, and sleep reinforce discipline.</p>
                        </FadeIn>
                        <FadeIn delay={0.4} className="p-8 bg-stone-50 rounded-3xl hover:shadow-xl transition-shadow border border-stone-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-green-700" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Community</h3>
                            <p className="text-gray-600">Group therapy and shared activities help rebuild social skills.</p>
                        </FadeIn>
                        <FadeIn delay={0.6} className="p-8 bg-stone-50 rounded-3xl hover:shadow-xl transition-shadow border border-stone-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <PartyPopper className="w-8 h-8 text-green-700" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Celebration</h3>
                            <p className="text-gray-600">We celebrate birthdays and recovery milestones to boost morale.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition">
                            <X className="w-8 h-8" />
                        </button>
                        <m.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full view"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
}
