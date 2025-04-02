// const initalState = {
//     recipes: [],
//     recipe: null,
//     isCreated: false,
//     isUpdate: false,
//     isLoading: false
// }


// export const recipeReducer = (state = initalState, action) => {
//     switch (action.type) {
//         case "Add_Recipe":
//             return {
//                 ...state,
//                 isCreated: true
//             }

//         case "Get_All_Recipe":
//             return {
//                 ...state,
//                 isCreated: false,
//                 isUpdate: false,
//                 recipes: action.payload,
//                 isLoading: false
//             }

        
//         case "Get_Recipe":
            
//             return {
//                 ...state,
//                 recipe: action.payload
//             }

//         case "Update_Recipe":
//             return {
//                 ...state,
//                 recipe: null,
//                 isUpdate: true,
//             }

//         default:
//             return state;
//     }
// }


const initialState = {
    recipes: [],
    recipe: null,
    isCreated: false,
    isUpdate: false,
    isLoading: false
  };
  
  export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Set_Loading":
        return {
          ...state,
          isLoading: action.payload
        };
  
      case "Add_Recipe":
        return {
          ...state,
          isCreated: true,
          isLoading: false
        };
  
      case "Get_All_Recipe":
        return {
          ...state,
          isCreated: false,
          isUpdate: false,
          recipes: action.payload,
          isLoading: false
        };
  
      case "Get_Recipe":
        return {
          ...state,
          recipe: action.payload,
          isLoading: false
        };
  
      case "Update_Recipe":
        return {
          ...state,
          recipe: null,
          isUpdate: true,
          isLoading: false
        };
  
      default:
        return state;
    }
  };
  