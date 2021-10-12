const apiKey = '77102a3a95774c5ea8df89ed49709740';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch?number=3&maxFat=5';

const getUrl = (urlFor) => {
  return BASE_URL;
};

export { apiKey, getUrl };