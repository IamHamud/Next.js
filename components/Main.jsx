import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-[#0c1142]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-white'>
          </p>
          <h1 className='py-4 text-white'>
            Hello, I am <span className='text-[#3898ec]'> Hamud</span>
          </h1>
          <h2 className='py-2 text-white'>I am a Developer </h2>
          <p className='py-4 text-white sm:max-w-[70%] m-auto'>
          MSc Fintech Graduate and a dedicated Customer Success Specialist, specializing in enhancing payment solutions through proficient programming and seamless API integrations
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 space-x-4'>
            <a
              href='https://www.linkedin.com/in/iamhamud/'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-[#3898ec]'
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href='https://github.com/IamHamud'
              target='_blank'
              rel='noreferrer'
              className='text-white hover:text-[#3898ec]'
            >
              <FaGithub size={30} />
            </a>
            <Link href='/#contact'>
              <a className='text-white hover:text-[#3898ec]'>
                <AiOutlineMail size={30} />
              </a>
            </Link>
            <Link href='/resume'>
              <a className='text-white hover:text-[#3898ec]'>
                <BsFillPersonLinesFill size={30} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
