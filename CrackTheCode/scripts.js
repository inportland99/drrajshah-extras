function linearRandomGenerator(x0,n) {
  const a = 456789123
  const b = 123455123
  const m = 9999999999
  for (let i = 0; i < n; i++) {
  	x0 = (a * x0 + b) % m
  }
  return x0
}

function days_passed() {
  var date1 = new Date("01/01/2022")
  var date2 = new Date()
  var time_diff = date2.getTime() - date1.getTime()
  return Math.trunc(time_diff / (1000 * 3600 * 24))
}

var nums = linearRandomGenerator(0,days_passed());

var secret_code = linearRandomGenerator(0,days_passed()).toString().substring(0,5)
console.log(secret_code);

if (secret_code % 2 == 0){console.log('Divisible by 2 '.concat(secret_code % 2))}
if (secret_code % 3 == 0){console.log('Divisible by 3 '.concat(secret_code % 3))}
if (secret_code % 4 == 0){console.log('Divisible by 4 '.concat(secret_code % 4))}
