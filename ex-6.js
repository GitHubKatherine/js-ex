function filterEvenNumber(...arr) {
  // Start coding here
  console.log(arr)
  const dividebytwo = []
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]
    console.log(number)
    if (number % 2 === 0) {
      dividebytwo.push(number)
    }
  }
  return dividebytwo
}

let result1 = filterEvenNumber(1, 2, 3, 4, 5, 6, 7, 8)
let result2 = filterEvenNumber(22, 34, 1)

console.log(result1) // [2, 4, 6, 8]
console.log(result2) // [22, 34]
