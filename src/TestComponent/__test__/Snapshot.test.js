import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Rendering from "../Rendering";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a greeting", () => {
  act(() => {
    render(<Rendering />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<span>Hey, Stranger</span>"`
  ); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Rendering name="Jenny" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Hello, Jenny</h1>"`
  ); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Rendering name="Margaret" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Hello, Margaret</h1>"`
  ); /* ... gets filled automatically by jest ... */
});
