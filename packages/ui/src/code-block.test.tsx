// TODO: Import render, screen from '@testing-library/react'
import { render, screen } from "@testing-library/react";
// TODO: Import CodeBlock from './code-block'
import { CodeBlock } from "./code-block";

// TODO: Create describe block for 'CodeBlock component'
//   - Test 1: 'renders code content'
//     - Render: <CodeBlock code="console.log('test')" />
//     - Assert: screen.getByText("console.log('test')") is in the document
//   - Test 2: 'applies monospace font'
//     - Render: <CodeBlock code="test" />
//     - Get pre element with getByText('test').closest('pre')
//     - Assert: pre has 'font-mono' class
//   - Test 3: 'uses default language javascript'
//     - Render: <CodeBlock code="const x = 1" />
//     - Component should render (default language works)
//     - Just verify code is rendered
//   - Test 4: 'accepts custom language prop'
//     - Render: <CodeBlock code="def foo():" language="python" />
//     - Assert: screen.getByText('def foo():') is in the document
//   - Test 5: 'applies dark background'
//     - Render: <CodeBlock code="test" />
//     - Get pre element with getByText('test').closest('pre')
//     - Assert: pre has 'bg-gray-900' or similar dark class

describe("CodeBlock component", () => {
  test("renders code content", () => {
    render(<CodeBlock code="console.log('test')" />);
    expect(screen.getByText("console.log('test')")).toBeInTheDocument();
  });

  test("applies monospace font", () => {
    render(<CodeBlock code="test" />);
    const pre = screen.getByText("test").closest("pre");
    expect(pre).toHaveClass("font-mono");
  });

  test("uses default language javascript", () => {
    render(<CodeBlock code="const x = 1" />);
    expect(screen.getByText("const x = 1")).toBeInTheDocument();
  });

  test("accepts custom language prop", () => {
    render(<CodeBlock code="def foo():" language="python" />);
    expect(screen.getByText("def foo():")).toBeInTheDocument();
  });

  test("applies dark background", () => {
    render(<CodeBlock code="test" />);
    const pre = screen.getByText("test").closest("pre");
    expect(pre).toHaveClass("bg-gray-900");
  });
});
