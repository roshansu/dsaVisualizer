import React from 'react'
import bubbleSort from '../SortingAlgorithm'
import './style.css';
import { useSelector } from 'react-redux';
import { stopSorting } from '../../../Slice';
import { useDispatch } from 'react-redux';
import { index } from '../SortingAlgorithm';
import { useEffect } from 'react';
import store from '../../../Store';
export let timeouts = [];


const BubbleSort = () => {
  const array = useSelector((state)=>state.sorting.sortingArray);
  const algo = useSelector((state)=>state.sorting.sortingAlgorithm);
  const start = useSelector((state)=>state.sorting.isSorting);
  const speed = useSelector((state)=>state.sorting.speed)
  const dispatch = useDispatch();
  
  console.log(start);
  useEffect(()=>{
    if(start){
      switch (algo) {
        case "Bubble sort":
          bubbleSort([...array]);
          animate();
          break;
        case "Selection sort":
          selectionSort([...array]);
          console.log('more')
          break;
        case "Insertion Sort":
          insertionSort([...array]);
          break;
        case "Quick sort":
          const result = quickSort([...array]);
          break;
        default:
          break;
      }
      
    }
  },[start]);
  
  function animate(){
    const element = document.getElementsByClassName('box');
    console.log('called')
    for(let i = 0; i<index.length; i++){
      if (!store.getState().sorting.isSorting) return;
        
        let [i1, i2, bool] = index[i];
        let b1 = element[i1];
        let b2  = element[i2];
       let timeout =  setTimeout(() => {
          console.log('return', start)
          if(!start){
            return;
          } 
          b1.style.backgroundColor = bool ? '#0ead69':'#fcbf49';
          b2.style.backgroundColor = bool ? '#0ead69':'#fcbf49';

          if(bool){
            b2.classList.add('left');
            b1.classList.add('right');
            let height = b1.style.height;
            b1.style.height = b2.style.height;
            b2.style.height  = height;

            let content = b1.textContent;
            b1.textContent = b2.textContent;
            b2.textContent = content;

            setTimeout(()=>{
              b1.classList.remove("right");
              b2.classList.remove("left");
            },400);

          }
          setTimeout(()=>{
              b1.style.backgroundColor = '#90e0ef';
              b2.style.backgroundColor = '#90e0ef';
          },500)

        },i*800);
        timeouts.push(timeout);
    }
  }

async function selectionSort(arr) {
    const bar = document.getElementsByClassName('box');
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      if (!store.getState().sorting.isSorting) return;
        let minIndex = i;
        bar[minIndex].style.backgroundColor = '#0ead69';
        await delay(300);
        
        for (let j = i + 1; j < n; j++) {
          if (!store.getState().sorting.isSorting) return;

            bar[j].style.backgroundColor = '#fcbf49';
            await delay(300);

            if (arr[j] < arr[minIndex]) {
                bar[minIndex].style.backgroundColor = '#d4a373'; 
                minIndex = j;
                bar[minIndex].style.backgroundColor = '#0ead69';
            }
            await delay(300);
            if(j!=minIndex)
            bar[j].style.backgroundColor = '';
        }

        if (minIndex !== i) {
          
            bar[minIndex].classList.add('left');
            bar[i].classList.add('right');

            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            let tempH = bar[i].style.height;
            bar[i].style.height = bar[minIndex].style.height;
            bar[minIndex].style.height = tempH;

            let tempC = bar[i].textContent;
            bar[i].textContent = bar[minIndex].textContent;
            bar[minIndex].textContent = tempC;
            bar[minIndex].style.backgroundColor = '';
            
            setTimeout(() => {
              bar[minIndex].classList.remove('left');
              bar[i].classList.remove('right');
            }, 400);
        }
        await delay(300)

        bar[i].style.backgroundColor = '#90e0ef';
        console.log('main',start)

    }
}

async function insertionSort(arr) {
  let n = arr.length;
  const bar = document.getElementsByClassName('box');

  for (let i = 1; i < n; i++) {

    if (!store.getState().sorting.isSorting) return;
      let key = arr[i]; 
      let j = i - 1;
      
      let height = bar[i].style.height;
      bar[i].style.backgroundColor = '#90e0ef';
      await delay(500)
      bar[i].style.backgroundColor = '';

      while (j >= 0 && arr[j] > key) {
        if (!store.getState().sorting.isSorting) return;
        bar[j].classList.remove('rght','left');
        bar[j+1].classList.remove('left','right');
        bar[j].style.backgroundColor = '#ef476f';
        bar[j+1].style.backgroundColor = '#0ead69';

        await delay(500)
        bar[j].classList.add('right');
        bar[j+1].classList.add('left');
          
        arr[j + 1] = arr[j];
        let h = bar[j+1].style.height
        let b = bar[j+1].style.backgroundColor;

        bar[j+1].style.backgroundColor = bar[j].style.backgroundColor;
        bar[j].style.backgroundColor = b;

        bar[j+1].style.height = bar[j].style.height;
        bar[j].style.height = h;
        let c = bar[j+1].textContent
        bar[j+1].textContent = bar[j].textContent
        bar[j].textContent = c;
          
        await delay(500);
          
        bar[j].style.backgroundColor = '#fcbf49';
        bar[j+1].style.backgroundColor = '#fcbf49';
          
        j--;   
      }
        if(arr[j]<key) 
          bar[j].style.backgroundColor = '#fcbf49';

      await delay(500)
      arr[j + 1] = key; 
  }
}

function quickSort(arr) {
  if (arr.length <= 1) {
      return arr; 
  }
  const bar = document.getElementsByClassName('box');
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
          console.log(left);
          bar[i].style.backgroundColor = 'green';
          bar[i].style.height = `${arr[i]}px`;
          bar[i].textContent = arr[i];
          // await delay(500);
      } else {
          right.push(arr[i]);
          console.log(right);
          bar[i].style.backgroundColor = 'green';
          bar[i].style.height = `${arr[i]}px`;
          bar[i].textContent = arr[i];
          // await delay(500);
      }
  }
  // console.log([...quickSort(left), pivot, ...quickSort(right)])
  return [...quickSort(left), pivot, ...quickSort(right)];
}


function delay(ms) {
  return start ? new Promise(resolve => setTimeout(resolve, ms)) : Promise.resolve(); 
}


  return (
    <div className='parent'>
    <h1>{algo} Visualization</h1>
      {
        array.map((val, ind)=>(
            <div key={ind} className='box' style={{height:`${val}px`}} >{val}</div>
        ))
      }
    </div>
  )
}

export default BubbleSort
