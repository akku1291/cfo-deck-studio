import React from 'react';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 via-teal-50 to-gray-100 text-gray-800">
      <header className="bg-white shadow p-10 text-center">
        <h1 className="text-5xl font-bold text-teal-800">CFO Deck Studio</h1>
        <p className="text-lg mt-3 text-gray-600">
          Executive-grade presentations tailored for impact. Impress investors. Align teams. Win decisions.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://wa.me/917030623230" target="_blank" rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow">
            Chat on WhatsApp
          </a>
          <a href="https://calendly.com/+971-507693230" target="_blank" rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Book a Call
          </a>
        </div>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300x200?text=Investor+Deck" alt="Deck 1" className="rounded mb-2" />
            <p className="font-medium">Investor Pitch - FinTech</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300x200?text=Board+Update" alt="Deck 2" className="rounded mb-2" />
            <p className="font-medium">Board Review - FY24 Strategy</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300x200?text=Budget+Deck" alt="Deck 3" className="rounded mb-2" />
            <p className="font-medium">Annual Budget Presentation</p>
          </div>
        </div>
      </section>

      <section className="p-10 bg-teal-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Testimonials</h2>
        <blockquote className="italic max-w-2xl mx-auto text-lg text-gray-700">
          "Akanksha's decks don’t just look amazing — they win buy-in. Our funding round was a breeze."
        </blockquote>
        <p className="mt-2 font-semibold text-teal-700">— CFO, Tech Startup</p>

        <blockquote className="italic mt-10 max-w-2xl mx-auto text-lg text-gray-700">
          "She turned our data-heavy board update into a clear, confident story. Best money we spent all year."
        </blockquote>
        <p className="mt-2 font-semibold text-teal-700">— Group Finance Director, UAE</p>
      </section>

      <footer className="bg-gray-100 text-center p-6 text-sm text-gray-600">
        © 2025 CFO Deck Studio. Built to impress. <br />
        <a href="https://wa.me/917030623230" className="text-green-700 underline">WhatsApp</a> | 
        <a href="https://calendly.com/+971-507693230" className="text-blue-700 underline ml-1">Calendly</a>
      </footer>
    </div>
  );
}

export default App;
