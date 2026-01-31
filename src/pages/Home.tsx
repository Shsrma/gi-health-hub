import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import doctorImage from "@/assets/doctor-portrait.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section className="py-12 px-4 md:px-8 flex justify-center">
          <img
            src={doctorImage}
            alt="Doctor Portrait"
            className="max-w-md rounded-lg shadow-lg"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
