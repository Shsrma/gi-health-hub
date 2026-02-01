import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div className="flex justify-center">
              <img
                src="/profile.jpeg"
                alt="Dr. Harshal Mahesh Goel - Professional Portrait"
                className="max-w-sm rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/doctor-surgery.jpeg"
                alt="Dr. Harshal Mahesh Goel - In Medical Practice"
                className="max-w-sm rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
