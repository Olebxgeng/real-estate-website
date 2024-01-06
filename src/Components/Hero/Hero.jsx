import HeroImage from "../../Images/hero-image.png"
import "./Hero.css"
import { FaLocationDot } from "react-icons/fa6";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero_wrapper">
        <div className="paddings innerWidth flexCenter hero_container ">
            <div className="flexColStart hero_left">
                <div className="hero_title">
                    <div className="orange_circle"/>
                    <h1>Discover <br/>Most Suitable <br/>Property</h1>
                </div>

                <div className="flexColStart hero_description">
                    <span className="secondaryText">Find a variety of properties that suit you very easily</span>
                    <span className="secondaryText">Forget all the difficulties in finding a residency</span>
                </div>

                <div className="flexCenter search_bar">
                  <span className="location_icon"><FaLocationDot color="var(--blue)" size={25} style={{background: 'none'}} /></span>
                  <input type="text"/>
                  <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                  <div className="flexColStart stat">
                    <span><CountUp start={8800} end={9000} duration={4}/><span>+</span></span>
                    <span className="secondaryText">Premium Products</span>
                  </div>
                  <div className="flexColStart stat">
                    <span><CountUp start={1900} end={2000}/><span>+</span></span>
                    <span className="secondaryText">Happy Customers</span>
                  </div>
                  <div className="flexColStart stat">
                    <span><CountUp end={28} duration={4}/><span>+</span></span>
                    <span className="secondaryText">Award Winnings</span>
                  </div>
                </div>
            </div>

            {/*-----------right--------------*/} 

            <div className="flexCenter hero_right">
                <div className="image_container">
                        <img src={HeroImage} alt="Hero Building" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero