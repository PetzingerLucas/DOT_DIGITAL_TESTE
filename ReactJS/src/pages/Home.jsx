import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutMore from '../components/AboutMore';
import Contact from '../components/Contact';
import Options from '../components/Options';
import OurHistory from '../components/OurHistory';

function Home() {
  return (
    <main>
      <Header />
      <AboutMore />
      <OurHistory />
      <Options />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
