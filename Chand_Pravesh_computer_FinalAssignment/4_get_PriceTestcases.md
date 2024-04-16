## **get_Price(number)**
get the price of the computer

>Parameters:
>>number of the computer which price is to be returned

>Returns:
>>returns the price of a computer matching the given number

>Throws:
>>if no computer with the given number is  found throws an exeption `'nothing found with given'`

```js
 get_Price(number) {
        if (!number) {
            throw new Error('nothing found with given number');
        }
        for (const computer of this.#register) {
            if (computer.number === number) {
                return computer.price;
            }
        }
        throw new Error('nothing found with given number');
    }

```

## 'Test1:price of a computer of a number 2 is 123'
Create register with modified data.
```js
const register = new ComputerRegister(testData);
... register.get_Price(2);
```

returns
```json
      return 123;
```

## 'Test2:price of a computer of a number 6 is not define'
returns
```json
      return ("nothing found with given");
```

## 'Test3:get_price throws an error for missing number'
returns
```json
      return ("nothing found with given");
```
