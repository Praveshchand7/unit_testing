# Dice API

This is a Dice class for dice games.Dice holds the number of dots. 
The number of dots is between 1 and upper bound (included). 
The maximum upper bound is 20. The minimum upper bound is 2. 
If the dice hasn't been rolled, the number of dots is 0. 
After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructor**

-   initializes the dice with upper bound that is passed as a parameter
-   if no upper bound is not given, the default upper bound will be 6
-   initializes the dot count to 0.

-   if upper bound is not an integer and not a integer, throw an exception
  `upper bound must be an integer`
-   if the upper bound is not between 2 and 20, an exception is thrown:
    -   upper bound >20 : `upper bound too big`
    -   upper bound <2  : `upper bound too small`

### methods


#### **roll**
- rolls the dice
- when rolled, the dot count will become a random number between 1 and 
  upper bound
- returns nothing 

### toString**
- returns dot count as a string. for example :`'4'`
- if dice hasn't been rolled yet, returns a text ` 'not rolled yet' `

### GETTERS

#### **dots**
-   reutns the number of dots

#### **minimumValue**
-   returns the minimum number of dots. It should be 1.

#### **maximumValue**
-   returns the upper bound of dice.
  


- 
- 

