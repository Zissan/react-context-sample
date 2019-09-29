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
    it("should contain no todo", () => {
      const wrapper = renderTodos();
      expect(wrapper.find(".todo").length).toEqual(0);
    });
  });

  describe("when Add button is click once", () => {
    it("should contain one todo", () => {
      const wrapper = renderTodos();
      wrapper
        .find("button")
        .first()
        .simulate("click");
      expect(wrapper.find(".todo").length).toEqual(1);
    });
  });
});
