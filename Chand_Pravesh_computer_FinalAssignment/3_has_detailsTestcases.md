### **has_details(searchKey)**
Method checks based on number if the computer has `details` or not.

>Parameters:
>>searchKey is the number to be searched

>Returns:
>>Returns true if the computer matching the searchKey has `details` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

>Throws:


```js
has_details(searchKey) {
        if (!searchKey) {
            //throw new Error("Data miss or key not found");
             
        return false;
            
        }
        for (const computer of this.#register) {
            if (computer.number === searchKey) {
                return !!computer.details;
            }
        }
        
        return false;
    }
```
##  'Test1:true if number does have details'
Create register with modified data.
```js
const register = new ComputerRegister(testData);
... register.has_details(2);
```
returns
```json
      return true;
```

## 'Test2:false if number does not have details'
returns
```json
      return false;
```

## 'Test3:has_details return false value for missing searchKey'
returns
```json
   
   return false;
```