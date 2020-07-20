const countPassword = 200;
const lengthPassword = 4;

function Makeid(length) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  const positionChar = (length) => Math.floor(Math.random() * length);
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      const dobbleChar = result.charAt(positionChar(i - 1));
      const resultSplit = result.split("");
      resultSplit.splice(positionChar(i), 0, dobbleChar);
      result = resultSplit.join("");
    } else result += characters.charAt(positionChar(charactersLength));
  }
  return result;
}

for (let i = 0; i < countPassword; i++) {
    const root = window.document.getElementById("root");
    const child = window.document.createElement("p");
    child.innerText = Makeid(lengthPassword);
    root.appendChild(child);
  }