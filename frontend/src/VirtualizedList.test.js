import { render, fireEvent } from "@testing-library/react";
import VirtualizedList from './VirtualizedList';

// smoke test
it('renders without crashing', () => {
  render(<VirtualizedList />);
})