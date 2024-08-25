import numeral from "numeral";

// ----------------------------------------------------------------------

const result = (format: string, key: string = ".00"): string => {
  const isInteger = format.includes(key);
  return isInteger ? format.replace(key, "") : format;
};
export const fNumber = (number: number): string => {
  return numeral(number).format();
};

export const fCurrency = (number?: number): string => {
  const format = number ? numeral(number).format("0,0.00") : "";
  return result(format, ".00");
};

export const fPercent = (number?: number): string => {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : "";
  return result(format, ".0");
};

export const fShortenNumber = (number?: number): string => {
  const format = number ? numeral(number).format("0.00a") : "";
  return result(format, ".00");
};

export const fData = (number?: number): string => {
  const format = number ? numeral(number).format("0.0 b") : "";
  return result(format, ".0");
};
