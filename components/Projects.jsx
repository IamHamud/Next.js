import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import paymentsImg from '../public/assets/projects/payments.jpg';
import datascienceImg from '../public/assets/projects/datascience.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        {/* Updated the color here */}
        <p className='text-xl tracking-widest uppercase text-[#2bd4db]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Payments Dashboard'
            backgroundImg={paymentsImg}
            projectUrl='/payments'
            tech='React JS'
          />
          <ProjectItem
            title='Fintech Payments'
            backgroundImg={datascienceImg}
            projectUrl='/datascience'
            tech='Python'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;