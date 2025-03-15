import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaCode, FaLaptopCode, FaUser } from 'react-icons/fa';

const AboutUs = ({ darkMode }) => {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">About CookMate</h1>

            {/* Project Description */}
            <Row className="mb-5">
                <Col lg={8} className="mx-auto">
                    <Card className={`shadow ${darkMode ? "bg-custom-dark text-light" : "bg-custom-light"}`}>
                        <Card.Body className="p-4">
                            <h2 className="mb-4">Our Mission</h2>
                            <p className="lead">
                                CookMate is designed to eliminate food waste and inspire culinary creativity by transforming your available ingredients into delicious meals.
                            </p>
                            <p>
                                We believe that everyone should be able to create delightful meals without the need for shopping trips or wasting ingredients. Our intelligent algorithm matches your pantry items with thousands of recipes to suggest perfect meal options personalized to what you already have at home.
                            </p>
                            <p>
                                Whether you're a seasoned chef or a cooking novice, CookMate helps you discover new recipes, explore different cuisines, and make the most of your ingredients.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Developer Section */}
            <h2 className="text-center mb-4">Meet the Developer</h2>
            <Row>
                <Col lg={8} className="mx-auto">
                    <Card className={`shadow ${darkMode ? "bg-custom-dark text-light" : "bg-custom-light"}`}>
                        <Card.Body className="p-4">
                            <div className="text-center mb-4">
                                <div className={`dev-icon-container d-inline-flex align-items-center justify-content-center rounded-circle mb-3 ${darkMode ? "bg-dark" : "bg-light"}`} style={{ width: "100px", height: "100px" }}>
                                    <FaUser size={50} className="text-primary" />
                                </div>
                                <h3 className="mb-1">Shuvodip Das Sowmik</h3>
                                <p className="text-muted">Full Stack Developer</p>
                                <a
                                    href="https://github.com/ShuvodipDasSowmik"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
                                >
                                    <FaGithub className="me-2" /> GitHub Profile
                                </a>
                            </div>

                            <hr className={darkMode ? "bg-light" : "bg-dark"} />

                            <h4 className="mb-3">About Me</h4>
                            <p>
                                I am an Undergraduate Student, studying Computer Science and Engineering under the department of CSE, BUET, and I am currently working as a Junior Software Engineer at Free Pixel Game Ltd.

                                My primary focus is on backend development and API integration. My techstacks include the following:

                                <ul className='mt-2'>
                                    <li>Languages: C, C++, Java, JavaScript</li>
                                    <li>Backend: Node, Express</li>
                                    <li>Frontend: React</li>
                                    <li>Database: MongoDB</li>
                                    <li>Tools: Git, Github</li>
                                </ul>

                                I plan to explore Machine Learning, learn Database Management, and skill up my knowledge in Data Structures and Algorithm by the end of next semester.
                            </p>

                            <h4 className="mt-4 mb-3">Technical Skills</h4>
                            <Row className="g-3">
                                <Col sm={6} md={4}>
                                    <div className={`skill-card p-3 rounded text-center ${darkMode ? "bg-dark" : "bg-light"}`}>
                                        <FaLaptopCode className="mb-2 text-primary" size={30} />
                                        <p className="mb-0">Frontend Development</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={4}>
                                    <div className={`skill-card p-3 rounded text-center ${darkMode ? "bg-dark" : "bg-light"}`}>
                                        <FaCode className="mb-2 text-primary" size={30} />
                                        <p className="mb-0">Backend Development</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={4}>
                                    <div className={`skill-card p-3 rounded text-center ${darkMode ? "bg-dark" : "bg-light"}`}>
                                        <FaCode className="mb-2 text-primary" size={30} />
                                        <p className="mb-0">React & Node.js</p>
                                    </div>
                                </Col>
                            </Row>

                            <h4 className="mt-4 mb-3">Project Philosophy</h4>
                            <p>
                                I believe in creating applications that are not only functional but also intuitive and enjoyable to use. CookMate represents my approach to development—combining practical utility with a smooth user experience to create tools that make everyday life easier.
                            </p>
                            <p>
                                This project was built using React, Bootstrap, and integrates with the Spoonacular API to provide comprehensive recipe data. The interface is designed to be responsive, accessible, and adaptable to both light and dark modes for optimal user comfort.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Add some styling for the page */}
            <style jsx>{`
                .skill-card {
                    transition: transform 0.3s ease;
                }
                .skill-card:hover {
                    transform: translateY(-5px);
                }
                .dev-icon-container {
                    transition: all 0.3s ease;
                }
                .dev-icon-container:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </Container>
    );
};

export default AboutUs;