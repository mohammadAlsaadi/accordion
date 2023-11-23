import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <ul className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={el.title}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={20}
        title={"learn in react"}
        key={"learn in react"}
      >
        <p>this paragraph is only to test the components with children prop</p>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </AccordionItem>
    </ul>
  );
}
