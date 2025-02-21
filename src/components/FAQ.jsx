import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ExploreProducts from './ExploreProducts';
import ContactVisitCard from './ContactVisitCard';

const FAQ = () => {
  const faqData = [
    {
        question: 'What services does Enn Engineers provide?',
        answer: 'Enn Engineers offers design, liaisoning, supply, erection & commissioning, manufacturing, and fabrication services for EV infrastructure.'
      },
      {
        question: 'Who are your clients?',
        answer: 'Our clients range from EV charging station companies to fleet operators, logistics services, and individuals seeking innovative EV solutions.'
      },
      {
        question: 'What experience does Enn Engineers have?',
        answer: 'With over six years in the electrical industry, we are a Class “A” contractor recognized in five states for professional and high-standard services.'
      },
      {
        question: 'What is your approach to design?',
        answer: 'We conduct site visits, prepare layouts, develop BOQs, and provide one-stop solutions covering electrical, civil, and mechanical aspects.'
      },
      {
        question: 'Do you handle power sanctions and licenses?',
        answer: 'Yes, we assist with power sanctions, electrical safety licenses, and application submissions, ensuring a seamless process.'
      },
      {
        question: 'What brands are your Clients?',
        answer: 'Our Clients are Volvo, Jio-bp, Statiq, Charge+Zone, Blu-Smart, Charge+Zone, Billione Mobility, and Indus Tower, among others, offering a wide range of products and more to ensure top-quality materials.'
      },
      {
        question: 'What kind of panels do you manufacture?',
        answer: 'We manufacture PCC, MCC, APFC, and PLC panels, providing custom solutions tailored to client needs.'
      },
      {
        question: 'Do you offer fabrication services?',
        answer: 'Yes, we fabricate PNB sheds, canopies, bollards, and charger stands, delivering innovative and budget-friendly solutions.'
      },
      {
        question: 'Where do you operate?',
        answer: 'We operate Pan-India, ensuring timely and reliable service across the country.'
      },
      {
        question: 'Do you support fleet electrification?',
        answer: 'Yes, we support fleet operators by providing EV infrastructure, innovative designs, and efficient project execution.'
      },
      {
        question: 'What makes Enn Engineers different?',
        answer: 'Our experience, dedication, and partnerships with top brands make us a trusted partner in EV infrastructure development.'
      },
      {
        question: 'Can you help with charger installation?',
        answer: 'Yes, we provide end-to-end services, including installation, commissioning, and support for EV chargers.'
      },
      {
        question: 'Do you work with residential projects?',
        answer: 'Absolutely, we design and install EV infrastructure for residential and workplace charging needs.'
      },
      {
        question: 'How do you ensure quality?',
        answer: 'We use verified materials, follow industry standards, and maintain accountability in every project.'
      },
      {
        question: 'Do you handle logistics for EV infrastructure?',
        answer: 'Yes, we support logistics services by providing innovative infrastructure solutions for EV fleets.'
      },
      {
        question: 'What is your commitment to sustainability?',
        answer: 'We prioritize eco-friendly practices and support the transition to sustainable energy solutions in the EV sector.'
      },
      {
        question: 'How do you handle large-scale projects?',
        answer: 'Our team manages large-scale projects with detailed planning, expert execution, and timely delivery.'
      },
      {
        question: 'Can you customize your services?',
        answer: 'Yes, we tailor our services to meet the unique needs of each client and project.'
      },
      {
        question: 'Do you offer post-installation support?',
        answer: 'Yes, we provide maintenance and support services to ensure long-term efficiency and performance.'
      },
      {
        question: 'How can I contact Enn Engineers?',
        answer: 'You can reach us via our website career/enquiry form, email, or WhatsApp for inquiries and support.'
      },
  ];

  const faqRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    faqRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { 
          opacity: 0, 
          scale: 0.7,
          rotationX: -90,
          transformOrigin: 'top center'
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: index * 0.2
        },
        0
      );

      // Hover animation
      el.addEventListener('mouseenter', () => {
        gsap.to(el, { 
          scale: 1.05, 
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          duration: 0.3 
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, { 
          scale: 1, 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          duration: 0.3 
        });
      });
    });
  }, []);

  return (
    <main className="bg-[var(--bg-color)] py-24 px-4 pt-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-20 text-ev-gold">
        Frequently Asked Questions
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              ref={el => faqRefs.current[index] = el}
              className="bg-white border-l-4 border-[var(--third-color)] rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-red-800 mb-4 border-b pb-2">
                {faq.question}
              </h2>
              <p className="text-gray-600 text-medium">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
<ContactVisitCard />

    </main>
  );
};

export default FAQ;