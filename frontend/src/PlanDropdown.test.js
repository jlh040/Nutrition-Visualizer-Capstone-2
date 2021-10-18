import { render, fireEvent } from "@testing-library/react";
import PlanDropdown from './PlanDropdown';

// smoke test
it('renders without crashing', () => {
  render(<PlanDropdown />);
});

// correctly renders the plan label
it('shows the label for the dropdown', () => {
  const { getByLabelText } = render(<PlanDropdown />);
  expect(getByLabelText('Plan')).toBeInTheDocument();
});