// packages
import React, { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// styles
import './Help.css';
import 'animate.css/animate.min.css';
// context
import MediaContext from '../context/MediaContext';



const Help = () => {

  const { isMobileDevice } = useContext(MediaContext);

  return (
    <section id='help-content' >

      <div
        className='spacer'
        style={{ minHeight: '200px' }}
      >
      </div>

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' animatePreScroll={false}>
        <h2 className='main' >Cool features to look out for</h2>
      </ScrollAnimation>

      <div
        className='spacer'
        style={{ minHeight: '200px' }}
      >
      </div>

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300} animatePreScroll={false}>
        <div className='help-container'>
          <h2>Gender toggle</h2>
          <div>
            <img
              alt='male toggle position'
              src={`${process.env.PUBLIC_URL}/assets/instructions/toggle-male.png`}
              className='instructions-img'
            />
            <img
              alt='female toggle position'
              src={`${process.env.PUBLIC_URL}/assets/instructions/toggle-female.png`}
              className='instructions-img'
            />
          </div>
          <div>
            <p className='explanation'> Swap between the male and female genders with the toggler in the top left corner. </p>
          </div>
        </div>
      </ScrollAnimation>

      <div
        className='spacer'
        style={{ minHeight: '200px' }}
      >
      </div>

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300} animatePreScroll={false}>
        <div className='help-container'>
          <h2>Navigating the site</h2>
          <div>
            <img
              alt='navigation bar'
              src={`${process.env.PUBLIC_URL}/assets/instructions/navigation.png`}
              className='instructions-img'
            />
          </div>
          <div className='explanation centre stack' >
            <p> Use the navigation bar in the top right corner to switch between pages:</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Home</li>
              <li>Exercise</li>
              <li>Favourites</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <div className='stack'>
              <img
                alt='home icon'
                src={`${process.env.PUBLIC_URL}/assets/instructions/home.png`}
                className='instructions-icon'
              />
              <p className='explanation'>Home</p>
            </div>
            <div className='stack'>
              <img
                alt='home icon'
                src={`${process.env.PUBLIC_URL}/assets/instructions/exercise.png`}
                className='instructions-icon'
              />
              <p className='explanation'>Exercise</p>
            </div>
            <div className='stack'>
              <img
                alt='home icon'
                src={`${process.env.PUBLIC_URL}/assets/instructions/favourites.png`}
                className='instructions-icon'
              />
              <p className='explanation' >Favourites</p>
            </div>
            <div className='stack'>
              <img
                alt='home icon'
                src={`${process.env.PUBLIC_URL}/assets/instructions/help.png`}
                className='instructions-icon'
              />
              <p className='explanation'>Help</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div
        className='spacer'
        style={{ minHeight: '200px' }}
      >
      </div>

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300} >
        <div className='help-container'>
          <h2>Preview Cards</h2>
          <div>
            <img
              alt='preview card'
              src={`${process.env.PUBLIC_URL}/assets/instructions/previewcard-plain.png`}
              className='instructions-img'
            />
          </div>

          <div className='explanation centre stack'>
            <p>
              Preview cards give you an insight into each exercise in the Library, displaying:
          </p>
            <ul>
              <li>Exercise image</li>
              <li>Exercise title</li>
              <li>Targeted body areas</li>
            </ul>
            <img
              alt='preview card body areas'
              src={`${process.env.PUBLIC_URL}/assets/instructions/previewcard-areas.png`}
              className='instructions-img three quaters'
            />
            <p>
              Clicking on any of these cards will open a larger more detailed card with
              the instructions on how to complete the activity.
          </p>
            <img
              alt='preview card favourites icon'
              src={`${process.env.PUBLIC_URL}/assets/instructions/previewcard-fave.png`}
              className='instructions-icon'
            />
            <p>
              The heart in the lower right corner of each card shows if you have marked
              the exercise as favourite; a solid heart means it is a favourite and can be found on the
              favourites page. It cannot be selected from the Preview Card.
          </p>
          </div>
        </div>
      </ScrollAnimation>

      <div
        className='spacer'
        style={{ minHeight: '200px' }}
      >
      </div>

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300} >
        <div className='help-container'>
          <h2>Exercise Cards</h2>
          <div>
            <img
              alt='exercise card'
              src={`${process.env.PUBLIC_URL}/assets/instructions/card-closed.png`}
              className='instructions-img'
            />
            <img
              alt='exercise card'
              src={`${process.env.PUBLIC_URL}/assets/instructions/card-open.png`}
              className='instructions-img'
            />
          </div>

          <div className='explanation stack centre'>
            <p>
              Exercise cards give you all the information on a selected exercise, displaying:
          </p>
            <ul>
              <li>Exercise Image</li>
              <li>Exercise title</li>
              <li>Targeted body areas</li>
              <li>Instructions on how to complete the activity</li>
            </ul>
            <p>
              The card will open over the preview cards in view; clicking the overlay outside
              of the card will close it again, returning you to the previous view.
          </p>
            <div>
              <img
                alt='favourited icon'
                src={`${process.env.PUBLIC_URL}/assets/instructions/favourite-false.png`}
                className='instructions-icon'
              />
              <img
                alt='favourited icon'
                src={`${process.env.PUBLIC_URL}/assets/instructions/favourite-true.png`}
                className='instructions-icon'
              />
            </div>
            <p>
              The heart under the main image can be toggled on and off to save the exercise to
              your favourites list displayed on the favourites page.
          </p>
            <p>
              To view the instructions, click the chevron next to the exercise title.
          </p>
          </div>
        </div>
      </ScrollAnimation>

      <div
        className='spacer'
        style={{ minHeight: '200px' }}
      >
      </div>

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300} >
        <div className='help-container'>
          <h2>Exercise of the Day</h2>
          <div>
            <img
              alt='exercise of the day'
              src={`${process.env.PUBLIC_URL}/assets/instructions/x-of-day.png`}
              className={`instructions-img ${ isMobileDevice ? '' : 'twice'}`}
            />
          </div>
          <p className='explanation centre'>
            On the home page find exercise of the day to give you inspiration for today's workout.
            Search the title on the exercise page.
          </p>
        </div>
      </ScrollAnimation>

      <div
        className='spacer'
        style={{ minHeight: '200px' }}
      >
      </div>

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={300} >
        <div className='help-container'>
          <h2>Using the exercise Page</h2>
          <div>
            <img
              alt='arms'
              src={`${process.env.PUBLIC_URL}/assets/strength.png`}
              className={`body-area`}
            />
            <img
              alt='shoulders'
              src={`${process.env.PUBLIC_URL}/assets/shoulder.png`}
              className={`body-area`}
            />
            <img
              alt='back'
              src={`${process.env.PUBLIC_URL}/assets/back.png`}
              className={`body-area`}
            />
            <img
              alt='chest'
              src={`${process.env.PUBLIC_URL}/assets/chest.png`}
              className={`body-area`}
            />
            <img
              alt='core'
              src={`${process.env.PUBLIC_URL}/assets/torso.png`}
              className={`body-area`}
            />
          </div>
          <p className='explanation centre'>
            The first display you are shown is all exercises in the Library. 
            The icons in the menu to the left will navigate you to a page for 
            exercises targeting specific areas of the body. Each body area is 
            a bookmarkable page.
          </p>
          <div>
          <img
              alt='muscle group selector'
              src={`${process.env.PUBLIC_URL}/assets/instructions/filter.png`}
              className='instructions-img'
            />
          </div>
          <p className='explanation centre'>
            The selector to the right will filter these options by muscle groups 
            within exercise page you are currently on. This selector will show you 
            the muscle groups relevant to your current page. 
          </p>
          <div>
          <img
              alt='search exercise'
              src={`${process.env.PUBLIC_URL}/assets/instructions/search.png`}
              className='instructions-img half'
            />
          </div>
          <p className='explanation centre'>
            In the bottom right of your page (at all times) there is a search field. 
            Type the name of an exercise here. 
          </p>
          <div>
          <img
              alt='number of shown exercise'
              src={`${process.env.PUBLIC_URL}/assets/instructions/number-of-x.png`}
              className='instructions-img'
            />
          </div>
          <div className='explanation centre stack' >
          <p>
            In the banner at the top of the page, an indicator will show you how many 
            exercise are shown on your page or in your search or filter selection.
          </p>
          <p>
            This indicator is also shown on the favourites page.
          </p>
          </div>
        </div>

      </ScrollAnimation>
      <div
        className='spacer'
        style={{ minHeight: '400px' }}
      >
      </div>

    </section>
  );
}

export default Help;