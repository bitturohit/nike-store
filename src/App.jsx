import {
  heroapi,
  popularsales,
  toprateslaes,
  sneaker,
  highlight,
  story,
  footerAPI,
} from './data/data';
import Hero from './components/Hero';
import Cart from './components/Cart';
import Sales from './components/Sales';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Stories from './components/Stories';
import FlexContent from './components/FlexContent';

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
