import { Button } from '@mui/material';
import './MealDetail.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MealDetails = (props) => {
    // console.log('MealDetails Props:', props);

    const mealId = useParams();
    // console.log('Params hook?', mealId);
    const id = mealId.anyId;

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    const matchedId = meals.find(x => x.idMeal.includes(id));
    // console.log('matched ?:', matchedId);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/restaurant');
    };

    return (
        <div className='details-div'>
            <img src={matchedId?.strMealThumb} className='detail-image' alt="" />
            <h5>ID: {matchedId?.idMeal} </h5>
            <h2>Name: {matchedId?.strMeal}</h2>
            <h4>Area: {matchedId?.strArea} </h4>
            <p> {matchedId?.strInstructions.slice(0, 250)}</p>

            <Button onClick={handleNavigate} variant='contained'>Go To All Meals</Button>

        </div>
    );
};

export default MealDetails;