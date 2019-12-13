import React, { Component } from 'react';
import Header from './components/header/Header'
import RecipeInput from './components/recipeinput/RecipeInput'
import RecipeList from './components/recipelist/RecipeList'
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      recipes: [
        {
          id: 0,
          img: 'spaghetti_.jpg',
          title: 'Spaghetti',
          ingredients: [ 'pasta', '8 cups water', '1 box spaghetti' ],
          instructions: 'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce'
        },
        {
          id: 1,
          img: 'milkshake.jpg',
          title: 'Milkshake',
          ingredients: [ '2 Scoops Ice Cream', '8 ounces milk' ],
          instructions: 'Combine ice cream and milk. Blend until creamy'
        },
        {
          id: 2,
          img: 'avocado_toast_.jpg',
          title: 'Avocado Toast',
          ingredients: [ '2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper' ],
          instructions: 'Toast bread. Slice avocado and slice on bread. Add salt, oil, and pepper to taste.'
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  handleSave(recipe) {
    this.setState(prevState => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId }
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [ ...this.state.recipes, newRecipe ],
        showForm: false
      }
    })
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== id)
    this.setState({ recipes })
  }
  
  render() {
    const { showForm } = this.state

    return (
      <div className="App">
        <Header onNewRecipe={() => this.setState({ showForm: true })} />
        {showForm && 
          <RecipeInput 
            onSave={this.handleSave} 
            onClose={() => this.setState({ showForm: false })}
          />
        }
        <RecipeList 
          recipes={this.state.recipes} 
          onDelete={this.onDelete} 
        />
      </div>
    )
  }
}

export default RecipeApp;
