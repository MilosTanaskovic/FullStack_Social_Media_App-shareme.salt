export const userLocalStorageFetch = () => localStorage.getItem('user') !== 'undefine' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
