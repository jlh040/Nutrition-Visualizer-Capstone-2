import { render } from "@testing-library/react";
import PlanDropdown from './PlanDropdown';

// smoke test
it('renders without crashing', () => {
  render(<PlanDropdown />);
})