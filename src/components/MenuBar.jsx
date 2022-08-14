import React from 'react'

const MenuBar = ({resetArray,mergeSortFunc,bubbleSortFunc,selectionSortFunc,insertionSortFunc}) => {
  return (
    <div className="">
    <div className='flex items-center justify-around bg-primaryColor text-white'>
      <h1 className='uppercase'>Sorting visualizer</h1>
        <div className="btn-contain">
            <button  onClick={resetArray} className='cursor-pointer p-2 uppercase'>Generate New Array</button>
            <button  onClick={bubbleSortFunc} className='cursor-pointer p-2 uppercase'>Bubble Sort</button>
            <button  onClick={mergeSortFunc} className='cursor-pointer p-2 uppercase'>Merge Sort</button>
            <button  onClick={selectionSortFunc} className='cursor-pointer p-2 uppercase'>Selection Sort</button>
            <button  onClick={insertionSortFunc} className='cursor-pointer p-2 uppercase'>Insertion Sort</button>
        </div>
    </div>
    </div>
  )
}

export default MenuBar;