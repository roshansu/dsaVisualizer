import React from 'react'
import './Sidebar.css'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { setAlgorithm, setArray, startSorting, stopSorting, setSpeed } from '../../Slice'
import { timeouts } from '../SortingAlgo/BubbleSort/BubbleSort'

const Sidebar = ({animate}) => {
console.log('sidebar')
  const dispatch = useDispatch();
  let [size, setSize] = useState(10);

  function generateArray(){
    let numbers = [];
    console.log(size);
    for(let i = 0; i<size; i++){
        numbers[i] = Math.floor(Math.random()*500);
    }
    dispatch(setArray(numbers));
}

function clear(){
  const bar = document.getElementsByClassName('box');
  for(let i = 0; i<bar.length; i++){
    bar[i].style.backgroundColor = '#d4a373'
  }
}

function stopAnimation() {
  dispatch(stopSorting());
  timeouts.forEach(clearTimeout);
  // timeouts = [];
}

function handleClick(){
  clear();
  if(size>30){
    console.log(size)
    size = 30;
  }
  stopAnimation();
  generateArray();
}


useEffect(()=>{
    generateArray();
},[]);

  return (
    <div className='sort'>
      <select onChange={(e)=>dispatch(setAlgorithm(e.target.value))} name="algo" id="algo">
        <option value="Bubble sort">Bubble sort</option>
        <option value="Selection sort">Selection Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Merge sort">Merge sort</option>
        <option value="Quick sort">Quick sort</option>
      </select>
      {/* <input value={speed} min={200} max={1000} onChange={(e)=>speedFun(e.target.value, dispatch(setSpeed(e.target.value)) )}  type="range" /> */}
      <input min={2} max={30} value={size} onChange={(e)=>setSize(Number(e.target.value))} className='input'  type="text" placeholder='number - 2,3,4' />
      <button onClick={handleClick} className='gen button hov'>Generate</button>
      <button onClick={()=>dispatch(startSorting())} className='button start hov'>Start</button>
      <button onClick={stopAnimation} className='button stop hov'>Stop</button>
    </div>
  )
}

export default Sidebar
