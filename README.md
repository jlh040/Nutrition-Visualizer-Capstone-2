# Summer Body

Check out the finished application here: https://summer-body.surge.sh/

## Goal of the application:

- The main goal of this application is to help users craft their summer body. It allows users to obtain and then visualize nutritional data for 20+ recipes so that they can take the time to figure out which ones they would like to incorporate into their diet, and therefore construct their summer body.
- Note that this site is a single page application and the user will find everything that they need to find recipes on the landing page.

## Features:

- Users are able to select what their goal is for changing their body, "Slim down" or "Bulk up".
  - I implemented this so that the user can have the appropriate recipes show up depending on what their goal is. 
- Users are able to see a scrollable list of all recipes that can be compared, based upon which plan they chose.
  - The scrollable list was implemented to make the user interface cleaner and allow the user to do everything without scrolling up and down the page or changing the page.
- When users hover over a recipe, a summary of the recipe is displayed in a tooltip.
  - I implemented this so the user would be able to find more information about the recipe and figure out where they can see the instructions to cook it.
  - It was also implemented to make the interface more user friendly and allow the user to quickly see information on a recipe.
- Users can select three recipes from the list.
  - I implemented this feature so that users can compare the nutritional value for these recipes.
  - I chose this number because it will not overwhelm the user with too much data when looking at the graph, and also because I want the user to make a comparison rather than just looking at data for one recipe, which they can do on any website.
- Users can swap between calorie data, and fat data.
  - This was implemented so that if the user is looking to slim down, they can easily compare the fat amount for the chosen recipes; and if they are looking to bulk up they can easily look at the calories.

## Testing:
- To run all of the tests for this application, simply type: `npm test`
- To run a specific test file, type: `npm test name_of_file.test.js` where name_of_file corresponds to the file you're testing.

## User flow:
- The flow of the site is as simple and seamless as possible.
- Everything is achieved through the landing page.
- When the user goes to the site, they will see an empty graph waiting to be passed some data. They will also see a **scrollable** list of recipes, and a dropdown at the top of the page to select their plan.
- The user must select exactly three recipes, once this is done, the buttom below the list will switch from disabled to enabled, prompting the user to click it.
- Once the compare button is clicked, the bars for the bar chart will show up on the page.
- The user can then switch out the recipes and/or swap between fat and calories.

## Technicalities
- For this project, all of the recipes were obtained through the [Spoonacular API](https://spoonacular.com/food-api/docs).
- In terms of technologies used, things were pretty straight forward, I only needed to use D3.js, React.js and Material UI.
- To get this code onto your machine:
  1. type `git clone https://github.com/jlh040/Summer-Body-Capstone-2.git`
  2. then `cd` into the *frontend* folder
  3. type `npm install` to download all of the dependencies
  4. enter `npm start` and the application will open up in your browser on http://localhost:3000
