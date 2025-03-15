import React, { useEffect, useState } from 'react';
import { Form, Button, InputGroup, Badge } from 'react-bootstrap';
import RecipeList from '../Components/ReciepeList';

const STORAGE_KEY = 'savedRecipes';

const Generate = ({darkMode}) => {
    const [input, setInput] = useState("");
    const [words, setWords] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Load recipes from sessionStorage when component mounts
    useEffect(() => {
        const savedRecipes = sessionStorage.getItem(STORAGE_KEY);
        if (savedRecipes) {
            setRecipes(JSON.parse(savedRecipes));
        }
    }, []);

    // Monitor recipes state changes and save to sessionStorage
    useEffect(() => {
        if (recipes.length > 0) {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
        }
    }, [recipes]);

    const addWord = () => {
        const trimmedInput = input.trim();
        if (trimmedInput) {
            setWords([...words, trimmedInput]);
            setInput("");
        }
    };

    const removeWord = (indexToRemove) => {
        setWords(words.filter((_, index) => index !== indexToRemove));
    };

    const searchRecipes = async () => {
        // Clear previous recipes from session storage before new search
        sessionStorage.removeItem(STORAGE_KEY);
        
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${words.join(",")}&ignorePantry=false&number=30&apiKey=${API_KEY}`;
        console.log(url);

        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data);
                // Session storage is updated via the useEffect hook
                console.log('Fetched Data: ', data);
            })
            .catch((error) => console.error(error));
    }

    // Handle Enter key press in input field
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addWord();
        }
    }

    return (
        <div className="container mt-4">
            <h1>Find Recipe</h1>
            <p>Add your available ingredients</p>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Enter the name of ingredients"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />

                <Button variant="primary" onClick={addWord}>
                    Add
                </Button>
            </InputGroup>
            <div>
                {words.map((word, index) => (
                    <Badge
                        key={index}
                        bg="secondary"
                        className="me-2 mb-2 p-2"
                        style={{ fontSize: '1rem' }}
                    >
                        {word}{" "}
                        <span
                            style={{ cursor: "pointer", marginLeft: "5px" }}
                            onClick={() => removeWord(index)}
                        >
                            x
                        </span>
                    </Badge>
                ))}
            </div>

            <Button variant="success" className="mt-3" onClick={searchRecipes}>
                Generate
            </Button>

            <div className='reciepe-list'>
                <RecipeList recipes={recipes} darkMode={darkMode}/>
            </div>
        </div>
    );
};

export default Generate;