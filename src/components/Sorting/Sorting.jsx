import React from 'react'
import BubbleSort from '../SortingAlgo/BubbleSort/BubbleSort'
import Sidebar from '../Sidebar/Sidebar'
import './Sorting.css'
import { useState } from 'react'
import { index } from '../SortingAlgo/SortingAlgorithm'
import store from '../../Store'
import { Provider } from 'react-redux'

const Sorting = () => {

  return (
    <div className='main'>
      <Provider store={store}>
        <Sidebar/>
        <BubbleSort/>
      </Provider>
    </div>
  )
}

export default Sorting
