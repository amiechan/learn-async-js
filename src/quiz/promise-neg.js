const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function getNeg(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx) {
          setTimeout(() => {
            arr[rowIdx].filter((e) => {
                return e <0;
            }).length > 0 ? resolve (`Found Evidence: ${arr[rowIdx]}`) : reject(`Did not find negative`)
          }, 0)
        } else {
          reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`)
        }
    })
}

row = [];

for(let x = 0; x < array2D.length; x++) {
    row.push(getNeg(array2D, x));
}

Promise.any(row)
.then((negRows) => {
  console.log(`Neg rows = ${negRows}`)
})
.catch((error) => console.log(`Error Msg: ${error}`))
