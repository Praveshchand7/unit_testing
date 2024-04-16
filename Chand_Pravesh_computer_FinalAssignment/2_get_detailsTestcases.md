### **get_details(searchKey)**
searches the computer matching the searchKey and if match is found returns the details object otherwise null is returned

>Parameters:
>>searchKey is the number of the computer

>Returns:
>>returns the details object of the computer matching the searchKey. If no computer matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

```js
get_details(searchKey) {
        if (!searchKey) {
            return null;
        }
        for (const computer of this.data) {
            if (computer.number === searchKey) {
                return computer.details || null;
            }
        }
        return null;
    }

```
##  'Test1: checking the computer details of given number 1'
Create register with modified data.
```js
const register = new ComputerRegister(testData);
... register.getdetails(1);
```

returns
```json
        ({
            model: "silver",
            notes: "no comments",
            energyclass: "A+"
        });
```

## 'Test2: checking the computer details of given number 5, Null details'
returns
```json
      return null;
```

## 'Test3: get_details throws an error for missing searchKey'
returns
```json
       return ("Data miss or key not found");
```

## 'Test4: get_details throws an error for missing data for the given number of computer'
returns
```json
      return null;
```