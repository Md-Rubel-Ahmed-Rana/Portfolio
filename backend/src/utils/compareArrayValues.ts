const compareArrayValues = (
  oldValues: string[],
  newValues: string[]
): string[] => {
  return oldValues.filter((value) => !newValues.includes(value));
};

export default compareArrayValues;
