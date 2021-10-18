import { render, fireEvent } from "@testing-library/react";
import RecipeList from './RecipeList';

// smoke test
it('renders without crashing', () => {
  render(<RecipeList />);
});