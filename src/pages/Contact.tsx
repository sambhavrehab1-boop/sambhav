import { MapPin, Phone, Clock } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function Contact() {
    useSEO(
        "Contact Us - Best Nasha Mukti Kendra in Dehradun",
        "Contact Sambhav Nasha Mukti Kendra in Dehradun for 24/7 helpline and immediate assistance for alcohol and drug addiction treatment."
    );
    return (
        <div className="animate-in fade-in zoom-in duration-500">
            <section className="bg-stone-50 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif uppercase tracking-tight">Contact Sambhav <span className="text-green-700 block text-3xl md:text-4xl mt-2">Nasha Mukti Kendra</span></h1>
                    <p className="text-xl text-gray-600">
                        We are here to help 24/7. Reach out to the best De-Addiction Center in Dehradun.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
                            <div className="bg-green-100 p-4 rounded-full">
                                <Phone className="w-8 h-8 text-green-700" />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl mb-2">Phone</h2>
                                <p className="text-gray-600 mb-2">Available 24/7 for emergency</p>
                                <a href="tel:+917467845235" className="text-2xl font-bold text-green-700 hover:underline">+91 74678 45235</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
                            <div className="bg-green-100 p-4 rounded-full">
                                <MapPin className="w-8 h-8 text-green-700" />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl mb-2">Location</h2>
                                <p className="text-gray-600 text-lg">
                                    Shimla Bypass Road, Near Majestic Honda,<br />
                                    Dehradun, Uttarakhand, India
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
                            <div className="bg-green-100 p-4 rounded-full">
                                <Clock className="w-8 h-8 text-green-700" />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl mb-2">Visiting Hours</h2>
                                <p className="text-gray-600 text-lg">
                                    Open 24 Hours for Admissions.<br />
                                    Family Visiting: 10:00 AM - 5:00 PM (Sunday)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl">
                        <iframe
                            title="Sambhav Nasha Mukti Kendra Location"
                            src="https://www.google.com/maps?q=Shimla%20Bypass%20Road%20Dehradun&output=embed"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
