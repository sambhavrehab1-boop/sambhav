import { Outlet, Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (isMenuOpen) setIsMenuOpen(false);
        window.scrollTo(0, 0); // Scroll to top
    }, [location.pathname, isMenuOpen]);

    return (
        <div className="min-h-screen bg-stone-50 font-sans flex flex-col">
            {/* NAVBAR */}
            <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-4">
                        <img
                            src="/sambhav-logo.jpg"
                            alt="Sambhav Rehab Logo"
                            className="h-14 w-auto object-contain rounded-md"
                        />
                        <div className="hidden md:block">
                            <span className="block text-xl font-bold text-green-800 leading-none">SAMBHAV</span>
                            <span className="block text-[10px] text-gray-500 font-bold tracking-widest uppercase mt-0.5">Rehabilitation Center</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-600 font-medium hover:text-green-700 transition">Home</Link>
                        <Link to="/about" className="text-gray-600 font-medium hover:text-green-700 transition">About</Link>
                        <Link to="/services" className="text-gray-600 font-medium hover:text-green-700 transition">Services</Link>
                        <Link to="/life-at-sambhav" className="text-gray-600 font-medium hover:text-green-700 transition">Life at Sambhav</Link>
                        <Link to="/contact" className="text-gray-600 font-medium hover:text-green-700 transition">Contact</Link>
                        <a
                            href="tel:+917467845235"
                            className="group bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-full transition-all shadow-lg hover:shadow-green-200 flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4 group-hover:animate-pulse" />
                            <span>Call Now</span>
                        </a>
                        <a
                            href="https://wa.me/917467845235"
                            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all hover:scale-105"
                            title="Chat on WhatsApp"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 filter brightness-0 invert" />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 p-6 space-y-4">
                        <Link to="/" className="block text-lg font-medium text-gray-800 py-2">Home</Link>
                        <Link to="/about" className="block text-lg font-medium text-gray-800 py-2">About Us</Link>
                        <Link to="/services" className="block text-lg font-medium text-gray-800 py-2">Services</Link>
                        <Link to="/life-at-sambhav" className="block text-lg font-medium text-gray-800 py-2">Life at Sambhav</Link>
                        <Link to="/contact" className="block text-lg font-medium text-gray-800 py-2">Contact</Link>
                        <a href="tel:+917467845235" className="block w-full text-center bg-green-700 text-white font-bold py-3 rounded-xl mt-4">
                            Call +91 74678 45235
                        </a>
                    </div>
                )}
            </nav>

            {/* PAGE CONTENT */}
            <div className="flex-grow">
                <Outlet />
            </div>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-12 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white text-xl font-bold mb-4">Sambhav Rehab</h3>
                        <p className="mb-4 max-w-sm mx-auto md:mx-0">Giving life a second chance through compassionate care and expert medical treatment in Dehradun.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <p>+91 74678 45235</p>
                        <p>Shimla Bypass Rd, Dehradun</p>
                    </div>
                </div>
            </footer>

            {/* STICKY CTA MOBILE (Call Only) */}
            <div className="fixed bottom-6 left-6 z-50 md:hidden">
                <a
                    href="tel:+917467845235"
                    className="bg-green-700 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 transform hover:scale-105 transition"
                >
                    <Phone className="w-5 h-5" /> Call Now
                </a>
            </div>

            {/* GLOBAL FLOATING WHATSAPP (All Screens) */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/917467845235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                    title="Chat on WhatsApp"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 filter brightness-0 invert" />
                </a>
            </div>
            <Analytics />
        </div>
    );
}
