import React from 'react'
import AboutText from './AboutText'
import EngineerSection from './EngineerSection'
import CompanyGrowthGraph from '../../components/graphs/CompanyGrowthGraph'
import EngineerBusiness from './EngineerBusiness'
import AboutImageSection from './AboutImageSection'
import ExploreProducts from '../../components/ExploreProducts'
import AdminsSection from '../../components/AdminsSection'
import ContactVisitCard from '../../components/ContactVisitCard'

const AboutPage = () => {
  return (
    <main
    className='bg-[var(--bg-color)]  pt-28'
    >
      <AboutText />

      <EngineerSection />

<section
className='flex flex-col justify-center items-center gap-20 w-full py-40 px-10 bg-[var(--bg-color)]'
>
<EngineerBusiness />
<CompanyGrowthGraph />
</section>

      <AboutImageSection />

      <AdminsSection />
      <ContactVisitCard />
    </main>
  )
}

export default AboutPage
