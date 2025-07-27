function add(numbers) {
  if(numbers === "") return 0;

  const normalised = numbers.replace(/\n/g, ",");
  const parts = normalised.split(",");
  
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };