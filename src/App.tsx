import { Phone, MapPin, HeartHandshake } from "lucide-react";
import './index.css'
export default function SambhavLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sambhav Nasha Mukti Center</h1>
          <p className="text-lg md:text-xl mb-6">
            A New Beginning Towards a Healthy & Addiction-Free Life
          </p>
          <p className="mb-8 text-base md:text-lg">
            शराब, नशा और अन्य लतों से मुक्ति के लिए सुरक्षित और भरोसेमंद उपचार
          </p>
          <a
            href="tel:+917467845235"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-100"
          >
            Call Now for Help
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Sambhav</h2>
            <p className="mb-4">
              Sambhav Nasha Mukti Center is dedicated to helping individuals
              overcome addiction and rebuild their lives with dignity and care.
            </p>
            <p>
              Our experienced team provides structured treatment, counseling,
              and continuous support for long-term recovery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <HeartHandshake className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              To guide patients and families towards a drug-free, positive, and
              self-reliant future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Alcohol De-addiction",
              "Drug De-addiction",
              "Counseling & Therapy",
              "24x7 Care & Support",
              "Yoga & Meditation",
              "Aftercare & Follow-up",
            ].map((service) => (
              <div
                key={service}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md"
              >
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">We are here to help you take the first step.</p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span>+917467845235</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Shimla Bypass Road, Near Majestic Honda, Dehradun, Uttarakhand, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Sambhav Nasha Mukti Center. All rights reserved.</p>
      </footer>
    </div>
  );
}
