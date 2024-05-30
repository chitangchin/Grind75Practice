function twoSum(nums, target) {
    //Exactly one solution
    //Cannot use the same element twice
    //Cache
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[target - nums[i]] != null) {
            return [hashmap[target - nums[i]], i];
        }
        hashmap[nums[i]] = i;
    }
};

module.exports = twoSum;