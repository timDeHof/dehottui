import React, { ReactNode } from "react";

interface TestAreaProps {
  children: ReactNode;
}

const TestArea = ({ children }: TestAreaProps) => {
  return (
    <section
      style={{ border: "2px solid #ccc", margin: "2rem", padding: "2rem" }}>
      <div>{children}</div>
    </section>
  );
};

export default TestArea;
