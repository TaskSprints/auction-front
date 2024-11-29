const { resolve } = require("path");

async function example() {
  console.log("첫 번째 출력"); // 동기적으로 실행됨

  console.log("두 번째 출력"); // 대기가 끝난 후 실행됨

  await new Promise((resolve) => setTimeout(resolve, 1000)); // 다시 1초 대기

  console.log("세 번째 출력"); // 두 번째 대기가 끝난 후 실행됨
}

example();
