import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Presentations That Speak the CFO & CEO’s Language</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Built by a team of CAs and CFAs who live and breathe finance — we blend strategy, clarity, and visuals into every boardroom-ready deck.
        </p>
        <a
          href="mailto:akku.1291@gmail.com?subject=Sample Deck Request&body=Hi,I'd love to receive a sample deck. My email is: [your email here].Thanks!"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Get a Sample
        </a>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard title="Strategic & Financial Storytelling" />
          <ServiceCard title="Board Meeting Decks" />
          <ServiceCard title="M&A / Investor Presentations" />
          <ServiceCard title="KPI Dashboards & Data Visuals" />
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
        <p className="max-w-2xl mx-auto text-lg">
          We’re a team of CAs & CFAs who live and breathe numbers, finance, and visual storytelling. We don’t just “make slides”—we understand exactly what to say, how to say it, and where to say it on the slide to get your board nodding. You bring the data, we bring the clarity. We skip the fluff. We skip the stock icons. We design with intent.
        </p>
      </section>

      {/* Sample Work Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Sample Slides</h2>
        <p className="mb-6">Coming soon: See examples of real-world decks designed for CFOs and finance leaders.</p>
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          [ Slide Previews Placeholder ]
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">What People Say</h2>
        <p className="max-w-2xl mx-auto text-lg italic mb-4">“Incredible clarity and polish. Took our raw numbers and turned them into a compelling story.”</p>
        <p className="text-sm font-medium">– CFO, UAE-based Aviation Company</p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your Next Deck</h2>
        <p className="mb-6">Drop a message or request a sample. I’ll get back to you personally.</p>
        <form
          action="mailto:akku.1291@gmail.com"
          method="POST"
          encType="text/plain"
          className="max-w-xl mx-auto"
        >
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 mb-4 rounded text-black"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            className="w-full px-4 py-2 mb-4 rounded text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Send
          </button>
        </form>
        <br />
        <a
          href="https://calendly.com/akku-1291/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition mt-4"
        >
          Book a Call
        </a>
        <br />
        <a
          href="https://wa.me/917030623230"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition mt-4"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* New Subpages */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Explore More</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SubPageCard title="About Our Team" link="#about" />
          <SubPageCard title="Design Philosophy" link="#philosophy" />
          <SubPageCard title="Before & After Slides" link="#before-after" />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function SubPageCard({ title, link }) {
  return (
    <a href={link} className="block bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
      <h4 className="text-lg font-medium">{title}</h4>
    </a>
  );
}
