import { render, screen } from "@testing-library/react";
import Header from "../Header";

// Get By

it("renders the same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("renders the same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// Find By (Needs async/await)

// it("renders the same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// Query By (Does not thow error if element not found)

// it("renders the same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// AllBy

// it("renders the same text passed into title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getAllByRole("heading");
//   expect(headingElement.length).toBe(1);
// });
