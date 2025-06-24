import { ConfigProvider } from 'antd';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import EquipmentSection from './components/EquipmentSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.scss';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0ea5e9',
          borderRadius: 8,
        },
      }}
    >
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <EquipmentSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
