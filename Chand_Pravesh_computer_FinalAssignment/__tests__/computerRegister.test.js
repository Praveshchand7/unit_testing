'use strict';

const ComputerRegister = require('../computerRegister');
const details = require('../datastorage.json');

const testData =[
    {
        number: 1,
        computerName: "MaxEffect 2000",
        processor: "X-Force",
        price: 300,
        productionYear: 2017,
        accessories: ["Cooling system", "Super fan", "super power supply"],
        details: {
                        model: "silver",
                        notes: "no comments",
                        energyclass: "A+"
                 }
    },
    {
        number: 2,
        computerName: "Beast II",
        processor: "X-Force",
        price: 123,
        productionYear: 2017,
        accessories: ["coffee cup holder", "cleaning set", "super power supply"],
        details: {
                        model: "GT",
                        notes: "high quality",
                        energyclass: "B"
                }
    },
    {
        number: 3,
        computerName: "BigFlop Mark II",
        processor: "X-Force",
        price: 300,
        productionYear: 2005,
        accessories: ["cleaning set", "coffee cup holder", "Super fan"],
        details: {
                        model: "GT",
                        notes: "no comments",
                        energyclass: "E"
                 }
    },
    {
        number: 4,
        computerName: "BigFlop Mark II",
        processor: "X-Force",
        price: 36,
        productionYear: 2010,
        accessories: ["Cooling system", "super power supply", "coffee cup holder"],
        details: {
            model: "chrome",
            notes: "no comments",
            energyclass: "A+"
        }
    },
    {
        number: 5,
        computerName: "MaxEffect 2000",
        processor: "Brain 456",
        price: 25,
        productionYear: 2005,
        accessories: ["Super fan", "Cooling system", "super power supply"]
    }
  ];


// Create an instance of ComputerRegister before each test

let register;

beforeEach(() => {
    register = new ComputerRegister(testData);
});

describe('Testing constructor', ()=>{
    test('Missing parameter throws an exception', ()=>{
        expect(() => new ComputerRegister()).toThrow('data missing');
    });
});

describe('Testing get_detail for computers', ()=>{
    test('Test1:checking the computer details of given number 1', () => {
        //const detail1 = register.get_details(1)
        expect(register.get_details(1)).toEqual({
            model: "silver",
            notes: "no comments",
            energyclass: "A+"
        });
    });

    test('Test2:checking the computer details of given number 5, Null details', () => {
        //const detail1 = register.get_details(5)
        expect(register.get_details(5)).toEqual(null);
    });

    test('Test3:get_details throws an error for missing searchKey', () => {
        expect(() => {
                 register.get_details(); // Missing searchKey
       }).toThrow();
    });

    test('Test4:get_details throws an error for missing data for the given number of computer', () => {
        expect(register.get_details(10)).toEqual(null);
    });

});


describe('Has details return false or true  ', ()=>{

    test('Test1:true if number does have details', ()=>{
        expect(register.has_details(2)).toBe(true);
    });

    test('Test2:false if number does not have details', ()=>{
        expect(register.has_details(6)).toBe(false);
    });

    test('Test3:has_details return false value for missing searchKey', () => {

    // (missing searchKey)
       const searchKey = undefined; 
    // Call has_details method with the missing searchKey
       const result = register.has_details(searchKey);

    // Check if result is false
       expect(result).toBe(false);
        
    });

        
});

describe('Price of the given number computer', ()=>{
    test('Test1:price of a computer of a number 2 is 123', ()=>{
        expect(register.get_Price(2)).toEqual(123);
    });

    test('Test2:price of a computer of a number 6 is not define', ()=>{
        const number = 6;
    
        // Use expect to check if calling get_Price with the missing number throws an error
        expect(() => {
            register.get_Price(number);
        }).toThrow('nothing found with given');
    });

    test('Test3:get_price throws an error for missing number', () => {
       
        // Use an invalid number (missing number)
        const number = undefined;
    
        // Use expect to check if calling get_Price with the missing number throws an error
        expect(() => {
            register.get_Price(number);
        }).toThrow('nothing found with given');
    });
});

describe('Testing computers matching number', ()=>{
    test('Test1:non matching number of computer where number is 10', ()=>{
        expect(register.get_a_computer_matching_number(10)).toBe(null);
    
    });

    test('Test2:matching number of computer where number is 1', ()=>{
        expect(register.get_a_computer_matching_number(1)).toEqual({"accessories": ["Cooling system", "Super fan", "super power supply"], "computerName": "MaxEffect 2000", "details": {"energyclass": "A+", "model": "silver", "notes": "no comments"}, "number": 1, "price": 300, "processor": "X-Force", "productionYear": 2017});
    
    });

    test('Test3:get_a_computer_matching_number throws an error for missing number', () => {
       
        // Use an invalid number (missing number)
        const number = undefined;
    
        // Use expect to check if calling get_Price with the missing number throws an error
        expect(() => {
            register.get_a_computer_matching_number(number);
        }).toThrow('nothing found with given number');
    });
});


describe('Total Price of a given processor', ()=>{
    test('Test1:get_total_price_of_computers_by_processor returns the correct total price for "X-Force" processor', () => {

        const searchValue = "X-Force";
       
        const expectedTotalPrice = 300 + 123 + 300 + 36; 
        expect(register.get_total_price_of_computers_by_processor(searchValue)).toEqual(expectedTotalPrice);
    });

    test('Test2:throws an error for missing processor or key', () => {
       
        // Use an invalid number (missing number)
        const searchValue = undefined;
    
        // Use expect to check if calling get_Price with the missing number throws an error
        expect(() => {
            register.get_total_price_of_computers_by_processor(searchValue);
        }).toThrow('missing parameter');
    });
});




