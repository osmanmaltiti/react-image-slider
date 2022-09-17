import React, { useEffect, useState } from 'react'; 
import './App.css';
import img1 from './Images/call_of_duty_advanced_warfare_2-2560x1440.jpg'
import img2 from './Images/Cute Spongebob Squarepants Wallpaper Desktop.jpg'
import img3 from './Images/days-gone-3840x2160-survival-horror-ps-4-best-games-12912.jpg'
import img4 from './Images/deadpool_2016-1680x1050.jpg'
import img5 from './Images/faith_hd-2560x1440.jpg'

const App = () => {
  const [ counter, setCounter ] = useState(0);
  const texts = [
    { image: img1, desc: "Call Of Duty Advanced Warfare."},
    { image: img2, desc: "SpongeBob Squarepants"},
    { image: img3, desc: "Days Gone."},
    { image: img4, desc: "Deadpool."},
    { image: img5, desc: "Faith Overwatch."},
  ]
  useEffect(() => {
    const timer = setInterval(() =>{
      if(counter < texts.length - 1) {
        setCounter(prev => prev + 1)
      }
      else {
        setCounter(0)
      };
    }, 1500);

    return () => clearInterval(timer);
  });

  const next = () => {
    if(counter < texts.length - 1) setCounter(prev => prev + 1);
    else setCounter(0);
  }
  const prev = () => {
    if(counter > 0) setCounter(prev => prev - 1);
    else setCounter(texts.length - 1);
  }
 
  return(
    <div className='w-screen flex flex-col items-center gap-4 h-fit relative my-8'>
      <div className='relative h-[20rem] aspect-[3/1]'>
      <button className='btn absolute left-1 top-[45%] w-fit aspect-square p-2 z-10 rounded-full bg-black text-white' onClick={() => prev()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>
        </button>
        <button className='btn absolute right-1 top-[45%] aspect-square p-2 z-10 rounded-full bg-black text-white' onClick={() => next()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
        </button>
          { 
            texts.map((item, index) => index == counter ? 
            <Card images={item.image} prev={() => prev()} next={() => next()} text = {item.desc} state={'active'}/> : 
            <Card text = {item.desc} prev={() => prev()} next={() => next()} images={item.image} state={'inactive'}/>) 
          }
      </div>
      <div className='flex flex-row absolute bottom-2 bg-gray-300 rounded-2xl opacity-50 hover:opacity-100 shadow-lg'>
        {
         texts.map((item, index) => <button onClick={() => setCounter(index)} className='bg-black w-4 h-4 m-2 rounded-full transition-all' 
         style={index === counter ? {backgroundColor: 'red', width: '3rem'} : null}></button>)
        }
      </div>
    </div>
  )
}
export default App;

const Card = (props) => {
  return(
      <div className={`${props.state} w-full h-full absolute flex flex-row overflow-hidden 
       rounded-md shadow-md border border-black`}>
          <div className='w-1/2 h-full flex flex-row'> 
            <img className=' object-cover' src={props.images} alt=''/>
          </div>
          <div className='w-1/2 h-full flex flex-row'>
            <p className='m-auto px-3 text-xl font-semibold'>{props.text}</p>  
          </div>
      </div>
  )
}