
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync } from "../services/Action/auth.action";
import { Button, Container, Navbar, Form, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const Header = () => {
    const { user } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const { recipes } = useSelector(state => state.recipeReducer);

    const handleLogout = () => {
        dispatch(logOutAsync());
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const filtered = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);
        setShowResults(true);
        setSearchQuery("");
    };

    return (
        <>
            <Navbar className="header-navbar">
                <Container className="header-container">
                    <Navbar.Brand href="/" className="header-brand">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.EA3RBQC4T-_WQ8BySxCO-AHaH6&pid=Api&P=0&h=180" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Text>
                        <Link to={"/add"} className="header-links">Add Recipe Form</Link>
                    </Navbar.Text>
                    <Form className="header-search-form" onSubmit={handleSearchSubmit}>
                        <Form.Control
                            type="text"
                            placeholder="Search for recipes"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="header-search-input"
                        />
                        <Button type="submit" className="header-search-button">Search</Button>

                        <Link to="/menu-list" className="header-links">
                            <Button className="menu-list-button">Menu</Button>
                        </Link>

                    </Form>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {user ?
                                <Button onClick={handleLogout} className="header-auth-button"><LuLogOut /> LogOut</Button>
                                :
                                <Link to={"/signin"} className="header-links">SignIn</Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {showResults && (
                <Container className="search-results-container">
                    <h3 className="search-results-title">Search Results</h3>
                    {searchResults.length > 0 ? (
                        <Row>
                            {searchResults.map(recipe => (
                                <Col key={recipe.id} md={4} sm={6} xs={12} className="mb-3">
                                    <Card className="search-result-card">
                                        <Card.Img variant="top" src={recipe.image} height={150} />
                                        <Card.Body className="search-result-card-body">
                                            <Card.Title className="search-result-card-title">{recipe.title}</Card.Title>
                                            <Card.Text className="search-result-card-text"><strong>Category:</strong> {recipe.category}</Card.Text>
                                            <Card.Text className="search-result-card-text"><strong>Price:</strong> {recipe.price}</Card.Text>
                                            <Card.Text className="search-result-card-text"><strong>Ingredients:</strong> {recipe.ingredients}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <h5 className="text-muted">No recipes found.</h5>
                    )}
                    <div className="text-center mt-4">
                        <Button variant="secondary" className="back-to-home-button" onClick={() => setShowResults(false)}>
                            <FaArrowLeft /> Back to Home
                        </Button>
                    </div>
                </Container>
            )}
        </>
    );
};

export default Header;
