public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        var seen = new Dictionary<int, int>();
        for (var i = 0; i < nums.Length; i++)
        {
            if (seen.TryGetValue(target - nums[i], out var index))
            {
                return new [] { index, i };
            }
            seen.TryAdd(nums[i], i);
        }
        return null;
    }
}

// I just copied this from Leetcode discussion to start the C# section