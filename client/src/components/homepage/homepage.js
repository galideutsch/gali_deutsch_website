import './Homepage.css';
import {useState} from 'react';
import personal_photo from "../../images/gali_homepage.png";

const Homepage = (props) => {
  const {dictionary} = props;
    return (
      <div className="Homepage">
        {dictionary && (
          <section className="homepage-section">
            <img className="gali_photo" src={personal_photo} alt="Photo of Gali"></img>
            <header>{`${dictionary.gali} ${dictionary.deutsch}`}</header>
          </section>
        )}
      </div>
    );
  }
  
  export default Homepage;
  