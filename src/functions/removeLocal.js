// functions
import getLocal from './getLocal';
import saveLocal from './saveLocal';

const removeLocal = (key, value) => {

  const local = getLocal(key);

  if (value && local.length > 1) {

    const index = local.indexOf(value);
    local.splice(index, 1);
    saveLocal(key, local);


  } else {
    localStorage.removeItem(key);
  }
}

export default removeLocal;