import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import React from "react";

//declare the different type of notifications possible
export type notificationType = "success" | "failure" | "warning" | "info";

export enum notificationColors {
    "success" = "green",
    "failure" = "red",
    "warning" = "orange",
    "info" = "lightblue"
}

export type NotificationInput = {
    notiType:notificationType,
    position?:string
    text?:string
}

export type NotificationOutput = {
    button :React.ReactNode| null,
    changeDisplayTrue: () => void,
}



const useNotification = ({ notiType,
                           position="bottom_left" ,
                           text="Text Added"
                        }: NotificationInput) : NotificationOutput =>{
    const [display,setDisplay] = useState<boolean>(false);

    console.log(notiType,position);
    let button = display ? (
        <DisplayButton 
         position={position}
         text = {text}
         col={notificationColors[notiType]} 
         key="notificationButton"/>
        ) : null;

    const changeDisplayTrue = () => {
        setDisplay(true)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDisplay(false)
        },3000)
        return () => {
            clearTimeout(timer);
        }
    },[changeDisplayTrue])

    return {
        button,
        changeDisplayTrue
    }
}


export type displayButtonTypes = {
    col: string,
    position:string
    text:string
}


const DisplayButton: React.FC<displayButtonTypes> = ({col,position,text}) => {
    const verticalPosition = position.split("_")[0];
    const horizontalPosition = position.split("_")[1];
    return (
                <motion.button 
                    initial={{y:30,opacity:0}}
                    animate={{y:0,opacity:1}}
                    exit={{ y: -30, opacity: 0 }} 
                    transition={{duration:0.4}}
                    style={{backgroundColor:col,color:"white",
                        position:"absolute",
                        [verticalPosition]:20,
                        [horizontalPosition]:20
                    }}
                    className="button">
                    {text}
                </motion.button>
            );
  };

export default useNotification;