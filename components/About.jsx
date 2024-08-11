import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-white'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          {/* Updated the color here */}
          <p className='uppercase text-xl tracking-widest text-[#2bd4db]'>
            About
          </p>
          <h2 className='py-4 text-[#0c1142]'>Career History</h2>
          <p className='py-2 text-[#0c1142]'>  
I am an experienced Technical Account and Customer Support Specialist with a Master’s degree in Fintech from the
UK. I have practical experience in the fintech payments industry knowledge. My recent work includes freelance
support for merchants onboarding process with the setup of a sandbox test environment & live onboarding steps.
This phase involved obtaining API keys, configuring backend systems with endpoint URLs, and conducting various
test payments to ensure proper functionality and security compliance. The sandbox environment allowed for
rigorous testing of different payment scenarios, including the implementation of 3D Secure, to ensure that all
aspects of the payment process were functioning correctly with Postman.
          </p>
          <p className='py-2 text-[#0c1142]'>
With technical skills, I have implemented different payment methods & worked on enhancing the checkout user
interface (UI) to improve the overall customer experience. This included integrating custom checkout.com frames
and optimizing the UI for better performance and aesthetic alignment with the merchants' branding. I also
provided ongoing technical support and optimization services, ensuring the payment systems remained efficient
and secure.
During Masters in Fintech, I acquired in-depth knowledge of financial markets and the payments industry &
Technical programming Skills in [ Python & React] developed & integrated Fintech Payments solution apps different
payment Methods using API based integrations measuring & enhancing advanced data analytics to monitor and
optimize payment operations, significantly improving transaction success rates and customer satisfaction further
applied in designing and conducting robust testing of various payment methods across multiple platforms during
my dissertation project verifying seamless payment method integration and functionality on test environments
with web app using React programming language. Furthermore I developed a Python-based data science project to
analyze fintech payments, focusing on improving approval rates and minimizing fraud by identifying patterns and
trends in declined transactions, demonstrating results through detailed charts and graphs.
My Prior experience as a business analyst in the Mena region includes accomplishments of building long-term
relationships with clients and customers, providing analytics and technical expertise, and implementing
Monday.com CRM Dashboards. These efforts streamlined workflows, reduced churn rates by 30%, eliminated
bottlenecks, and optimized payment solutions with data-driven insights. I am fluent in Arabic and English. I have
also obtained skills in project management with leading and coordinating project deliverables which contributed to
30% growth by working with cross functional teams
          </p>
          <Link href='/#projects'>
            <a className='py-2 text-[#3898ec] hover:underline'>
              Check out some of my latest projects.
            </a>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
