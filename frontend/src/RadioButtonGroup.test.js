import { render, fireEvent } from "@testing-library/react";
import RadioButtonGroup from './RadioButtonGroup';

// smoke test
it('renders without crashing', () => {
  render(<RadioButtonGroup />);
});

// check that the buttons show up
it('shows two buttons', () => {
  const { getByDisplayValue } = render(<RadioButtonGroup />);

  // expect the fat button to show up
  expect(getByDisplayValue('fat')).toBeInTheDocument();

  // expect the calorie button to show up
  expect(getByDisplayValue('calories')).toBeInTheDocument();
})