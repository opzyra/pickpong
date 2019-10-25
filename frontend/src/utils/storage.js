export default {
  setItem(key, value) {
    localStorage.setItem(key, value);
  },
  getItem(key) {
    let value = localStorage.getItem(key);
    if (!value) return null;
    return value;
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
};
