import React, { useState, useEffect } from "react";
import MenuBar from "../MenuBar";
import { mergeSortAnimation } from "../../SortingAlgo/MergeSort";
import { bubbleSort } from "../../SortingAlgo/BubbleSort";
const SortingVisual = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 30; i++) {
      newArray.push(randomIntFromInterval(10, 800));
    }
    setArray(newArray);
    resetColor(array);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // const mergeSort = async () => {
  //   const currentArray = array;
  //   let sorted = false;
  //   const bars = document.getElementsByClassName("arrayBar");

  //   const mergeSorter = (array) => {
  //     if (array.length == 1) return;
  //     let mid = array.length / 2;
  //     let first = mergeSorter(array.slice(0, mid));
  //     let second = mergeSorter(array.slice(mid, array.length));
  //     return merger(first, second);
  //   };

  //   const merger = (first, second) => {
  //     let mergeArr = [];
  //     let i = 0;
  //     j = 0;
  //     k = 0;
  //     while (i < first.length && j < second.length) {
  //       if (first[i] < second[j]) {
  //         mergeArr[k] = first[i];
  //         i++;
  //       } else {
  //         mergeArr[k] = second[j];
  //         j++;
  //       }

  //       k++;
  //     }

  //     while (i < left.length) {
  //       mergeArr[k] = left[i];
  //       i++;
  //       k++;
  //     }
  //     while (j < right.length) {
  //       mergeArr[k] = right[j];
  //       j++;
  //       k++;
  //     }
  //     return mergeArr;
  //   };

  //   while (!sorted) {
  //     sorted = true;
  //     currentArray = 
  //   }
  // };

  const mergeSortFunc = () => {
    //we will get the animations array
    const animations = mergeSortAnimation(array);
    for (let i = 0; i < animations.length; i++) {
      //by using dom we can access the bars
      const bars = document.getElementsByClassName("arrayBar");
      //this helps to change color from 3 bars or 3 elements
      const colorChange = i % 3 != 2;
      if (colorChange) {
        //we use array destruct to get the values
        const [firstBar, secondBar] = animations[i];
        const firstBarStyle = bars[firstBar].style;
        const secondBarStyle = bars[secondBar].style;
        const color = i % 3 == 0 ? "white" : "violet";
        setTimeout(() => {
          firstBarStyle.backgroundColor = color;
          secondBarStyle.backgroundColor = color;
        }, i * 3);
      } else {
        setTimeout(() => {
          //the first bar is the original bar
          //new height is the value to change the original bar height
          //in this we are not swapping the bars
          //instead we are changing its height respectively
          const [firstBar, newHeight] = animations[i];
          const firstBarStyle = bars[firstBar].style;
          firstBarStyle.height = `${newHeight}px`;
        }, i * 3);
      }
    }
  };

  const finishedAnimation = () => {
    for (let i = 0; i < array.length; i++) {
      let bars = document.getElementsByClassName("arrayBar");
      let bar = bars[i].style;

      setTimeout(() => {
        bar.backgroundColor = "violet";
      }, i * 50);
    }
  };

  const findMaxIndex = (currentArray, first, end) => {
    let maxIndex = first;
    for (let i = 0; i <= end; i++) {
      if (currentArray[maxIndex] < currentArray[i]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  };
  const swap = (currentArray, i, j) => {
    let temp = currentArray[i];
    currentArray[i] = currentArray[j];
    currentArray[j] = temp;
  };

  const selectionSortFunc = async () => {
    const currentArray = array;
    let sorted = false;
    const bars = document.getElementsByClassName("arrayBar");

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < currentArray.length - 1; i++) {
        let last = currentArray.length - i - 1;
        let maxIndex = findMaxIndex(currentArray, 0, last);
        swap(currentArray, maxIndex, last);
        setArray([...array, currentArray]);
        let firstbar = bars[maxIndex].style;
        let secondbar = bars[last].style;
        firstbar.backgroundColor = "red";
        secondbar.backgroundColor = "violet";

        await sleep(110);

        firstbar.backgroundColor = "black";
        secondbar.backgroundColor = "black";
        sorted = false;
      }
      if (array.sort() === currentArray) {
        sorted = false;
        finishedAnimation();
        break;
      }
    }
  };

  const bubbleSortFunc = async () => {
    const currentArr = array;
    let sorted = false;
    const bars = document.getElementsByClassName("arrayBar");
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = 0; j < currentArr.length - i - 1; j++) {
          if (currentArr[j] > currentArr[j + 1]) {
            let temp = currentArr[j];
            currentArr[j] = currentArr[j + 1];
            currentArr[j + 1] = temp;
            setArray([...array, currentArr]);
            let firstbar = bars[j].style;
            let secondbar = bars[j + 1].style;

            firstbar.backgroundColor = "red";
            secondbar.backgroundColor = "violet";

            await sleep(50);

            firstbar.backgroundColor = "black";
            secondbar.backgroundColor = "black";

            sorted = false;
          }
        }
      }
      if (sorted) finishedAnimation();
    }
  };

  const insertionSortFunc = async () => {
    const currentArray = array;
    let sorted = false;
    const bars = document.getElementsByClassName("arrayBar");
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j >= 0; j--) {
          if (array[j] > array[j - 1]) {
            swap(array, j - 1, j);
            setArray([...array, currentArray]);
            let firstbar = bars[j].style;
            let secondbar = bars[j - 1].style;
            firstbar.backgroundColor = "red";
            secondbar.backgroundColor = "violet";
            await sleep(110);
            firstbar.backgroundColor = "black";
            secondbar.backgroundColor = "black";
            sorted = false;
          }
        }
      }
      if (array.sort() === currentArray) {
        sorted = false;
        finishedAnimation();
        break;
      }
    }
  };

  return (
    <div className="h-screen bg-thirdColor w-screen">
      <MenuBar
        resetArray={resetArray}
        mergeSortFunc={mergeSortFunc}
        bubbleSortFunc={bubbleSortFunc}
        selectionSortFunc={selectionSortFunc}
        insertionSortFunc={insertionSortFunc}
      />
      <div className="flex justify-center items-center w-screen">
        <div className="relative rotate-90 ">
          {array.map((data, id) => (
            <div
              className=" transition-all duration-75 arrayBar w-3 bg-stone-900 inline-block mx-1 my-0 "
              key={id}
              style={{ height: `${data}px` }}
            ></div>
          ))}
        </div>
      </div>
      );
    </div>
  );
};

// const ifEqual = (arr1, arr2) => {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++)
//       arr1[i] === arr2[i] ? console.log(true) : console.log(false);
//   } else {
//     console.log("False");
//   }
// };

const resetColor = (array) => {
  const bars = document.getElementsByClassName("arrayBar");
  for (let i = 0; i < array.length; i++) {
    const bar = bars[i];
    bar.style.backgroundColor = "black";
  }
};

const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};
export default SortingVisual;
