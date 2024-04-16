### **get_total_price_of_computers_by_processor(searchValue)**
returns the total price of all computers that have the same processor than the given searchValue

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>total cumulative price of computers matching the searchValue

>Throws:
>>if no computer with the given searchValue is  found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

```js
get_total_price_of_computers_by_processor(searchValue) {
        if (!searchValue) {
            throw new Error('missing parameter');
        }
        let total_price = 0;
        for (const computer of this.#register) {
            if (computer.processor === searchValue) {
                total_price += computer.price || 0;
            }
        }
        if (total_price === 0) {
            throw new Error('nothing found with given processor');
        }
        return total_price;
}


```

## 'Test1:get_total_price_of_computers_by_processor returns the correct total price for "X-Force" processor'

Create register with modified data.
```js
const register = new ComputerRegister(testData);
... register.get_total_price_of_computers_by_processor(searchValue);
```
returns
```json
      return 759;
```

## 'Test2:throws an error for missing processor or key'

returns
```json
      return ("missing parameter");
```
