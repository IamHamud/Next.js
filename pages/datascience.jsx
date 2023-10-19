import Image from 'next/image';
import React from 'react';
import paymentsImg from '../public/assets/projects/datascience.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const datascience = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={paymentsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Payments Data science </h2>
          <h3>Python / Data Analysis / Data Visualization</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Python Data science [ Fintech Payments ]
          Payments Data Science Python: Payment’s data generated and used as CSV file to analyse Merchant payments with
a.	Accepted and declined payments analysis.
b.	Data analysis and regression analysis to investigate reasons for decline. 
c.	Analysis over different types of payment methods used by merchants. 
d.	Data visualization and evaluation to represent actionable nights enhancing effective fraud prevention measures and extract tuning payments to enhance customer experience.

In the ever-evolving landscape of payment solutions in fintech firms,
it is crucial to analyze approval and declined payments to gain valuable insights.
Understanding the key merchant accounts and the factors affecting approval rates is
of utmost importance for optimizing payment processes and minimizing fraud risks.

ProjectObjective: This project focuses on analyzing payment solutions data to identify patterns
and trends related to approval and declined payments. By exploring the data and calculating approval rates,
decline rates, and other relevant metrics, we aim to gain insights into the efficiency and effectiveness of the payment system. 
These insights can guide decision-making and help improve fraud prevention measures, customer experience, and overall payment performance.

          </p>
          <a
            href='https://github.com/IamHamud/FintechPayments'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NumPy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pandas
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Seaborn
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Matplotlib
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Statistics 
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default datascience;
