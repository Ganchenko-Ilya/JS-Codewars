// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.
function deepCount(a) {
  let countResult = 0;

  a.map((el) => {
    const count = (x) => {
      if (typeof x === "object") {
        countResult++;
        x.map((item) => {
          if (typeof item === "object") {
            count(item);
          } else {
            countResult++;
          }
        });
      } else {
        countResult++;
      }
    };

    count(el);
  });
  return countResult;
}
