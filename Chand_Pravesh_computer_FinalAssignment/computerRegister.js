'use strict';

module.exports = class ComputerRegister{
    #register
    constructor(data){
        if (!data) throw new Error(' data missing');
        this.#register=data;
    }

    get_details(searchKey) {
        if (!searchKey ) {
          throw new Error("Data miss or key not found");
        }
        for (const computer of this.#register) {
            if (computer.number === searchKey) {
                return computer.details || null;
            }
        }
        
        return null;
    }

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




    

    

    

    
}

