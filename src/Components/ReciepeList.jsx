import React, { useState } from "react";
import { Card, ListGroup, Image, Row, Col, Container, Button, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import fallbackRecipe from "../assets/fallback-recipe.jpg";
import fallbackIngredient from "../assets/fallback-ingredient.jpg";

function RecipeCard({ recipe, darkMode }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleViewRecipe = () => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <Col key={recipe.id}>
            <Card className={`shadow-sm ${darkMode ? "bg-custom-dark" : "bg-custom-light"}`}>
                <Card.Img
                    src={recipe.image || fallbackRecipe}
                    alt={recipe.title}
                />
                <Card.Body className={`${darkMode ? "bg-custom-dark" : "bg-custom-light"}`}>
                    <Card.Title className="fw-bold">{recipe.title}</Card.Title>

                    {/* Used Ingredients */}
                    <Card.Subtitle className="mt-3 fw-semibold">Used Ingredients:</Card.Subtitle>
                    <ListGroup variant="flush" className={`${darkMode ? "bg-custom-dark" : "bg-custom-light"} mb-3`}>
                        {recipe.usedIngredients.map((ingredient) => (
                            <ListGroup.Item key={ingredient.id} className={`${darkMode ? "bg-custom-dark" : "bg-custom-light"} d-flex align-items-center`}>
                                <Image
                                    src={ingredient.image || fallbackIngredient}
                                    alt={ingredient.name}
                                    rounded
                                    height={30}
                                    className="me-2"
                                />
                                {ingredient.original}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    {/* Dropdown for Missing Ingredients */}
                    <Button
                        variant="outline-primary"
                        onClick={() => setOpen(!open)}
                        aria-controls={`collapse-missing-${recipe.id}`}
                        aria-expanded={open}
                        className="mb-2"
                    >
                        {open ? "Hide Missing Ingredients" : "Show Missing Ingredients"}
                    </Button>
                    <Collapse in={open}>
                        <div id={`collapse-missing-${recipe.id}`}>
                            <Card.Subtitle className="mt-3 fw-semibold">Missed Ingredients:</Card.Subtitle>
                            <ListGroup variant="flush" className={`${darkMode ? "bg-custom-dark" : "bg-custom-light"} mb-3`}>
                                {recipe.missedIngredients.map((ingredient) => (
                                    <ListGroup.Item key={ingredient.id} className={`${darkMode ? "bg-custom-dark" : "bg-custom-light"} d-flex align-items-center`}>
                                        <Image
                                            src={ingredient.image || fallbackIngredient}
                                            alt={ingredient.name}
                                            rounded
                                            height={30}
                                            className="me-2"
                                        />
                                        {ingredient.original}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Collapse>

                    <Card.Text className="mt-3">❤️ Likes: {recipe.likes}</Card.Text>
                    
                    <Button variant="info" onClick={handleViewRecipe}>
                        View Recipe
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default function RecipeList({ recipes, darkMode }) {
    const filteredRecipes = recipes.filter(recipe => !recipe.unusedIngredients || recipe.unusedIngredients.length === 0);
    
    return (
        <Container className="mt-4">
            <Row xs={1} sm={2} md={3} xl={4} className="g-4">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} darkMode={darkMode} recipe={recipe} />
                ))}
            </Row>
        </Container>
    );
}