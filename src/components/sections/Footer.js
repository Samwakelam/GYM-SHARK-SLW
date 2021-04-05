// Packages
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// Styles
import './Footer.css';
// context
import GenderContext from '../../context/GenderContext';


const Footer = () => {

  const { gender } = useContext(GenderContext);

  return (
    <footer>
      <div>
        <div id='gymshark-about'>
          <h5>Help</h5>
          <ul>
            <li className={`footer-item ${gender}`}>
              <a href='https://uk.gymshark.com/pages/about-us' target='_blank'>About us</a>
            </li>
            <li className={`footer-item ${gender}`}>
              <a href='https://careers.gymshark.com/' target='_blank'>Careers</a>
            </li>
            <li className={`footer-item ${gender}`}>
              <a href='https://central.gymshark.com/' target='_blank'>Gymshark Central</a>
            </li>
            <li className={`footer-item ${gender}`}>
              <a href='https://support.gymshark.com/en-US' target='_blank'>FAQ</a>
            </li>
          </ul>
        </div>

        <div id='website-pages'>
          <h5>Pages</h5>
          <ul>
            <li className={`footer-item ${gender}`}>
              <NavLink to='/' >Home</NavLink>
            </li>
            <li className={`footer-item ${gender}`}>
              <NavLink to='/help' >Help</NavLink>
            </li>
            <li className={`footer-item ${gender}`}>
              <NavLink to='/favourites' >Favourites</NavLink>
            </li>
            <li className={`footer-item ${gender}`}>
              <NavLink to='/exercise' >Exercises</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div id='samantha-wakelam'>
        <img
          alt='samantha wakelam'
          src={`${process.env.PUBLIC_URL}/assets/Logo-2017-v2.jpg`}
        />
        <button className={`${gender}`} ><a target='_blank' href='https://samwakelam.github.io/20_REACT_PORTFOLIO_SLW/#/'>Portfolio</a></button>
        <div>
          <p>
            Graphics on this page have been created, and in some cases hand-drawn by Samantha Wakelam.
          </p>
          <p>
            Webpage designed and coded by Samantha Wakelam on behalf of Gymshark.
          </p>
          <p>
            More from Sam can be found on her portfolio.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;