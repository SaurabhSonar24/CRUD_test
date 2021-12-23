import React from "react";
import { shallow, mount } from "enzyme";
import Todo from "../Components/Todo"
import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16' 
configure({adapter:new Adapter()});

describe("Todo", () => {

    it("renders", () => {
        shallow(<Todo />);
    });
    it("displays initial items", () => {
        const wrapper = mount(<Todo />);
        expect(wrapper.find("li table tr")).toHaveLength(3);
    });
    it("adds a new item", () => {
        const wrapper = mount(<Todo />);
        wrapper.find("input").instance().value = "cpp";
        expect(wrapper.find("input").instance().value).toEqual("cpp");
        wrapper.find('[type="submit"]').simulate("click");
        expect(wrapper.find("li table tr")).toHaveLength(4);
        expect(
            wrapper
                .find("tr td span")
                .last()
                .text()
        ).toEqual("cpp");
    });
    it("removes an item", () => {
        const wrapper = mount(<Todo />);
        wrapper
            .find("li button")
            .first()
            .simulate("click");
        expect(wrapper.find("li")).toHaveLength(1);
        expect(wrapper.find("li span").map(item => item.text())).toEqual([
            "python"
        ]);
    });
   
});

