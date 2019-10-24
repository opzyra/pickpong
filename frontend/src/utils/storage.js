export default {
  setItem(key, value) {
    localStorage.setItem(key, value);
  },
  getItem(key) {
    let value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
};
