import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuList = () => {
    const menuItems = [
        { id: 1, name: "Pasta", price: "$12", category: "Italian" },
        { id: 2, name: "Burger", price: "$8", category: "Fast Food" },
        { id: 3, name: "Sushi", price: "$15", category: "Japanese" },
        { id: 4, name: "Pizza", price: "$10", category: "Italian" },
        { id: 5, name: "Salad", price: "$7", category: "Healthy" },
        { id: 6, name: "Dosa", price: "$8", category: "south-indian" },
        { id: 7, name: "Shak-Roti", price: "$9", category: "Gujrati" },
        { id: 8, name: "Manchuriyan", price: "$5", category: "Chainiz" },
        { id: 9, name: "Cake", price: "$12", category: "Desart" },
    ];

    return (
       <>
        <div className="menu-list-background"></div>
           <Container className="menu-list-container">
            <h2 className="menu-list-title">Menu List</h2>
            <Row>
                {menuItems.map((menu) => (
                    <Col key={menu.id} md={4} sm={6} xs={12} className="mb-3">
                        <Card className="menu-card">
                            <Card.Body>
                                <Card.Title className="menu-card-title">{menu.name}</Card.Title>
                                <Card.Text className="menu-card-text"><strong>Category:</strong> {menu.category}</Card.Text>
                                <Card.Text className="menu-card-text"><strong>Price:</strong> {menu.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="menu-list-buttons">
                <Link to="/" className="menu-button-link">
                    <Button variant="secondary" className="menu-button">Go Home</Button>
                </Link>
                <Link to="/add" className="menu-button-link">
                    <Button variant="primary" className="menu-button">Add Menu</Button>
                </Link>
            </div>
        </Container>
       </>
    );
};

export default MenuList;
