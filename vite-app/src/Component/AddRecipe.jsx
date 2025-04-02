
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import uploadImage from "../services/imageUpload";
import { AddRecipeAsync } from "../services/Action/recipe.action";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";

const AddRecipe = () => {
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.recipeReducer);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        title: "",
        price: "",
        ingredients: "",
        image: "",
        category: ""
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!inputData.title.trim()) newErrors.title = "Title is required";
        if (!inputData.price || isNaN(inputData.price) || inputData.price <= 0) {
            newErrors.price = "Price must be a positive number";
        }
        if (!inputData.ingredients.trim()) newErrors.ingredients = "Ingredients are required";
        if (!inputData.image) newErrors.image = "Recipe image is required";
        if (!inputData.category) newErrors.category = "Category is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleImage = async (e) => {
        let file = e.target.files[0];
        if (!file) return;
        let url = await uploadImage(file);
        setInputData({ ...inputData, image: `${url}` });
        setErrors({ ...errors, image: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(AddRecipeAsync({ ...inputData }));
        }
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/");
        }
    }, [isCreated, navigate]);

    return (
       <>
         <div className="add-recipe-background"></div>
       <Container className="add-recipe-container mt-3">
            <h2 className="add-recipe-title">Add Recipe</h2>
            <Form className="add-recipe-form" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Title :</Form.Label>
                    <Col sm="4">
                        <Form.Control
                            type="text"
                            name="title"
                            value={inputData.title}
                            onChange={handleChanged}
                            placeholder="Enter Title"
                            className="form-control"
                        />
                        {errors.title && <Alert variant="danger" className="add-recipe-alert">{errors.title}</Alert>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Price :</Form.Label>
                    <Col sm="4">
                        <Form.Control
                            type="number"
                            name="price"
                            placeholder="Enter the price"
                            value={inputData.price}
                            onChange={handleChanged}
                            className="form-control"
                        />
                        {errors.price && <Alert variant="danger" className="add-recipe-alert">{errors.price}</Alert>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Ingredients :</Form.Label>
                    <Col sm="4">
                        <Form.Control
                            type="text"
                            name="ingredients"
                            value={inputData.ingredients}
                            onChange={handleChanged}
                            placeholder="Enter Ingredients"
                            className="form-control"
                        />
                        {errors.ingredients && <Alert variant="danger" className="add-recipe-alert">{errors.ingredients}</Alert>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Recipe Image :</Form.Label>
                    <Col sm="4">
                        <Form.Control type="file" name="image" onChange={handleImage} className="form-control" />
                        {errors.image && <Alert variant="danger" className="add-recipe-alert">{errors.image}</Alert>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Category :</Form.Label>
                    <Col sm="4">
                        <Form.Select name="category" onChange={handleChanged} className="form-select">
                            <option value="">Select One Menu</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="Chinese">Chinese</option>
                            <option value="South Indian">South Indian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Italian">Italian</option>
                            <option value="Dessert">Dessert</option>
                        </Form.Select>
                        {errors.category && <Alert variant="danger" className="add-recipe-alert">{errors.category}</Alert>}
                    </Col>
                </Form.Group>

                <Button type="submit" className="add-recipe-btn">Add Recipe</Button>
            </Form>
        </Container>
       </>
    );
};

export default AddRecipe;
