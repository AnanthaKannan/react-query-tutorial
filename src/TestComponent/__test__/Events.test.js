import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Events from '../Events';

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


it("changes value when clicked", () => {

    const onChange = jest.fn();
    act(() => {
        render(<Events onChange={onChange} />, container);
    });

    // On initial rendering
    const button = document.querySelector("[data-testid=toggle]");

    expect(button.innerHTML).toBe("Turn on");

    // executed on mouse click
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn off");

    // try to call multiple times
    act(() => {
        for (let i = 0; i < 5; i++) {
          button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });
    
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(button.innerHTML).toBe("Turn on");

});