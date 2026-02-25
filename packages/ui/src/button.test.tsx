import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-blue-500");
  });

  it("applies secondary variant when specified", () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-gray-200");
    expect(button).toHaveClass("text-gray-900");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as button element", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });
});
