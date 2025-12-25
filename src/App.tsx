import { Phone, MapPin, HeartHandshake } from "lucide-react";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
export default function SambhavLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* H1 – MOST IMPORTANT FOR SEO */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Nasha Mukti Kendra in Dehradun
          </h1>

          <p className="text-lg md:text-xl mb-4">
            Sambhav Nasha Mukti Kendra – Trusted Drug & Alcohol Rehabilitation Center
            in Dehradun
          </p>

          <p className="mb-8 text-base md:text-lg">
            शराब, नशा और अन्य लतों से मुक्ति के लिए Dehradun का भरोसेमंद नशा मुक्ति केंद्र
          </p>

          <a
            href="tel:+917467845235"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-100"
          >
            Call Now for Immediate Help
          </a>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Sambhav Nasha Mukti Kendra in Dehradun
            </h2>

            <p className="mb-4">
              Sambhav Nasha Mukti Kendra in Dehradun is a professional rehabilitation
              center dedicated to treating drug addiction, alcohol addiction, and
              substance abuse through medical care and counseling.
            </p>

            <p>
              As one of the best nasha mukti kendras in Dehradun, we focus on complete
              recovery by addressing physical, mental, and emotional health in a safe
              and supportive environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <HeartHandshake className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              To help individuals and families overcome addiction and move towards
              a healthy, drug-free, and self-reliant life.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            De-Addiction & Rehabilitation Services in Dehradun
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Alcohol De-Addiction Center in Dehradun",
              "Drug De-Addiction Treatment",
              "Substance Abuse Rehabilitation",
              "24x7 Medical Care & Supervision",
              "Counseling, Therapy & Mental Support",
              "Aftercare & Relapse Prevention Programs",
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose Sambhav Nasha Mukti Kendra in Dehradun
          </h2>

          <p className="text-center mb-8">
            Sambhav Rehabilitation Center is known for ethical treatment,
            confidentiality, and high recovery success rates in Dehradun and nearby
            areas.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
            <li>Experienced doctors and trained therapists</li>
            <li>Safe, peaceful and secure rehabilitation environment</li>
            <li>Personalized treatment & recovery plans</li>
            <li>Family counseling and emotional support</li>
            <li>Affordable and transparent treatment programs</li>
            <li>Support for long-term addiction recovery</li>
          </ul>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">
      Recovery Stories from Dehradun
    </h2>

    <p className="text-center mb-12 max-w-3xl mx-auto">
      Families across Dehradun, Haridwar, and nearby areas trust Sambhav Nasha Mukti Kendra
      for safe, structured, and compassionate addiction treatment.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-gray-50 p-6 rounded-2xl shadow">
        <p className="mb-4">
          “My brother’s life changed completely after treatment at Sambhav Nasha Mukti Kendra.
          The staff is caring and the environment is peaceful.”
        </p>
        <p className="font-semibold">— Family Member, Dehradun</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-2xl shadow">
        <p className="mb-4">
          “Best nasha mukti kendra in Dehradun. Proper counseling, discipline,
          and continuous medical support helped me recover.”
        </p>
        <p className="font-semibold">— Recovered Patient</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-2xl shadow">
        <p className="mb-4">
          “We searched for a reliable alcohol de-addiction center in Dehradun and
          Sambhav gave us hope and results.”
        </p>
        <p className="font-semibold">— Parent</p>
      </div>
    </div>
  </div>
</section>

{/* ================= FAQ SECTION ================= */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">
      Frequently Asked Questions – Nasha Mukti Kendra Dehradun
    </h2>

    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-lg mb-2">
          What is Sambhav Nasha Mukti Kendra?
        </h3>
        <p>
          Sambhav Nasha Mukti Kendra in Dehradun is a professional rehabilitation
          center providing treatment for alcohol addiction, drug addiction,
          and substance abuse with medical care and counseling.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-lg mb-2">
          Which addictions are treated at your center?
        </h3>
        <p>
          We treat alcohol addiction, drug addiction, tobacco dependence,
          and other substance abuse problems with structured recovery programs.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-lg mb-2">
          Is Sambhav Nasha Mukti Kendra located in Dehradun?
        </h3>
        <p>
          Yes, Sambhav Nasha Mukti Kendra is located on Shimla Bypass Road,
          Dehradun, Uttarakhand and serves patients from Dehradun, Haridwar,
          Rishikesh, and nearby areas.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-lg mb-2">
          How long does the treatment take?
        </h3>
        <p>
          Treatment duration depends on the patient’s condition.
          Programs generally range from a few weeks to a few months,
          followed by aftercare and follow-up support.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-lg mb-2">
          How can I contact Sambhav Nasha Mukti Kendra?
        </h3>
        <p>
          You can call us directly at <strong>+91 7467845235</strong> for
          confidential consultation and immediate assistance.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Contact Sambhav Nasha Mukti Kendra
          </h2>

          <p className="mb-6">
            If you or your loved one is struggling with addiction, contact our
            Nasha Mukti Kendra in Dehradun for confidential consultation and admission
            support.
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span className="font-medium">+91 74678 45235</span>
            </div>

            <div className="flex items-center gap-2 text-center">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>
                Shimla Bypass Road, Near Majestic Honda, Dehradun,
                Uttarakhand, India
              </span>
            </div>
          </div>
        </div>
      </section>
    {/* ================= GOOGLE MAPS SECTION ================= */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">
      Our Location – Nasha Mukti Kendra in Dehradun
    </h2>

    <p className="mb-6">
      Sambhav Nasha Mukti Kendra is conveniently located in Dehradun, Uttarakhand,
      easily accessible from nearby areas like Haridwar, Rishikesh, and Roorkee.
    </p>

    <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow">
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
  {/* ================= STICKY CALL BUTTON ================= */}
<a
  href="tel:+917467845235"
  className="fixed bottom-6 left-6 bg-green-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 md:hidden"
>
  <Phone className="w-5 h-5" />
  Call Now
</a>

  {/* ================= WHATSAPP FLOATING BUTTON ================= */}
<a
  href="https://wa.me/917467845235?text=Hello%20I%20need%20help%20regarding%20Nasha%20Mukti%20treatment"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12.04 2C6.58 2 2.12 6.45 2.12 11.9c0 1.99.52 3.93 1.52 5.65L2 22l4.6-1.61a9.86 9.86 0 005.44 1.6c5.46 0 9.92-4.45 9.92-9.9S17.5 2 12.04 2zm5.73 14.25c-.24.67-1.4 1.28-1.92 1.36-.48.07-1.09.1-1.76-.11-.41-.13-.94-.3-1.62-.58-2.85-1.23-4.7-4.1-4.84-4.3-.13-.2-1.16-1.54-1.16-2.94s.73-2.08.99-2.36c.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.4-.06.62.47.24.56.82 1.94.89 2.08.07.15.11.32.02.52-.09.2-.13.32-.26.49-.13.17-.28.38-.4.51-.13.13-.26.27-.11.53.15.26.67 1.1 1.44 1.78.99.88 1.82 1.15 2.08 1.28.26.13.41.11.56-.07.15-.19.65-.76.82-1.02.17-.26.34-.22.57-.13.24.08 1.5.71 1.76.84.26.13.43.19.5.3.06.11.06.64-.18 1.31z" />
  </svg>
  WhatsApp
</a>
</section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} Sambhav Nasha Mukti Kendra, Dehradun.
          All rights reserved.
        </p>
      </footer>
      <Analytics />
    </div>
    
  );
}
