import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DetailContext } from '../../App';

const Details = () => {
    const { mealId } = useParams()
    const [meals] = useContext( DetailContext )

    const meal = meals.find(meal => meal.idMeal === mealId)

    
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-4 md:justify-items-around content-center'>
          <div className='order-2 md:order-1'>
            <h1 className='text-3xl'>General Info:</h1>
            <hr />
            <h1>Name: {meal.strMeal}</h1>
            
            <h1>Area: {meal.strArea}</h1>
            <h1>Category: {meal.strCategory}</h1>
            <h1>Str Id: {meal.idMeal}</h1>
            <h1>Last Updated: </h1>
          </div>

          <div className='flex order-1 md:order-2 justify-center items-center'>
            <img className='w-80 rounded-2xl' src={meal.strMealThumb} alt='coinImg' />
          </div>
        </div>

            <div className='text-center mt-20'>
            <Link className='bg-indigo-500 text-white py-2 px-5 text-xl rounded-3xl hover:bg-indigo-800' style={{transition: '0.3s'}}  to='/meals'>
            Back To Foods
            </Link>
            </div>
      </div>
    );
};

export default Details;