import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerInredient';
import './Burger.css';

const burger = props => {
    
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredKey => { 
            return [...Array(props.ingredients[ingredKey])]
                .map((_, index) => {
                    return <BurgerIngredient key={ingredKey + index} type={ingredKey} />;
                });
        });

    return(
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;
