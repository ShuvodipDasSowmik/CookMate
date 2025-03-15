import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaListUl, FaUtensils, FaArrowRight } from 'react-icons/fa';
import '../StyleSheets/home.css';

const Home = ({ darkMode }) => {
    const navigate = useNavigate();
    
    // Animation refs for scroll effects
    const { ref: featureRef, inView: featureInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: howItWorksRef, inView: howItWorksInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <>
            {/* Hero Banner */}
            <div className={`hero-section ${darkMode ? 'hero-dark' : 'hero-light'}`}>
                <Container>
                    <Row className="align-items-center hero-content">
                        <Col lg={7} md={12} className="hero-text">
                            <h1 className="display-4 fw-bold mb-4 animate-in">
                                Turn Your Ingredients Into Delicious Recipes
                            </h1>
                            <p className="lead mb-4 animate-in delay-1">
                                No more wasted food. Simply enter what you have in your kitchen, and we'll suggest perfect recipes for you.
                            </p>
                            <Button 
                                variant={darkMode ? "light" : "primary"} 
                                size="lg" 
                                className="animate-in delay-2"
                                onClick={() => navigate('/generate')}
                            >
                                Find Recipes Now <FaArrowRight className="ms-2" />
                            </Button>
                        </Col>
                        <Col lg={5} className="d-none d-lg-block">
                            <div className="hero-image-container animate-in">
                                <img 
                                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Food ingredients" 
                                    className="hero-image"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Features Section */}
            <section className={`features-section py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`} ref={featureRef}>
                <Container>
                    <h2 className="text-center mb-5">How We Do What We Do</h2>
                    <Row className="g-4">
                        <Col md={4} className={`feature-card ${featureInView ? 'show' : ''}`} style={{transitionDelay: '0.2s'}}>
                            <Card className={`h-100 border-0 shadow ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <Card.Body className="text-center p-4">
                                    <div className={`feature-icon mb-3 ${darkMode ? 'icon-dark' : 'icon-light'}`}>
                                        <FaSearch size={40} />
                                    </div>
                                    <Card.Title>Smart Ingredient Search</Card.Title>
                                    <Card.Text>
                                        Our algorithm identifies recipes that match your available ingredients with minimal waste and maximum flavor.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className={`feature-card ${featureInView ? 'show' : ''}`} style={{transitionDelay: '0.4s'}}>
                            <Card className={`h-100 border-0 shadow ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <Card.Body className="text-center p-4">
                                    <div className={`feature-icon mb-3 ${darkMode ? 'icon-dark' : 'icon-light'}`}>
                                        <FaListUl size={40} />
                                    </div>
                                    <Card.Title>Customized Results</Card.Title>
                                    <Card.Text>
                                        We prioritize recipes that use most of your ingredients without requiring too many extra purchases.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className={`feature-card ${featureInView ? 'show' : ''}`} style={{transitionDelay: '0.6s'}}>
                            <Card className={`h-100 border-0 shadow ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <Card.Body className="text-center p-4">
                                    <div className={`feature-icon mb-3 ${darkMode ? 'icon-dark' : 'icon-light'}`}>
                                        <FaUtensils size={40} />
                                    </div>
                                    <Card.Title>Detailed Instructions</Card.Title>
                                    <Card.Text>
                                        Each recipe comes with step-by-step instructions and ingredient details to make cooking a breeze.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* How It Works */}
            <section className={`how-it-works py-5 ${darkMode ? 'bg-custom-dark text-light' : 'bg-white'}`} ref={howItWorksRef}>
                <Container>
                    <h2 className="text-center mb-5">How To Use CookMate</h2>
                    <Row className="g-4">
                        <Col lg={3} md={6} className={`step-card ${howItWorksInView ? 'show' : ''}`} style={{transitionDelay: '0.2s'}}>
                            <div className={`step-number ${darkMode ? 'step-dark' : 'step-light'}`}>1</div>
                            <Card className={`h-100 border-0 shadow ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <Card.Body>
                                    <Card.Title>Enter Your Ingredients</Card.Title>
                                    <Card.Text>
                                        Go to the Generate page and type in ingredients you have available in your kitchen.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className={`step-card ${howItWorksInView ? 'show' : ''}`} style={{transitionDelay: '0.4s'}}>
                            <div className={`step-number ${darkMode ? 'step-dark' : 'step-light'}`}>2</div>
                            <Card className={`h-100 border-0 shadow ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <Card.Body>
                                    <Card.Title>Click "Generate"</Card.Title>
                                    <Card.Text>
                                        Hit the Generate button and our algorithm will find the best recipes for your ingredients.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className={`step-card ${howItWorksInView ? 'show' : ''}`} style={{transitionDelay: '0.6s'}}>
                            <div className={`step-number ${darkMode ? 'step-dark' : 'step-light'}`}>3</div>
                            <Card className={`h-100 border-0 shadow ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <Card.Body>
                                    <Card.Title>Browse Recipe Cards</Card.Title>
                                    <Card.Text>
                                        Scroll through recipe suggestions and find one that looks delicious and matches your needs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className={`step-card ${howItWorksInView ? 'show' : ''}`} style={{transitionDelay: '0.8s'}}>
                            <div className={`step-number ${darkMode ? 'step-dark' : 'step-light'}`}>4</div>
                            <Card className={`h-100 border-0 shadow ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <Card.Body>
                                    <Card.Title>Cook & Enjoy!</Card.Title>
                                    <Card.Text>
                                        View the detailed recipe instructions and start cooking your delicious meal.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className={`cta-section py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`} ref={ctaRef}>
                <Container className="text-center">
                    <div className={`cta-content ${ctaInView ? 'show' : ''}`}>
                        <h2 className="mb-4">Ready to Start Cooking?</h2>
                        <p className="lead mb-4">
                            Don't let those ingredients go to waste. Find the perfect recipe now!
                        </p>
                        <Button 
                            variant={darkMode ? "outline-light" : "primary"} 
                            size="lg"
                            onClick={() => navigate('/generate')}
                        >
                            Get Started <FaArrowRight className="ms-2" />
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Home;