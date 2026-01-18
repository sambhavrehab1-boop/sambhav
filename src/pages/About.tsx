import { HeartHandshake, ShieldCheck, Star } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function About() {
    useDocumentTitle("About Us - Leading De-Addiction Center");
    return (
        <div className="animate-in fade-in zoom-in duration-500 bg-orange-50/30 min-h-screen">
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/sativa.png')" }}></div>

                <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
                    <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest border border-orange-200">
                        Our Story & Values
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-serif">About <span className="text-orange-600">Sambhav</span></h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                        "Sambhav" means <span className="italic font-semibold text-gray-800">'Possible'</span>. We believe that recovery is always possible with the right care, faith, and family support.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        {/* Photo Frame */}
                        <div className="relative rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-[6px] border-white z-10">
                            <img
                                src="/rehab-center-director.jpg"
                                alt="Director"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-900/90 to-transparent pt-24 pb-8 px-8 text-white text-center">
                                <p className="font-serif text-2xl font-bold">Mr. Kartik Barthwal</p>
                                <p className="text-orange-200 text-sm tracking-widest uppercase mt-1">Founder & Director</p>
                            </div>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full -z-0 opacity-60 blur-2xl"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-green-50 rounded-full -z-0 opacity-60 blur-2xl"></div>
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
