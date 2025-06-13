const covertDataToselectOption = <T>(
  data: T[],
  getLabel: (item: T) => string,
  getValue: (item: T) => string | number
) => {
  if (data) {
    return data.map((item) => ({
      label: getLabel(item),
      value: getValue(item),
    }));
  }else{
    return []
  }
};
export default covertDataToselectOption;
