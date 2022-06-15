import React from 'react'
import { Button } from '.';
import { Link } from 'react-router-dom';
import './Header.css';
export default function Header() {
  const user = false;
  return (
    <div className={` header fixed top-0 z-50  w-screen`}>
   
    <div className="header__left">
        <Link className="header__logo" to="/">
            <img src="https://i.ibb.co/pxBfkJH/baroeala-Logo.png" alt="" srcset="" />
        </Link>
        <Link className="header__link" to="/menu">
        Menu
        </Link>   
        <Link className="header__link" to="/">
        Rewards
        </Link>   
        <Link className="header__link" to="/">
        Gift Cards
        </Link>   
         
    </div>
    <div className="header__right">
        {/* <Example/>
        <FindStore/> */}
        {/* USER HERE */}
        {!user?(
            <>
            <Link className="header__link" to="/account/signIn">
                <Button style="signInButton"  to="/account/signIn" type="Sign In" />
            </Link>
            <Link className="header__link" to="/account/create">
               <Button style="signUpButton"  to="/account/create" type="Join Now" />
            </Link>
            </>
        ):(
            {/* <div className="header__logout">
                {menuPage?<LogoutButton />: <Link to='/menu' >Order Now</Link>}
            </div> */}
        )}
    </div>
  
</div>
  )
}
