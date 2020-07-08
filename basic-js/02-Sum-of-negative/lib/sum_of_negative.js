sumOfNegative = (numbers) => {
  let sum=0
numbers.forEach((number) => {
  if (number<0) {
    sum += number
  }
})
return sum

}

sumOfNegative([-1, 4, -2, 9, 18])

