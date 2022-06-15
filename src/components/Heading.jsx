import React from 'react';

const Heading = ({heading,span}) => {
    return (
        <div className="my-14">
            <p className="text-center font-semibold text-[#3EB8CE] text-lg">{span}</p>
        
            <div className='text-center text-xl md:text-5xl  uppercase text-[#1e3932] font-black max-w-md mx-auto md:max-w-6xl'>
                {heading}
            </div>
        </div>
    );
};

export default Heading;