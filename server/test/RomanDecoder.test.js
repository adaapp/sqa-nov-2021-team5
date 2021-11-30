const RomanDecoder = require('../services/RomanDecoder');

describe("Roman decoder test", ()=>{
    test('Check if I equals 1', () => {
        expect(RomanDecoder("I")).toBe(1);
      });
      test('Check if II equals 2', () =>{
        expect(RomanDecoder("II")).toBe(2);
      });
      test('Check if III equals 3', () =>{
        expect(RomanDecoder("III")).toBe(3);
      });
      test('Check if IV equals 4', () =>{
        expect(RomanDecoder("IV")).toBe(4);
      });
      test('Check if V equals 5', () =>{
        expect(RomanDecoder("V")).toBe(5);
      });
      test('Check if VI equals 6', () =>{
        expect(RomanDecoder("VI")).toBe(6);
      });
      test('Check if VII equals 7', () =>{
        expect(RomanDecoder("VII")).toBe(7);
      });
      test('Check if VIII equals 8', () =>{
        expect(RomanDecoder("VIII")).toBe(8);
      });
      test('Check if IX equals 9', () =>{
        expect(RomanDecoder("IX")).toBe(9);
      });
      test('Check if X equals 10', () =>{
        expect(RomanDecoder("X")).toBe(10);
      });
      test('Check if XI equals 11', () =>{
        expect(RomanDecoder("XI")).toBe(11);
      });       

})


