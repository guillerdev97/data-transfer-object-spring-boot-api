"use strict";

const nums = [1, 2, 3, 4];
const rotations = 2;

function rotateLeft(d, arr) {
  const newArr = [];

  const numRotations = d - 1;

  for(let i = 0; i <= numRotations; i++) {
    const index = 0;

    newArr.push(arr[index]);

    arr.splice(index, 1);
  }

  newArr.forEach((el) => {
    arr.push(el);
  });

  return arr;
}

console.log(rotateLeft(rotations, nums));
