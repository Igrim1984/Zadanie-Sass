import { sum } from "./sum";
console.log("Hello World");
console.log(sum(2,3));

let heading = document.querySelector("#demo"),
sumValue = sum(10,9);
heading.innerHTML = `10 + 5 = ${sumValue}`;

import style from "./css/index.scss"