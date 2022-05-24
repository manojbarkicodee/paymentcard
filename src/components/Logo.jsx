import React from "react"
import styles from "./styling.module.css" 
let Logo=({logo1})=>{
    
   console.log(logo1) 
return(
    <img className={styles.logo}  src={logo1} alt="" />
)
}

export default Logo