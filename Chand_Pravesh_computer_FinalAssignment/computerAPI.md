# Computer API



## data 
Data will be in a json file. Computer name be in the data array only once. The computer name is unique sof for example Maxeffect 2000 and the name must not exist twice in the json. We assume that the json file is valid and no field are missing.

### datastorage.json

```json
[
  {
    "number": 1,
    "computerName": "MaxEffect 2000",
    "processor": "X-Force",
    "price": 300,
    "productionYear": 2017,
    "accessories": ["Cooling system","Super fan","super power supply"],
    "details": {"model": "silver","notes": "no comments","energyclass": "A+"}
  },
  {
    "number": 2,
    "computerName": "Beast II",
    "processor": "X-Force",
    "price": 123,
    "productionYear": 2017,
    "accessories": ["coffee cup holder","cleaning set","super power supply"],
    "details": {"model": "GT","notes": "high quality","energyclass": "B"}
  },
  {
    "number": 3,
    "computerName": "BigFlop Mark II",
    "processor": "X-Force",
    "price": 300,
    "productionYear": 2005,
    "accessories": ["cleaning set","coffee cup holder","Super fan"],
    "details": {"model": "GT","notes": "no comments","energyclass": "E"}
  },
  {
    "number": 4,
    "computerName": "BigFlop Mark II",
    "processor": "X-Force",
    "price": 36,
    "productionYear": 2010,
    "accessories": ["Cooling system","super power supply","coffee cup holder"],
    "details": {"model": "chrome","notes": "no comments","energyclass": "A+"}
  },
  {
    "number": 5,
    "computerName": "MaxEffect 2000",
    "processor": "Brain 456",
    "price": 25,
    "productionYear": 2005,
    "accessories": ["Super fan","Cooling system","super power supply"]
  }
]
```

## Class ComputerRegister


## Constructor

### **constructor(jsondata)**
Computer json array data is passed as a parameter `datastorage`.
If parameter is missing, throw `'data storage missing'`.



## Methods


### **get_details(searchKey)**
searches the computer matching the searchKey and if match is found returns the details object otherwise null is returned

For example:
```json
["model", "notes", "energyclass"]
```


###  **has_details(searchKey)**
Method checks based on number if the computer has `details` or not. In here the searchKey is a number and returns us true of false if the computer matching the searchkey has `details` objects. It should not be empty object. It gives true or false.



### **get_Price(number)**
get the price of the computer. Once the number of computer is entered if must returns the price of the computer matching the given number other wise if must return `'nothing found with given'`


### **get_a_computer_matching_number(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique. The searchKey is the primary key number of the computer. It must returns the computer object matching the number or null if there is no match.if parameter searchKey is missing, throws an exception `'missing parameter'`

### **get_total_price_of_computers_by_processor(searchValue)**
It returns the total price of all computers that have the same processor than the given searchValue. Once the searchvalue is processor of the computer to be searched it total the cumulative price of searchvalue matching and if it doesn't match to any given process it return `'nothing found with given'` and if the parameter searchValue is missing, an exception `'missing parameter'` is thrown


