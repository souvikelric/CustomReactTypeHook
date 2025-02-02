import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import useNotification from "./hooks/useNotification";

export type ButtonProps = {
  text:string,
  value?:number,
  onClick?:(num:number) => void
}

const Button:React.FC<ButtonProps> = ({text, onClick,value}) => {
  const handleClick = () => {
    if (value !== undefined && onClick !== undefined){
      onClick(value)
    }
  }
  return (
    <span onClick={handleClick} className='button'>
      {text}
    </span>
  )
}

function App() {
  const [count, setCount] = useState<number>(0);
  const {button:failButton,changeDisplayTrue:failDisplay} = useNotification(
    {notiType:"failure",text:"Removed 1"}
  );
  const {button:succesButton,changeDisplayTrue:successDisplay} = useNotification(
    {notiType:"success",text:"Added 1"}
  );
  const changeValue = (num:number) => {
    setCount((prev:number)=>{
      return (prev += num)
    })
    if(num === 1) handleToggleClick("success");
    else handleToggleClick("failure")
  }

  const handleToggleClick = (typeOf:string) => {
    if(typeOf === "success") successDisplay();
    else failDisplay();
  }

  return (  
            <div className='container'>
                  <h1>Counter App with Typescript</h1>
                  <div className='showCounter'>
                    <p>{count}</p>
                  </div>
                  <div>
                    <Button text="Add" onClick={changeValue} value={1}/>
                    <Button text="Decrease" onClick={changeValue} value={-1}/>
                  </div>
                <AnimatePresence>
                  {failButton}
                  {succesButton}
                </AnimatePresence>
            </div>
        )
    }
  export default App
                