import React from 'react'
import { Header,Heading,Featured , Info,Footer} from '../components';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import './Home.css';
export default function Home() {
  return (
    <div>
        <Header />
        <div className="homeScreen mt-36">
            <Fade>
            <div className="homeScreen__top bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ">
                <h4 className='max-w-sm lg:max-w-4xl text-md lg:text-2xl font-semibold'> We get it - there’s no such thing as a slow day in property management <Link to='/'>Learn more</Link></h4>
            </div>
            </Fade>
            <Fade>
                <div className="homeScreen__bottom flex-col-reverse lg:flex-row">
                    <div className="homeScreen__bottomLeft justify-center items-center max-w-sm md:max-w-xl">
                        <h4 className="font-black text-xl md:text-4xl text-[#1e3932]">Upgrade to a modern Property Management Software</h4>
                        <p className="text-gray-600 max-w-[350px] text-lg md:text-xl font-semibold">
                        The Starbucks Foundation awarded grants to over 400 nonprofits
                        serving communities of color. Recipients were nominated by
                        Starbucks partners (employees).
                        </p>
                        <button className=''>Learn more</button>
                    </div>
                    <div className="max-w-md md:max-w-xl">
                    <img
                    src="https://i.ibb.co/YpW3qDJ/dashboard-desktop-device-screenshot-hero.png" 
                    className=''
                    alt=""/>
                    </div>
                </div>
            </Fade>
            <Fade>
                <Heading heading="See what Barioeala can do for you" span="For the modern property manager, Why we built Barioeala,How it works"/>
            </Fade> 
            <div className="homeScreen__feature">
                <Fade>
                    <Featured title="You are overloaded with tasks and need time to focus"
                    info="With ManageCasa you can resolve maintenance issues, handle rent payments, update transactions in accounting, view lease applications, from everywhere. Old-school property management tools aren’t built for the way you work. But ManageCasa is."
                    link="Explore Now All Our Features"
                    path="/"
                    image="https://i.ibb.co/Bs2dnMK/webinar-3.gif"
                    background="#f0ebe0"
                    color="#1e3932"
                    className="featured__hoverLight" />
                </Fade>
                <Fade>
                    <Featured title="How ManageCasa is different"
                    info="We actually make rental and community association management easy for you. For real.
                    We help you to become a better Landlord, Rental Property Manager or Community Association Manager.
                    We offer stellar support and access to Property Management experts when you need them."
                    link="Try the all ManageCase Your House"
                    path="/"
                    image="https://i.ibb.co/HDTB7x4/illustration-ftmpm-2x-728x9999.png"
                    order="2"
                    background="#f0ebe0"
                    color="#1e3932"
                    className="featured__hoverLight" />
                </Fade>
                <div>
                <Fade className="" >
                <Heading heading="
                All in one place.
                All in sync. Mobile ready." span="Integrations, communication, tools, and more" />
            </Fade>
            <Fade >
               <Info />
            </Fade>
            </div>
            <Fade>
                <Footer/>
            </Fade>
          
            </div>  
        </div>
        {/* <div className="h-[800px] w-full bg-gradient-to-l from-sky-500 to-indigo-500 hover:bg-gradient-to-r" >
          
        </div> */}
      
    </div>
  )
}
