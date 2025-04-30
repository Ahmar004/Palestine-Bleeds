import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import EmergencyBanner from './components/EmergencyBanner';
import DonationCard from './components/DonationCard';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

const organizations = [
  {
    name: "Islamic Relief",
    description: "Providing emergency aid, medical supplies, and food to Palestinian families.",
    website: "https://islamic-relief.org/about-us/",
    verificationSources: [
      { name: "Charity Navigator", url: "https://www.charitynavigator.org/ein/954453134" },
      { name: "Lesson Islam", url: "https://lessonislam.org/is-islamic-relief-legit/" },
      { name: "Naijland", url: "https://naijland.com/is-islamic-relief-legit-or-scam/" }
    ],
    donationOptions: [
      {
        name: "International Website",
        url: "https://islamic-relief.org/appeals/palestine-emergency-appeal/"
      },
      {
        name: "Pakistani Website",
        url: "https://islamic-relief.org.pk/palestine-emergency-appeal/"
      }
    ]
  },
  {
    name: "Palestine Children Relief Fund (PCRF)",
    description: "Dedicated to helping injured and sick children in Palestine receive medical care.",
    website: "https://www.pcrf.net/",
    verificationSources: [
      { name: "Charity Navigator", url: "https://www.charitynavigator.org/ein/931057665" },
      { name: "GB Times", url: "https://gbtimes.com/is-palestinian-children%ca%bcs-relief-fund-legit/" },
      { name: "Human Rights Careers", url: "https://www.humanrightscareers.com/issues/charities-helping-civilians-in-palestine/" }
    ],
    donationOptions: [
      {
        name: "Zakat Fund",
        url: "https://pcrf1.app.neoncrm.com/forms/zakat-eligible"
      }
    ]
  },
  {
    name: "International Medical Corps (IMC)",
    description: "Providing critical medical aid and emergency relief to Palestinians in need.",
    website: "https://internationalmedicalcorps.org/",
    verificationSources: [
      { name: "Charity Navigator", url: "https://www.charitynavigator.org/ein/953949646" },
      { name: "Charity Watch", url: "https://www.charitywatch.org/charities/international-medical-corps" },
      { name: "Give.org", url: "https://give.org/charity-reviews/relief-and-development/international-medical-corps-in-los-angeles-ca-453" }
    ],
    donationOptions: [
      {
        name: "Gaza Emergency Relief",
        url: "https://internationalmedicalcorps.org/country/gaza/?form=Gaza2410"
      }
    ]
  }
];

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <EmergencyBanner />
      
      <main className="container mx-auto px-4 py-12">
        <motion.section 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-red-500">
            Urgent: Palestinian Humanitarian Crisis
          </h2>
          
          <Statistics />
        </motion.section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, index) => (
            <DonationCard 
              key={index}
              organization={org}
              delay={index * 0.2}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;