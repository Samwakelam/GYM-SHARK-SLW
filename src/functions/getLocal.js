const getLocal = (key) => {
  const localData = JSON.parse(localStorage.getItem(key));
  return localData;
}

export default getLocal;