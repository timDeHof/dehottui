import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Button from "../../components/Button/Button";

describe("Render the button and trigger the onClick Event", () => {
  const onClick = vi.fn(); // Mock onClick event
  test("Render the button", () => {
    render(<Button onClick={onClick}>DehottUI</Button>);
    const buttonEl = screen.getByRole("button", { name: /DehottUI/i });

    expect(buttonEl).toBeInTheDocument();
  });
  test("Trigger the onClick Event", () => {
    render(<Button onClick={onClick}>DehottUI</Button>);
    const buttonEl = screen.getByRole("button", { name: /DehottUI/i });
    fireEvent.click(buttonEl); // simulate a click event on the button
    expect(onClick).toHaveBeenCalled();
  });
});
