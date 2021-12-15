import { shallow } from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"

import RomanConverter from "./RomanConverter"

describe("Smoke test", () => {
    it("1 + 1 equals 2", () => {
        expect(1+1).toEqual(2)
    })
})


describe("Rendering Test", () => {
    test("Test to check, if component renders correctly", () => {
    const wrapper = shallow(<RomanConverter/>)

    expect(toJSON(wrapper)).toMatchSnapshot()
})
})


