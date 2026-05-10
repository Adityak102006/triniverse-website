/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Nav from './components/sections/Nav';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Services from './components/sections/Services';
import FeaturedWork from './components/sections/FeaturedWork';
import Reel from './components/sections/Reel';
import About from './components/sections/About';
import Collab from './components/sections/Collab';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <FeaturedWork />
        <Reel />
        <About />
        <Collab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
