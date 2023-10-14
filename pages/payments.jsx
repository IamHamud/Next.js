import Image from 'next/image';
import React from 'react';
import paymentsImg from '../public/assets/projects/payments.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const payments = () => {
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
          <h2 className='py-2'>Payments Dasbhaord</h2>
          <h3>React JS / Express JS / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          React web App: Allows rigorous API testing environment and data collection using Dashboard by sending Post requests to Payment Service Provider without using Postman and Visualize results in real time in
          a.	As a pie chart and table on Local Host as Accepted and declined Payments
          b.	Track the updated Post Request real time in MongoDB Database & Payment service providers Test Payments Sandbox Account
          c.	Allow Ecommerce Merchants to Track their ad’s performance through Post request & view it in Real time.
          
          It offers one time solution for tracking payment metrics in real time [ it provides merchants insights regarding their payment approval and decline rate] 
          	Merchants are also prompted to review their ad campaigns as it allows to send post requests functioning similar to Postman in case of an decrease in acceptance rate up to 50 %
            The Payment test request or Ad request is sent; it comes back with the assistance of seamless API’s offering real time data insights.
            A payment Post Request is sent to Checkout.com backend by using Test Environment of payment service providers using Private Key.
            b.	Once a payment request is processed, the backend receives the data and stores it in a mongo DB database. 
            c.	The response is displayed in API Tester page and a pie chart are displayed showing rate of acceptance and decline of payments. 
            d.	It further allows merchants to monitor effectiveness of their ad campaigns by views tables and pie chart metrics showing the ad click impressions. 


          </p>
          <a
            href='https://github.com/IamHamud/React-Payments-App'
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
                <RiRadioButtonFill className='pr-1' /> Reactjs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ExpressJs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Axios
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> mySQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chartjs2 
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

export default payments;
