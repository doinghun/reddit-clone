export const sortDown = (data, id) => {
  for (let i = data.length - 1; i >= 0; i--) {
    if (id === data[i].id) {
      [data[i], data[i + 1]] = [data[i + 1], data[i]];
    }
  }
  return data;
};

export const sortUp = (data, id) => {
  for (let i = data.length - 1; i >= 0; i--) {
    if (id === data[i].id && i !== 0) {
      [data[i], data[i - 1]] = [data[i - 1], data[i]];
    }
  }
  return data;
};
