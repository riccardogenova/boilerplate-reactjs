/** @format */

export const utilityGetTheme = () => {
  const theme = localStorage.getItem('reactJS-boilerplate-theme');
  return theme ? JSON.parse(theme) : null;
};
