function imprime(algo) {
  return function() {
    console.log(algo);
  }
}

function sleep(seconds, callback) {
  for (var i = seconds; i > 0; i--) {
    setTimeout(imprime(i), (seconds - i) * 1000)
  }

  setTimeout (callback, seconds * 1000)
}

sleep(10, imprime("FizzBuzz"))