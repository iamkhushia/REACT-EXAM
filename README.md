React Js Practical Exam - Web
​Recipe Book App Project Outline

Instruction/Text linked with this question​1. Project Setup- Set up a new React project using Create React App.- Install required dependencies: `react-router-dom`, `redux`, `react-redux`, `redux-thunk`, `@ Bootstrap i/core`, `json-server`, etc.​2. Component Structure- Create the necessary components:- RecipeList- RecipeForm- RecipeDetails- PrivateRoute- Navbar- Implement the basic component structure for the recipe book app.

​3. Redux Setup (5 points)- Set up the Redux store with actions, reducers, and thunks.- Define actions for fetching, adding, updating, and deleting recipes.- Implement thunks for asynchronous operations.4. JSON Server Setup (5 points)- Set up a JSON Server to act as a backend for storing recipe data.- Create a `db.json` file to store initial recipe data.- Define routes for CRUD operations (e.g., `/recipes`).

​5. Fetching and Displaying Recipes (5 points)- Implement the `fetchRecipes` function in the RecipeList component.- Display recipes dynamically using the RecipeDetails component.- Connect the RecipeList component to the Redux store to fetch recipe data from the server.

6. Adding Recipes (5 points)- Implement the `addRecipe` function in the RecipeForm component.- Validate that the recipe title and ingredients are provided before adding a recipe.- Dispatch a Redux action and thunk to add the recipe to the server and store.

​7. Updating Recipes (5 points)- Develop the `updateRecipe` function in the RecipeDetails component to allow users to edit existing recipes.- Identify a unique identifier for each recipe to ensure accurate updating.- Dispatch a Redux action and thunk to update the recipe on the server and in the store.

​8. Deleting Recipes (5 points)- Implement the `deleteRecipe` function in the RecipeDetails component to allow users to remove recipes.- Dispatch a Redux action and thunk to delete the recipe from the server and store.

9. Sorting and Filtering (10 points)- Implement sorting feature by name or date added in the RecipeList component.- Implement filtering feature by category or dietary preferences in the RecipeList component.

​10. User Authentication (5 points)- Implement a simple user authentication mechanism.- Restrict access to recipe-related operations based on user authentication status.

​11. Navbar- Create a Navbar component to provide navigation within the application.- Include links to the recipe list, recipe form, and a sign-out option (if applicable).- Ensure the Navbar is responsive and visually appealing.12. Bootstrap I Styling (5 points)- Utilize Bootstrap I components for a modern and aesthetically pleasing UI.- Apply styling and theming to enhance the overall look and feel of the application.
