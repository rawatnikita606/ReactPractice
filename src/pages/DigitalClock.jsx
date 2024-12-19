import React, { useEffect, useState } from 'react'

const DigitalClk=()=>{
const [time,setTime]=useState(new Date());
const [day,nameDay]=useState("");


const handleDays = ()=>{
    const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    console.log(weekdays[3]);

    if (time.getDay()== 0) nameDay(weekdays[0]); 
    if (time.getDay() == 1) nameDay(weekdays[1]);
    if (time.getDay == 2) nameDay(weekdays[2]);
    if (time.getDay == 3) nameDay(weekdays[3]);
    if (time.getDay == 4) nameDay(weekdays[4]);
    if (time.getDay == 5) nameDay(weekdays[5]);
    if (time.getDay == 6) nameDay(weekdays[6]);

    
       
    };

    useEffect (()=>{
        const timeInterval = setInterval(()=>{
            setTime (new Date());
        },1000);
        handleDays();
        return()=> clearInterval(timeInterval);
        
    },[]);

    return(
        <div style={{textAlign:"center"}}>
            <p style={{fontSize:"50px"}}>{time.toLocaleTimeString()}</p>
            <p style={{fontSize:"50px"}}>{time.toLocaleDateString()}</p>
            <p style={{fontSize:"50px"}}>{`${day}`}</p>
            <p style={{fontSize:"50px"}}>{time.getFullYear()}</p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim cum veniam. Quo aliquid, architecto itaque est non, enim voluptatem eveniet accusamus minima maxime praesentium? Aperiam veritatis exercitationem illum quaerat, perferendis eligendi! Cumque sapiente praesentium eveniet vero qui ipsam non ratione labore nostrum laudantium. Eaque labore doloremque, magnam aliquid nisi nam est reiciendis, ipsam, adipisci exercitationem aut deleniti corrupti dolore vitae magni. Quidem quod, deserunt temporibus cupiditate, non error esse cumque accusamus dolor nihil veniam ipsam adipisci dignissimos odio sunt neque repudiandae magnam libero distinctio quis delectus. Vitae voluptatem consequuntur quibusdam, tempora ad ut. Beatae neque eligendi doloremque dignissimos consequuntur!</p>
        </div>
       
        

    )
}


const DigitalClock = () => {
  return (
    <div>
        <h2>DIGITAL CLOCK</h2>
        <DigitalClk/>
        
    </div>
  )
}

export default DigitalClock