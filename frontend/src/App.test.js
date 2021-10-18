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
})