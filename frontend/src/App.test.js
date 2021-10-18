import { render } from "@testing-library/react";
import App from './App';

// smoke test
it('renders without crashing', () => {
  render(<App />);
});

// headline displays correctly
it('displays the page header upon page render', () => {
  const { getByText } = render(<App />);
  expect(getByText('Craft your summer body!')).toBeInTheDocument();
});

// graph displays correctly
it('shows the graph upon page render', () => {
  const { getByText } = render(<App />);
  expect(getByText('Amount of fat (grams)')).toBeInTheDocument();
});

// virtualized list of food displays correctly
it('shows the list of foods upon page render', () => {
  const { getByText } = render(<App />);
  expect(getByText('Nigerian snail stew')).toBeInTheDocument();
  expect(getByText('Summer Berry Salad')).toBeInTheDocument();
  expect(getByText('Doughnuts')).toBeInTheDocument();
});