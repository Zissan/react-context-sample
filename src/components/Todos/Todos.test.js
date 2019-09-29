import React from "react";
import { Todos } from "./Todos";
import { shallow } from "enzyme";

function renderTodos(args = {}) {
  const defaultProps = {};

  const props = { ...defaultProps, ...args };
  return shallow(<Todos {...props} />);
}

describe("Todos", () => {
  describe("when renders", () => {
    it("should contain one h1", () => {
      const wrapper = renderTodos();
      expect(wrapper.find("h1").length).toEqual(1);
    });
  });
});
