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

export { formatNumber };
