Pravesh Chand


# **End assignment** (computer)


## Task: Create and test ComputerRegister class
Create a class `ComputerRegister` for computer data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

```json
[
  {
    "number": 1,
    "computerName": "MaxEffect 2000",
    "processor": "X-Force",
    "price": 300,
    "productionYear": 2017,
    "accessories": [
      "Cooling system",
      "Super fan",
      "super power supply"
    ],
    "details": {
      "model": "silver",
      "notes": "no comments",
      "energyclass": "A+"
    }
  },
  {
    "number": 2,
    "computerName": "Beast II",
    "processor": "X-Force",
    "price": 123,
    "productionYear": 2017,
    "accessories": [
      "coffee cup holder",
      "cleaning set",
      "super power supply"
    ],
    "details": {
      "model": "GT",
      "notes": "high quality",
      "energyclass": "B"
    }
  },
  {
    "number": 3,
    "computerName": "BigFlop Mark II",
    "processor": "X-Force",
    "price": 300,
    "productionYear": 2005,
    "accessories": [
      "cleaning set",
      "coffee cup holder",
      "Super fan"
    ],
    "details": {
      "model": "GT",
      "notes": "no comments",
      "energyclass": "E"
    }
  },
  {
    "number": 4,
    "computerName": "BigFlop Mark II",
    "processor": "X-Force",
    "price": 36,
    "productionYear": 2010,
    "accessories": [
      "Cooling system",
      "super power supply",
      "coffee cup holder"
    ],
    "details": {
      "model": "chrome",
      "notes": "no comments",
      "energyclass": "A+"
    }
  },
  {
    "number": 5,
    "computerName": "MaxEffect 2000",
    "processor": "Brain 456",
    "price": 25,
    "productionYear": 2005,
    "accessories": [
      "Super fan",
      "Cooling system",
      "super power supply"
    ]
  }
]
```


# ComputerRegister API

## Constructor

### **constructor(jsondata)**
Initializes ComputerRegister object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **get_details(searchKey)**
searches the computer matching the searchKey and if match is found returns the details object otherwise null is returned

>Parameters:
>>searchKey is the number of the computer

>Returns:
>>returns the details object of the computer matching the searchKey. If no computer matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

### **has_details(searchKey)**
Method checks based on number if the computer has `details` or not.

>Parameters:
>>searchKey is the number to be searched

>Returns:
>>Returns true if the computer matching the searchKey has `details` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

>Throws:
>>

### **get_Price(number)**
get the price of the computer

>Parameters:
>>number of the computer which price is to be returned

>Returns:
>>returns the price of a computer matching the given number

>Throws:
>>if no computer with the given number is  found throws an exeption `'nothing found with given'`

### **get_a_computer_matching_number(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key number of the computer

>Returns:
>>returns the computer object matching the number or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

### **get_total_price_of_computers_by_processor(searchValue)**
returns the total price of all computers that have the same processor than the given searchValue

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>total cumulative price of computers matching the searchValue

>Throws:
>>if no computer with the given searchValue is  found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

# The project

## Create a folder for the testproject
- the name of the folder should be `Chand_Pravesh_computer`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file