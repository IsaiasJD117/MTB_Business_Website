import './App.css'
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import { useEffect, useState } from 'react';

const App = () => {

  // State to store the current window width
  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
      <ChakraProvider>
        <main>
          <VStack>
            <Header />
            <LandingSection />
            <GallerySection />
            <Services/>
            <ContactUs />
            <Footer />
          </VStack>
        </main>
      </ChakraProvider>
  );
}

export default App;
