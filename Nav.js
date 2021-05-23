import React,{useState,useEffect} from 'react';
import "./Nav.css";
import Logo from './OIP.jfif'; 
import avatar from './avatar.png';

function Nav() {
    const [show,handleShow]= useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY>100){
                handleShow(true);
            }else
            handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo" src={Logo}  alt="netflix logo" />

            <img className="nav_avatar" src={avatar}
            alt="avatar" />
        </div>
    )
}

export default Nav;

