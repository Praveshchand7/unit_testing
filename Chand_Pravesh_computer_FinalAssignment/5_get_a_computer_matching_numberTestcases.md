
### **get_a_computer_matching_number(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key number of the computer

>Returns:
>>returns the computer object matching the number or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`



```js
get_a_computer_matching_number(searchKey) {
        if (!searchKey) {
            throw new Error('nothing found with given number');
        }
        for (const computer of this.#register) {
            if (computer.number === searchKey) {
                return computer;
            }
        }
        return null;
    }


```
##  'Test1:non matching number of computer where number is 10'
Create register with modified data.
```js
const register = new ComputerRegister(testData);
... register.get_a_computer_matching_number(10);

```
returns
```json
      return null;
```

## 'Test2:matching number of computer where number is 1'
returns
```json
      return ({"accessories": ["Cooling system", "Super fan", "super power supply"], "computerName": "MaxEffect 2000", "details": {"energyclass": "A+", "model": "silver", "notes": "no comments"}, "number": 1, "price": 300, "processor": "X-Force", "productionYear": 2017});
```

## 'Test3:get_a_computer_matching_number throws an error for missing number
```json
      return ("nothing found with given number");
```
