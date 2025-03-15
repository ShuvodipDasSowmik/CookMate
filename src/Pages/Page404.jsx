import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const Page404 = ({ darkMode }) => {
    return (
        <Container className="text-center py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className={`error-container p-4 rounded-3 ${darkMode ? "bg-custom-dark text-light" : "bg-light"}`}>
                        <div className="error-icon mb-4">
                            {/* Animated cooking pot icon */}
                            <div className="cooking-pot">
                                <div className="steam steam1"></div>
                                <div className="steam steam2"></div>
                                <div className="steam steam3"></div>
                                <div className="pot">🍲</div>
                            </div>
                        </div>
                        
                        <h1 className="display-1 fw-bold">404</h1>
                        <h2 className="mb-4">Recipe Not Found</h2>
                        
                        <p className="lead mb-4">
                            Oops! Looks like this ingredient isn't in our pantry.
                        </p>
                        
                        <p className="mb-4">
                            The page you're looking for might have been removed, renamed, 
                            or is temporarily unavailable.
                        </p>
                        
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <Button 
                                as={Link} 
                                to="/" 
                                variant={darkMode ? "outline-light" : "outline-dark"} 
                                className="mb-2" 
                                size="lg"
                            >
                                <FaHome className="me-2" /> Back to Home
                            </Button>
                            
                            <Button 
                                as={Link} 
                                to="/generate" 
                                variant={darkMode ? "primary" : "success"} 
                                className="mb-2" 
                                size="lg"
                            >
                                <FaSearch className="me-2" /> Find Recipes
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            
            <style jsx>{`
                .error-container {
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .cooking-pot {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    margin: 0 auto;
                }
                
                .pot {
                    font-size: 70px;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                .steam {
                    position: absolute;
                    bottom: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 8px;
                    height: 20px;
                    background: ${darkMode ? '#a1a1a1' : '#e0e0e0'};
                    border-radius: 50%;
                    opacity: 0;
                    animation: steam 2s infinite ease-out;
                }
                
                .steam1 {
                    left: 25%;
                    animation-delay: 0.2s;
                }
                
                .steam2 {
                    animation-delay: 0.6s;
                }
                
                .steam3 {
                    left: 75%;
                    animation-delay: 1s;
                }
                
                @keyframes steam {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 0;
                    }
                    15% {
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-40px) scale(1.5);
                    }
                    95% {
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(-80px) scale(2);
                        opacity: 0;
                    }
                }
            `}</style>
        </Container>
    );
}

export default Page404;