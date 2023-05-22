function formatNumber(
  value: number | string | undefined,
  errorValue: number | string = 0
) {
  if (value === "") return errorValue;

  const format = Intl.NumberFormat("en-US").format;
  const valueAsNumber = Number(value);
  const isNaN = Number.isNaN(valueAsNumber);
  if (isNaN) return errorValue;

  return format(valueAsNumber);
}

function validatePositiveIntegers(numbers: Array<unknown>) {
  for (const num of numbers) {
    if (!Number.isInteger(num)) return false;
    if (Number(num) < 0) return false;
  }
  return true;
}

export { formatNumber, validatePositiveIntegers };
