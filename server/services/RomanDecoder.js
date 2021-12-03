function RomanDecoder(input) {
    // Roman numeral symbol to number converter
    const convert = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    // initialize the sum
    let sum = 0;
  
    // the previous symbol value
    let previous = 0;
  
    // loop through Roman numeral symbols
    for (let i = 0; i < input.length; i++) {
      // get the converted value and handle unknown symbols
      const current = convert[input[i]] ?? 0;
  
      // add the current symbol value
      sum += current;
  
      // if the left-side symbol is a subtractive notation
      if (previous < current) {
        // undo the wrongly added number and subtract the left-side value
        sum -= previous + previous;
      }
  
      // the current value is the left-side value for the next loop
      previous = current;
    }
    
    return sum;
  };

module.exports = RomanDecoder;