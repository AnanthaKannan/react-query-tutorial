import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Rendering from '../Rendering';

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

it("render with or without name", () => {
    act(() => {
        render(<Rendering />, container);
      });
      expect(container.textContent).toBe("Hey, Stranger");
    
      act(() => {
        render(<Rendering name="Jenny" />, container);
      });
      expect(container.textContent).toBe("Hello, Jenny");
    
      act(() => {
        render(<Rendering name="Margaret" />, container);
      });
      expect(container.textContent).toBe("Hello, Margaret");
});