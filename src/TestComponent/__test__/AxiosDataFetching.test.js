import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from 'axios';

import AxiosDataFetching from '../AxiosDataFetching';

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

it('renders user data', async() => {
    const fakeUser = {
        name: "Joni Baez",
        age: "32",
        address: "123, Charming Avenue"
      };
    
    const officeList = [{id:1, name: 'RPQB'}, {id:2, name: 'HM'}]

    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation((url) => {
      switch (url) {
        case 'api/user':
          return Promise.resolve(fakeUser);
        case 'api/office':
          return Promise.resolve(officeList);
      }
    });

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(<AxiosDataFetching id="123" />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(container.textContent).toContain(fakeUser.address);

    const span1 = document.querySelector("[data-testid=test1]");
    const span2 = document.querySelector("[data-testid=test2]");
    expect(span1.innerHTML).toBe("RPQB");
    expect(span2.innerHTML).toBe("HM");

    // remove the mock to ensure tests are completely isolated
    // global.fetch.mockRestore();
});