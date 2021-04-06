// packages
import React, { useEffect, useRef, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
// styles
import './Home.css';
// context
import GenderContext from '../context/GenderContext';
// components
import ExerciseODay from '../components/module/ExerciseODay';


const Home = ({exerciseData}) => {

  // const [scrollPosition, setScrollPosition] = useState(0);
  // console.log('scrollPosition', scrollPosition);

  const scroll = useRef(null);
  const { gender } = useContext(GenderContext);

  // const parallaxProp = {
  //   backgroundPosition: `50% ${scrollPosition}px`,
  // }

  // const handleScroll = (event) => {
  //   if (scroll && scroll.current) {
  //     const client = scroll.current.getBoundingClientRect();
  //     // console.log('client =', client);
  //     // const clientPosition = client.y;
  //     // console.log('clientPosition =', clientPosition);
  //     // setScrollPosition(Math.floor(clientPosition));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, []);

  return (
    <section ref={scroll} id='home-content' >
      <div 
        className='first-img' 
        // style={parallaxProp}
      >

      </div>

      <div id='welcome-titles'>
        <h1><span className={`${gender}`}>Welcome</span> to the Exercise Library!</h1>
        <p className='welcome-text'>
          Explore the app and discover new exercises to try at home or in the gym.
          You can save your favourite exercises from our extensive collection for quick
          access again and again or search for new ones to try out.
        </p>
        <button className={`${gender}`}><NavLink to='/exercise'>Explore Exercises</NavLink></button>
      </div>

      <div 
        id='second-img' 
        // style={parallaxProp}
      >

      </div>

      <div id='of-the-day'>
        <h2>Exercise of the day</h2>
        <ExerciseODay exerciseData={exerciseData} />
      </div>

      <div 
        id='third-img' 
        // style={parallaxProp}
      >

      </div>

      <div id='other-gymshark'>
        <h2>More from gymshark</h2>

        <div className='shop'>
          <img
            alt='shop gymshark online'
            src={`${process.env.PUBLIC_URL}/assets/gymshark2.png`}
          />
          <button className={`${gender}`} >
            <a href='https://uk.gymshark.com/' target='_blank' rel="noreferrer">Shop Gymshark Online</a>
          </button>
        </div>

        <div className='central'>
          <img
            alt='gymshark blog'
            src={`${process.env.PUBLIC_URL}/assets/central-img.png`}
          />
          <button className={`${gender}`} >
            <a href='https://www.central.gymshark.com/' target='_blank' rel="noreferrer" >Gymshark Central</a>
          </button>
        </div>

        <div className='training'>
          <img
            alt='gymshark training app'
            src={`${process.env.PUBLIC_URL}/assets/training-app.png`}
          />
          <button className={`${gender}`} >
            <a href='https://gymshark.onelink.me/iy1s/ExploreIOS' target='_blank' rel="noreferrer" >iOS</a>
          </button>
          <button className={`${gender}`} >
            <a href='https://gymshark.onelink.me/iy1s/ExploreAndroid' target='_blank' rel="noreferrer" >Android</a>
          </button>
        </div>

        <div className='careers'>
          <img
            alt='gymshark careers'
            src={`${process.env.PUBLIC_URL}/assets/careers.png`}
          />
          <button className={`${gender}`} >
            <a href='https://careers.gymshark.com/' target='_blank' rel="noreferrer" >Gymshark Careers</a>
          </button>
        </div>

      </div>

      <div 
        className='first-img' 
        // style={parallaxProp}
      >

      </div>
    </section>
  );
}

export default Home;