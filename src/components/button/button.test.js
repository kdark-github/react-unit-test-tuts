import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";
afterEach(() => {
  cleanup();
});

jest.mock("../Comp1", () => ({ name }) => {
  <div> {`Comp1 prop ${name}`}</div>;
});

const mockedOnClick = jest.fn();
test("Button test case 1", () => {
  render(<Button label="Submit" onClick={mockedOnClick} />);
  expect(screen.getByText("Submit")).toBeInTheDocument();
  const btn = screen.getAllByRole("button");
  fireEvent.click(btn[0]);
  expect(mockedOnClick).toBeCalled();
  fireEvent.click(btn[1]);
  expect(mockedOnClick).toBeCalledTimes(2); //true

  expect('Comp1 prop darshan').toBeInTheDocument();

});
