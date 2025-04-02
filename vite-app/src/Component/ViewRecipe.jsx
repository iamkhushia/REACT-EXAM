
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getRecipeAsync } from "../services/Action/recipe.action";
import { Button } from "react-bootstrap";

const ViewRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipeReducer);

  useEffect(() => {
    if (id) {
      dispatch(getRecipeAsync(id));
    }
  }, [id, dispatch]);

  const handleChange = () => {
    navigate("/");
  };

  return (
    <div className="view-recipe-container">
      {recipe ? (
        <>
          {/* Left Side - Image */}
          <img className="view-recipe-image" src={recipe.image} alt={recipe.title} />

          {/* Right Side - Details */}
          <div className="view-recipe-details">
            <h2 className="view-recipe-title">{recipe.title}</h2>
            <hr></hr>
            <h3 className="view-recipe-category">Category: {recipe.category}</h3>
            <hr></hr>
            <p className="view-recipe-price">Price: ${recipe.price}</p>
            <hr></hr>
            <p className="view-recipe-ingredients"><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <hr></hr>

            <Button className="back-btn" onClick={handleChange}>
              Go Back
            </Button>
          </div>
        </>
      ) : (
        <p>No Recipe Found!</p>
      )}
    </div>
  );
};

export default ViewRecipe;
