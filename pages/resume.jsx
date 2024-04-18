import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Hamud | Resume</title>
        <meta
          name='description'
          content='I’m a back-end web developer specializing in Fintech building
         Payments related applications with Customer Success Experience.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Hamud</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/iamhamud/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/IamHamud'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Fintech <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Business Analyst
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Fintech</p>
            <p className='py-2'>Web Development</p>
            <p>Business Analyst</p>
          </div>
        </div>
        <p>
      As an Experienced business analyst with a strong interest in Fintech payments solution, I am seeking a position to develop my career in Payments Industry. I have graduated MSc Fintech at University of Gloucestershire.
      As a business analyst, I have Achieved imperfective revenue milestone of 1.2 M AED on a span of 2 years by implementing Monday.com CRM on controlling streamlined workflows leading to reducing churn rate by 30% and eliminating bottleneck processes.
      Skilled in computer programming languages [ Python & React].
      Skilled in customer orientation in establishing relationships and ability to take proactive approach in problem solving.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Python 
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>MongoDb
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Go
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Career Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Yoko Group
            </span>
            <span className='px-2'>|</span>Dubai, UAE
          </p>
          <p className='py-1 italic'> Business Analyst (2020 - 2022 Dec)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
        Revenue Efficiency: Achieved an impressive revenue milestone surpassing 1.2M AED over two years. Successfully implemented cost efficiency measures with accurate forecasted margins.
      </li>
      <li>
      CRM integration: Seamlessly integrated Monday.com into the organizations daily operations, track & execute streamlined workflows across key departments: management, accounting, marketing, and operations with set of deadlines, assigned tasks and managed resources.
      </li>
      <li>
        CRM analytics: Leveraged Monday.com for real-time data analysis, & fostered robust customer relationships, regularly collecting feedback, and addressing concerns, leading to increased customer retention and reduced churn rate by 30% eliminating bottlenecks.
      </li>
      <li>
        Customer Onboarding: Implemented a dynamic and a comprehensive customer onboarding system using Monday.com on iPads, capturing the entire customer journey from entry to quotation.
      </li>
      <li>
        Training and feedback: Conducted over 50 training sessions on the efficient use of Monday.com with attendees reporting a 25% increase in platform proficiency post-training while established a feedback loop with internal teams, driving continuous improvement in services based on customer insights.
      </li>
      <li>
        KPI monitoring: Monitored KPI’s and reported on key customer success metrics, including satisfaction scores, product usage rates, and churn, using these insights to further enhance the customer experience.
      </li>
    </ul>
  </div>
        {/* Education */}
      </div>
    </>
  );
};

export default resume;
