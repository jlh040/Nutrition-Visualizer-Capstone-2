import apiKey from './apiKey';

const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=25&maxFat=fat&minCalories=calories&addRecipeInformation=true`;

// specifies the url to use based upon which 'plan' is passed in
const getUrl = (urlFor) => {
  if (urlFor === 'bulk up') {
    return BASE_URL.replace('calories', '400').replace('fat', '10');
  }
  else if (urlFor === 'slim down') {
    return BASE_URL.replace('fat', '5').replace('calories', '0');
  }
};

export default getUrl;