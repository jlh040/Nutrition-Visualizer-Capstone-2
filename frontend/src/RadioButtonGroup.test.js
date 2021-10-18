import { render, fireEvent } from "@testing-library/react";
import RadioButtonGroup from './RadioButtonGroup';

// smoke test
it('renders without crashing', () => {
  render(<RadioButtonGroup />);
})