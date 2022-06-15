import React from 'react';
import { Link } from 'react-router-dom';
// import './Featured.css';
const Featured = ({title,info,link,path,image,background,color,className,order}) => {
    return (
        <div className='flex gap-20 flex-col lg:flex-row items-center justify-center p-8 px-16 mb-8' style={{ background }}>
          <div className='text-center flex flex-col gap-5 max-w-md' style={{ order, color }}>
            <h1 className="text-lg md:text-4xl font-black mb-5 ">{title}</h1>
            <h4 className="text-md font-medium md:text-xl">{info}</h4>
            <Link to={path} className="inline-block bg-[#1e3932] hover:bg-[#3EB8CE] text-white border-solid border-2 rounded-full px-4 py-2 text-lg font-semibold text-center transition duration-100 mx-auto ">
              {link}
            </Link>
          </div>
          <div className='object-contain max-w-md md:max-w-xl'>
            <img src={image} alt='' />
          </div>
    </div>
    );
};

export default Featured;