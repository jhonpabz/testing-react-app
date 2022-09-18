import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../Todo";

afterEach(() => {
  cleanup();
});

test("should render non completed todo component", () => {
  const todo = { id: 1, title: "learn testing", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("learn testing");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("should render completed todo component", () => {
  const todo = { id: 2, title: "learn laravel", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("learn laravel");
  // expect(todoElement).toContainHTML("<strike>");
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "learn testing", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
