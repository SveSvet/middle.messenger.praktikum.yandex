export const range = (start, end, step) => {
  let startValue = start || 0;
  let endValue = end;
  let stepValue = step || 1;

  if (arguments.length === 1) {
    endValue = arguments[0];
    startValue = 0;
    stepValue = Math.sign(endValue) === -1 ? -1 : 1;
  }

  console.log(startValue, endValue, stepValue)

  const res = new Array(
    Math.ceil((endValue - startValue) / stepValue))
    .fill(startValue)
    .map((x, y) => x + y * stepValue
    );

  console.log(res)
  return res;
}
