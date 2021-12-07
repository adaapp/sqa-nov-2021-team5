
const Enzyme = require('enzyme');
// Import Adapter
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
//use adapter
Enzyme.configure({ adapter: new Adapter() });

// let wrapped = mount(<RomanConverter />);
// expect(wrapped.find("input").get(0).props.value).toEqual("roman");


describe("passing test", () => {
    it("1 + 1 equals 2", () => {
        expect(1+1).toEqual(2)
    })
})

describe("Content input", () => {
    it("Should capture content correctly onChange", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "Testing";
        content.simulate("change");
        expect(setState).toHaveBeenCalledWith("Testing");
    });

    it("Should capture content correctly onChange", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "Testing";
        content.simulate("change");
        expect(setState).toHaveBeenCalledWith("Testing");
    });
})

describe("Roman decryption tests", () => {
    it("I equals to 1", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "I";
        content.simulate("change");
        expect(normalInput).toEqual("1")
    }),

    it("II equals to 2", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "II";
        content.simulate("change");
        expect(normalInput).toEqual("2")
    })

    it("V equals to 5", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "V";
        content.simulate("change");
        expect(normalInput).toEqual("5")
    })

    it("X equals to 10", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "X";
        content.simulate("change");
        expect(normalInput).toEqual("10")
    })

    it("XX equals to 20", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "XX";
        content.simulate("change");
        expect(normalInput).toEqual("20")
    })

    it("L equals to 50", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "L";
        content.simulate("change");
        expect(normalInput).toEqual("50")
    })

    it("C equals to 100", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "C";
        content.simulate("change");
        expect(normalInput).toEqual("100")
    })

    it("D equals to 500", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "D";
        content.simulate("change");
        expect(normalInput).toEqual("500")
    })

    it("M equals to 1000", () => {
        const content = wrapper.find("input").at(0);
        content.instance().value = "M";
        content.simulate("change");
        expect(normalInput).toEqual("1000")
    })
})

describe("Roman encryption tests", () => {
    it("1 equals to I", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "1";
        content.simulate("change");
        expect(normalInput).toEqual("I")
    }),

    it("2 equals to II", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "2";
        content.simulate("change");
        expect(normalInput).toEqual("II")
    })

    it("5 equals to V", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "5";
        content.simulate("change");
        expect(normalInput).toEqual("V")
    })

    it("10 equals to X", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "10";
        content.simulate("change");
        expect(normalInput).toEqual("X")
    })

    it("20 equals to XX", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "20";
        content.simulate("change");
        expect(normalInput).toEqual("XX")
    })

    it("50 equals to L", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "50";
        content.simulate("change");
        expect(normalInput).toEqual("L")
    })

    it("100 equals to C", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "100";
        content.simulate("change");
        expect(normalInput).toEqual("C")
    })

    it("500 equals to D", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "500";
        content.simulate("change");
        expect(normalInput).toEqual("D")
    })

    it("1000 equals to M", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "1000";
        content.simulate("change");
        expect(normalInput).toEqual("M")
    })
})