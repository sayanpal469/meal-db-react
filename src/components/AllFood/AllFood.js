import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])
    
    const searchFood = food => {
        setSearchText(food.target.value)
    }
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])
    return (
        <div className=''>
            <div className='text-center'>
            <p className='text-3xl'>Find The Food You Want</p>
            <input onChange={searchFood} className='border-none mt-3 w-auto rounded-2xl px-5 py-1 bg-gray-200 mt-5' type="text" placeholder='Search Food'/>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 gap-4 mt-10'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;