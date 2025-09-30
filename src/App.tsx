import BenefitsSection from './components/benefit';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/header';
import LandingPage from './components/Landing-Page';
import HowToPay from './components/process';
import TypesOfPayments from './components/typesofpayments';
import WhyPaySection from './components/whyeducation';

function App() {
  return (
    <div>
      <Header />
      <div id="about">
        <LandingPage />
      </div>
      <div id="how-it-works">
        <HowToPay />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="payment-types">
        <TypesOfPayments />
      </div>
      <div id="why-choose-us">
        <WhyPaySection />
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
