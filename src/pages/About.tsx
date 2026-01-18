import { HeartHandshake, ShieldCheck, Star } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function About() {
    useSEO(
        "About Us - Leading De-Addiction Center in Dehradun",
        "Learn about Sambhav Nasha Mukti Kendra's mission and values. We provide compassionate drug and alcohol rehabilitation services in Dehradun with high recovery rates."
    );
    return (
        <div className="animate-in fade-in zoom-in duration-500 bg-orange-50/30 min-h-screen">
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/sativa.webp')" }}></div>

                <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
                    <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest border border-orange-200">
                        Our Story & Values
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-serif">About <span className="text-orange-600">Sambhav</span></h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                        "Sambhav" means <span className="italic font-semibold text-gray-800">'Possible'</span>. We believe that recovery is always possible with the right care, faith, and family support.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div className="grid grid-cols-2 gap-6 relative">
                        {/* Director 1: Kartik Barthwal */}
                        <div className="relative">
                            <div className="relative rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white z-10 transition-transform hover:scale-105 duration-500 aspect-[3/4]">
                                <img
                                    src="/rehab-center-director.webp"
                                    alt="Mr. Kartik Barthwal - Director"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent pt-12 pb-4 px-3 text-white text-center">
                                    <p className="font-serif text-sm md:text-lg font-bold leading-tight">Mr. Kartik Barthwal</p>
                                    <p className="text-orange-200 text-[8px] md:text-[10px] tracking-widest uppercase mt-0.5">Founder & Director</p>
                                </div>
                            </div>
                        </div>

                        {/* Director 2: Shivam Badola */}
                        <div className="relative">
                            <div className="relative rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white z-10 transition-transform hover:scale-105 duration-500 aspect-[3/4]">
                                <img
                                    src="/shivam-badola.webp"
                                    alt="Mr. Shivam Badola - Director"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent pt-12 pb-4 px-3 text-white text-center">
                                    <p className="font-serif text-sm md:text-lg font-bold leading-tight">Mr. Shivam Badola</p>
                                    <p className="text-orange-200 text-[8px] md:text-[10px] tracking-widest uppercase mt-0.5">Founder & Director</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange-100 rounded-full -z-0 opacity-40 blur-3xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-green-50 rounded-full -z-0 opacity-40 blur-3xl"></div>
                    </div>

                    <div className="relative pt-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 font-serif text-gray-900 border-l-4 border-orange-500 pl-6">Our Sacred Mission</h2>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                At Sambhav Nasha Mukti Kendra, we view addiction treatment as a form of <strong>Seva (Service)</strong>. We believe that addiction is a treatable condition, not a moral failing. Our mission is to provide compassionate, scientifically-backed medical treatment combined with holistic therapy.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Situated in the peaceful surroundings of Shimla Bypass Road, Dehradun, our facility offers the perfect environment for healing—away from the triggers and stress of daily life.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="group flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-orange-50 hover:shadow-lg hover:border-orange-200 transition-all">
                                <div className="bg-orange-100 p-4 rounded-full h-fit group-hover:bg-orange-600 transition-colors">
                                    <HeartHandshake className="w-8 h-8 text-orange-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-1 font-serif">Compassionate Care</h3>
                                    <p className="text-gray-600">We treat every patient like our own family member (Parivar), creating bonds that last a lifetime.</p>
                                </div>
                            </div>
                            <div className="group flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-orange-50 hover:shadow-lg hover:border-orange-200 transition-all">
                                <div className="bg-green-100 p-4 rounded-full h-fit group-hover:bg-green-600 transition-colors">
                                    <ShieldCheck className="w-8 h-8 text-green-700 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-1 font-serif">Safe & Secure</h3>
                                    <p className="text-gray-600">24/7 security and strict protocols ensure a safe, drug-free environment for pure healing.</p>
                                </div>
                            </div>
                            <div className="group flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-orange-50 hover:shadow-lg hover:border-orange-200 transition-all">
                                <div className="bg-orange-100 p-4 rounded-full h-fit group-hover:bg-orange-600 transition-colors">
                                    <Star className="w-8 h-8 text-orange-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-1 font-serif">Proven Success</h3>
                                    <p className="text-gray-600">Hundreds of success stories from Dehradun, Haridwar, and Rishikesh testify to our approach.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
