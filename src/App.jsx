import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Journey from './components/Journey'
import Portfolio from './components/Portfolio'
import Service from './components/Service'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-[#101424] text-gray-300 font-sans animate-fade-in">
          <Navbar />

          {/* Main Content Area */}
          <main className="w-full">
            <Home />
            <About />
            <Journey />
            <Portfolio />
            <Service />
            <Blog />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </LanguageProvider>
  )
}

export default App

