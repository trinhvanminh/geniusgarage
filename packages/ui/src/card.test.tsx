import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card component", () => {
  it("renders children content", () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies base styles", () => {
    render(<Card>Test</Card>);
    const container = screen.getByText("Test").parentElement;
    expect(container).toHaveClass("bg-white");
    expect(container).toHaveClass("rounded-lg");
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Test</Card>);
    const container = screen.getByText("Test").parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("renders multiple children", () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Content</p>
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <Card title="Card Title">
        <p>Card content</p>
      </Card>,
    );
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });
});
