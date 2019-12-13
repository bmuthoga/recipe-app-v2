import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recipe from '../recipe/Recipe'
import './RecipeList.css'

class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const { onDelete } = this.props
    const recipes = this.props.recipes.map(r => (
      <Recipe onDelete={onDelete} key={r.id} {...r} />
    ))
  
    return (
      <div className="recipe-container">
        {recipes}
      </div>
    )
  }
}

export default RecipeList
