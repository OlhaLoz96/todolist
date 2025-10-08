// export const saveInLS = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// export const getFromLS = key => {
//   const savedData = localStorage.getItem(key);
//   if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     return parsedData;
//   }
//   return null;
// };
//

//my code
//

export const saveInLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = key => {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    return parsedData;
  }
  return null;
};
