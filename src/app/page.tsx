import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Introduction from '@/components/Introduction';
import Methodology from '@/components/Methodology';
import Features from '@/components/Features';
import Results from '@/components/Results';
import Recommendations from '@/components/Recommendations';
import AdvocacyAndAuthors from '@/components/AdvocacyAndAuthors';
import Conclusion from '@/components/Conclusion';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <main className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/background.png)' }}>
      <Navbar />
      <Banner />
      <Introduction />
      <AdvocacyAndAuthors />
      <Methodology />
      <Features />
      <Results />
      {/* Wrap Conclusion and Recommendations */}
      <div className="bg-cover bg-top py-24 pt-100 lg:pt-50" style={{ backgroundImage: 'url(/banner3.png)' }}>
        <Conclusion />
        <Recommendations />
      </div>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 SOLACE. All rights reserved.</p>
      </footer>
    </main>
  );
}
