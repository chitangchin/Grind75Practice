const twoSum = require("../../week 1/twoSum");

describe('Two Sum -> returns indices of the two numbers equal to target', () => {
    test('Two Sum: [3,2,4], 6', () => {
        expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
    })
    test('Two Sum: [3,3], 6', () => {
        expect(twoSum([3,3], 6)).toStrictEqual([0,1]);
    })
})