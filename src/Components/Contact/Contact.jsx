import React from 'react'
import "./Contact.css"
import ContactImage from "../../Images/contact.jpg"
import { MdCall } from "react-icons/md"
import { BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenter } from "react-icons/hi2"


const Contact = () => {
  return (
    <section className="contact_wrapper">
        <div className="paddings innerWidth flexCenter contact_container">
            {/*   LEFT   */}
            <div className="flexColStart contact_left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We are always ready to help provide the best service. We belive a good place to live can make your life better</span>
            
                <div className="flexColStart contact_methods">
                    {/*   FIRST ROW  */}
                    <div className="flexColStart row">
                        <div className="flexCenter method">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>012 345 6789</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>
                </div>
            
            
            </div>

            {/*   RIGHT  */}
            <div className="contact_right">
                <div className="image_container">
                    <img src={ContactImage} alt="Modern Builing" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact