'use strict';

beforeAll(()=>{
    console.log('beforeAll', 'init before all tests'.toUpperCase());
});

afterAll(()=>{
    console.log('afterAll','cleaning after all tests'.toUpperCase());
});

test('This is the first test', ()=>{
    console.log('first test');
});

it('This is the second test', ()=>{
    console.log('second test');
});

describe('This is a first group A',()=>{
    beforeEach(()=>{
        console.log('beforeEach','before each test in group A');
    });

    afterEach(()=>{
        console.log('afterEach', 'after each test in group A');
    });

    test('fist test in group A',()=>{
        console.log('first in A');
    });

    test('second test in group A', ()=>{
        console.log('second in A');
    });
});

describe('This is group B', ()=>{
    beforeAll(()=>{
        console.log('before all in B');
    });
    describe('This is group 1 in B',()=>{
        test('test 1 in B',()=>{
            console.log('1 in B');
        });
    });
    describe('This is group 2 in B', () => {
        test('test 2 in B', () => {
            console.log('2 in B');
        });
    });

});

describe('test concatenation function', ()=>{
    const concat=(partA,partB)=>''+partA+partB;

    test('testing that `first` and `second` results `firstsecond`',()=>{
        expect(concat('first','second')).toBe('firstsecond');
    });

    test('testing concat(1,2) returns 12', ()=>{
        expect(concat(1,2)).toBe('12');
    });
});

describe('this is testing for an exception',()=>{
    function testFunction(){
        throw Error('This is an exception');
    }

    test('function throws an exception', ()=>{
        expect(()=>testFunction()).toThrow('This is an exception');
    });
});

