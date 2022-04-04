import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';


const Meal = (props) => {
    // console.log('Meal?:', props.meal);

    return (
        <div className='meal-div'>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={props.meal?.strMealThumb}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.meal?.strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.meal?.strInstructions.slice(0, 150)}
                    </Typography>

                    <Link to={`/restaurant/details/${props.meal?.idMeal}`}> Details </Link>

                    <Link to={ `/restaurant/details/${props.meal?.idMeal}` }>
                        <Button variant="contained"> Details </Button>
                    </Link>

                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default Meal;