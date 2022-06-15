import React from 'react';
import {Link} from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
const Info = () => {
  return (
    <Fade>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center ">

        <div className="info__container  ">
            <h1 className="info_header">Owners</h1>
      <p className="info_body">Owner Portal, Streamline Communication, Share Reports, Files, Online Payments, Distribution (Owner Draws)/ Contribution</p>
    </div>

    <div className="info__container ">
      <h1 className="info_header">Tenants & Leasings</h1>
        <p className="info_body">Tenant Portal, Lease Management, Online Rent Payment, Effective Communication, Property Listing, Applications</p>
    </div>


    <div className="col-span-2  bg-[#F0EBE0] md:p-10 p-6 rounded-full text-center shadow-2xl">
      <h1 className="info_header">Accounting & Reporting</h1>
        <p className="info_body">Robust Accounting, Increased productivity through integrated automation, Real-time insights, Track payments, Comprehensive Reports</p>
    </div>

    <div className="info__container ">
      <h1 className="info_header">Maintenance</h1>
        <p className="info_body">Online & Mobile Maintenance Requests, Recurring maintenance, Maintenance management & communication, Streamlined work orders, Inspections</p>
    </div>
 
    <div className="info__container ">
      <h1 className="info_header">File Storage</h1>
        <p className="info_body">Store property documents, share lease agreements & reports, connect files with accounting, maintenance and more</p>
    </div>
    
  </div>
  </Fade>
  );
};

export default Info;
