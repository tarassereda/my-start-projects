function argSum() {
  sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

argSum(45, 45, 34, 23);
