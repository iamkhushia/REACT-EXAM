

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import uploadImage from "../services/imageUpload";
import { getRecipeAsync, updateRecipeAsync } from "../services/Action/recipe.action";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const EditRecipe = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { recipe, isUpdate } = useSelector(state => state.recipeReducer);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        id: "",
        title: "",
        price: "",
        ingredients: "",
        image: "",
        category: ""
    });

    const handleCancel = () => {
        navigate("/");
    };

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };

    const handleImage = async (e) => {
        let file = e.target.files[0];
        if (!file) return;
        let url = await uploadImage(file);
        setInputData({
            ...inputData,
            image: `${url}`
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateRecipeAsync(id, inputData));
    };

    useEffect(() => {
        if (isUpdate) {
            navigate("/");
        }
    }, [isUpdate]);

    useEffect(() => {
        if (id) {
            dispatch(getRecipeAsync(id));
        }
    }, [id]);

    useEffect(() => {
        if (recipe) {
            setInputData(recipe);
        }
    }, [recipe]);

    return (
        <Container className="edit-recipe-container mt-3">
            <h2 className="edit-recipe-title">Edit Recipe</h2>
            <Form className="edit-recipe-form" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Title :</Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" name="title" value={inputData.title} onChange={handleChanged} placeholder="Enter Title" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Price :</Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" name="price" value={inputData.price} onChange={handleChanged} placeholder="Enter Price" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Ingredients :</Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" name="ingredients" value={inputData.ingredients} onChange={handleChanged} placeholder="Enter Ingredients" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Recipe Image :</Form.Label>
                    <Col sm="4">
                        <Form.Control type="file" name="image" onChange={handleImage} className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm="2" className="form-label">Category :</Form.Label>
                    <Col sm="4">
                        <Form.Select name="category" onChange={handleChanged} className="form-select">
                            <option>Select One Menu</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="Chinese">Chinese</option>
                            <option value="South Indian">South Indian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Italian">Italian</option>
                            <option value="Dessert">Dessert</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Button type="submit" className="edit-recipe-btn">Edit Recipe</Button> <br></br>
                <Button type="button" className="cancel-recipe-btn" onClick={handleCancel}>Cancel</Button>
            </Form>
        </Container>
    );
};

export default EditRecipe;
