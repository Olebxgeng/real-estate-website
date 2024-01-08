import React, { useState } from 'react'
import "./Value.css"
import { 
    Accordion, 
    AccordionItem, 
    AccordionItemButton, 
    AccordionItemHeading, 
    AccordionItemPanel, 
    AccordionItemState 
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from "react-icons/md";
import ValueImage from "../../Images/value.png"
import data from '../../utils/accordion';



const Value = () => {
    
    

  return (
    
    <section className="value_wrapper">
        <div className="paddings innerWidth flexCenter value_container">
            {/*left*/}
                <div className="value_left">
                    <div className="image_container">
                        <img src={ValueImage} alt="Value" />
                    </div>
                </div>

            {/* right */}
                <div className="flexColStart value_right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText'>We are always ready to help by providing the besr services for you <br/>
                            We belive a good place to live can make your life better</span>

                    <Accordion 
                    allowMultipleExpanded={false}
                    preExpanded={[0]} 
                    className='accordian'>
                        {
                            data.map((item, index) => {

                                const [className, setClassName] = useState(null)

                                return (
                                    <AccordionItem className={`accordian_item ${className}`} key={index} uuid={index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordian_button flexCenter'>

                                                <AccordionItemState>
                                                    {({expanded})=> expanded 
                                                    ? setClassName("expanded") 
                                                    : setClassName("collapsed")}
                                                </AccordionItemState>

                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon"><MdOutlineArrowDropDown size={20}/></div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
        </div>
    </section>
  )
}

export default Value