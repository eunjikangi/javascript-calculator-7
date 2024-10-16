/*
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
*/

import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

// Get Input Data
async function getString() {
  const rl = readline.createInterface({ input, output })
  const answer = await rl.question('덧셈할 문자열을 입력해 주세요.\n')
  console.log(`결과 : ${answer}`)
  rl.close();
}

// 구분자 처리 함수
function getNumberSplit(inputString) {
  
}


// Big integer Calculator
function calculator(left, right) {
  
}


// Error Handling
function errorHandling() {

}

class App {
  async run() {
    getString();
  }

}

export default App;
