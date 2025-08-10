export const setStorageValue = ({ name, value }: {
  name: string;
  value: string | number | boolean | object | null;
}) => {
  localStorage.setItem(name, JSON.stringify(value));
};
export const getStorageValue = (name: string) => {
  const storageData = localStorage.getItem(name);
  return storageData ? JSON.parse(storageData) : undefined;
};
export const removeStorageValue = (name: string) => {
  localStorage.removeItem(name);
};
