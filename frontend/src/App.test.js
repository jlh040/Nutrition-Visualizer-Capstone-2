import { render } from "@testing-library/react";
import App from './App';

// smoke test
it('renders without crashing', () => {
  render(<App />);
});
