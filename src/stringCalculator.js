function add(numbers) {
  if(numbers === "") return 0;

  let delimiter = /,|\n/; // default delimiters: comma or newline
  let numberPart = numbers;

  // Check for custom delimiter syntax at the start
  if(numbers.startsWith("//")) {
    const delimiterIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2,delimiterIndex));
    numberPart = numbers.substring(delimiterIndex + 1);
  }
  
  const parts = numberPart.split(delimiter);
  
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };