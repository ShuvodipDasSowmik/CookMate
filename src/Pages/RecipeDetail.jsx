import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Spinner, Row, Col, Badge, ListGroup, Image } from "react-bootstrap";

const API_KEY = import.meta.env.VITE_API_KEY;

function RecipeDetail({ darkMode }) {
    const { id } = useParams();
    const [analyzedData, setAnalyzedData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recipeInfo, setRecipeInfo] = useState(null);

    useEffect(() => {
        // Fetch recipe instructions
        fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setAnalyzedData(data);
            })
            .catch((error) => {
                console.error("Error fetching recipe instructions:", error);
            });
            

            fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setRecipeInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipe info:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border" />
                <p>Loading recipe details...</p>
            </Container>
        );
    }


    const recipeName = (analyzedData && analyzedData[0] && analyzedData[0].name) || 
                      (recipeInfo && recipeInfo.title) || 
                      "Recipe Instructions";

    return (
        <Container className="my-4">
            <Card className={`shadow ${darkMode ? "bg-custom-dark" : "bg-custom-light"}`}>
                {recipeInfo && recipeInfo.image && (
                    <Card.Img 
                        variant="top" 
                        src={recipeInfo.image} 
                        alt={recipeName}
                        className="recipe-detail-img"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                )}
                <Card.Body>
                    <Card.Title as="h1" className="mb-4">{recipeName}</Card.Title>
                    
                    {/* Recipe info */}
                    {recipeInfo && (
                        <Row className="mb-4">
                            <Col md={4} className="mb-3">
                                <Badge bg="primary" className="p-2 me-2">
                                    Ready in {recipeInfo.readyInMinutes} minutes
                                </Badge>
                                <Badge bg="primary" className="p-2">
                                    Serves {recipeInfo.servings}
                                </Badge>
                            </Col>
                        </Row>
                    )}
                    
                    {/* Instructions */}
                    <h2 className="mb-3">Instructions</h2>
                    {analyzedData && analyzedData.length > 0 ? (
                        analyzedData.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                {section.name && <h3 className="mt-4 mb-3">{section.name}</h3>}
                                
                                {section.steps.map((step) => (
                                    <Card 
                                        key={step.number} 
                                        className={`mb-4 ${darkMode ? "bg-custom-dark" : "bg-custom-light"}`}
                                    >
                                        <Card.Body>
                                            <h4 className="border-bottom pb-2">
                                                Step {step.number}
                                            </h4>
                                            <p className="my-3">{step.step}</p>
                                            
                                            
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No instructions available for this recipe.</p>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RecipeDetail;