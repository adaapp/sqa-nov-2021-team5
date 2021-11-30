const RomanEncoder = require('../services/RomanEncoder');

describe("Roman encoder test", ()=>{
  test('Check if 1 equals I', () => {
      expect(RomanEncoder(1)).toBe("I");
    });
    test('Check if 2 equals II', () =>{
      expect(RomanEncoder(2)).toBe("II");
    });
    test('Check if 3 equals III', () =>{
      expect(RomanEncoder(3)).toBe("III");
    });
    test('Check if 4 equals IV', () =>{
      expect(RomanEncoder(4)).toBe("IV");
    });
    test('Check if 5 equals V', () =>{
      expect(RomanEncoder(5)).toBe("V");
    });
    test('Check if 6 equals VI', () =>{
      expect(RomanEncoder(6)).toBe("VI");
    });
    test('Check if 7 equals VII', () =>{
      expect(RomanEncoder(7)).toBe("VII");
    });
    test('Check if 8 equals VIII', () =>{
      expect(RomanEncoder(8)).toBe("VIII");
    });
    test('Check if 9 equals IX', () =>{
      expect(RomanEncoder(9)).toBe("IX");
    });
    test('Check if 10 equals X', () =>{
      expect(RomanEncoder(10)).toBe("X");
    });
    test('Check if 11 equals XI', () =>{
      expect(RomanEncoder(11)).toBe("XI");
    });
    test('Check if 12 equals XII', () =>{
      expect(RomanEncoder(12)).toBe("XII");
    });
    test('Check if 15 equals XV', () =>{
      expect(RomanEncoder(15)).toBe("XV");
    });
    test('Check if 20 equals XX', () =>{
      expect(RomanEncoder(20)).toBe("XX");
    });
    test('Check if 30 equals XXX', () =>{
      expect(RomanEncoder(30)).toBe("XXX");
    });
    test('Check if 40 equals XL', () =>{
      expect(RomanEncoder(40)).toBe("XL");
    });
    test('Check if 50 equals L', () =>{
      expect(RomanEncoder(50)).toBe("L");
    });
    test('Check if 60 equals LX', () =>{
      expect(RomanEncoder(60)).toBe("LX");
    });       
    test('Check if 70 equals LXX', () =>{
      expect(RomanEncoder(70)).toBe("LXX");
    });
    test('Check if 80 equals LXXX', () =>{
      expect(RomanEncoder(80)).toBe("LXXX");
    });
    test('Check if 90 equals XC', () =>{
      expect(RomanEncoder(90)).toBe("XC");
    });
    test('Check if 100 equals C', () =>{
      expect(RomanEncoder(100)).toBe("C");
    });
    test('Check if 101 equals CI', () =>{
      expect(RomanEncoder(101)).toBe("CI");
    });
    test('Check if 102 equals CII', () =>{
      expect(RomanEncoder(102)).toBe("CII");
    });
    test('Check if 105 equals CV', () =>{
      expect(RomanEncoder(105)).toBe("CV");
    });
    test('Check if 110 equals CX', () =>{
      expect(RomanEncoder(110)).toBe("CX");
    });
    test('Check if 115 equals CXV', () =>{
      expect(RomanEncoder(115)).toBe("CXV");
    });
    test('Check if 120 equals CXX', () =>{
      expect(RomanEncoder(120)).toBe("CXX");
    });
    test('Check if 150 equals CL', () =>{
      expect(RomanEncoder(150)).toBe("CL");
    });
    test('Check if 200 equals CC', () =>{
      expect(RomanEncoder(200)).toBe("CC");
    });
    test('Check if 300 equals CCC', () =>{
      expect(RomanEncoder(300)).toBe("CCC");
    });
    test('Check if 400 equals CD', () =>{
      expect(RomanEncoder(400)).toBe("CD");
    });
    test('Check if 500 equals D', () =>{
      expect(RomanEncoder(500)).toBe("D");
    });
    test('Check if 600 equals DC', () =>{
      expect(RomanEncoder(600)).toBe("DC");
    });
    test('Check if 700 equals DCC', () =>{
      expect(RomanEncoder(700)).toBe("DCC");
    });
    test('Check if 800 equals DCCC', () =>{
      expect(RomanEncoder(800)).toBe("DCCC");
    });
    test('Check if 900 equals CM', () =>{
      expect(RomanEncoder(900)).toBe("CM");
    });
    test('Check if 1000 equals M', () =>{
      expect(RomanEncoder(1000)).toBe("M");
    });


})