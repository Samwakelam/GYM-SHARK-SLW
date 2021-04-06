// function isJSON(data){
//   try{
//     JSON.parse(data)
//   } catch (e) {
//     return false;
//   }
//   return true;
// }


const getLocal = (key) => {
  // console.log('key=', key, typeof key);
  const data = localStorage.getItem(key);
  // console.log('data =', data, typeof data, isJSON(data));
  if (data) {
    const localData = JSON.parse(data);
    // console.log('localData =', localData, typeof localData);
    return localData;
  }

}

export default getLocal;