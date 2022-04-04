import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import { Box, Grid, ListItem, Button } from '@mui/material';
import './Restaurant.css';
import MealDetails from '../MealDetails/MealDetails';

const Restaurant = () => {
    
    const [food, setFood] = useState('');
    // console.log('food out:', food);
    const searchHandler = () => {
        const searchText = document.getElementById('searchInput')?.value;
        // console.log('search text:', searchText);
        setFood(searchText);

    }
    
    const handleEnderKeyDown = (e) => {
        // console.log('e.key', e.key);
        if(e.key === 'Enter'){
            searchHandler();
        }
    }
    
    const [meals, setMeals] = useState([]);
    // console.log('state?:', meals);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [food]);

    return (
        <div>

            <div className='search-div'>
                <input onKeyDown={handleEnderKeyDown} id='searchInput' type="text" placeholder='search food' />
                <Button onClick={searchHandler} variant='outlined' className='search-button'>Search</Button>
            </div>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    meals?.map(meal =>
                        <Grid item xs={4} sm={4} md={4} key={meal.idMeal}>
                            <Meal meal={meal} ></Meal>
                        </Grid>
                    )
                }
            </Grid>

        </div>
    );
};

export default Restaurant;