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
      test('Check if XII equals 12', () =>{
        expect(RomanDecoder("XII")).toBe(12);
      });
      test('Check if XV equals 15', () =>{
        expect(RomanDecoder("XV")).toBe(15);
      });
      test('Check if XX equals 20', () =>{
        expect(RomanDecoder("XX")).toBe(20);
      });   
      test('Check if XXX equals 30', () =>{
        expect(RomanDecoder("XXX")).toBe(30);
      });
      test('Check if XL equals 40', () =>{
        expect(RomanDecoder("XL")).toBe(40);
      });
      test('Check if L equals 50', () =>{
        expect(RomanDecoder("L")).toBe(50);
      });
      test('Check if LX equals 60', () =>{
        expect(RomanDecoder("LX")).toBe(60);
      });
      test('Check if LXX equals 70', () =>{
        expect(RomanDecoder("LXX")).toBe(70);
      });
      test('Check if LXXX equals 80', () =>{
        expect(RomanDecoder("LXXX")).toBe(80);
      }); 
      test('Check if XC equals 90', () =>{
        expect(RomanDecoder("XC")).toBe(90);
      }); 
      test('Check if C equals 100', () =>{
        expect(RomanDecoder("C")).toBe(100);
      });
      test('Check if CI equals 101', () =>{
        expect(RomanDecoder("CI")).toBe(101);
      });
      test('Check if CII equals 102', () =>{
        expect(RomanDecoder("CII")).toBe(102);
      });
      test('Check if CII equals 105', () =>{
        expect(RomanDecoder("CV")).toBe(105);
      });
      test('Check if CX equals 110', () =>{
        expect(RomanDecoder("CX")).toBe(110);
      });
      test('Check if CXV equals 115', () =>{
        expect(RomanDecoder("CXV")).toBe(115);
      });
      test('Check if CXX equals 120', () =>{
        expect(RomanDecoder("CXX")).toBe(120);
      });
      test('Check if CL equals 150', () =>{
        expect(RomanDecoder("CL")).toBe(150);
      });
      test('Check if CC equals 200', () =>{
        expect(RomanDecoder("CC")).toBe(200);
      });
      test('Check if CC equals 300', () =>{
        expect(RomanDecoder("CCC")).toBe(300);
      });
      test('Check if CD equals 400', () =>{
        expect(RomanDecoder("CD")).toBe(400);
      });
      test('Check if D equals 500', () =>{
        expect(RomanDecoder("D")).toBe(500);
      });
      test('Check if DC equals 600', () =>{
        expect(RomanDecoder("DC")).toBe(600);
      });
      test('Check if DCC equals 700', () =>{
        expect(RomanDecoder("DCC")).toBe(700);
      });
      test('Check if DCCC equals 800', () =>{
        expect(RomanDecoder("DCCC")).toBe(800);
      });
      test('Check if CM equals 900', () =>{
        expect(RomanDecoder("CM")).toBe(900);
      });
      test('Check if M equals 1000', () =>{
        expect(RomanDecoder("M")).toBe(1000);
      });
      

})


