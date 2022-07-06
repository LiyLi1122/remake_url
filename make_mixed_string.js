function make_mixed_string() {
  const upperCases = "ABCDEFGHIJKLMNOPQRSTUV"
  const lowerCases = "abcdefghijklmnopqrstuvwxyz"
  const number = "0123456789";
  const str = [...(upperCases + lowerCases + number)]
  
  //shuffle algorithm
  const index = str.length - 1;
  for (i = index; i >= 1; i--) {
    const randIndex = Math.floor(Math.random() * i + 1);
    [str[i], str[randIndex]] = [str[randIndex], str[i]]
  }
  return getFiveStr(str, index)
}

//get random five cases from str
function getFiveStr(str, index) {
  const times = 5;
  let mixedStr = "";
  for (i = 1; i <= times; i++) {
    const randIndex = Math.floor(Math.random() * index + 1)
    mixedStr += str[randIndex];
  }
  return mixedStr
}

module.exports = make_mixed_string








