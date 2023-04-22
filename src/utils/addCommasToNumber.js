export function addCommasToNumber(number) {
  const numString = number.toString();
  let numArray = numString.split('');
  numArray.reverse();
  for (let i = 3; i < numArray.length; i += 3) {
    numArray[i] += ',';
  }
  const formattedNum = numArray.reverse().join('');
  return formattedNum;
}
