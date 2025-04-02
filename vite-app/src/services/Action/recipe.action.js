// import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc, where } from "firebase/firestore";
// import { db } from "../../FirebaseConfig";

// export const addRecipe = () => {
//   return {
//     type: "Add_Recipe",
//   };
// };
// export const updateRecipe = () => {
//   return {
//     type: "Update_Recipe",
//   };
// };
// export const getAllRecipes = (data) => {
//   return {
//     type: "Get_All_Recipe",
//     payload: data,
//   };
// };

// export const getRecipe = (data) => {
//   return {
//     type: "Get_Recipe",
//     payload: data,
//   };
// };




// // thunk middleware action (async) => return dispatch with normal action
// export const getAllRecipesAsync = () => {
//   return async (dispatch) => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "recipes"));
//       let result = [];
//       querySnapshot.forEach((doc) => {
//         // console.log( "Record => ", doc);
//         result.push({...doc.data(), id: doc.id});
//       });
//       console.log(result);
//       dispatch(getAllRecipes(result));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const AddRecipeAsync = (data) => {
//   return async (dispatch) => {
//     try {
//       const docRef = await addDoc(collection(db, "recipes"), data);        // auto id generate
//     //   const docRef = await setDoc(doc(db, "recipes", data.id), data);
//       dispatch(addRecipe());
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };
// };

// export const deleteRecipeAsync = (id) => {
//   return async(dispatch) => {
//     try {
//         let deleteRec = await deleteDoc(doc(db, "recipes", id));
//         dispatch(getAllRecipesAsync());
//     } catch (error) {
//         console.error("Error : ", error);
//     }
//   };
// };

// export const getRecipeAsync = (id) => {
//   return async(dispatch) => {
//     try {
//         let getRecord = await getDoc(doc(db, "recipes", id));
//         console.log("Get Record: => ", getRecord);
//         if(getRecord){
//             dispatch(getRecipe({...getRecord.data(), id: getRecord.id}));
//         }
//     } catch (error) {
//         console.error("Error : ", error);
//     }
//   };
// };

// export const updateRecipeAsync = (id, data) => {
//   return async(dispatch) => {
//     try {
//         let record = await updateDoc(doc(db, "recipes", id), data);
//         dispatch(updateRecipe());
//     } catch (error) {
//         console.error("Error : ", error);
//     }
//   };
// };


import { 
  addDoc, collection, deleteDoc, doc, getDoc, getDocs, 
  updateDoc 
} from "firebase/firestore";
import { db } from "../../FirebaseConfig";

// 🔥 Action Types
const ADD_RECIPE = "Add_Recipe";
const UPDATE_RECIPE = "Update_Recipe";
const GET_ALL_RECIPES = "Get_All_Recipe";
const GET_RECIPE = "Get_Recipe";
const SET_LOADING = "Set_Loading";

// 🔥 Normal Actions
export const addRecipe = () => ({ type: ADD_RECIPE });
export const updateRecipe = () => ({ type: UPDATE_RECIPE });
export const getAllRecipes = (data) => ({ type: GET_ALL_RECIPES, payload: data });
export const getRecipe = (data) => ({ type: GET_RECIPE, payload: data });
export const setLoading = (status) => ({ type: SET_LOADING, payload: status });

// 🔥 Thunk Middleware Actions
export const getAllRecipesAsync = () => {
  return async (dispatch) => {
    dispatch(setLoading(true)); // 🟡 API Call Start → Show Spinner
    try {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      dispatch(getAllRecipes(result));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      dispatch(setLoading(false)); // 🟢 API Call End → Hide Spinner
    }
  };
};

export const AddRecipeAsync = (data) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await addDoc(collection(db, "recipes"), data);
      dispatch(addRecipe());
    } catch (e) {
      console.error("Error adding document:", e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const deleteRecipeAsync = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await deleteDoc(doc(db, "recipes", id));
      dispatch(getAllRecipesAsync()); // Reload all recipes after delete
    } catch (error) {
      console.error("Error deleting recipe:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getRecipeAsync = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const getRecord = await getDoc(doc(db, "recipes", id));
      if (getRecord.exists()) {
        dispatch(getRecipe({ ...getRecord.data(), id: getRecord.id }));
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateRecipeAsync = (id, data) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await updateDoc(doc(db, "recipes", id), data);
      dispatch(updateRecipe());
    } catch (error) {
      console.error("Error updating recipe:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
