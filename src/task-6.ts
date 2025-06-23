function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
console.log(firstNumber); // 1

const firstString = getFirstElement<string>(["a", "b", "c"]);
console.log(firstString); // "a"

const firstBoolean = getFirstElement<boolean>([true, false, true]);
console.log(firstBoolean); // true
