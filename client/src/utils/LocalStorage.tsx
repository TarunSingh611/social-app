export const saveToLocalStorage = (key: string, value: any) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  
 export const getFromLocalStorage = (key: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    }
    return null;
  }