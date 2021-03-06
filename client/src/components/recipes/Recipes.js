import React, {Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/recipes';
import Spinner from '../layout/Spinner';
import RecipeItem from './RecipeItem';
import './recipeStyles.css';

const Recipes = ({ 
    getRecipes, 
    recipes: { recipes, loading } 
}) => {
    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    return (
    loading ? 
    <Spinner />
        : 
    <Fragment>
    <div className='center'>
        <h1 className='large text-dark head'>Recipes</h1>
        <p className='lead'>
            Check out other Feastify users' creations!
        </p>
        <div className='recipes'>
            {recipes.map(recipe => (
                <RecipeItem key={recipes._id} recipes={recipe} />
            ))}
        </div>
    </div>
    
    </Fragment>
    )
}

Recipes.propTypes = {
    getRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    recipes: state.recipes
})

export default connect(mapStateToProps, { getRecipes })(Recipes);
