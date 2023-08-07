import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Card from "../../components/Card";

describe("Render the default card and Custom card", () => {
  test("renders card with default props", () => {
    render(<Card />);
    const DefaultCardEl = screen.getByTestId("card");
    const TagItems = screen.getAllByRole("listitem");
    expect(DefaultCardEl).toHaveTextContent("title").toBeInTheDocument();
    expect(DefaultCardEl).toHaveTextContent("description").toBeInTheDocument();
    expect(TagItems).toHaveLength(3);
  });
  test("renders card with custom props", () => {
    const props = {
      ClassName: "bg-blue-300",
      src: "https://source.unsplash.com/A5rCN8626Ck",
      title: "Custom Title",
      description: `Culpa enim exercitation esse qui velit incididunt Lorem non irure consequat.`,
      tags: ["Photography", "Travel", "Winter"],
    };
    render(
      <Card
        ClassName={props.ClassName}
        src={props.src}
        title={props.title}
        description={props.description}
        tags={props.tags}
      />,
    );
    const CustomCardEl = screen.getByTestId("card");
    const CustomTagItems = screen.getAllByRole("listitem");
    // const CustomCardClasses = screen.getByRole("class").split(" ");
    expect(CustomCardEl).toHaveTextContent(props.title).toBeInTheDocument();
    expect(CustomCardEl)
      .toHaveTextContent(props.description)
      .toBeInTheDocument();
    expect(CustomTagItems).toHaveLength(3);
    expect(CustomTagItems[0])
      .toHaveTextContent(props.tags[0])
      .toBeInTheDocument();
    expect(CustomTagItems[1])
      .toHaveTextContent(props.tags[1])
      .toBeInTheDocument();
    expect(CustomTagItems[2])
      .toHaveTextContent(props.tags[2])
      .toBeInTheDocument();
    // expect(CustomCardClasses[CustomCardClasses.length - 1]).toHaveClass(
    //   props.ClassName,
    // );
  });
});
