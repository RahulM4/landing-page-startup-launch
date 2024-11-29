import React from "react";
import svg from "./svg"

const App = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-5">
          <a href="/home">
            <h1 className="text-2xl font-bold">SarvaMoh AI</h1>
          </a>
          <nav>
            <ul className="flex space-x-5">
              <li>
                <a href="/home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/getstarted"
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
     
      {/* Background SVG */}
      <div
        style={{
            backgroundColor: "#707a7c ",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`
        }}
        className="relative"
      >
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Transforming Your Startup Journey
            </h2>
            <p className="text-gray-700 mb-6">
              Empowering businesses with innovative tools to accelerate their growth.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
              Get Early Access
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Why SarvaMoh AI?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold mb-2">Intuitive Design</h4>
                <p className="text-gray-600">
                  Create seamless user experiences with our cutting-edge tools.
                </p>
              </div>
              <div className="p-6 bg-white rounded shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold mb-2">AI-Powered Analytics</h4>
                <p className="text-gray-600">
                  Unlock actionable insights to make data-driven decisions.
                </p>
              </div>
              <div className="p-6 bg-white rounded shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold mb-2">Scalability</h4>
                <p className="text-gray-600">
                  Grow your business with solutions designed to scale effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">About SarvaMoh AI</h3>
            <p className="text-gray-700">
              At SarvaMoh AI, we are committed to fostering innovation and delivering
              solutions that simplify complex processes for startups. Our mission is
              to empower businesses to achieve their goals with cutting-edge
              technology and customer-centric design.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Flexible Pricing Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold mb-2">Basic</h4>
                <p className="text-gray-600 mb-4">$10/month</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Choose Plan
                </button>
              </div>
              <div className="p-6 bg-white rounded shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold mb-2">Pro</h4>
                <p className="text-gray-600 mb-4">$25/month</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Choose Plan
                </button>
              </div>
              <div className="p-6 bg-white rounded shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold mb-2">Enterprise</h4>
                <p className="text-gray-600 mb-4">$50/month</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-blue-600 text-white py-6">
          <div className="container mx-auto text-center">
            <p>© 2024 SarvaMoh AI. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
