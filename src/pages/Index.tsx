import { CustomCursor } from "@/components/landing/SharedUI";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Certifications from "@/components/landing/Certifications";
import EthicalSourcing from "@/components/landing/EthicalSourcing";
import HalalIntegrity from "@/components/landing/HalalIntegrity";
import NutritionalMetrics from "@/components/landing/NutritionalMetrics";
import ProcessingLab from "@/components/landing/ProcessingLab";
import ProductRange from "@/components/landing/ProductRange";
import CulinaryImage from "@/components/landing/CulinaryImage";
import ExportCounters from "@/components/landing/ExportCounters";
import Blog from "@/components/landing/Blog";
import LogisticsTech from "@/components/landing/LogisticsTech";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Certifications />
      <EthicalSourcing />
      <HalalIntegrity />
      <NutritionalMetrics />
      <ProcessingLab />
      <ProductRange />
      <CulinaryImage />
      <ExportCounters />
      <Blog />
      <LogisticsTech />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
