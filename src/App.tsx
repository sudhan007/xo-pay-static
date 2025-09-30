import BenefitsSection from './components/benefit';
import Header from './components/header';
import LandingPage from './components/Landing-Page';
import HowToPay from './components/process';
import TypesOfPayments from './components/typesofpayments';
import WhyPaySection from './components/whyeducation';

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <HowToPay />
      <BenefitsSection />
      <TypesOfPayments />
      <WhyPaySection />
    </div>
  );
}

export default App;
