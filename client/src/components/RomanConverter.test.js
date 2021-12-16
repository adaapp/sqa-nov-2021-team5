import { shallow } from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"

import RomanConverter from "./RomanConverter"
import Button from "./RomanConverter"
import Input from "./RomanConverter"

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

describe('Button', () => {
    
    test('should be defined', () => {
      expect(Button).toBeDefined();
    });
    
    test('test to check, if button renders correctly', () => {
      const wrapper = shallow(
        <Button name='button test' />
      );
      expect(wrapper).toMatchSnapshot();
    });
   });

   describe('Input', () => {
       test('should be defined', () => {
           expect(Input).toBeDefined()
       })

       test('test to check, if input field renders correctly', () => {
        const wrapper = shallow(
          <Input name='input test' />
        );
        expect(wrapper).toMatchSnapshot();
      });
   })


