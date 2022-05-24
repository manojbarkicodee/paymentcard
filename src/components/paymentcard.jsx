import React from "react";
import Logo from "./Logo";
import Date from "./Date";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Devices from "./Devices";
import styles from "./styling.module.css"


let Paymentcard=(props)=>{
    
return(

  
    
        
            props.userdata.map((el)=>(
                
                <div className={styles.parent} style={{background:el.color}} >
                     <div className={styles.dis}>
                <Date date={el.date}/>
            <Logo  logo1={el.logo}/>
            
        </div>
        <button className={styles.button}>Case Study</button>
        <Heading heading={el.heading}/>
        <Subheading Subheading={el.subheading}/>
        <div className={styles.dis} >
        <Devices devices={el.devices}/>
        <i  className={ `fa-solid fa-arrow-right ${styles.logo2}`} ></i>
        </div>
                </div>
               
        
            ))
            
       
    
)
}

export default Paymentcard