import React from 'react';
import HeroSection from './HeroSection';
import QuoteSection from './QuoteSection';
import InstallationGraph from '../../components/graphs/InstallationGraph';
import AnnualRevenueGraph from '../../components/graphs/AnnualRevenueGraph';
import InfoSection from './InfoSection';
import ExploreProducts from '../../components/ExploreProducts';
import ClientSection from './ClientSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />

      <QuoteSection />

      <InfoSection />

      <section className='bg-[var(--bg-color)] min-h-screen mt-40 my-16 flex items-center justify-center flex-col gap-64'>
        <InstallationGraph />
        <AnnualRevenueGraph />
      </section>
      <ClientSection />

      <ExploreProducts />

    </main>
  );
};

export default HomePage;
