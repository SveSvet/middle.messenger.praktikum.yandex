export const isEmpty = (value) => {
  if (typeof value === 'boolean') {
    return true;
  } else if (typeof value === 'undefined') {
    return true;
  } else if (!value) {
    return true;
  } else if (typeof value === 'string' && value.length === 0) {
    return true;
  } else if (typeof value === 'number') {
    return true;
  } else if (typeof value === 'object') {
    for (let key in value) {
      return false;
    }
    if (value.size > 0) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
