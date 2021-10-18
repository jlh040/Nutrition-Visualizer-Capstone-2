import { render, fireEvent } from "@testing-library/react";
import RecipeList from './RecipeList';

// smoke test
it('renders without crashing', () => {
  render(<RecipeList />);
});

// the button text tells the user to pick recipes when the page first loads
it('does not allow the user to compare recipes upon page render', () => {
  const { getByText, queryByText } = render(<RecipeList />);

  expect(getByText('Please select three recipes')).toBeInTheDocument();
  expect(queryByText('Compare')).not.toBeInTheDocument();
});