import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import DiscoverCourses from './components/DiscoverCourses';
import Categories from './components/Categories';
import ProfessionalGrowth from './components/ProfessionalGrowth';
import CreateManage from './components/CreateManage';
import CtaCreator from './components/CtaCreator';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Partners />
        <DiscoverCourses />
        <Categories />
        <ProfessionalGrowth />
        <CreateManage />
        <CtaCreator />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
