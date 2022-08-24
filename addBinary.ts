const addBinary = function(a, b) {
  // Initialize result, carry, and value varibales
  const aLen = a.length;
  const bLen = b.length;
  const max = Math.max(aLen, bLen);
  let result = "";
  let carry = 0;
  let digit = 0;
  // Iterate from 0 to the higher of the two lengths
  for(let i = 0; i < max; i++){
    // Work from the end of the strings
      let aChar = Number(a[aLen - 1 - i]) || 0;
      let bChar = Number(b[bLen - 1 - i]) || 0;
      // Is digit 0 or 1?
      digit = (aChar + bChar + carry) % 2;
      // Do we carry over anything?
      carry = Math.floor((aChar + bChar + carry) / 2);
      // Prepend digit
      result = digit + result;
  }
  // Prepend carry
  if (carry === 1) result = 1 + result
  // Return result
  return result
};

// Just add each digit like you would on paper

// 0, letter = 0 ,carry = 0
// 1, letter = 1 ,carry = 0
// 2, letter = 0, carry = 1
// 3, letter = 1, carry = 1

// 110 carry
//  011 a string
// +001 b string
// =100 result

// Initialize result, carry, and value varibales
// Iterate from 0 to the higher of the two lengths
    // Working from the end of the strings (max-1-i)
    // Set val = add the values in that column or 0 if it's undefined. And add carry
    // Set carry to 1 or 0 
    // Set result to val%2 plus result
// Check if carry, if so prepend 1
// Return result

// const addBinary = function(a, b) {
//   const aLen = a.length;
//   const bLen = b.length;
//   const max = Math.max(aLen, bLen);
//   let result = "";
//   let carry = 0;
//   let digit = 0;
//   for(let i = 0; i < max; i++){
//       let aChar = Number(a[aLen - 1 - i]) || 0;
//       let bChar = Number(b[bLen - 1 - i]) || 0;
//       let digit = (aChar + bChar + carry) % 2;
//       carry = Math.floor((aChar + bChar + carry) / 2);
//       result = digit + result;
//   }
//   if (carry === 1) result = 1 + result
//   return result
// };

