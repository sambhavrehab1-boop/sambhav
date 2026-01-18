import { CheckCircle2 } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import FadeIn from "../components/FadeIn";

export default function Services() {
    useDocumentTitle("Our Services - Alcohol & Drug Treatment");
    const services = [
        { title: "Alcohol De-Addiction", desc: "Specialized treatment to overcome alcohol dependency safely.", img: "/alcohol-treatment.png" },
        { title: "Drug Rehabilitation", desc: "Expert care for recovery from drug abuse and narcotic substances.", img: "/drug-rehabilitation.png" },
        { title: "Detoxification", desc: "Medical supervision to manage withdrawal symptoms effectively.", img: "/detoxification-care.png" },
        { title: "Counseling & Therapy", desc: "Psychological support to address root causes of addiction.", img: "/counseling-therapy.png" },
        { title: "Family Support", desc: "Guidance for families to help their loved ones recover.", img: "/family-support.png" },
        { title: "Relapse Prevention", desc: "Tools and strategies to maintain long-term sobriety.", img: "/relapse-prevention.png" },
    ];

    return (
        <div className="bg-orange-50/30 min-h-screen">
            <section className="relative bg-orange-900 text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/sativa.png')" }}></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Our Seva (Services)</h1>
                        <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                            Comprehensive, evidence-based care tailored to your unique needs, delivered with traditional Indian compassion.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div
                                className="group relative overflow-hidden rounded-t-[2rem] rounded-b-3xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white h-full border border-orange-100"
                            >
                                <div className="h-72 overflow-hidden relative">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105 scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
                                    <div className="absolute bottom-4 left-6 right-6">
                                        <h3 className="font-bold text-2xl text-white font-serif shadow-black drop-shadow-md">{service.title}</h3>
                                    </div>
                                </div>
                                <div className="p-8 pt-6">
                                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{service.desc}</p>
                                    <div className="flex items-center text-orange-700 font-bold text-sm tracking-wide uppercase group-hover:translate-x-1 transition-transform cursor-pointer">
                                        Learn More <CheckCircle2 className="w-5 h-5 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
