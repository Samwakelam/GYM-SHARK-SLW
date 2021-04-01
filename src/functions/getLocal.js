const getLocal = (key) => {
  const localData = localStorage.getItem(key);
  return localData;
}

export default getLocal;