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
  
            I am an experienced professional in business analyst role.
            my interest in Fintech payments solutions is a driving force behind my
            aspiration to advance my career in the UK. I have aquired expertise
            through the MSc Fintech program at the University of Gloucestershire. 
            I believe that the fintech payments is one of the trending subjects, while integrating
            Technology with it allows us to advance in future specially when AI tools
            have become a reliant force to depend on. 
            
          </p>
          <p className='py-2 text-[#0c1142]'>
            My Journey to Programming started back in 2019, as i started to explore
            fintech Payment Providers APIs and their role in the Merchants 
            payment Dashboard. This has brought my interest further to learn 
            front-end applications using HTML, CSS, & Javascript. 

            As I advanced my Career as a business analyst role, I have fully learned,
            implemented CRM application Monday.com in 2020, which not only increased
            my customer support expertise, but also my technical skills in integrating
            tools like Zapier and process automations and backend-technologies. 
            It has lead my interest to
            develop and learn React programming langauge as well as wireframing, and 
            deploying applications. In my spare time, i spend learning technologies
            and tools like Github and backend technologies that are closely involved 
            in the Fintech Field. 
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
