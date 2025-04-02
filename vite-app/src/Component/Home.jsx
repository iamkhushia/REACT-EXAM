
import { useEffect, useState } from "react";
import { Button, Container, Spinner, Card, Row, Col, Form, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteRecipeAsync, getAllRecipesAsync } from "../services/Action/recipe.action";
import { FaEye, FaTrash, FaPenToSquare } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipes, isLoading } = useSelector((state) => state.recipeReducer);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllRecipesAsync());
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleSort = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortOption === "title-asc") return a.title.localeCompare(b.title);
    if (sortOption === "title-desc") return b.title.localeCompare(a.title);
    if (sortOption === "category-asc") return a.category.localeCompare(b.category);
    if (sortOption === "category-desc") return b.category.localeCompare(a.category);
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "ingredients-asc") return a.ingredients.localeCompare(b.ingredients);
    if (sortOption === "ingredients-desc") return b.ingredients.localeCompare(a.ingredients);
    return 0;
  });

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = sortedRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(sortedRecipes.length / recipesPerPage);

  return (
    <>
    <div className="home-background"></div>
    <Container className="home-container">
      {isPageLoading ? (
        <div className="recipe-loading">
          <Spinner animation="border" variant="primary" />
          <h5 className="mt-3">Loading Recipes...</h5>
        </div>
      ) : (
        <>
          <h1 className="home-title"><img src="https://tse1.mm.bing.net/th?id=OIP.Eb2UTnvkVzGOpYGl2unTEQAAAA&pid=Api&P=0&h=180" />Recipe Book</h1>

          <Form.Select className="home-sort-select" onChange={handleSort}>
            <option value="">Sort By ...</option>
            <option value="title-asc">Title: A-Z</option>
            <option value="title-desc">Title: Z-A</option>
            <option value="category-asc">Category: A-Z</option>
            <option value="category-desc">Category: Z-A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="ingredients-asc">Ingredients: A-Z</option>
            <option value="ingredients-desc">Ingredients: Z-A</option>
          </Form.Select>

          {isLoading ? (
            <div className="recipe-loading">
              <Spinner animation="border" variant="primary" style={{ width: "5rem", height: "5rem" }} />
              <h5 className="mt-3">Loading Recipes...</h5>
            </div>
          ) : currentRecipes.length > 0 ? (
            <Row>
              {currentRecipes.map((recipe) => (
                <Col key={recipe.id} md={4} className="mb-3">
                  <Card className="recipe-card">
                    <Card.Img variant="top" src={recipe.image || "https://via.placeholder.com/150"} />
                    <Card.Body className="recipe-card-body">
                      <Card.Title className="recipe-card-title">{recipe.title}</Card.Title>
                      <div className="recipe-btn-group">
                        <Button className="recipe-btn" variant="info" onClick={() => navigate(`/view/${recipe.id}`)}>
                          <FaEye />
                        </Button>
                        <Button className="recipe-btn" variant="warning" onClick={() => navigate(`/edit/${recipe.id}`)}>
                          <FaPenToSquare />
                        </Button>
                        <Button className="recipe-btn" variant="danger" onClick={() => dispatch(deleteRecipeAsync(recipe.id))}>
                          <FaTrash />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <h4 className="text-center text-muted">No recipes found!</h4>
          )}

          <div className="recipe-pagination">
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
          </div>
        </>
      )}
    </Container>
    </>
  );
};

export default Home;
