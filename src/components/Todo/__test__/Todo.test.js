import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

// Integration test

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const btnElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(btnElement);
  });
};

describe("Todo", () => {
  it("should render input text in the todo list", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple tasks", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping", "Pet my cat", "Clean my room"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
