export type Example = {
  input: string
  output: string
  explanation?: string
}

export type TestCase = {
  input: unknown
  expected: unknown
}

export type SupportedLanguage = 'python' | 'javascript'

export const runtimeSupportedLanguages: SupportedLanguage[] = ['python']
export const primaryRuntimeLanguage: SupportedLanguage = runtimeSupportedLanguages[0] ?? 'python'

export const isRuntimeSupportedLanguage = (language: SupportedLanguage) => runtimeSupportedLanguages.includes(language)

export const getLanguageLabel = (language: SupportedLanguage) => {
  if (language === 'python') return 'Python'
  return 'JavaScript'
}

export type ProblemCodeBundle = {
  starterCode: string
  solutionCode: string
  functionName: string
  functionSignature: string
}

export type OptimalSolutionDetails = {
  timeComplexity: string
  spaceComplexity: string
  summary: string
}

export type Problem = {
  id: string
  title: string
  slug: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
  tags: string[]
  companies: string[]
  description: string[]
  examples: Example[]
  constraints: string[]
  hints: string[]
  starterCode: string
  solutionCode: string
  solutionName: string
  functionSignature: string
  optimalSolution?: OptimalSolutionDetails
  codeByLanguage?: Partial<Record<SupportedLanguage, ProblemCodeBundle>>
  tests: TestCase[]
}

const twoSumStarter = `def twoSum(nums, target):
    # Write your solution here
    pass`

const twoSumSolution = `def twoSum(nums, target):
    seen = {}

    for i, value in enumerate(nums):
        complement = target - value
        if complement in seen:
            return [seen[complement], i]
        seen[value] = i

    return []`

const palindromeStarter = `def isPalindrome(s):
    # Write your solution here
    pass`

const palindromeSolution = `def isPalindrome(s):
    cleaned = ''.join(ch.lower() for ch in s if ch.isalnum())
    return cleaned == cleaned[::-1]`

const maxProfitStarter = `def maxProfit(prices):
    # Write your solution here
    pass`

const maxProfitSolution = `def maxProfit(prices):
    min_price = float('inf')
    best = 0

    for price in prices:
        min_price = min(min_price, price)
        best = max(best, price - min_price)

    return best`

const containsDuplicateStarter = `def containsDuplicate(nums):
    # Write your solution here
    pass`

const containsDuplicateSolution = `def containsDuplicate(nums):
    seen = set()

    for value in nums:
        if value in seen:
            return True
        seen.add(value)

    return False`

const binarySearchStarter = `def search(nums, target):
    # Write your solution here
    pass`

const binarySearchSolution = `def search(nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`

const validAnagramStarter = `def isAnagram(s, t):
    # Write your solution here
    pass`

const validAnagramSolution = `def isAnagram(s, t):
    if len(s) != len(t):
        return False

    counts = {}

    for ch in s:
        counts[ch] = counts.get(ch, 0) + 1

    for ch in t:
        if ch not in counts:
            return False
        counts[ch] -= 1
        if counts[ch] == 0:
            del counts[ch]

    return len(counts) == 0`

const productExceptSelfStarter = `def productExceptSelf(nums):
    # Write your solution here
    pass`

const productExceptSelfSolution = `def productExceptSelf(nums):
    result = [1] * len(nums)

    prefix = 1
    for i in range(len(nums)):
        result[i] = prefix
        prefix *= nums[i]

    postfix = 1
    for i in range(len(nums) - 1, -1, -1):
        result[i] *= postfix
        postfix *= nums[i]

    return result`

const topKStarter = `def topKFrequent(nums, k):
    # Write your solution here
    pass`

const topKSolution = `def topKFrequent(nums, k):
    counts = {}
    for num in nums:
        counts[num] = counts.get(num, 0) + 1

    buckets = [[] for _ in range(len(nums) + 1)]
    for num, frequency in counts.items():
        buckets[frequency].append(num)

    result = []
    for frequency in range(len(buckets) - 1, 0, -1):
        for num in buckets[frequency]:
            result.append(num)
            if len(result) == k:
                return result

    return result`

const longestSubstringStarter = `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass`

const longestSubstringSolution = `def lengthOfLongestSubstring(s):
    seen = {}
    left = 0
    best = 0

    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        best = max(best, right - left + 1)

    return best`

const threeSumStarter = `def threeSum(nums):
    # Write your solution here
    pass`

const threeSumSolution = `def threeSum(nums):
    nums.sort()
    result = []

    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left = i + 1
        right = len(nums) - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1

    return result`

const mergeIntervalsStarter = `def merge(intervals):
    # Write your solution here
    pass`

const mergeIntervalsSolution = `def merge(intervals):
    intervals.sort(key=lambda interval: interval[0])
    merged = []

    for start, end in intervals:
        if not merged or start > merged[-1][1]:
            merged.append([start, end])
        else:
            merged[-1][1] = max(merged[-1][1], end)

    return merged`

const maxSubarrayStarter = `def maxSubArray(nums):
    # Write your solution here
    pass`

const maxSubarraySolution = `def maxSubArray(nums):
    current = nums[0]
    best = nums[0]

    for value in nums[1:]:
        current = max(value, current + value)
        best = max(best, current)

    return best`

const climbStairsStarter = `def climbStairs(n):
    # Write your solution here
    pass`

const climbStairsSolution = `def climbStairs(n):
    if n <= 3:
        return n

    first = 2
    second = 3

    for _ in range(4, n + 1):
        first, second = second, first + second

    return second`

const validParenthesesStarter = `def isValid(s):
    # Write your solution here
    pass`

const validParenthesesSolution = `def isValid(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []

    for ch in s:
        if ch in pairs:
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
        else:
            stack.append(ch)

    return len(stack) == 0`

const levelOrderStarter = `def levelOrder(root):
    # Write your solution here
    pass`

const levelOrderSolution = `from collections import deque


def levelOrder(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        level_size = len(queue)
        level = []

        for _ in range(level_size):
            node = queue.popleft()
            level.append(node["val"])

            if node.get("left") is not None:
                queue.append(node["left"])
            if node.get("right") is not None:
                queue.append(node["right"])

        result.append(level)

    return result`

const networkDelayStarter = `def networkDelayTime(times, n, k):
    # Write your solution here
    pass`

const networkDelaySolution = `import heapq


def networkDelayTime(times, n, k):
    graph = {node: [] for node in range(1, n + 1)}
    for source, target, time in times:
        graph[source].append((target, time))

    distances = {}
    heap = [(0, k)]

    while heap:
        current_time, node = heapq.heappop(heap)
        if node in distances:
            continue

        distances[node] = current_time

        for neighbor, travel_time in graph[node]:
            if neighbor not in distances:
                heapq.heappush(heap, (current_time + travel_time, neighbor))

    if len(distances) != n:
        return -1

    return max(distances.values())`

const reverseLinkedListStarter = `def reverseList(head):
    # Write your solution here
    pass`

const reverseLinkedListSolution = `def reverseList(head):
    prev = None
    current = head

    while current is not None:
        nxt = current["next"]
        current["next"] = prev
        prev = current
        current = nxt

    return prev`

const combinationSumStarter = `def combinationSum(candidates, target):
    # Write your solution here
    pass`

const combinationSumSolution = `def combinationSum(candidates, target):
    result = []
    candidates.sort()

    def backtrack(start, remaining, path):
        if remaining == 0:
            result.append(path[:])
            return

        for index in range(start, len(candidates)):
            value = candidates[index]
            if value > remaining:
                break

            path.append(value)
            backtrack(index, remaining - value, path)
            path.pop()

    backtrack(0, target, [])
    return result`

const largestRectangleStarter = `def largestRectangleArea(heights):
    # Write your solution here
    pass`

const largestRectangleSolution = `def largestRectangleArea(heights):
    stack = []
    best = 0

    for index, height in enumerate(heights + [0]):
        start = index

        while stack and stack[-1][1] > height:
            start_index, popped_height = stack.pop()
            best = max(best, popped_height * (index - start_index))
            start = start_index

        stack.append((start, height))

    return best`

const gasStationStarter = `def canCompleteCircuit(gas, cost):
    # Write your solution here
    pass`

const gasStationSolution = `def canCompleteCircuit(gas, cost):
    total = 0
    tank = 0
    start = 0

    for index in range(len(gas)):
        gain = gas[index] - cost[index]
        total += gain
        tank += gain

        if tank < 0:
            start = index + 1
            tank = 0

    return start if total >= 0 else -1`

const subarraySumStarter = `def subarraySum(nums, k):
    # Write your solution here
    pass`

const subarraySumSolution = `def subarraySum(nums, k):
    count = 0
    prefix = 0
    seen = {0: 1}

    for num in nums:
        prefix += num
        count += seen.get(prefix - k, 0)
        seen[prefix] = seen.get(prefix, 0) + 1

    return count`

const romanToIntStarter = `def romanToInt(s):
    # Write your solution here
    pass`

const romanToIntSolution = `def romanToInt(s):
    values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    total = 0

    for index, ch in enumerate(s):
        value = values[ch]
        if index + 1 < len(s) and value < values[s[index + 1]]:
            total -= value
        else:
            total += value

    return total`

const coinChangeStarter = `def coinChange(coins, amount):
    # Write your solution here
    pass`

const coinChangeSolution = `def coinChange(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0

    for current in range(1, amount + 1):
        for coin in coins:
            if coin <= current:
                dp[current] = min(dp[current], dp[current - coin] + 1)

    return dp[amount] if dp[amount] != amount + 1 else -1`

const trapRainWaterStarter = `def trap(height):
    # Write your solution here
    pass`

const trapRainWaterSolution = `def trap(height):
    left = 0
    right = len(height) - 1
    left_max = 0
    right_max = 0
    trapped = 0

    while left < right:
        if height[left] < height[right]:
            left_max = max(left_max, height[left])
            trapped += left_max - height[left]
            left += 1
        else:
            right_max = max(right_max, height[right])
            trapped += right_max - height[right]
            right -= 1

    return trapped`

const longestCommonPrefixStarter = `def longestCommonPrefix(strs):
    # Write your solution here
    pass`

const longestCommonPrefixSolution = `def longestCommonPrefix(strs):
    prefix = strs[0]

    for word in strs[1:]:
        while not word.startswith(prefix):
            prefix = prefix[:-1]
            if prefix == "":
                return ""

    return prefix`

const validateBstStarter = `def isValidBST(root):
    # Write your solution here
    pass`

const validateBstSolution = `def isValidBST(root):
    def dfs(node, low, high):
        if node is None:
            return True

        value = node["val"]
        if not (low < value < high):
            return False

        return dfs(node.get("left"), low, value) and dfs(node.get("right"), value, high)

    return dfs(root, float("-inf"), float("inf"))`

const setMatrixZeroesStarter = `def setZeroes(matrix):
    # Write your solution here
    pass`

const setMatrixZeroesSolution = `def setZeroes(matrix):
    first_row_zero = any(value == 0 for value in matrix[0])
    first_col_zero = any(row[0] == 0 for row in matrix)

    for row in range(1, len(matrix)):
        for col in range(1, len(matrix[0])):
            if matrix[row][col] == 0:
                matrix[row][0] = 0
                matrix[0][col] = 0

    for row in range(1, len(matrix)):
        for col in range(1, len(matrix[0])):
            if matrix[row][0] == 0 or matrix[0][col] == 0:
                matrix[row][col] = 0

    if first_row_zero:
        for col in range(len(matrix[0])):
            matrix[0][col] = 0

    if first_col_zero:
        for row in range(len(matrix)):
            matrix[row][0] = 0

    return matrix`

const mergeTwoListsStarter = `def mergeTwoLists(list1, list2):
    # Write your solution here
    pass`

const mergeTwoListsSolution = `def mergeTwoLists(list1, list2):
    dummy = {"val": 0, "next": None}
    tail = dummy

    while list1 is not None and list2 is not None:
        if list1["val"] <= list2["val"]:
            tail["next"] = list1
            list1 = list1.get("next")
        else:
            tail["next"] = list2
            list2 = list2.get("next")
        tail = tail["next"]

    tail["next"] = list1 if list1 is not None else list2
    return dummy["next"]`

const numberOfIslandsStarter = `def numIslands(grid):
    # Write your solution here
    pass`

const numberOfIslandsSolution = `def numIslands(grid):
    rows = len(grid)
    cols = len(grid[0])
    islands = 0

    def dfs(row, col):
        if row < 0 or row >= rows or col < 0 or col >= cols or grid[row][col] != "1":
            return

        grid[row][col] = "0"
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)

    for row in range(rows):
        for col in range(cols):
            if grid[row][col] == "1":
                islands += 1
                dfs(row, col)

    return islands`

const kthLargestStarter = `def findKthLargest(nums, k):
    # Write your solution here
    pass`

const kthLargestSolution = `import heapq

def findKthLargest(nums, k):
    heap = []

    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)

    return heap[0]`

const numberOfOneBitsStarter = `def hammingWeight(n):
    # Write your solution here
    pass`

const numberOfOneBitsSolution = `def hammingWeight(n):
    count = 0

    while n:
        n &= n - 1
        count += 1

    return count`

const houseRobberIiStarter = `def rob(nums):
    # Write your solution here
    pass`

const houseRobberIiSolution = `def rob(nums):
    if len(nums) == 1:
        return nums[0]

    def rob_linear(houses):
        prev_two = 0
        prev_one = 0

        for money in houses:
            prev_two, prev_one = prev_one, max(prev_one, prev_two + money)

        return prev_one

    return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))`

const wordSearchStarter = `def exist(board, word):
    # Write your solution here
    pass`

const wordSearchSolution = `def exist(board, word):
    rows = len(board)
    cols = len(board[0])

    def dfs(row, col, index):
        if index == len(word):
            return True
        if row < 0 or row >= rows or col < 0 or col >= cols:
            return False
        if board[row][col] != word[index]:
            return False

        temp = board[row][col]
        board[row][col] = '#'

        found = (
            dfs(row + 1, col, index + 1)
            or dfs(row - 1, col, index + 1)
            or dfs(row, col + 1, index + 1)
            or dfs(row, col - 1, index + 1)
        )

        board[row][col] = temp
        return found

    for row in range(rows):
        for col in range(cols):
            if dfs(row, col, 0):
                return True

    return False`

const minDepthStarter = `def minDepth(root):
    # Write your solution here
    pass`

const minDepthSolution = `from collections import deque


def minDepth(root):
    if not root:
        return 0

    queue = deque([(root, 1)])

    while queue:
        node, depth = queue.popleft()

        if node.get("left") is None and node.get("right") is None:
            return depth

        if node.get("left") is not None:
            queue.append((node["left"], depth + 1))
        if node.get("right") is not None:
            queue.append((node["right"], depth + 1))

    return 0`

const dailyTemperaturesStarter = `def dailyTemperatures(temperatures):
    # Write your solution here
    pass`

const dailyTemperaturesSolution = `def dailyTemperatures(temperatures):
    answer = [0] * len(temperatures)
    stack = []

    for index, temperature in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temperature:
            prev_index = stack.pop()
            answer[prev_index] = index - prev_index

        stack.append(index)

    return answer`

const medianTwoSortedArraysStarter = `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass`

const medianTwoSortedArraysSolution = `def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1

    total = len(nums1) + len(nums2)
    half = total // 2

    left = 0
    right = len(nums1)

    while left <= right:
        partition1 = (left + right) // 2
        partition2 = half - partition1

        left1 = nums1[partition1 - 1] if partition1 > 0 else float('-inf')
        right1 = nums1[partition1] if partition1 < len(nums1) else float('inf')
        left2 = nums2[partition2 - 1] if partition2 > 0 else float('-inf')
        right2 = nums2[partition2] if partition2 < len(nums2) else float('inf')

        if left1 <= right2 and left2 <= right1:
            if total % 2 == 1:
                return min(right1, right2)
            return (max(left1, left2) + min(right1, right2)) / 2

        if left1 > right2:
            right = partition1 - 1
        else:
            left = partition1 + 1

    return 0`

const jumpGameStarter = `def canJump(nums):
    # Write your solution here
    pass`

const jumpGameSolution = `def canJump(nums):
    farthest = 0

    for index, jump in enumerate(nums):
        if index > farthest:
            return False

        farthest = max(farthest, index + jump)
        if farthest >= len(nums) - 1:
            return True

    return True`

const spiralMatrixStarter = `def spiralOrder(matrix):
    # Write your solution here
    pass`

const spiralMatrixSolution = `def spiralOrder(matrix):
    result = []

    top = 0
    bottom = len(matrix) - 1
    left = 0
    right = len(matrix[0]) - 1

    while top <= bottom and left <= right:
        for col in range(left, right + 1):
            result.append(matrix[top][col])
        top += 1

        for row in range(top, bottom + 1):
            result.append(matrix[row][right])
        right -= 1

        if top <= bottom:
            for col in range(right, left - 1, -1):
                result.append(matrix[bottom][col])
            bottom -= 1

        if left <= right:
            for row in range(bottom, top - 1, -1):
                result.append(matrix[row][left])
            left += 1

    return result`

const minimumWindowSubstringStarter = `def minWindow(s, t):
    # Write your solution here
    pass`

const minimumWindowSubstringSolution = `def minWindow(s, t):
    if not s or not t:
        return ''

    target = {}
    for ch in t:
        target[ch] = target.get(ch, 0) + 1

    window = {}
    have = 0
    need = len(target)
    best_length = float('inf')
    best_start = 0
    left = 0

    for right, ch in enumerate(s):
        window[ch] = window.get(ch, 0) + 1

        if ch in target and window[ch] == target[ch]:
            have += 1

        while have == need:
            current_length = right - left + 1
            if current_length < best_length:
                best_length = current_length
                best_start = left

            left_char = s[left]
            window[left_char] -= 1
            if left_char in target and window[left_char] < target[left_char]:
                have -= 1
            left += 1

    if best_length == float('inf'):
        return ''

    return s[best_start:best_start + best_length]`

const findMinRotatedStarter = `def findMin(nums):
    # Write your solution here
    pass`

const findMinRotatedSolution = `def findMin(nums):
    left = 0
    right = len(nums) - 1

    while left < right:
        mid = (left + right) // 2

        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid

    return nums[left]`

const courseScheduleStarter = `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass`

const courseScheduleSolution = `from collections import deque


def canFinish(numCourses, prerequisites):
    graph = {course: [] for course in range(numCourses)}
    indegree = [0] * numCourses

    for course, prerequisite in prerequisites:
        graph[prerequisite].append(course)
        indegree[course] += 1

    queue = deque(course for course in range(numCourses) if indegree[course] == 0)
    completed = 0

    while queue:
        course = queue.popleft()
        completed += 1

        for neighbor in graph[course]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return completed == numCourses`

const evalRpnStarter = `def evalRPN(tokens):
    # Write your solution here
    pass`

const evalRpnSolution = `def evalRPN(tokens):
    stack = []

    for token in tokens:
        if token in {'+', '-', '*', '/'}:
            right = stack.pop()
            left = stack.pop()

            if token == '+':
                stack.append(left + right)
            elif token == '-':
                stack.append(left - right)
            elif token == '*':
                stack.append(left * right)
            else:
                stack.append(int(left / right))
        else:
            stack.append(int(token))

    return stack[-1]`


const searchRotatedStarter = `def search(nums, target):
    # Write your solution here
    pass`

const searchRotatedSolution = `def search(nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid

        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1`

const validSudokuStarter = `def isValidSudoku(board):
    # Write your solution here
    pass`

const validSudokuSolution = `def isValidSudoku(board):
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]

    for row in range(9):
        for col in range(9):
            value = board[row][col]
            if value == '.':
                continue

            box = (row // 3) * 3 + (col // 3)
            if value in rows[row] or value in cols[col] or value in boxes[box]:
                return False

            rows[row].add(value)
            cols[col].add(value)
            boxes[box].add(value)

    return True`

const rottingOrangesStarter = `def orangesRotting(grid):
    # Write your solution here
    pass`

const rottingOrangesSolution = `from collections import deque


def orangesRotting(grid):
    rows = len(grid)
    cols = len(grid[0])
    queue = deque()
    fresh = 0

    for row in range(rows):
        for col in range(cols):
            if grid[row][col] == 2:
                queue.append((row, col, 0))
            elif grid[row][col] == 1:
                fresh += 1

    minutes = 0
    directions = ((1, 0), (-1, 0), (0, 1), (0, -1))

    while queue:
        row, col, minute = queue.popleft()
        minutes = max(minutes, minute)

        for d_row, d_col in directions:
            next_row = row + d_row
            next_col = col + d_col

            if 0 <= next_row < rows and 0 <= next_col < cols and grid[next_row][next_col] == 1:
                grid[next_row][next_col] = 2
                fresh -= 1
                queue.append((next_row, next_col, minute + 1))

    return minutes if fresh == 0 else -1`

const linkedListCycleStarter = `def hasCycle(head):
    # Write your solution here
    pass`

const linkedListCycleSolution = `def hasCycle(head):
    slow = head
    fast = head

    while fast is not None and fast.get("next") is not None:
        slow = slow["next"]
        fast = fast["next"]["next"]

        if slow is fast:
            return True

    return False`

const lisStarter = `def lengthOfLIS(nums):
    # Write your solution here
    pass`

const lisSolution = `def lengthOfLIS(nums):
    tails = []

    for num in nums:
        left = 0
        right = len(tails)

        while left < right:
            mid = (left + right) // 2
            if tails[mid] < num:
                left = mid + 1
            else:
                right = mid

        if left == len(tails):
            tails.append(num)
        else:
            tails[left] = num

    return len(tails)`


const letterCombinationsStarter = `def letterCombinations(digits):
    # Write your solution here
    pass`

const letterCombinationsSolution = `def letterCombinations(digits):
    if not digits:
        return []

    mapping = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    result = []

    def backtrack(index, path):
        if index == len(digits):
            result.append(''.join(path))
            return

        for ch in mapping[digits[index]]:
            path.append(ch)
            backtrack(index + 1, path)
            path.pop()

    backtrack(0, [])
    return result`

const taskSchedulerStarter = `def leastInterval(tasks, n):
    # Write your solution here
    pass`

const taskSchedulerSolution = `from collections import Counter
import heapq


def leastInterval(tasks, n):
    counts = Counter(tasks)
    max_heap = [-count for count in counts.values()]
    heapq.heapify(max_heap)
    time = 0
    queue = []

    while max_heap or queue:
        time += 1

        if max_heap:
            count = heapq.heappop(max_heap) + 1
            if count != 0:
                queue.append((time + n, count))

        while queue and queue[0][0] == time:
            _, ready_count = queue.pop(0)
            heapq.heappush(max_heap, ready_count)

    return time`

const pacificAtlanticStarter = `def pacificAtlantic(heights):
    # Write your solution here
    pass`

const pacificAtlanticSolution = `def pacificAtlantic(heights):
    if not heights or not heights[0]:
        return []

    rows = len(heights)
    cols = len(heights[0])
    pacific = set()
    atlantic = set()
    directions = ((1, 0), (-1, 0), (0, 1), (0, -1))

    def dfs(row, col, visited):
        visited.add((row, col))

        for d_row, d_col in directions:
            next_row = row + d_row
            next_col = col + d_col

            if not (0 <= next_row < rows and 0 <= next_col < cols):
                continue
            if (next_row, next_col) in visited:
                continue
            if heights[next_row][next_col] < heights[row][col]:
                continue

            dfs(next_row, next_col, visited)

    for row in range(rows):
        dfs(row, 0, pacific)
        dfs(row, cols - 1, atlantic)

    for col in range(cols):
        dfs(0, col, pacific)
        dfs(rows - 1, col, atlantic)

    result = []
    for row in range(rows):
        for col in range(cols):
            if (row, col) in pacific and (row, col) in atlantic:
                result.append([row, col])

    return result`

const wordLadderStarter = `from typing import List


def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass`

const wordLadderSolution = `from collections import deque


def ladderLength(beginWord, endWord, wordList):
    words = set(wordList)
    if endWord not in words:
        return 0

    queue = deque([(beginWord, 1)])
    visited = {beginWord}

    while queue:
        word, steps = queue.popleft()
        if word == endWord:
            return steps

        for index in range(len(word)):
            prefix = word[:index]
            suffix = word[index + 1:]

            for code in range(ord("a"), ord("z") + 1):
                candidate = prefix + chr(code) + suffix
                if candidate in words and candidate not in visited:
                    visited.add(candidate)
                    queue.append((candidate, steps + 1))

    return 0`

const invertBinaryTreeStarter = `def invertTree(root):
    # Write your solution here
    pass`

const invertBinaryTreeSolution = `def invertTree(root):
    if not root:
        return None

    root["left"], root["right"] = invertTree(root.get("right")), invertTree(root.get("left"))
    return root`

const decodeWaysStarter = `def numDecodings(s):
    # Write your solution here
    pass`

const decodeWaysSolution = `def numDecodings(s):
    if not s or s[0] == "0":
        return 0

    prev2 = 1
    prev1 = 1

    for index in range(1, len(s)):
        current = 0

        if s[index] != "0":
            current += prev1

        two_digit = int(s[index - 1:index + 1])
        if 10 <= two_digit <= 26:
            current += prev2

        prev2 = prev1
        prev1 = current

    return prev1`

const alienDictionaryStarter = `from typing import List


def alienOrder(words):
    # Write your solution here
    pass`

const alienDictionarySolution = `from collections import deque


def alienOrder(words):
    graph = {ch: set() for word in words for ch in word}
    indegree = {ch: 0 for ch in graph}

    for index in range(len(words) - 1):
        first = words[index]
        second = words[index + 1]
        limit = min(len(first), len(second))

        if len(first) > len(second) and first[:limit] == second[:limit]:
            return ""

        for char_index in range(limit):
            if first[char_index] != second[char_index]:
                if second[char_index] not in graph[first[char_index]]:
                    graph[first[char_index]].add(second[char_index])
                    indegree[second[char_index]] += 1
                break

    queue = deque(sorted(ch for ch, degree in indegree.items() if degree == 0))
    order = []

    while queue:
        ch = queue.popleft()
        order.append(ch)

        for neighbor in sorted(graph[ch]):
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    if len(order) != len(graph):
        return ""

    return ''.join(order)`

const pivotIndexStarter = `def pivotIndex(nums):
    # Write your solution here
    pass`

const pivotIndexSolution = `def pivotIndex(nums):
    total = sum(nums)
    left_sum = 0

    for index, value in enumerate(nums):
        if left_sum == total - left_sum - value:
            return index
        left_sum += value

    return -1`

const rightSideViewStarter = `def rightSideView(root):
    # Write your solution here
    pass`

const rightSideViewSolution = `from collections import deque


def rightSideView(root):
    if not root:
        return []

    queue = deque([root])
    result = []

    while queue:
        level_size = len(queue)

        for index in range(level_size):
            node = queue.popleft()
            if index == level_size - 1:
                result.append(node["val"])

            if node.get("left"):
                queue.append(node["left"])
            if node.get("right"):
                queue.append(node["right"])

    return result`

const meetingRoomsStarter = `def minMeetingRooms(intervals):
    # Write your solution here
    pass`

const meetingRoomsSolution = `import heapq


def minMeetingRooms(intervals):
    if not intervals:
        return 0

    intervals.sort(key=lambda interval: interval[0])
    rooms = []

    for start, end in intervals:
        if rooms and rooms[0] <= start:
            heapq.heapreplace(rooms, end)
        else:
            heapq.heappush(rooms, end)

    return len(rooms)`

const kClosestStarter = `def kClosest(points, k):
    # Write your solution here
    pass`

const kClosestSolution = `import heapq


def kClosest(points, k):
    return heapq.nsmallest(k, points, key=lambda point: (point[0] * point[0] + point[1] * point[1], point[0], point[1]))`

const insertIntervalStarter = `def insert(intervals, newInterval):
    # Write your solution here
    pass`

const insertIntervalSolution = `def insert(intervals, newInterval):
    merged = []
    index = 0

    while index < len(intervals) and intervals[index][1] < newInterval[0]:
        merged.append(intervals[index])
        index += 1

    start, end = newInterval
    while index < len(intervals) and intervals[index][0] <= end:
        start = min(start, intervals[index][0])
        end = max(end, intervals[index][1])
        index += 1

    merged.append([start, end])

    while index < len(intervals):
        merged.append(intervals[index])
        index += 1

    return merged`

const courseScheduleIiStarter = `def findOrder(numCourses, prerequisites):
    # Write your solution here
    pass`

const courseScheduleIiSolution = `from collections import deque


def findOrder(numCourses, prerequisites):
    graph = {course: [] for course in range(numCourses)}
    indegree = [0] * numCourses

    for course, prereq in prerequisites:
        graph[prereq].append(course)
        indegree[course] += 1

    queue = deque([course for course in range(numCourses) if indegree[course] == 0])
    order = []

    while queue:
        course = queue.popleft()
        order.append(course)

        for neighbor in graph[course]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return order if len(order) == numCourses else []`

const sameTreeStarter = `def isSameTree(p, q):
    # Write your solution here
    pass`

const sameTreeSolution = `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    if p["val"] != q["val"]:
        return False

    return isSameTree(p["left"], q["left"]) and isSameTree(p["right"], q["right"])`

const uniquePathsStarter = `def uniquePaths(m, n):
    # Write your solution here
    pass`

const uniquePathsSolution = `def uniquePaths(m, n):
    dp = [1] * n

    for _ in range(1, m):
        for col in range(1, n):
            dp[col] += dp[col - 1]

    return dp[-1]`

const redundantConnectionStarter = `def findRedundantConnection(edges):
    # Write your solution here
    pass`

const redundantConnectionSolution = `def findRedundantConnection(edges):
    parent = list(range(len(edges) + 1))
    rank = [0] * (len(edges) + 1)

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a, b):
        root_a = find(a)
        root_b = find(b)

        if root_a == root_b:
            return False

        if rank[root_a] < rank[root_b]:
            parent[root_a] = root_b
        elif rank[root_a] > rank[root_b]:
            parent[root_b] = root_a
        else:
            parent[root_b] = root_a
            rank[root_a] += 1

        return True

    for edge in edges:
        a, b = edge
        if not union(a, b):
            return edge

    return []`

const search2dMatrixStarter = `def searchMatrix(matrix, target):
    # Write your solution here
    pass`

const search2dMatrixSolution = `def searchMatrix(matrix, target):
    if not matrix or not matrix[0]:
        return False

    rows = len(matrix)
    cols = len(matrix[0])
    left = 0
    right = rows * cols - 1

    while left <= right:
        mid = (left + right) // 2
        value = matrix[mid // cols][mid % cols]

        if value == target:
            return True
        if value < target:
            left = mid + 1
        else:
            right = mid - 1

    return False`

const longestConsecutiveStarter = `def longestConsecutive(nums):
    # Write your solution here
    pass`

const longestConsecutiveSolution = `def longestConsecutive(nums):
    values = set(nums)
    best = 0

    for num in values:
        if num - 1 in values:
            continue

        length = 1
        current = num
        while current + 1 in values:
            current += 1
            length += 1

        best = max(best, length)

    return best`

const lcaBstStarter = `def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass`

const lcaBstSolution = `def lowestCommonAncestor(root, p, q):
    current = root

    while current:
        if p["val"] < current["val"] and q["val"] < current["val"]:
            current = current["left"]
        elif p["val"] > current["val"] and q["val"] > current["val"]:
            current = current["right"]
        else:
            return current

    return None`

const findAnagramsStarter = `def findAnagrams(s, p):
    # Write your solution here
    pass`

const findAnagramsSolution = `def findAnagrams(s, p):
    if len(p) > len(s):
        return []

    target = [0] * 26
    window = [0] * 26
    result = []

    for ch in p:
        target[ord(ch) - ord('a')] += 1

    for index, ch in enumerate(s):
        window[ord(ch) - ord('a')] += 1

        if index >= len(p):
            left_char = s[index - len(p)]
            window[ord(left_char) - ord('a')] -= 1

        if window == target:
            result.append(index - len(p) + 1)

    return result`

const minCostClimbingStairsStarter = `def minCostClimbingStairs(cost):
    # Write your solution here
    pass`

const minCostClimbingStairsSolution = `def minCostClimbingStairs(cost):
    prev2 = 0
    prev1 = 0

    for value in cost:
        prev2, prev1 = prev1, min(prev1, prev2) + value

    return min(prev1, prev2)`

const zigzagLevelOrderStarter = `from collections import deque


def zigzagLevelOrder(root):
    # Write your solution here
    pass`

const zigzagLevelOrderSolution = `from collections import deque


def zigzagLevelOrder(root):
    if not root:
        return []

    result = []
    queue = deque([root])
    left_to_right = True

    while queue:
        level_size = len(queue)
        level = deque()

        for _ in range(level_size):
            node = queue.popleft()

            if left_to_right:
                level.append(node["val"])
            else:
                level.appendleft(node["val"])

            if node.get("left") is not None:
                queue.append(node["left"])
            if node.get("right") is not None:
                queue.append(node["right"])

        result.append(list(level))
        left_to_right = not left_to_right

    return result`

const minEatingSpeedStarter = `def minEatingSpeed(piles, h):
    # Write your solution here
    pass`

const minEatingSpeedSolution = `def minEatingSpeed(piles, h):
    left = 1
    right = max(piles)

    while left < right:
        speed = (left + right) // 2
        hours = 0

        for pile in piles:
            hours += (pile + speed - 1) // speed

        if hours <= h:
            right = speed
        else:
            left = speed + 1

    return left`

const rotateMatrixStarter = `def rotate(matrix):
    # Write your solution here
    pass`

const rotateMatrixSolution = `def rotate(matrix):
    n = len(matrix)

    for row in range(n):
        for col in range(row + 1, n):
            matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]

    for row in matrix:
        row.reverse()

    return matrix`

const changeCombinationsStarter = `def change(amount, coins):
    # Write your solution here
    pass`

const changeCombinationsSolution = `def change(amount, coins):
    dp = [0] * (amount + 1)
    dp[0] = 1

    for coin in coins:
        for total in range(coin, amount + 1):
            dp[total] += dp[total - coin]

    return dp[amount]`

const partitionLabelsStarter = `def partitionLabels(s):
    # Write your solution here
    pass`

const partitionLabelsSolution = `def partitionLabels(s):
    last_index = {}

    for index, ch in enumerate(s):
        last_index[ch] = index

    result = []
    start = 0
    end = 0

    for index, ch in enumerate(s):
        end = max(end, last_index[ch])

        if index == end:
            result.append(end - start + 1)
            start = index + 1

    return result`

const subsetsStarter = `def subsets(nums):
    # Write your solution here
    pass`

const subsetsSolution = `def subsets(nums):
    result = [[]]

    for num in nums:
        additions = []
        for subset in result:
            additions.append(subset + [num])
        result.extend(additions)

    return result`

const mergeAlternatelyStarter = `def mergeAlternately(word1, word2):
    # Write your solution here
    pass`

const mergeAlternatelySolution = `def mergeAlternately(word1, word2):
    result = []
    i = 0
    j = 0

    while i < len(word1) or j < len(word2):
        if i < len(word1):
            result.append(word1[i])
            i += 1
        if j < len(word2):
            result.append(word2[j])
            j += 1

    return ''.join(result)`

const trieSearchStarter = `class Trie:
    def __init__(self):
        # Write your solution here
        pass

    def insert(self, word):
        pass

    def search(self, word):
        pass

    def startsWith(self, prefix):
        pass`

const trieSearchSolution = `class Trie:
    def __init__(self):
        self.root = {}
        self.end = '#'

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node:
                node[ch] = {}
            node = node[ch]
        node[self.end] = True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node:
                return False
            node = node[ch]
        return self.end in node

    def startsWith(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node:
                return False
            node = node[ch]
        return True`

const decodeStringStarter = `def decodeString(s):
    # Write your solution here
    pass`

const decodeStringSolution = `def decodeString(s):
    stack = []
    current_num = 0
    current_str = ''

    for ch in s:
        if ch.isdigit():
            current_num = current_num * 10 + int(ch)
        elif ch == '[':
            stack.append((current_str, current_num))
            current_str = ''
            current_num = 0
        elif ch == ']':
            prev_str, repeat = stack.pop()
            current_str = prev_str + current_str * repeat
        else:
            current_str += ch

    return current_str`

const medianFinderStarter = `class MedianFinder:
    def __init__(self):
        # Write your solution here
        pass

    def addNum(self, num):
        pass

    def findMedian(self):
        pass`

const medianFinderSolution = `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []
        self.large = []

    def addNum(self, num):
        heapq.heappush(self.small, -num)

        if self.large and -self.small[0] > self.large[0]:
            heapq.heappush(self.large, -heapq.heappop(self.small))

        if len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        elif len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]

        return (-self.small[0] + self.large[0]) / 2`

const sortColorsStarter = `def sortColors(nums):
    # Write your solution here
    pass`

const sortColorsSolution = `def sortColors(nums):
    left = 0
    current = 0
    right = len(nums) - 1

    while current <= right:
        if nums[current] == 0:
            nums[left], nums[current] = nums[current], nums[left]
            left += 1
            current += 1
        elif nums[current] == 2:
            nums[current], nums[right] = nums[right], nums[current]
            right -= 1
        else:
            current += 1

    return nums`

const nonOverlappingIntervalsStarter = `def eraseOverlapIntervals(intervals):
    # Write your solution here
    pass`

const nonOverlappingIntervalsSolution = `def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda interval: interval[1])
    removals = 0
    previous_end = float('-inf')

    for start, end in intervals:
        if start < previous_end:
            removals += 1
        else:
            previous_end = end

    return removals`

const removeNthFromEndStarter = `def removeNthFromEnd(head, n):
    # Write your solution here
    pass`

const removeNthFromEndSolution = `def removeNthFromEnd(head, n):
    dummy = {"val": 0, "next": head}
    fast = dummy
    slow = dummy

    for _ in range(n + 1):
        fast = fast["next"]

    while fast is not None:
        fast = fast["next"]
        slow = slow["next"]

    slow["next"] = slow["next"]["next"]
    return dummy["next"]`

const singleNumberStarter = `def singleNumber(nums):
    # Write your solution here
    pass`

const singleNumberSolution = `def singleNumber(nums):
    result = 0

    for num in nums:
        result ^= num

    return result`

const longestPalindromicSubstringStarter = `def longestPalindrome(s):
    # Write your solution here
    pass`

const longestPalindromicSubstringSolution = `def longestPalindrome(s):
    best_start = 0
    best_len = 1

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - left - 1

    for index in range(len(s)):
        start, length = expand(index, index)
        if length > best_len:
            best_start = start
            best_len = length

        start, length = expand(index, index + 1)
        if length > best_len:
            best_start = start
            best_len = length

    return s[best_start:best_start + best_len]`

const reverseWordsStarter = `def reverseWords(s):
    # Write your solution here
    pass`

const reverseWordsSolution = `def reverseWords(s):
    words = s.split()
    return ' '.join(reversed(words))`

const minimumPathSumStarter = `def minPathSum(grid):
    # Write your solution here
    pass`

const minimumPathSumSolution = `def minPathSum(grid):
    rows = len(grid)
    cols = len(grid[0])

    dp = [0] * cols

    for row in range(rows):
        for col in range(cols):
            if row == 0 and col == 0:
                dp[col] = grid[row][col]
            elif row == 0:
                dp[col] = dp[col - 1] + grid[row][col]
            elif col == 0:
                dp[col] = dp[col] + grid[row][col]
            else:
                dp[col] = min(dp[col], dp[col - 1]) + grid[row][col]

    return dp[-1]`

const kthSmallestBstStarter = `def kthSmallest(root, k):
    # Write your solution here
    pass`

const kthSmallestBstSolution = `def kthSmallest(root, k):
    stack = []
    current = root

    while stack or current is not None:
        while current is not None:
            stack.append(current)
            current = current["left"]

        current = stack.pop()
        k -= 1
        if k == 0:
            return current["val"]

        current = current["right"]`

const jumpGameTwoStarter = `def jump(nums):
    # Write your solution here
    pass`

const jumpGameTwoSolution = `def jump(nums):
    jumps = 0
    current_end = 0
    farthest = 0

    for index in range(len(nums) - 1):
        farthest = max(farthest, index + nums[index])

        if index == current_end:
            jumps += 1
            current_end = farthest

    return jumps`

const baseProblems: Problem[] = [
  {
    id: '1',
    slug: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Arrays', 'Hash Map'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      'You may assume that each input has exactly one solution, and you may not use the same element twice.',
      'You can return the answer in any order.',
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    hints: [
      'Brute force works, but it is O(n^2). Can you remember something as you scan?',
      'Store the number you have already seen in a dictionary keyed by value.',
      'For each number, compute target - value and check whether you saw it earlier.',
    ],
    starterCode: twoSumStarter,
    solutionCode: twoSumSolution,
    solutionName: 'twoSum',
    functionSignature: 'twoSum(nums, target)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expected: [0, 1] },
    ],
  },
  {
    id: '2',
    slug: 'valid-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    category: 'Two Pointers',
    tags: ['Two Pointers', 'String'],
    companies: ['Meta', 'Apple', 'Bloomberg'],
    description: [
      'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
      'Given a string s, return true if it is a palindrome, or false otherwise.',
    ],
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
      },
      {
        input: 's = "race a car"',
        output: 'false',
      },
    ],
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.',
    ],
    hints: [
      'Ignore punctuation and spaces first.',
      'A normalized lowercase string can be compared against its reverse.',
      'You can also solve it with two pointers without building a full new string.',
    ],
    starterCode: palindromeStarter,
    solutionCode: palindromeSolution,
    solutionName: 'isPalindrome',
    functionSignature: 'isPalindrome(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: 'A man, a plan, a canal: Panama', expected: true },
      { input: 'race a car', expected: false },
      { input: ' ', expected: true },
    ],
  },
  {
    id: '3',
    slug: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Arrays', 'Greedy'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    description: [
      'You are given an array prices where prices[i] is the price of a given stock on the ith day.',
      'You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.',
      'Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
    ],
    examples: [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: 'Buy on day 2 and sell on day 5 for profit 5.',
      },
      {
        input: 'prices = [7,6,4,3,1]',
        output: '0',
      },
    ],
    constraints: ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4'],
    hints: [
      'At every index, ask what the cheapest buying day so far was.',
      'Track the minimum price seen so far as you move left to right.',
      'The best profit today is current price minus min_price so far.',
    ],
    starterCode: maxProfitStarter,
    solutionCode: maxProfitSolution,
    solutionName: 'maxProfit',
    functionSignature: 'maxProfit(prices)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [7, 1, 5, 3, 6, 4], expected: 5 },
      { input: [7, 6, 4, 3, 1], expected: 0 },
      { input: [2, 4, 1], expected: 2 },
    ],
  },
  {
    id: '4',
    slug: 'contains-duplicate',
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Arrays', 'Hash Set'],
    companies: ['Amazon', 'Meta', 'Microsoft'],
    description: [
      'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
    ],
    examples: [
      { input: 'nums = [1,2,3,1]', output: 'true' },
      { input: 'nums = [1,2,3,4]', output: 'false' },
    ],
    constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    hints: [
      'Sorting works, but can you do it in linear time on average?',
      'A set can tell you whether you have seen a value before.',
      'Return early as soon as you detect a repeat.',
    ],
    starterCode: containsDuplicateStarter,
    solutionCode: containsDuplicateSolution,
    solutionName: 'containsDuplicate',
    functionSignature: 'containsDuplicate(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [1, 2, 3, 1], expected: true },
      { input: [1, 2, 3, 4], expected: false },
      { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
    ],
  },
  {
    id: '5',
    slug: 'binary-search',
    title: 'Binary Search',
    difficulty: 'Easy',
    category: 'Binary Search',
    tags: ['Binary Search', 'Arrays'],
    companies: ['Google', 'Amazon', 'LinkedIn'],
    description: [
      'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.',
      'If target exists, then return its index. Otherwise, return -1.',
      'You must write an algorithm with O(log n) runtime complexity.',
    ],
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1' },
    ],
    constraints: ['1 <= nums.length <= 10^4', '-10^4 < nums[i], target < 10^4', 'All integers in nums are unique.'],
    hints: [
      'The array is sorted, so you can cut the search space in half each step.',
      'Track left and right pointers and examine the middle index.',
      'Move left or right depending on how nums[mid] compares with target.',
    ],
    starterCode: binarySearchStarter,
    solutionCode: binarySearchSolution,
    solutionName: 'search',
    functionSignature: 'search(nums, target)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { nums: [-1, 0, 3, 5, 9, 12], target: 9 }, expected: 4 },
      { input: { nums: [-1, 0, 3, 5, 9, 12], target: 2 }, expected: -1 },
      { input: { nums: [5], target: 5 }, expected: 0 },
    ],
  },
  {
    id: '6',
    slug: 'valid-anagram',
    title: 'Valid Anagram',
    difficulty: 'Easy',
    category: 'Hash Map',
    tags: ['Hash Map', 'String', 'Sorting'],
    companies: ['Meta', 'Amazon', 'Adobe'],
    description: [
      'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    ],
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true' },
      { input: 's = "rat", t = "car"', output: 'false' },
    ],
    constraints: ['1 <= s.length, t.length <= 5 * 10^4', 's and t consist of lowercase English letters.'],
    hints: [
      'Anagrams have the same frequency count for every character.',
      'A dictionary or fixed-size array can track counts.',
      'If lengths differ, you can return false immediately.',
    ],
    starterCode: validAnagramStarter,
    solutionCode: validAnagramSolution,
    solutionName: 'isAnagram',
    functionSignature: 'isAnagram(s, t)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { s: 'anagram', t: 'nagaram' }, expected: true },
      { input: { s: 'rat', t: 'car' }, expected: false },
      { input: { s: 'listen', t: 'silent' }, expected: true },
    ],
  },
  {
    id: '7',
    slug: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    category: 'Arrays',
    tags: ['Arrays', 'Prefix Sum'],
    companies: ['Meta', 'Amazon', 'Apple'],
    description: [
      'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
      'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.',
      'You must write an algorithm that runs in O(n) time and without using the division operation.',
    ],
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
      { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' },
    ],
    constraints: ['2 <= nums.length <= 10^5', '-30 <= nums[i] <= 30'],
    hints: [
      'Think prefix products from the left and suffix products from the right.',
      'You can build the answer in one array without extra output-sized helpers.',
      'First store all left products, then multiply by running right products.',
    ],
    starterCode: productExceptSelfStarter,
    solutionCode: productExceptSelfSolution,
    solutionName: 'productExceptSelf',
    functionSignature: 'productExceptSelf(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
      { input: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
      { input: [2, 3, 4, 5], expected: [60, 40, 30, 24] },
    ],
  },
  {
    id: '8',
    slug: 'top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    difficulty: 'Medium',
    category: 'Heap / Buckets',
    tags: ['Arrays', 'Hash Map', 'Heap', 'Bucket Sort'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given an integer array nums and an integer k, return the k most frequent elements.',
      'You may return the answer in any order.',
    ],
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
      { input: 'nums = [1], k = 1', output: '[1]' },
    ],
    constraints: ['1 <= nums.length <= 10^5', 'k is in the range [1, the number of unique elements in the array].'],
    hints: [
      'Count frequencies first.',
      'Then think about grouping numbers by frequency instead of sorting all pairs.',
      'Buckets indexed by frequency let you walk from most frequent to least frequent.',
    ],
    starterCode: topKStarter,
    solutionCode: topKSolution,
    solutionName: 'topKFrequent',
    functionSignature: 'topKFrequent(nums, k)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expected: [1, 2] },
      { input: { nums: [1], k: 1 }, expected: [1] },
      { input: { nums: [4, 4, 4, 6, 6, 7], k: 1 }, expected: [4] },
    ],
  },
  {
    id: '9',
    slug: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    category: 'Sliding Window',
    tags: ['Sliding Window', 'Hash Map', 'String'],
    companies: ['Amazon', 'Adobe', 'Bloomberg'],
    description: [
      'Given a string s, find the length of the longest substring without duplicate characters.',
    ],
    examples: [
      { input: 's = "abcabcbb"', output: '3' },
      { input: 's = "bbbbb"', output: '1' },
      { input: 's = "pwwkew"', output: '3' },
    ],
    constraints: ['0 <= s.length <= 5 * 10^4', 's consists of English letters, digits, symbols, and spaces.'],
    hints: [
      'A sliding window is useful when you want a contiguous range with a property.',
      'Track the last index where each character appeared.',
      'When you repeat a character, move the left edge just past its previous occurrence.',
    ],
    starterCode: longestSubstringStarter,
    solutionCode: longestSubstringSolution,
    solutionName: 'lengthOfLongestSubstring',
    functionSignature: 'lengthOfLongestSubstring(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: 'abcabcbb', expected: 3 },
      { input: 'bbbbb', expected: 1 },
      { input: 'pwwkew', expected: 3 },
    ],
  },
  {
    id: '10',
    slug: '3sum',
    title: '3Sum',
    difficulty: 'Medium',
    category: 'Two Pointers',
    tags: ['Arrays', 'Two Pointers', 'Sorting'],
    companies: ['Meta', 'Amazon', 'Microsoft'],
    description: [
      'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.',
      'Notice that the solution set must not contain duplicate triplets.',
    ],
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', output: '[]' },
    ],
    constraints: ['3 <= nums.length <= 3000', '-10^5 <= nums[i] <= 10^5'],
    hints: [
      'Sorting helps you avoid duplicates and use two pointers.',
      'Fix one number, then solve a two-sum-like problem on the rest.',
      'Skip duplicate anchors and duplicate pointer values to avoid repeated triplets.',
    ],
    starterCode: threeSumStarter,
    solutionCode: threeSumSolution,
    solutionName: 'threeSum',
    functionSignature: 'threeSum(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] },
      { input: [0, 1, 1], expected: [] },
      { input: [0, 0, 0], expected: [[0, 0, 0]] },
    ],
  },
  {
    id: '11',
    slug: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    category: 'Intervals',
    tags: ['Intervals', 'Sorting', 'Arrays'],
    companies: ['Google', 'Amazon', 'Meta'],
    description: [
      'Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
    ],
    examples: [
      { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' },
      { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' },
    ],
    constraints: ['1 <= intervals.length <= 10^4', 'intervals[i].length == 2', '0 <= start_i <= end_i <= 10^4'],
    hints: [
      'Sorting by start time makes overlapping intervals appear next to each other.',
      'Keep a merged list and compare each new interval against the last merged interval.',
      'If they overlap, extend the end; otherwise, start a new interval.',
    ],
    starterCode: mergeIntervalsStarter,
    solutionCode: mergeIntervalsSolution,
    solutionName: 'merge',
    functionSignature: 'merge(intervals)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[1, 3], [2, 6], [8, 10], [15, 18]], expected: [[1, 6], [8, 10], [15, 18]] },
      { input: [[1, 4], [4, 5]], expected: [[1, 5]] },
      { input: [[1, 4], [0, 2], [3, 5]], expected: [[0, 5]] },
    ],
  },
  {
    id: '12',
    slug: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Arrays', 'Greedy'],
    companies: ['Microsoft', 'Amazon', 'LinkedIn'],
    description: [
      'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
    ],
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has the largest sum 6.' },
      { input: 'nums = [1]', output: '1' },
    ],
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    hints: [
      'At each position, decide whether to extend the previous subarray or start fresh here.',
      'Track the best subarray sum ending at the current index.',
      'Keep a global best as you sweep through the array once.',
    ],
    starterCode: maxSubarrayStarter,
    solutionCode: maxSubarraySolution,
    solutionName: 'maxSubArray',
    functionSignature: 'maxSubArray(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
      { input: [1], expected: 1 },
      { input: [5, 4, -1, 7, 8], expected: 23 },
    ],
  },
  {
    id: '13',
    slug: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Math'],
    companies: ['Amazon', 'Adobe', 'Apple'],
    description: [
      'You are climbing a staircase. It takes n steps to reach the top.',
      'Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    ],
    examples: [
      { input: 'n = 2', output: '2' },
      { input: 'n = 3', output: '3' },
    ],
    constraints: ['1 <= n <= 45'],
    hints: [
      'The number of ways to reach step n depends on the previous two steps.',
      'Write out the first few values and you will notice a Fibonacci-like pattern.',
      'You only need the previous two answers, not a full array.',
    ],
    starterCode: climbStairsStarter,
    solutionCode: climbStairsSolution,
    solutionName: 'climbStairs',
    functionSignature: 'climbStairs(n)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: 2, expected: 2 },
      { input: 3, expected: 3 },
      { input: 5, expected: 8 },
    ],
  },
  {
    id: '14',
    slug: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'Stack',
    tags: ['Stack', 'String'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\', and \']\', determine if the input string is valid.',
      'An input string is valid if open brackets are closed by the same type of brackets, in the correct order, and every closing bracket has a corresponding opening bracket.',
    ],
    examples: [
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
      { input: 's = "([{}])"', output: 'true' },
    ],
    constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only: "()[]{}".'],
    hints: [
      'Closing brackets need to match the most recent unmatched opening bracket.',
      'A stack is a natural fit for tracking nested structure.',
      'If you finish scanning and the stack is empty, the string was balanced.',
    ],
    starterCode: validParenthesesStarter,
    solutionCode: validParenthesesSolution,
    solutionName: 'isValid',
    functionSignature: 'isValid(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: '()[]{}', expected: true },
      { input: '(]', expected: false },
      { input: '([{}])', expected: true },
    ],
  },
  {
    id: '15',
    slug: 'binary-tree-level-order-traversal',
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    category: 'Trees',
    tags: ['Trees', 'Breadth-First Search', 'Queue'],
    companies: ['Microsoft', 'Amazon', 'Meta'],
    description: [
      'Given the root of a binary tree, return the level order traversal of its nodes\' values.',
      'Traverse the tree level by level from left to right, and return the values for each level as a separate array.',
    ],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
      { input: 'root = [1]', output: '[[1]]' },
      { input: 'root = []', output: '[]' },
    ],
    constraints: ['The number of nodes in the tree is in the range [0, 2000].', '-1000 <= Node.val <= 1000'],
    hints: [
      'Breadth-first search naturally processes nodes one level at a time.',
      'A queue lets you pop nodes in the same order they were discovered.',
      'Measure the queue length before each round so you know how many nodes belong to the current level.',
    ],
    starterCode: levelOrderStarter,
    solutionCode: levelOrderSolution,
    solutionName: 'levelOrder',
    functionSignature: 'levelOrder(root)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: {
          val: 3,
          left: { val: 9, left: null, right: null },
          right: {
            val: 20,
            left: { val: 15, left: null, right: null },
            right: { val: 7, left: null, right: null },
          },
        },
        expected: [[3], [9, 20], [15, 7]],
      },
      { input: { val: 1, left: null, right: null }, expected: [[1]] },
      { input: null, expected: [] },
    ],
  },
  {
    id: '16',
    slug: 'network-delay-time',
    title: 'Network Delay Time',
    difficulty: 'Hard',
    category: 'Graphs',
    tags: ['Graphs', 'Shortest Path', 'Heap'],
    companies: ['Amazon', 'Google', 'DoorDash'],
    description: [
      'You are given a network of n nodes labeled from 1 to n and a list of travel times as directed edges times[i] = [u, v, w], where u is the source node, v is the target node, and w is the time it takes for a signal to travel from u to v.',
      'We send a signal from a given node k. Return the minimum time it takes for all n nodes to receive the signal.',
      'If it is impossible for every node to receive the signal, return -1.',
    ],
    examples: [
      { input: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2', output: '2' },
      { input: 'times = [[1,2,1]], n = 2, k = 1', output: '1' },
      { input: 'times = [[1,2,1]], n = 2, k = 2', output: '-1' },
    ],
    constraints: [
      '1 <= k <= n <= 100',
      '1 <= times.length <= 6000',
      'times[i].length == 3',
      '1 <= u, v <= n',
      'u != v',
      '0 <= w <= 100',
      'All the pairs (u, v) are unique.',
    ],
    hints: [
      'You need the shortest time from k to every other node in a weighted directed graph.',
      'A min-heap lets you repeatedly expand the next node with the smallest known arrival time.',
      'If some nodes are never reached, the answer must be -1.',
    ],
    starterCode: networkDelayStarter,
    solutionCode: networkDelaySolution,
    solutionName: 'networkDelayTime',
    functionSignature: 'networkDelayTime(times, n, k)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n: 4, k: 2 }, expected: 2 },
      { input: { times: [[1, 2, 1]], n: 2, k: 1 }, expected: 1 },
      { input: { times: [[1, 2, 1]], n: 2, k: 2 }, expected: -1 },
    ],
  },
  {
    id: '17',
    slug: 'reverse-linked-list',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    category: 'Linked List',
    tags: ['Linked List', 'Recursion'],
    companies: ['Amazon', 'Meta', 'Microsoft'],
    description: [
      'Given the head of a singly linked list, reverse the list and return the new head.',
      'You must rearrange the next pointers in-place without allocating a new list.',
    ],
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
      { input: 'head = [1,2]', output: '[2,1]' },
      { input: 'head = []', output: '[]' },
    ],
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-5000 <= Node.val <= 5000'],
    hints: [
      'Keep track of the previous node as you scan through the list.',
      'Before changing a next pointer, save the current next node somewhere.',
      'Each node should end up pointing backward to the node that came before it.',
    ],
    starterCode: reverseLinkedListStarter,
    solutionCode: reverseLinkedListSolution,
    solutionName: 'reverseList',
    functionSignature: 'reverseList(head)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: {
                val: 4,
                next: { val: 5, next: null },
              },
            },
          },
        },
        expected: {
          val: 5,
          next: {
            val: 4,
            next: {
              val: 3,
              next: {
                val: 2,
                next: { val: 1, next: null },
              },
            },
          },
        },
      },
      { input: { val: 1, next: { val: 2, next: null } }, expected: { val: 2, next: { val: 1, next: null } } },
      { input: null, expected: null },
    ],
  },
  {
    id: '18',
    slug: 'combination-sum',
    title: 'Combination Sum',
    difficulty: 'Medium',
    category: 'Backtracking',
    tags: ['Backtracking', 'Arrays', 'Depth-First Search'],
    companies: ['Amazon', 'Meta', 'Snap'],
    description: [
      'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.',
      'You may return the combinations in any order.',
      'The same number may be chosen from candidates an unlimited number of times.',
    ],
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' },
      { input: 'candidates = [2], target = 1', output: '[]' },
    ],
    constraints: [
      '1 <= candidates.length <= 30',
      '2 <= candidates[i] <= 40',
      'All elements of candidates are distinct.',
      '1 <= target <= 40',
    ],
    hints: [
      'Try building combinations one number at a time with depth-first search.',
      'Because numbers can be reused, you can stay on the same index after choosing a value.',
      'Sorting helps you stop early once a candidate becomes too large for the remaining target.',
    ],
    starterCode: combinationSumStarter,
    solutionCode: combinationSumSolution,
    solutionName: 'combinationSum',
    functionSignature: 'combinationSum(candidates, target)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { candidates: [2, 3, 6, 7], target: 7 }, expected: [[2, 2, 3], [7]] },
      { input: { candidates: [2, 3, 5], target: 8 }, expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
      { input: { candidates: [2], target: 1 }, expected: [] },
    ],
  },
  {
    id: '19',
    slug: 'largest-rectangle-in-histogram',
    title: 'Largest Rectangle in Histogram',
    difficulty: 'Hard',
    category: 'Stack',
    tags: ['Stack', 'Monotonic Stack', 'Arrays'],
    companies: ['Amazon', 'Google', 'Uber'],
    description: [
      'Given an array of integers heights representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
    ],
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10' },
      { input: 'heights = [2,4]', output: '4' },
    ],
    constraints: ['1 <= heights.length <= 10^5', '0 <= heights[i] <= 10^4'],
    hints: [
      'A bar can extend left and right until you hit a shorter bar.',
      'Use a monotonic increasing stack to track bars whose rectangle has not been finalized yet.',
      'When you see a shorter bar, pop taller bars and compute the area they could form.',
    ],
    starterCode: largestRectangleStarter,
    solutionCode: largestRectangleSolution,
    solutionName: 'largestRectangleArea',
    functionSignature: 'largestRectangleArea(heights)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [2, 1, 5, 6, 2, 3], expected: 10 },
      { input: [2, 4], expected: 4 },
      { input: [2, 1, 2], expected: 3 },
    ],
  },
  {
    id: '20',
    slug: 'gas-station',
    title: 'Gas Station',
    difficulty: 'Medium',
    category: 'Greedy',
    tags: ['Greedy', 'Arrays'],
    companies: ['Amazon', 'Bloomberg', 'Microsoft'],
    description: [
      'There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].',
      'You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next station.',
      'Return the starting gas station\'s index if you can travel around the circuit once in the clockwise direction, otherwise return -1.',
      'If there exists a solution, it is guaranteed to be unique.',
    ],
    examples: [
      { input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]', output: '3' },
      { input: 'gas = [2,3,4], cost = [3,4,3]', output: '-1' },
    ],
    constraints: [
      'n == gas.length == cost.length',
      '1 <= n <= 10^5',
      '0 <= gas[i], cost[i] <= 10^4',
    ],
    hints: [
      'First check whether the total gas is at least the total cost.',
      'If you fail between start and station i, any station in that failed segment cannot be a valid start.',
      'A single pass can track the current tank and reset the candidate start when the tank becomes negative.',
    ],
    starterCode: gasStationStarter,
    solutionCode: gasStationSolution,
    solutionName: 'canCompleteCircuit',
    functionSignature: 'canCompleteCircuit(gas, cost)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] }, expected: 3 },
      { input: { gas: [2, 3, 4], cost: [3, 4, 3] }, expected: -1 },
      { input: { gas: [5, 1, 2, 3, 4], cost: [4, 4, 1, 5, 1] }, expected: 4 },
    ],
  },
  {
    id: '21',
    slug: 'subarray-sum-equals-k',
    title: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    category: 'Prefix Sum',
    tags: ['Arrays', 'Prefix Sum', 'Hash Map'],
    companies: ['Amazon', 'Facebook', 'Google'],
    description: [
      'Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals k.',
      'A subarray is a contiguous non-empty sequence of elements within an array.',
    ],
    examples: [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
      { input: 'nums = [1,2,3], k = 3', output: '2' },
    ],
    constraints: [
      '1 <= nums.length <= 2 * 10^4',
      '-1000 <= nums[i] <= 1000',
      '-10^7 <= k <= 10^7',
    ],
    hints: [
      'Track the running prefix sum as you scan the array.',
      'If prefix - k has appeared before, each occurrence forms a valid subarray ending at the current index.',
      'Use a hash map from prefix sum to frequency to count matches in O(n) time.',
    ],
    starterCode: subarraySumStarter,
    solutionCode: subarraySumSolution,
    solutionName: 'subarraySum',
    functionSignature: 'subarraySum(nums, k)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { nums: [1, 1, 1], k: 2 }, expected: 2 },
      { input: { nums: [1, 2, 3], k: 3 }, expected: 2 },
      { input: { nums: [1, -1, 0], k: 0 }, expected: 3 },
    ],
  },
  {
    id: '22',
    slug: 'roman-to-integer',
    title: 'Roman to Integer',
    difficulty: 'Easy',
    category: 'String',
    tags: ['String', 'Hash Map'],
    companies: ['Amazon', 'Apple', 'Microsoft'],
    description: [
      'Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.',
      'Given a roman numeral, convert it to an integer.',
      'Roman numerals are usually written largest to smallest from left to right, except for subtractive pairs such as IV and IX.',
    ],
    examples: [
      { input: 's = "III"', output: '3' },
      { input: 's = "LVIII"', output: '58' },
      { input: 's = "MCMXCIV"', output: '1994' },
    ],
    constraints: [
      '1 <= s.length <= 15',
      's contains only the characters I, V, X, L, C, D, and M.',
      'It is guaranteed that s is a valid roman numeral in the range [1, 3999].',
    ],
    hints: [
      'Map each symbol to its integer value.',
      'A smaller value before a larger value means it should be subtracted instead of added.',
      'You can scan from left to right and compare each symbol with the one after it.',
    ],
    starterCode: romanToIntStarter,
    solutionCode: romanToIntSolution,
    solutionName: 'romanToInt',
    functionSignature: 'romanToInt(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: 'III', expected: 3 },
      { input: 'LVIII', expected: 58 },
      { input: 'MCMXCIV', expected: 1994 },
    ],
  },
  {
    id: '23',
    slug: 'coin-change',
    title: 'Coin Change',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Arrays'],
    companies: ['Amazon', 'DoorDash', 'Google'],
    description: [
      'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.',
      'Return the fewest number of coins that you need to make up that amount.',
      'If that amount of money cannot be made up by any combination of the coins, return -1.',
      'You may assume that you have an infinite number of each kind of coin.',
    ],
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3' },
      { input: 'coins = [2], amount = 3', output: '-1' },
      { input: 'coins = [1], amount = 0', output: '0' },
    ],
    constraints: [
      '1 <= coins.length <= 12',
      '1 <= coins[i] <= 2^31 - 1',
      '0 <= amount <= 10^4',
    ],
    hints: [
      'Let dp[x] represent the minimum number of coins needed to make amount x.',
      'Try every coin that could be the last coin used for the current amount.',
      'Initialize unreachable states with a value larger than any valid answer.',
    ],
    starterCode: coinChangeStarter,
    solutionCode: coinChangeSolution,
    solutionName: 'coinChange',
    functionSignature: 'coinChange(coins, amount)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { coins: [1, 2, 5], amount: 11 }, expected: 3 },
      { input: { coins: [2], amount: 3 }, expected: -1 },
      { input: { coins: [1], amount: 0 }, expected: 0 },
    ],
  },
  {
    id: '24',
    slug: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    category: 'Two Pointers',
    tags: ['Arrays', 'Two Pointers', 'Dynamic Programming'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    ],
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    constraints: [
      '1 <= height.length <= 2 * 10^4',
      '0 <= height[i] <= 10^5',
    ],
    hints: [
      'Water above a position depends on the tallest bar to its left and right.',
      'If the left maximum is smaller, the left side determines how much water can be trapped there.',
      'A two-pointer scan can compute the answer in O(n) time and O(1) extra space.',
    ],
    starterCode: trapRainWaterStarter,
    solutionCode: trapRainWaterSolution,
    solutionName: 'trap',
    functionSignature: 'trap(height)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
      { input: [4, 2, 0, 3, 2, 5], expected: 9 },
      { input: [4, 2, 3], expected: 1 },
    ],
  },
  {
    id: '25',
    slug: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    category: 'String',
    tags: ['String', 'Arrays'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'Write a function to find the longest common prefix string amongst an array of strings.',
      'If there is no common prefix, return an empty string "".',
    ],
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    constraints: [
      '1 <= strs.length <= 200',
      '0 <= strs[i].length <= 200',
      'strs[i] consists of only lowercase English letters if it is non-empty.',
    ],
    hints: [
      'Start with the first word as the candidate prefix.',
      'Shrink the prefix until the current word starts with it.',
      'If the prefix becomes empty, you can stop immediately.',
    ],
    starterCode: longestCommonPrefixStarter,
    solutionCode: longestCommonPrefixSolution,
    solutionName: 'longestCommonPrefix',
    functionSignature: 'longestCommonPrefix(strs)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['flower', 'flow', 'flight'], expected: 'fl' },
      { input: ['dog', 'racecar', 'car'], expected: '' },
      { input: ['interspecies', 'interstellar', 'interstate'], expected: 'inters' },
    ],
  },
  {
    id: '26',
    slug: 'validate-binary-search-tree',
    title: 'Validate Binary Search Tree',
    difficulty: 'Medium',
    category: 'Trees',
    tags: ['Trees', 'Depth-First Search', 'Binary Search Tree'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
      'A valid BST requires that every node in the left subtree is strictly less than the current node and every node in the right subtree is strictly greater than the current node.',
      'Both the left and right subtrees must also be valid BSTs.',
    ],
    examples: [
      { input: 'root = {"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}', output: 'true' },
      { input: 'root = {"val":5,"left":{"val":1,"left":null,"right":null},"right":{"val":4,"left":{"val":3,"left":null,"right":null},"right":{"val":6,"left":null,"right":null}}}', output: 'false' },
    ],
    constraints: [
      'The number of nodes in the tree is in the range [1, 10^4].',
      '-2^31 <= Node.val <= 2^31 - 1',
    ],
    hints: [
      'Checking only the immediate children is not enough.',
      'Each recursive call should carry the valid low and high bounds for that subtree.',
      'A node is valid only when low < node.val < high.',
    ],
    starterCode: validateBstStarter,
    solutionCode: validateBstSolution,
    solutionName: 'isValidBST',
    functionSignature: 'isValidBST(root)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: {
          val: 2,
          left: { val: 1, left: null, right: null },
          right: { val: 3, left: null, right: null },
        },
        expected: true,
      },
      {
        input: {
          val: 5,
          left: { val: 1, left: null, right: null },
          right: {
            val: 4,
            left: { val: 3, left: null, right: null },
            right: { val: 6, left: null, right: null },
          },
        },
        expected: false,
      },
      {
        input: {
          val: 10,
          left: { val: 5, left: null, right: { val: 11, left: null, right: null } },
          right: { val: 15, left: null, right: null },
        },
        expected: false,
      },
    ],
  },
  {
    id: '27',
    slug: 'set-matrix-zeroes',
    title: 'Set Matrix Zeroes',
    difficulty: 'Medium',
    category: 'Matrix',
    tags: ['Arrays', 'Matrix'],
    companies: ['Amazon', 'Microsoft', 'Bloomberg'],
    description: [
      'Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0\'s.',
      'You must do it in place.',
    ],
    examples: [
      { input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]', output: '[[1,0,1],[0,0,0],[1,0,1]]' },
      { input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]' },
    ],
    constraints: [
      'm == matrix.length',
      'n == matrix[0].length',
      '1 <= m, n <= 200',
      '-2^31 <= matrix[i][j] <= 2^31 - 1',
    ],
    hints: [
      'Using extra row and column sets works first, then think about constant extra space.',
      'The first row and first column can store which rows and columns need to be zeroed.',
      'Remember to separately track whether the first row or first column originally contained a zero.',
    ],
    starterCode: setMatrixZeroesStarter,
    solutionCode: setMatrixZeroesSolution,
    solutionName: 'setZeroes',
    functionSignature: 'setZeroes(matrix)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[1, 1, 1], [1, 0, 1], [1, 1, 1]], expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] },
      { input: [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]], expected: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]] },
      { input: [[1], [0], [3]], expected: [[0], [0], [0]] },
    ],
  },
  {
    id: '28',
    slug: 'merge-two-sorted-lists',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    category: 'Linked List',
    tags: ['Linked List', 'Recursion'],
    companies: ['Amazon', 'Apple', 'Microsoft'],
    description: [
      'You are given the heads of two sorted linked lists list1 and list2.',
      'Merge the two lists into one sorted list by splicing together their nodes.',
      'Return the head of the merged linked list.',
    ],
    examples: [
      {
        input: 'list1 = {"val":1,"next":{"val":2,"next":{"val":4,"next":null}}}, list2 = {"val":1,"next":{"val":3,"next":{"val":4,"next":null}}}',
        output: '{"val":1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":4,"next":null}}}}}}',
      },
      { input: 'list1 = null, list2 = null', output: 'null' },
      { input: 'list1 = null, list2 = {"val":0,"next":null}', output: '{"val":0,"next":null}' },
    ],
    constraints: [
      'The number of nodes in both lists is in the range [0, 50].',
      '-100 <= Node.val <= 100',
      'Both list1 and list2 are sorted in non-decreasing order.',
    ],
    hints: [
      'Compare the current nodes at the front of each list.',
      'Attach the smaller node to the answer, then advance in that list.',
      'A dummy head node makes it easy to build the merged list iteratively.',
    ],
    starterCode: mergeTwoListsStarter,
    solutionCode: mergeTwoListsSolution,
    solutionName: 'mergeTwoLists',
    functionSignature: 'mergeTwoLists(list1, list2)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: {
          list1: { val: 1, next: { val: 2, next: { val: 4, next: null } } },
          list2: { val: 1, next: { val: 3, next: { val: 4, next: null } } },
        },
        expected: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null } } } } } },
      },
      { input: { list1: null, list2: null }, expected: null },
      { input: { list1: null, list2: { val: 0, next: null } }, expected: { val: 0, next: null } },
    ],
  },
  {
    id: '29',
    slug: 'number-of-islands',
    title: 'Number of Islands',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Graphs', 'Depth-First Search', 'Breadth-First Search', 'Matrix'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given an m x n 2D binary grid grid which represents a map of "1"s (land) and "0"s (water), return the number of islands.',
      'An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.',
      'You may assume all four edges of the grid are all surrounded by water.',
    ],
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' },
    ],
    constraints: [
      'm == grid.length',
      'n == grid[i].length',
      '1 <= m, n <= 300',
      'grid[i][j] is "0" or "1".',
    ],
    hints: [
      'Every time you find an unvisited land cell, you have discovered a new island.',
      'Use DFS or BFS to mark the entire connected component as visited.',
      'You can mutate the grid in place to avoid storing a separate visited set.',
    ],
    starterCode: numberOfIslandsStarter,
    solutionCode: numberOfIslandsSolution,
    solutionName: 'numIslands',
    functionSignature: 'numIslands(grid)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: [['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']],
        expected: 1,
      },
      {
        input: [['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']],
        expected: 3,
      },
      { input: [['1', '0', '1', '0']], expected: 2 },
    ],
  },
  {
    id: '30',
    slug: 'kth-largest-element-in-an-array',
    title: 'Kth Largest Element in an Array',
    difficulty: 'Medium',
    category: 'Heap',
    tags: ['Arrays', 'Heap', 'Divide and Conquer'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given an integer array nums and an integer k, return the kth largest element in the array.',
      'Note that it is the kth largest element in sorted order, not the kth distinct element.',
      'Can you solve it without fully sorting the array?',
    ],
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' },
    ],
    constraints: [
      '1 <= k <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    hints: [
      'Keep only the k largest elements seen so far in a min-heap.',
      'If the heap grows larger than k, remove its smallest element.',
      'After processing every number, the heap root is the kth largest value.',
    ],
    starterCode: kthLargestStarter,
    solutionCode: kthLargestSolution,
    solutionName: 'findKthLargest',
    functionSignature: 'findKthLargest(nums, k)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { nums: [3, 2, 1, 5, 6, 4], k: 2 }, expected: 5 },
      { input: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 }, expected: 4 },
      { input: { nums: [7, 10, 4, 3, 20, 15], k: 3 }, expected: 10 },
    ],
  },
  {
    id: '31',
    slug: 'number-of-1-bits',
    title: 'Number of 1 Bits',
    difficulty: 'Easy',
    category: 'Bit Manipulation',
    tags: ['Bit Manipulation'],
    companies: ['Amazon', 'Microsoft', 'Apple'],
    description: [
      'Write a function that takes the binary representation of a positive integer n and returns the number of set bits it has, also known as the Hamming weight.',
      'A set bit is a bit with value 1.',
    ],
    examples: [
      { input: 'n = 11', output: '3', explanation: 'The binary representation of 11 is 1011, which has three set bits.' },
      { input: 'n = 128', output: '1' },
    ],
    constraints: [
      '1 <= n <= 2^31 - 1',
    ],
    hints: [
      'Check what happens when you apply n & (n - 1).',
      'That operation removes the lowest set bit from n.',
      'Count how many times you can do that before n becomes 0.',
    ],
    starterCode: numberOfOneBitsStarter,
    solutionCode: numberOfOneBitsSolution,
    solutionName: 'hammingWeight',
    functionSignature: 'hammingWeight(n)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: 11, expected: 3 },
      { input: 128, expected: 1 },
      { input: 2147483647, expected: 31 },
    ],
  },
  {
    id: '32',
    slug: 'house-robber-ii',
    title: 'House Robber II',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Arrays'],
    companies: ['Amazon', 'Adobe', 'Microsoft'],
    description: [
      'You are given an integer array nums where nums[i] represents the amount of money in the ith house.',
      'All houses are arranged in a circle, which means the first house is adjacent to the last house.',
      'Return the maximum amount of money you can rob tonight without alerting the police, and you cannot rob two adjacent houses.',
    ],
    examples: [
      { input: 'nums = [2,3,2]', output: '3' },
      { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob houses with values 1 and 3.' },
    ],
    constraints: [
      '1 <= nums.length <= 100',
      '0 <= nums[i] <= 1000',
    ],
    hints: [
      'Because the houses form a circle, you cannot rob both the first and last house.',
      'Split the problem into two linear robberies: exclude the first house or exclude the last house.',
      'Use the standard House Robber transition on each linear slice and take the maximum.',
    ],
    starterCode: houseRobberIiStarter,
    solutionCode: houseRobberIiSolution,
    solutionName: 'rob',
    functionSignature: 'rob(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [2, 3, 2], expected: 3 },
      { input: [1, 2, 3, 1], expected: 4 },
      { input: [1, 2, 1, 1], expected: 3 },
    ],
  },
  {
    id: '33',
    slug: 'word-search',
    title: 'Word Search',
    difficulty: 'Medium',
    category: 'Backtracking',
    tags: ['Backtracking', 'Matrix', 'Depth-First Search'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'Given an m x n grid of characters board and a string word, return true if word exists in the grid.',
      'The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.',
      'The same letter cell may not be used more than once in a single word path.',
    ],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', output: 'false' },
    ],
    constraints: [
      '1 <= board.length, board[i].length <= 6',
      '1 <= word.length <= 15',
      'board and word consist of uppercase and lowercase English letters.',
    ],
    hints: [
      'Try each cell as a starting point for a DFS.',
      'At each step, match the current character and explore the four directions.',
      'Temporarily mark a visited cell so you do not reuse it in the same path.',
    ],
    starterCode: wordSearchStarter,
    solutionCode: wordSearchSolution,
    solutionName: 'exist',
    functionSignature: 'exist(board, word)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'ABCCED' }, expected: true },
      { input: { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'SEE' }, expected: true },
      { input: { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'ABCB' }, expected: false },
    ],
  },
  {
    id: '34',
    slug: 'minimum-depth-of-binary-tree',
    title: 'Minimum Depth of Binary Tree',
    difficulty: 'Easy',
    category: 'Trees',
    tags: ['Trees', 'Breadth-First Search', 'Depth-First Search'],
    companies: ['Amazon', 'Bloomberg', 'Microsoft'],
    description: [
      'Given the root of a binary tree, return its minimum depth.',
      'The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.',
      'A leaf is a node with no children.',
    ],
    examples: [
      { input: 'root = {"val":3,"left":{"val":9,"left":null,"right":null},"right":{"val":20,"left":{"val":15,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}}}', output: '2' },
      { input: 'root = {"val":2,"left":null,"right":{"val":3,"left":null,"right":{"val":4,"left":null,"right":{"val":5,"left":null,"right":{"val":6,"left":null,"right":null}}}}}', output: '5' },
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 10^5].',
      '-1000 <= Node.val <= 1000',
    ],
    hints: [
      'Breadth-first search reaches the shallowest leaf first.',
      'A node counts as a leaf only when both children are missing.',
      'Return as soon as you pop the first leaf from the queue.',
    ],
    starterCode: minDepthStarter,
    solutionCode: minDepthSolution,
    solutionName: 'minDepth',
    functionSignature: 'minDepth(root)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: {
          val: 3,
          left: { val: 9, left: null, right: null },
          right: {
            val: 20,
            left: { val: 15, left: null, right: null },
            right: { val: 7, left: null, right: null },
          },
        },
        expected: 2,
      },
      {
        input: {
          val: 2,
          left: null,
          right: {
            val: 3,
            left: null,
            right: {
              val: 4,
              left: null,
              right: {
                val: 5,
                left: null,
                right: { val: 6, left: null, right: null },
              },
            },
          },
        },
        expected: 5,
      },
      { input: null, expected: 0 },
    ],
  },
  {
    id: '35',
    slug: 'daily-temperatures',
    title: 'Daily Temperatures',
    difficulty: 'Medium',
    category: 'Monotonic Stack',
    tags: ['Arrays', 'Stack', 'Monotonic Stack'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.',
      'If there is no future day for which this is possible, keep answer[i] == 0 instead.',
    ],
    examples: [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]' },
    ],
    constraints: [
      '1 <= temperatures.length <= 10^5',
      '30 <= temperatures[i] <= 100',
    ],
    hints: [
      'You need the next greater element for each position.',
      'Keep indices of unresolved days in a stack with decreasing temperatures.',
      'When the current day is warmer, pop earlier indices and fill their waiting times.',
    ],
    starterCode: dailyTemperaturesStarter,
    solutionCode: dailyTemperaturesSolution,
    solutionName: 'dailyTemperatures',
    functionSignature: 'dailyTemperatures(temperatures)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [73, 74, 75, 71, 69, 72, 76, 73], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
      { input: [30, 40, 50, 60], expected: [1, 1, 1, 0] },
      { input: [30, 60, 90], expected: [1, 1, 0] },
    ],
  },
  {
    id: '36',
    slug: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    category: 'Binary Search',
    tags: ['Arrays', 'Binary Search', 'Divide and Conquer'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
      'The overall run time complexity should be O(log (m + n)).',
    ],
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.0' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.5' },
    ],
    constraints: [
      'nums1.length == m',
      'nums2.length == n',
      '0 <= m <= 1000',
      '0 <= n <= 1000',
      '1 <= m + n <= 2000',
      '-10^6 <= nums1[i], nums2[i] <= 10^6',
    ],
    hints: [
      'Binary search the smaller array, not the larger one.',
      'Think about partitioning both arrays so the left halves contain half the total elements.',
      'A partition is valid when every left-side value is less than or equal to every right-side value.',
    ],
    starterCode: medianTwoSortedArraysStarter,
    solutionCode: medianTwoSortedArraysSolution,
    solutionName: 'findMedianSortedArrays',
    functionSignature: 'findMedianSortedArrays(nums1, nums2)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { nums1: [1, 3], nums2: [2] }, expected: 2 },
      { input: { nums1: [1, 2], nums2: [3, 4] }, expected: 2.5 },
      { input: { nums1: [0, 0], nums2: [0, 0] }, expected: 0 },
    ],
  },
  {
    id: '37',
    slug: 'jump-game',
    title: 'Jump Game',
    difficulty: 'Medium',
    category: 'Greedy',
    tags: ['Arrays', 'Greedy', 'Dynamic Programming'],
    companies: ['Amazon', 'Adobe', 'Microsoft'],
    description: [
      'You are given an integer array nums. You are initially positioned at the first index, and each element in the array represents your maximum jump length at that position.',
      'Return true if you can reach the last index, or false otherwise.',
    ],
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' },
      { input: 'nums = [3,2,1,0,4]', output: 'false', explanation: 'You will always stop at index 3, so you cannot reach the last index.' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '0 <= nums[i] <= 10^5',
    ],
    hints: [
      'Track the farthest index you can currently reach.',
      'If you ever arrive at an index beyond that farthest reach, the answer is false.',
      'A greedy scan from left to right is enough.',
    ],
    starterCode: jumpGameStarter,
    solutionCode: jumpGameSolution,
    solutionName: 'canJump',
    functionSignature: 'canJump(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [2, 3, 1, 1, 4], expected: true },
      { input: [3, 2, 1, 0, 4], expected: false },
      { input: [0], expected: true },
    ],
  },
  {
    id: '38',
    slug: 'spiral-matrix',
    title: 'Spiral Matrix',
    difficulty: 'Medium',
    category: 'Matrix',
    tags: ['Arrays', 'Matrix', 'Simulation'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given an m x n matrix, return all elements of the matrix in spiral order.',
      'Traverse the outer boundary first, then continue inward until every element is visited.',
    ],
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' },
      { input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', output: '[1,2,3,4,8,12,11,10,9,5,6,7]' },
    ],
    constraints: [
      'm == matrix.length',
      'n == matrix[i].length',
      '1 <= m, n <= 10',
      '-100 <= matrix[i][j] <= 100',
    ],
    hints: [
      'Maintain four boundaries: top, bottom, left, and right.',
      'After traversing one side, move that boundary inward.',
      'Be careful to guard the bottom row and left column traversals after the boundaries cross.',
    ],
    starterCode: spiralMatrixStarter,
    solutionCode: spiralMatrixSolution,
    solutionName: 'spiralOrder',
    functionSignature: 'spiralOrder(matrix)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expected: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
      { input: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
      { input: [[1], [2], [3]], expected: [1, 2, 3] },
    ],
  },
  {
    id: '39',
    slug: 'minimum-window-substring',
    title: 'Minimum Window Substring',
    difficulty: 'Hard',
    category: 'Sliding Window',
    tags: ['Strings', 'Hash Map', 'Sliding Window'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t, including duplicates, is included in the window.',
      'If there is no such substring, return an empty string "".',
      'The testcases will be generated so that the answer is unique.',
    ],
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    constraints: [
      'm == s.length',
      'n == t.length',
      '1 <= m, n <= 10^5',
      's and t consist of uppercase and lowercase English letters.',
    ],
    hints: [
      'Use a frequency map for the characters required by t.',
      'Expand the right pointer until the current window is valid, then shrink from the left.',
      'Keep the shortest valid window seen so far.',
    ],
    starterCode: minimumWindowSubstringStarter,
    solutionCode: minimumWindowSubstringSolution,
    solutionName: 'minWindow',
    functionSignature: 'minWindow(s, t)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { s: 'ADOBECODEBANC', t: 'ABC' }, expected: 'BANC' },
      { input: { s: 'a', t: 'a' }, expected: 'a' },
      { input: { s: 'a', t: 'aa' }, expected: '' },
    ],
  },
  {
    id: '40',
    slug: 'find-minimum-in-rotated-sorted-array',
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'Medium',
    category: 'Binary Search',
    tags: ['Arrays', 'Binary Search'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'Suppose an array of length n sorted in ascending order is rotated between 1 and n times.',
      'Given the sorted rotated array nums of unique elements, return the minimum element of this array.',
      'You must write an algorithm that runs in O(log n) time.',
    ],
    examples: [
      { input: 'nums = [3,4,5,1,2]', output: '1' },
      { input: 'nums = [4,5,6,7,0,1,2]', output: '0' },
      { input: 'nums = [11,13,15,17]', output: '11' },
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 5000',
      '-5000 <= nums[i] <= 5000',
      'All the integers of nums are unique.',
      'nums is sorted and rotated between 1 and n times.',
    ],
    hints: [
      'Compare the middle value with the rightmost value to decide which half contains the minimum.',
      'If nums[mid] is greater than nums[right], the minimum must be to the right of mid.',
      'Otherwise, the minimum is at mid or to its left.',
    ],
    starterCode: findMinRotatedStarter,
    solutionCode: findMinRotatedSolution,
    solutionName: 'findMin',
    functionSignature: 'findMin(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [3, 4, 5, 1, 2], expected: 1 },
      { input: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
      { input: [11, 13, 15, 17], expected: 11 },
    ],
  },
  {
    id: '41',
    slug: 'course-schedule',
    title: 'Course Schedule',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Graphs', 'Topological Sort', 'Breadth-First Search'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.',
      'You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.',
      'Return true if you can finish all courses. Otherwise, return false.',
    ],
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false' },
    ],
    constraints: [
      '1 <= numCourses <= 2000',
      '0 <= prerequisites.length <= 5000',
      'prerequisites[i].length == 2',
      '0 <= a, b < numCourses',
      'All prerequisite pairs are unique.',
    ],
    hints: [
      'Interpret the prerequisites as a directed graph.',
      'If a cycle exists, some course can never become available.',
      'Use indegrees and a queue to process courses in topological order.',
    ],
    starterCode: courseScheduleStarter,
    solutionCode: courseScheduleSolution,
    solutionName: 'canFinish',
    functionSignature: 'canFinish(numCourses, prerequisites)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { numCourses: 2, prerequisites: [[1, 0]] }, expected: true },
      { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, expected: false },
      { input: { numCourses: 4, prerequisites: [[1, 0], [2, 1], [3, 2]] }, expected: true },
    ],
  },
  {
    id: '42',
    slug: 'evaluate-reverse-polish-notation',
    title: 'Evaluate Reverse Polish Notation',
    difficulty: 'Medium',
    category: 'Stack',
    tags: ['Stack', 'Arrays', 'Math'],
    companies: ['Amazon', 'LinkedIn', 'Meta'],
    description: [
      'You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation.',
      'Evaluate the expression and return an integer that represents the value of the expression.',
      'The valid operators are +, -, *, and /. Division between two integers should truncate toward zero.',
    ],
    examples: [
      { input: 'tokens = ["2","1","+","3","*"]', output: '9', explanation: '((2 + 1) * 3) = 9' },
      { input: 'tokens = ["4","13","5","/","+"]', output: '6', explanation: '(4 + (13 / 5)) = 6' },
      { input: 'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', output: '22' },
    ],
    constraints: [
      '1 <= tokens.length <= 10^4',
      'tokens[i] is either an operator or an integer in the range [-200, 200].',
      'The input represents a valid Reverse Polish Notation expression.',
    ],
    hints: [
      'Process the tokens from left to right using a stack.',
      'Push numbers onto the stack until you see an operator.',
      'When you see an operator, pop the last two values, apply the operation, and push the result back.',
    ],
    starterCode: evalRpnStarter,
    solutionCode: evalRpnSolution,
    solutionName: 'evalRPN',
    functionSignature: 'evalRPN(tokens)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['2', '1', '+', '3', '*'], expected: 9 },
      { input: ['4', '13', '5', '/', '+'], expected: 6 },
      { input: ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], expected: 22 },
    ],
  },
  {
    id: '43',
    slug: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    category: 'Binary Search',
    tags: ['Arrays', 'Binary Search'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'There is an integer array nums sorted in ascending order with distinct values that is rotated at an unknown pivot index.',
      'Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.',
      'You must write an algorithm with O(log n) runtime complexity.',
    ],
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
      { input: 'nums = [1], target = 0', output: '-1' },
    ],
    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i], target <= 10^4',
      'All values of nums are unique.',
      'nums is an ascending array that is possibly rotated.',
    ],
    hints: [
      'At least one half of the current search range is always sorted.',
      'Use the sorted half to decide whether target must lie inside it.',
      'Discard half of the range each step just like normal binary search.',
    ],
    starterCode: searchRotatedStarter,
    solutionCode: searchRotatedSolution,
    solutionName: 'search',
    functionSignature: 'search(nums, target)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 }, expected: 4 },
      { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 3 }, expected: -1 },
      { input: { nums: [1], target: 0 }, expected: -1 },
    ],
  },
  {
    id: '44',
    slug: 'valid-sudoku',
    title: 'Valid Sudoku',
    difficulty: 'Medium',
    category: 'Matrix',
    tags: ['Arrays', 'Hash Set', 'Matrix'],
    companies: ['Amazon', 'Apple', 'Google'],
    description: [
      'Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the Sudoku rules.',
      'Each row must contain the digits 1-9 without repetition, each column must contain the digits 1-9 without repetition, and each of the nine 3 x 3 sub-boxes must contain the digits 1-9 without repetition.',
      'A Sudoku board may be valid but still not be solvable.',
    ],
    examples: [
      { input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]', output: 'true' },
      { input: 'board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]', output: 'false' },
    ],
    constraints: [
      'board.length == 9',
      'board[i].length == 9',
      'board[i][j] is a digit 1-9 or .',
    ],
    hints: [
      'Track digits seen in each row, each column, and each 3 x 3 box.',
      'Map each cell to a box index using integer division.',
      'The first repeated digit means the board is invalid.',
    ],
    starterCode: validSudokuStarter,
    solutionCode: validSudokuSolution,
    solutionName: 'isValidSudoku',
    functionSignature: 'isValidSudoku(board)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']], expected: true },
      { input: [['8', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']], expected: false },
      { input: [['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.', '.']], expected: true },
    ],
  },
  {
    id: '45',
    slug: 'rotting-oranges',
    title: 'Rotting Oranges',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Arrays', 'Breadth-First Search', 'Matrix'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'You are given an m x n grid where each cell can have one of three values: 0 representing an empty cell, 1 representing a fresh orange, or 2 representing a rotten orange.',
      'Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.',
      'Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.',
    ],
    examples: [
      { input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]', output: '4' },
      { input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]', output: '-1' },
      { input: 'grid = [[0,2]]', output: '0' },
    ],
    constraints: [
      'm == grid.length',
      'n == grid[i].length',
      '1 <= m, n <= 10',
      'grid[i][j] is 0, 1, or 2.',
    ],
    hints: [
      'This is a multi-source breadth-first search starting from every rotten orange.',
      'Process the grid minute by minute using a queue.',
      'Count fresh oranges so you can detect when some can never rot.',
    ],
    starterCode: rottingOrangesStarter,
    solutionCode: rottingOrangesSolution,
    solutionName: 'orangesRotting',
    functionSignature: 'orangesRotting(grid)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[2, 1, 1], [1, 1, 0], [0, 1, 1]], expected: 4 },
      { input: [[2, 1, 1], [0, 1, 1], [1, 0, 1]], expected: -1 },
      { input: [[0, 2]], expected: 0 },
    ],
  },
  {
    id: '46',
    slug: 'linked-list-cycle',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    category: 'Linked Lists',
    tags: ['Linked Lists', 'Two Pointers', 'Hash Set'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
      'There is a cycle if some node can be reached again by continuously following the next pointer.',
      'Return true if there is a cycle in the linked list. Otherwise, return false.',
    ],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'The tail connects back to the node at index 1.' },
      { input: 'head = [1,2], pos = 0', output: 'true' },
      { input: 'head = [1], pos = -1', output: 'false' },
    ],
    constraints: [
      'The number of nodes in the list is in the range [0, 10^4].',
      '-10^5 <= Node.val <= 10^5',
      'pos is -1 or a valid index in the linked list.',
    ],
    hints: [
      'Use two pointers moving at different speeds.',
      'If there is a cycle, the fast pointer will eventually meet the slow pointer.',
      'If the fast pointer reaches the end, the list has no cycle.',
    ],
    starterCode: linkedListCycleStarter,
    solutionCode: linkedListCycleSolution,
    solutionName: 'hasCycle',
    functionSignature: 'hasCycle(head)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: (() => {
          const head: { val: number; next: unknown } = { val: 3, next: { val: 2, next: { val: 0, next: { val: -4, next: null } } } }
          ;(((head.next as { val: number; next: unknown }).next as { val: number; next: unknown }).next as { val: number; next: unknown }).next = head.next
          return head
        })(),
        expected: true,
      },
      {
        input: (() => {
          const head: { val: number; next: unknown } = { val: 1, next: { val: 2, next: null } }
          ;(head.next as { val: number; next: unknown }).next = head
          return head
        })(),
        expected: true,
      },
      { input: { val: 1, next: null }, expected: false },
    ],
  },
  {
    id: '47',
    slug: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Binary Search', 'Arrays'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
      'A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.',
      'The subsequence does not need to be contiguous.',
    ],
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4', explanation: 'The LIS is [2,3,7,101].' },
      { input: 'nums = [0,1,0,3,2,3]', output: '4' },
      { input: 'nums = [7,7,7,7,7,7,7]', output: '1' },
    ],
    constraints: [
      '1 <= nums.length <= 2500',
      '-10^4 <= nums[i] <= 10^4',
    ],
    hints: [
      'A quadratic DP works, but there is also an O(n log n) approach.',
      'Maintain the smallest possible tail for increasing subsequences of each length.',
      'Use binary search to find where the current number should go among those tails.',
    ],
    starterCode: lisStarter,
    solutionCode: lisSolution,
    solutionName: 'lengthOfLIS',
    functionSignature: 'lengthOfLIS(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 },
      { input: [0, 1, 0, 3, 2, 3], expected: 4 },
      { input: [7, 7, 7, 7, 7, 7, 7], expected: 1 },
    ],
  },
  {
    id: '48',
    slug: 'word-ladder',
    title: 'Word Ladder',
    difficulty: 'Hard',
    category: 'Graphs',
    tags: ['Graphs', 'Breadth-First Search', 'Strings'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'A transformation sequence from beginWord to endWord using a dictionary wordList is a sequence of words where adjacent words differ by exactly one letter.',
      'Every transformed word must exist in wordList, and endWord must appear in wordList.',
      'Return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.',
    ],
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: '5', explanation: 'One shortest sequence is hit -> hot -> dot -> dog -> cog.' },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: '0' },
    ],
    constraints: [
      '1 <= beginWord.length <= 10',
      'endWord.length == beginWord.length',
      '1 <= wordList.length <= 5000',
      'All words in wordList have the same length as beginWord.',
      'beginWord, endWord, and wordList[i] consist of lowercase English letters.',
      'beginWord != endWord',
    ],
    hints: [
      'Breadth-first search finds the shortest path in an unweighted graph.',
      'Think of each word as a node, with edges between words that differ by one letter.',
      'Generate neighbors by changing one character at a time and checking whether the new word exists in the dictionary.',
    ],
    starterCode: wordLadderStarter,
    solutionCode: wordLadderSolution,
    solutionName: 'ladderLength',
    functionSignature: 'ladderLength(beginWord, endWord, wordList)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'] }, expected: 5 },
      { input: { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log'] }, expected: 0 },
      { input: { beginWord: 'a', endWord: 'c', wordList: ['a', 'b', 'c'] }, expected: 2 },
    ],
  },

  {
    id: '49',
    slug: 'letter-combinations-of-a-phone-number',
    title: 'Letter Combinations of a Phone Number',
    difficulty: 'Medium',
    category: 'Backtracking',
    tags: ['Backtracking', 'Strings', 'Recursion'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given a string containing digits from 2 to 9 inclusive, return all possible letter combinations that the number could represent.',
      'Return the answer in any order.',
      'A mapping of digits to letters is the same as on standard telephone buttons. Note that 1 does not map to any letters.',
    ],
    examples: [
      { input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: 'digits = ""', output: '[]' },
      { input: 'digits = "2"', output: '["a","b","c"]' },
    ],
    constraints: [
      '0 <= digits.length <= 4',
      'digits[i] is a digit in the range [2, 9].',
    ],
    hints: [
      'Build the answer one digit at a time.',
      'Each digit contributes a small fixed set of possible letters.',
      'Backtracking is a natural way to generate every combination.',
    ],
    starterCode: letterCombinationsStarter,
    solutionCode: letterCombinationsSolution,
    solutionName: 'letterCombinations',
    functionSignature: 'letterCombinations(digits)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: '23', expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] },
      { input: '', expected: [] },
      { input: '7', expected: ['p', 'q', 'r', 's'] },
    ],
  },
  {
    id: '50',
    slug: 'task-scheduler',
    title: 'Task Scheduler',
    difficulty: 'Medium',
    category: 'Heap',
    tags: ['Heap', 'Greedy', 'Counting'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'You are given an array of CPU tasks represented by letters and a non-negative integer n.',
      'Each cycle or interval allows the CPU to complete one task or stay idle.',
      'Tasks with the same letter must be separated by at least n intervals. Return the minimum number of intervals required to finish all tasks.',
    ],
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: '8' },
      { input: 'tasks = ["A","C","A","B","D","B"], n = 1', output: '6' },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: '6' },
    ],
    constraints: [
      '1 <= tasks.length <= 10^4',
      'tasks[i] is an uppercase English letter.',
      '0 <= n <= 100',
    ],
    hints: [
      'The most frequent tasks determine how much idle time may be needed.',
      'A max heap lets you always run the currently most needed task first.',
      'Track tasks in cooldown separately until they become available again.',
    ],
    starterCode: taskSchedulerStarter,
    solutionCode: taskSchedulerSolution,
    solutionName: 'leastInterval',
    functionSignature: 'leastInterval(tasks, n)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { tasks: ['A', 'A', 'A', 'B', 'B', 'B'], n: 2 }, expected: 8 },
      { input: { tasks: ['A', 'C', 'A', 'B', 'D', 'B'], n: 1 }, expected: 6 },
      { input: { tasks: ['A', 'A', 'A', 'B', 'B', 'B'], n: 0 }, expected: 6 },
    ],
  },
  {
    id: '51',
    slug: 'pacific-atlantic-water-flow',
    title: 'Pacific Atlantic Water Flow',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Graphs', 'Depth-First Search', 'Matrix'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.',
      "The Pacific touches the island's left and top edges, and the Atlantic touches the island's right and bottom edges.",
      'Water can flow from a cell to neighboring cells with height less than or equal to the current cell. Return a list of grid coordinates where water can flow to both oceans.',
    ],
    examples: [
      { input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]' },
      { input: 'heights = [[1]]', output: '[[0,0]]' },
    ],
    constraints: [
      'm == heights.length',
      'n == heights[r].length',
      '1 <= m, n <= 200',
      '0 <= heights[r][c] <= 10^5',
    ],
    hints: [
      'Instead of flowing outward from every cell, reverse the process.',
      'Start a search from the Pacific edges and another from the Atlantic edges.',
      'Cells reachable in both searches belong in the answer.',
    ],
    starterCode: pacificAtlanticStarter,
    solutionCode: pacificAtlanticSolution,
    solutionName: 'pacificAtlantic',
    functionSignature: 'pacificAtlantic(heights)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]], expected: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] },
      { input: [[1]], expected: [[0, 0]] },
      { input: [[2, 1], [1, 2]], expected: [[0, 0], [0, 1], [1, 0], [1, 1]] },
    ],
  },
  {
    id: '52',
    slug: 'invert-binary-tree',
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    category: 'Trees',
    tags: ['Trees', 'Depth-First Search', 'Breadth-First Search'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given the root of a binary tree, invert the tree and return its root.',
      'Inverting a tree means every node swaps its left and right children.',
      'You may return the modified tree directly.',
    ],
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
      { input: 'root = [2,1,3]', output: '[2,3,1]' },
      { input: 'root = []', output: '[]' },
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 100].',
      '-100 <= Node.val <= 100',
    ],
    hints: [
      'What should happen to the left and right child of each node?',
      'A recursive depth-first traversal can swap the children on the way down.',
      'An iterative queue-based traversal works too if you prefer breadth-first search.',
    ],
    starterCode: invertBinaryTreeStarter,
    solutionCode: invertBinaryTreeSolution,
    solutionName: 'invertTree',
    functionSignature: 'invertTree(root)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: { val: 4, left: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, right: { val: 7, left: { val: 6, left: null, right: null }, right: { val: 9, left: null, right: null } } },
        expected: { val: 4, left: { val: 7, left: { val: 9, left: null, right: null }, right: { val: 6, left: null, right: null } }, right: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } } },
      },
      {
        input: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } },
        expected: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } },
      },
      { input: null, expected: null },
    ],
  },
  {
    id: '53',
    slug: 'decode-ways',
    title: 'Decode Ways',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Strings'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'A message containing letters from A-Z can be encoded into numbers using "1" -> "A", "2" -> "B", ..., "26" -> "Z".',
      'Given a string s containing only digits, return the total number of ways to decode it.',
      'A leading zero is invalid, and digits must be grouped into valid one-digit or two-digit codes from 1 to 26.',
    ],
    examples: [
      { input: 's = "12"', output: '2', explanation: 'It can be decoded as "AB" (1 2) or "L" (12).' },
      { input: 's = "226"', output: '3', explanation: 'It can be decoded as "BZ", "VF", or "BBF".' },
      { input: 's = "06"', output: '0' },
    ],
    constraints: [
      '1 <= s.length <= 100',
      's contains only digits and may contain leading zeros.',
    ],
    hints: [
      'Let dp[i] represent the number of ways to decode the prefix ending at position i.',
      'A non-zero single digit can extend the previous count.',
      'A two-digit number between 10 and 26 can also form a valid extension.',
    ],
    starterCode: decodeWaysStarter,
    solutionCode: decodeWaysSolution,
    solutionName: 'numDecodings',
    functionSignature: 'numDecodings(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: '12', expected: 2 },
      { input: '226', expected: 3 },
      { input: '06', expected: 0 },
    ],
  },
  {
    id: '54',
    slug: 'alien-dictionary',
    title: 'Alien Dictionary',
    difficulty: 'Hard',
    category: 'Graphs',
    tags: ['Graphs', 'Topological Sort', 'Strings'],
    companies: ['Google', 'Meta', 'Uber'],
    description: [
      'There is a new alien language that uses the English alphabet, but the order of the letters is unknown.',
      'You are given a list of words sorted lexicographically according to the rules of this new language.',
      'Derive a valid ordering of the letters. If no ordering is possible, return an empty string. If multiple answers exist, return any valid one.',
    ],
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"' },
      { input: 'words = ["z","x"]', output: '"zx"' },
      { input: 'words = ["abc","ab"]', output: '""', explanation: 'A longer word cannot come before its own prefix.' },
    ],
    constraints: [
      '1 <= words.length <= 100',
      '1 <= words[i].length <= 100',
      'words[i] consists of lowercase English letters.',
    ],
    hints: [
      'Compare each pair of adjacent words to find the first differing character.',
      'That first difference gives you a directed edge between letters.',
      'Once you build the graph, use topological sorting to recover a valid order or detect a cycle.',
    ],
    starterCode: alienDictionaryStarter,
    solutionCode: alienDictionarySolution,
    solutionName: 'alienOrder',
    functionSignature: 'alienOrder(words)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['wrt', 'wrf', 'er', 'ett', 'rftt'], expected: 'wertf' },
      { input: ['z', 'x'], expected: 'zx' },
      { input: ['abc', 'ab'], expected: '' },
    ],
  },
  {
    id: '55',
    slug: 'find-pivot-index',
    title: 'Find Pivot Index',
    difficulty: 'Easy',
    category: 'Prefix Sum',
    tags: ['Arrays', 'Prefix Sum'],
    companies: ['Amazon', 'Microsoft', 'Meta'],
    description: [
      'Given an array of integers nums, calculate the pivot index of this array.',
      'The pivot index is the index where the sum of all the numbers strictly to the left is equal to the sum of all the numbers strictly to the right.',
      'If multiple pivot indexes exist, return the leftmost pivot index. If no such index exists, return -1.',
    ],
    examples: [
      { input: 'nums = [1,7,3,6,5,6]', output: '3', explanation: 'The left sum is 11 and the right sum is also 11.' },
      { input: 'nums = [1,2,3]', output: '-1' },
      { input: 'nums = [2,1,-1]', output: '0' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-1000 <= nums[i] <= 1000',
    ],
    hints: [
      'Compute the total sum of the array first.',
      'As you scan from left to right, maintain the running sum on the left.',
      'The right sum at an index is total minus left sum minus the current value.',
    ],
    starterCode: pivotIndexStarter,
    solutionCode: pivotIndexSolution,
    solutionName: 'pivotIndex',
    functionSignature: 'pivotIndex(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [1, 7, 3, 6, 5, 6], expected: 3 },
      { input: [1, 2, 3], expected: -1 },
      { input: [2, 1, -1], expected: 0 },
    ],
  },
  {
    id: '56',
    slug: 'binary-tree-right-side-view',
    title: 'Binary Tree Right Side View',
    difficulty: 'Medium',
    category: 'Trees',
    tags: ['Trees', 'Breadth-First Search', 'Depth-First Search'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'Given the root of a binary tree, imagine yourself standing on the right side of it.',
      'Return the values of the nodes you can see ordered from top to bottom.',
      'You may solve the problem using either breadth-first traversal by levels or depth-first traversal that prioritizes the right child first.',
    ],
    examples: [
      { input: 'root = [1,2,3,null,5,null,4]', output: '[1,3,4]' },
      { input: 'root = [1,null,3]', output: '[1,3]' },
      { input: 'root = []', output: '[]' },
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 100].',
      '-100 <= Node.val <= 100',
    ],
    hints: [
      'Process the tree level by level and record the last node seen at each level.',
      'A queue works well for breadth-first search.',
      'If you prefer DFS, visit the right subtree before the left subtree and only record the first node you see at each depth.',
    ],
    starterCode: rightSideViewStarter,
    solutionCode: rightSideViewSolution,
    solutionName: 'rightSideView',
    functionSignature: 'rightSideView(root)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: { val: 1, left: { val: 2, left: null, right: { val: 5, left: null, right: null } }, right: { val: 3, left: null, right: { val: 4, left: null, right: null } } },
        expected: [1, 3, 4],
      },
      { input: { val: 1, left: null, right: { val: 3, left: null, right: null } }, expected: [1, 3] },
      { input: null, expected: [] },
    ],
  },
  {
    id: '57',
    slug: 'meeting-rooms-ii',
    title: 'Meeting Rooms II',
    difficulty: 'Medium',
    category: 'Heap',
    tags: ['Arrays', 'Heap', 'Sorting', 'Intervals'],
    companies: ['Meta', 'Amazon', 'Google'],
    description: [
      'Given an array of meeting time intervals where intervals[i] = [start_i, end_i], return the minimum number of conference rooms required.',
      'Meetings that end at a given time can reuse a room for another meeting that starts at the same time.',
      'The intervals are not guaranteed to be sorted.',
    ],
    examples: [
      { input: 'intervals = [[0,30],[5,10],[15,20]]', output: '2' },
      { input: 'intervals = [[7,10],[2,4]]', output: '1' },
      { input: 'intervals = [[1,5],[2,3],[3,6]]', output: '2' },
    ],
    constraints: [
      '1 <= intervals.length <= 10^4',
      '0 <= start_i < end_i <= 10^6',
    ],
    hints: [
      'Sort meetings by start time.',
      'Track the earliest ending meeting currently using a room.',
      'A min-heap lets you quickly decide whether a room can be reused or a new one is needed.',
    ],
    starterCode: meetingRoomsStarter,
    solutionCode: meetingRoomsSolution,
    solutionName: 'minMeetingRooms',
    functionSignature: 'minMeetingRooms(intervals)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[0, 30], [5, 10], [15, 20]], expected: 2 },
      { input: [[7, 10], [2, 4]], expected: 1 },
      { input: [[1, 5], [2, 3], [3, 6]], expected: 2 },
    ],
  },
  {
    id: '58',
    slug: 'k-closest-points-to-origin',
    title: 'K Closest Points to Origin',
    difficulty: 'Medium',
    category: 'Heap',
    tags: ['Arrays', 'Heap', 'Geometry', 'Sorting'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'Given an array of points where points[i] = [x_i, y_i] represents a point on the X-Y plane, return the k closest points to the origin (0, 0).',
      'The distance between two points on the X-Y plane is the Euclidean distance, but you can compare squared distances instead of computing square roots.',
      'Return the answer in ascending order by distance from the origin for this playground.',
    ],
    examples: [
      { input: 'points = [[1,3],[-2,2]], k = 1', output: '[[-2,2]]' },
      { input: 'points = [[3,3],[5,-1],[-2,4]], k = 2', output: '[[3,3],[-2,4]]' },
    ],
    constraints: [
      '1 <= k <= points.length <= 10^4',
      '-10^4 <= x_i, y_i <= 10^4',
    ],
    hints: [
      'You only need relative distances, so compare x^2 + y^2.',
      'A heap can help you pick the k smallest distances efficiently.',
      'Make the ordering deterministic so tests can compare exact outputs.',
    ],
    starterCode: kClosestStarter,
    solutionCode: kClosestSolution,
    solutionName: 'kClosest',
    functionSignature: 'kClosest(points, k)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[[1, 3], [-2, 2]], 1], expected: [[-2, 2]] },
      { input: [[[3, 3], [5, -1], [-2, 4]], 2], expected: [[3, 3], [-2, 4]] },
      { input: [[[2, -2], [1, 1], [4, 4]], 2], expected: [[1, 1], [2, -2]] },
    ],
  },
  {
    id: '59',
    slug: 'insert-interval',
    title: 'Insert Interval',
    difficulty: 'Medium',
    category: 'Intervals',
    tags: ['Arrays', 'Intervals'],
    companies: ['Google', 'Meta', 'LinkedIn'],
    description: [
      'You are given an array of non-overlapping intervals sorted by their start times and a new interval.',
      'Insert newInterval into intervals such that the result remains sorted and still has no overlapping intervals.',
      'Merge overlapping intervals when necessary and return the updated list.',
    ],
    examples: [
      { input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]', output: '[[1,5],[6,9]]' },
      { input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]', output: '[[1,2],[3,10],[12,16]]' },
    ],
    constraints: [
      '0 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      '0 <= start_i <= end_i <= 10^5',
      'newInterval.length == 2',
    ],
    hints: [
      'Add all intervals that end before the new interval starts.',
      'Merge every interval that overlaps the new interval into one running range.',
      'Append the remaining intervals unchanged once merging is done.',
    ],
    starterCode: insertIntervalStarter,
    solutionCode: insertIntervalSolution,
    solutionName: 'insert',
    functionSignature: 'insert(intervals, newInterval)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[[1, 3], [6, 9]], [2, 5]], expected: [[1, 5], [6, 9]] },
      { input: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]], expected: [[1, 2], [3, 10], [12, 16]] },
      { input: [[], [5, 7]], expected: [[5, 7]] },
    ],
  },
  {
    id: '60',
    slug: 'course-schedule-ii',
    title: 'Course Schedule II',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Graphs', 'Topological Sort', 'Breadth-First Search'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.',
      'You are given prerequisites where prerequisites[i] = [a, b] indicates that you must take course b before course a.',
      'Return a valid ordering of courses you can take to finish all courses. If it is impossible, return an empty list.',
    ],
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: '[0,1]' },
      { input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]', output: '[0,1,2,3]' },
      { input: 'numCourses = 2, prerequisites = [[0,1],[1,0]]', output: '[]' },
    ],
    constraints: [
      '1 <= numCourses <= 2000',
      '0 <= prerequisites.length <= numCourses * (numCourses - 1)',
      'prerequisites[i].length == 2',
      '0 <= a, b < numCourses',
      'a != b',
    ],
    hints: [
      'Think of prerequisites as a directed graph.',
      'Courses with indegree 0 can be taken immediately.',
      'If you cannot process all courses, a cycle exists.',
    ],
    starterCode: courseScheduleIiStarter,
    solutionCode: courseScheduleIiSolution,
    solutionName: 'findOrder',
    functionSignature: 'findOrder(numCourses, prerequisites)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [2, [[1, 0]]], expected: [0, 1] },
      { input: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]], expected: [0, 1, 2, 3] },
      { input: [2, [[0, 1], [1, 0]]], expected: [] },
    ],
  },
  {
    id: '61',
    slug: 'same-tree',
    title: 'Same Tree',
    difficulty: 'Easy',
    category: 'Trees',
    tags: ['Trees', 'Depth-First Search', 'Breadth-First Search'],
    companies: ['Amazon', 'Bloomberg', 'Google'],
    description: [
      'Given the roots of two binary trees p and q, write a function to check if they are the same.',
      'Two binary trees are considered the same if they are structurally identical and the nodes have the same values.',
      'Return true if the trees match exactly, otherwise return false.',
    ],
    examples: [
      { input: 'p = [1,2,3], q = [1,2,3]', output: 'true' },
      { input: 'p = [1,2], q = [1,null,2]', output: 'false' },
      { input: 'p = [1,2,1], q = [1,1,2]', output: 'false' },
    ],
    constraints: [
      'The number of nodes in each tree is in the range [0, 100].',
      '-10^4 <= Node.val <= 10^4',
    ],
    hints: [
      'Compare the current nodes before recursing into children.',
      'If one node is null and the other is not, the trees cannot be the same.',
      'A recursive DFS is a natural fit for this structure check.',
    ],
    starterCode: sameTreeStarter,
    solutionCode: sameTreeSolution,
    solutionName: 'isSameTree',
    functionSignature: 'isSameTree(p, q)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: [
          { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } },
          { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } },
        ],
        expected: true,
      },
      {
        input: [
          { val: 1, left: { val: 2, left: null, right: null }, right: null },
          { val: 1, left: null, right: { val: 2, left: null, right: null } },
        ],
        expected: false,
      },
      {
        input: [
          { val: 1, left: { val: 2, left: null, right: null }, right: { val: 1, left: null, right: null } },
          { val: 1, left: { val: 1, left: null, right: null }, right: { val: 2, left: null, right: null } },
        ],
        expected: false,
      },
    ],
  },
  {
    id: '62',
    slug: 'unique-paths',
    title: 'Unique Paths',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Math', 'Arrays'],
    companies: ['Amazon', 'Google', 'Bloomberg'],
    description: [
      'A robot is located at the top-left corner of an m x n grid.',
      'The robot can only move either down or right at any point in time and is trying to reach the bottom-right corner of the grid.',
      'Return the number of possible unique paths the robot can take.',
    ],
    examples: [
      { input: 'm = 3, n = 7', output: '28' },
      { input: 'm = 3, n = 2', output: '3' },
      { input: 'm = 1, n = 5', output: '1' },
    ],
    constraints: [
      '1 <= m, n <= 100',
      'The answer is less than or equal to 2 * 10^9.',
    ],
    hints: [
      'Each cell can only be reached from the cell above it or the cell to the left.',
      'Start with a row of ones, because there is only one way to move along the top row.',
      'You can optimize space to one dimension because each row only depends on the current row values.',
    ],
    starterCode: uniquePathsStarter,
    solutionCode: uniquePathsSolution,
    solutionName: 'uniquePaths',
    functionSignature: 'uniquePaths(m, n)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [3, 7], expected: 28 },
      { input: [3, 2], expected: 3 },
      { input: [1, 5], expected: 1 },
    ],
  },
  {
    id: '63',
    slug: 'redundant-connection',
    title: 'Redundant Connection',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Graphs', 'Union Find', 'Depth-First Search'],
    companies: ['Google', 'Meta', 'Amazon'],
    description: [
      'In this problem, a tree with n nodes is given as a graph that started as a tree and had one additional edge added.',
      'The added edge has two different vertices chosen from 1 to n and was not an edge that already existed.',
      'Return an edge that can be removed so that the resulting graph is a tree again. If there are multiple answers, return the one that appears last in the input.',
    ],
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', output: '[2,3]' },
      { input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', output: '[1,4]' },
    ],
    constraints: [
      'n == edges.length',
      '3 <= n <= 1000',
      'edges[i].length == 2',
      '1 <= a < b <= n',
      'There are no repeated edges.',
    ],
    hints: [
      'A tree has exactly one path between any two nodes.',
      'Use union find to detect the first edge that connects two nodes already in the same set.',
      'Because you scan in input order, the detected cycle edge is the correct answer to return.',
    ],
    starterCode: redundantConnectionStarter,
    solutionCode: redundantConnectionSolution,
    solutionName: 'findRedundantConnection',
    functionSignature: 'findRedundantConnection(edges)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[[1, 2], [1, 3], [2, 3]]], expected: [2, 3] },
      { input: [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]], expected: [1, 4] },
      { input: [[[1, 2], [2, 3], [3, 4], [4, 5], [2, 5]]], expected: [2, 5] },
    ],
  },
  {
    id: '64',
    slug: 'search-a-2d-matrix',
    title: 'Search a 2D Matrix',
    difficulty: 'Medium',
    category: 'Binary Search',
    tags: ['Binary Search', 'Matrix', 'Arrays'],
    companies: ['Amazon', 'Microsoft', 'Meta'],
    description: [
      'You are given an m x n integer matrix with two properties: each row is sorted in non-decreasing order, and the first integer of each row is greater than the last integer of the previous row.',
      'Given an integer target, return true if target is in matrix or false otherwise.',
      'Your solution should run in O(log(m * n)) time.',
    ],
    examples: [
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', output: 'true' },
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', output: 'false' },
    ],
    constraints: [
      'm == matrix.length',
      'n == matrix[i].length',
      '1 <= m, n <= 100',
      '-10^4 <= matrix[i][j], target <= 10^4',
    ],
    hints: [
      'Treat the matrix as one sorted array of length m * n.',
      'Convert a flat index back to row and column with division and modulo.',
      'A standard binary search is enough once you flatten the indexing mentally.',
    ],
    starterCode: search2dMatrixStarter,
    solutionCode: search2dMatrixSolution,
    solutionName: 'searchMatrix',
    functionSignature: 'searchMatrix(matrix, target)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], expected: true },
      { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], expected: false },
      { input: [[[1]], 1], expected: true },
    ],
  },
  {
    id: '65',
    slug: 'longest-consecutive-sequence',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    category: 'Hash Map',
    tags: ['Hash Table', 'Arrays', 'Union Find'],
    companies: ['Google', 'Meta', 'Amazon'],
    description: [
      'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.',
      'The consecutive sequence elements do not need to appear next to each other in the original array.',
      'You must write an algorithm that runs in O(n) time.',
    ],
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: 'The longest consecutive sequence is [1, 2, 3, 4].' },
      { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' },
    ],
    constraints: [
      '0 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
    ],
    hints: [
      'A set gives O(1) average lookup time.',
      'Only start counting from values that do not have a predecessor in the set.',
      'Each number is extended through a sequence at most once.',
    ],
    starterCode: longestConsecutiveStarter,
    solutionCode: longestConsecutiveSolution,
    solutionName: 'longestConsecutive',
    functionSignature: 'longestConsecutive(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[100, 4, 200, 1, 3, 2]], expected: 4 },
      { input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
      { input: [[]], expected: 0 },
    ],
  },
  {
    id: '66',
    slug: 'lowest-common-ancestor-of-a-binary-search-tree',
    title: 'Lowest Common Ancestor of a Binary Search Tree',
    difficulty: 'Medium',
    category: 'Trees',
    tags: ['Trees', 'Binary Search Tree', 'Depth-First Search'],
    companies: ['Amazon', 'Microsoft', 'Facebook'],
    description: [
      'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.',
      'According to the definition of LCA, the lowest common ancestor is the lowest node in the tree that has both p and q as descendants.',
      'A node can be a descendant of itself.',
    ],
    examples: [
      { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', output: '6' },
      { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', output: '2' },
    ],
    constraints: [
      'The number of nodes in the tree is in the range [2, 10^5].',
      '-10^9 <= Node.val <= 10^9',
      'All Node.val are unique.',
      'p != q',
      'p and q will exist in the BST.',
    ],
    hints: [
      'Use the BST ordering property to choose left or right.',
      'If both target values are smaller, go left. If both are larger, go right.',
      'The first node where the targets split, or equal the current node, is the answer.',
    ],
    starterCode: lcaBstStarter,
    solutionCode: lcaBstSolution,
    solutionName: 'lowestCommonAncestor',
    functionSignature: 'lowestCommonAncestor(root, p, q)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: [
          {
            val: 6,
            left: {
              val: 2,
              left: { val: 0, left: null, right: null },
              right: {
                val: 4,
                left: { val: 3, left: null, right: null },
                right: { val: 5, left: null, right: null },
              },
            },
            right: {
              val: 8,
              left: { val: 7, left: null, right: null },
              right: { val: 9, left: null, right: null },
            },
          },
          { val: 2 },
          { val: 8 },
        ],
        expected: { val: 6 },
      },
      {
        input: [
          {
            val: 6,
            left: {
              val: 2,
              left: { val: 0, left: null, right: null },
              right: {
                val: 4,
                left: { val: 3, left: null, right: null },
                right: { val: 5, left: null, right: null },
              },
            },
            right: {
              val: 8,
              left: { val: 7, left: null, right: null },
              right: { val: 9, left: null, right: null },
            },
          },
          { val: 2 },
          { val: 4 },
        ],
        expected: { val: 2 },
      },
    ],
  },
  {
    id: '67',
    slug: 'find-all-anagrams-in-a-string',
    title: 'Find All Anagrams in a String',
    difficulty: 'Medium',
    category: 'Sliding Window',
    tags: ['Sliding Window', 'Strings', 'Hash Map'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'Given two strings s and p, return an array of all the start indices of p\'s anagrams in s.',
      'You may return the answer in any order.',
      'An anagram is a rearrangement of the letters of another word using all the original letters exactly once.',
    ],
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0,6]', explanation: 'The substrings "cba" and "bac" are anagrams of "abc".' },
      { input: 's = "abab", p = "ab"', output: '[0,1,2]' },
    ],
    constraints: [
      '1 <= s.length, p.length <= 3 * 10^4',
      's and p consist of lowercase English letters.',
    ],
    hints: [
      'Compare character frequencies in a fixed-size window of length len(p).',
      'As the window moves right, add one character and remove one character.',
      'Using arrays of size 26 is often simpler than dictionaries for lowercase letters.',
    ],
    starterCode: findAnagramsStarter,
    solutionCode: findAnagramsSolution,
    solutionName: 'findAnagrams',
    functionSignature: 'findAnagrams(s, p)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['cbaebabacd', 'abc'], expected: [0, 6] },
      { input: ['abab', 'ab'], expected: [0, 1, 2] },
      { input: ['baa', 'aa'], expected: [1] },
    ],
  },
  {
    id: '68',
    slug: 'min-cost-climbing-stairs',
    title: 'Min Cost Climbing Stairs',
    difficulty: 'Easy',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Arrays'],
    companies: ['Amazon', 'Adobe', 'Bloomberg'],
    description: [
      'You are given an integer array cost where cost[i] is the cost of the i-th step on a staircase.',
      'Once you pay the cost, you can either climb one or two steps.',
      'You can start from step 0 or step 1. Return the minimum cost to reach the top of the floor.',
    ],
    examples: [
      { input: 'cost = [10,15,20]', output: '15', explanation: 'Start at step 1, pay 15, and climb two steps to the top.' },
      { input: 'cost = [1,100,1,1,1,100,1,1,100,1]', output: '6' },
    ],
    constraints: [
      '2 <= cost.length <= 1000',
      '0 <= cost[i] <= 999',
    ],
    hints: [
      'The cheapest way to reach step i only depends on the two previous states.',
      'Think of the top as one position beyond the last index.',
      'You can keep only two rolling DP values instead of a full array.',
    ],
    starterCode: minCostClimbingStairsStarter,
    solutionCode: minCostClimbingStairsSolution,
    solutionName: 'minCostClimbingStairs',
    functionSignature: 'minCostClimbingStairs(cost)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[10, 15, 20]], expected: 15 },
      { input: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], expected: 6 },
      { input: [[0, 0, 1, 1]], expected: 0 },
    ],
  },
  {
    id: '69',
    slug: 'binary-tree-zigzag-level-order-traversal',
    title: 'Binary Tree Zigzag Level Order Traversal',
    difficulty: 'Medium',
    category: 'Trees',
    tags: ['Trees', 'Breadth-First Search', 'Binary Tree'],
    companies: ['Microsoft', 'Amazon', 'Meta'],
    description: [
      'Given the root of a binary tree, return the zigzag level order traversal of its nodes\' values.',
      'That is, from left to right for the first level, then right to left for the next level, and alternate between them for each subsequent level.',
      'Return the traversal as a list of levels.',
    ],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[20,9],[15,7]]' },
      { input: 'root = [1]', output: '[[1]]' },
      { input: 'root = []', output: '[]' },
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 2000].',
      '-100 <= Node.val <= 100',
    ],
    hints: [
      'A standard BFS already groups nodes by level.',
      'Track the current direction and reverse insertion order on alternating levels.',
      'A deque is handy when you want to append values to either side of a level.',
    ],
    starterCode: zigzagLevelOrderStarter,
    solutionCode: zigzagLevelOrderSolution,
    solutionName: 'zigzagLevelOrder',
    functionSignature: 'zigzagLevelOrder(root)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: [
          {
            val: 3,
            left: { val: 9, left: null, right: null },
            right: {
              val: 20,
              left: { val: 15, left: null, right: null },
              right: { val: 7, left: null, right: null },
            },
          },
        ],
        expected: [[3], [20, 9], [15, 7]],
      },
      {
        input: [{ val: 1, left: null, right: null }],
        expected: [[1]],
      },
      {
        input: [null],
        expected: [],
      },
    ],
  },
  {
    id: '70',
    slug: 'koko-eating-bananas',
    title: 'Koko Eating Bananas',
    difficulty: 'Medium',
    category: 'Binary Search',
    tags: ['Binary Search', 'Arrays'],
    companies: ['Meta', 'Google', 'Amazon'],
    description: [
      'Koko loves to eat bananas. There are piles of bananas, where the ith pile has piles[i] bananas.',
      'The guards will return in h hours. Koko can decide her eating speed of k bananas per hour.',
      'Each hour, she chooses one pile and eats up to k bananas from that pile. Return the minimum integer k so she can finish all piles within h hours.',
    ],
    examples: [
      { input: 'piles = [3,6,7,11], h = 8', output: '4' },
      { input: 'piles = [30,11,23,4,20], h = 5', output: '30' },
      { input: 'piles = [30,11,23,4,20], h = 6', output: '23' },
    ],
    constraints: [
      '1 <= piles.length <= 10^4',
      '1 <= piles[i] <= 10^9',
      'piles.length <= h <= 10^9',
    ],
    hints: [
      'If Koko can finish with speed k, she can also finish with any larger speed.',
      'That monotonic property suggests binary search on the answer.',
      'For a candidate speed, compute total hours with ceiling division.',
    ],
    starterCode: minEatingSpeedStarter,
    solutionCode: minEatingSpeedSolution,
    solutionName: 'minEatingSpeed',
    functionSignature: 'minEatingSpeed(piles, h)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { piles: [3, 6, 7, 11], h: 8 }, expected: 4 },
      { input: { piles: [30, 11, 23, 4, 20], h: 5 }, expected: 30 },
      { input: { piles: [30, 11, 23, 4, 20], h: 6 }, expected: 23 },
    ],
  },
  {
    id: '71',
    slug: 'rotate-image',
    title: 'Rotate Image',
    difficulty: 'Medium',
    category: 'Matrix',
    tags: ['Arrays', 'Matrix'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    description: [
      'You are given an n x n 2D matrix representing an image.',
      'Rotate the image by 90 degrees clockwise in-place.',
      'You may not allocate another 2D matrix to perform the rotation.',
    ],
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' },
      { input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]', output: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]' },
    ],
    constraints: [
      'n == matrix.length == matrix[i].length',
      '1 <= n <= 20',
      '-1000 <= matrix[i][j] <= 1000',
    ],
    hints: [
      'Try breaking the rotation into two simpler in-place operations.',
      'A transpose swaps rows with columns across the main diagonal.',
      'After transposing, reverse each row to complete the clockwise rotation.',
    ],
    starterCode: rotateMatrixStarter,
    solutionCode: rotateMatrixSolution,
    solutionName: 'rotate',
    functionSignature: 'rotate(matrix)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] },
      {
        input: [[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]],
        expected: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]],
      },
      { input: [[[1]]], expected: [[1]] },
    ],
  },
  {
    id: '72',
    slug: 'coin-change-ii',
    title: 'Coin Change II',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Arrays'],
    companies: ['Amazon', 'Google', 'Bloomberg'],
    description: [
      'You are given an integer amount and an array coins representing coins of different denominations.',
      'Return the number of combinations that make up that amount.',
      'You may assume that you have an infinite number of each kind of coin, and the answer fits in a 32-bit signed integer.',
    ],
    examples: [
      { input: 'amount = 5, coins = [1,2,5]', output: '4', explanation: 'The combinations are [5], [2,2,1], [2,1,1,1], and [1,1,1,1,1].' },
      { input: 'amount = 3, coins = [2]', output: '0' },
      { input: 'amount = 10, coins = [10]', output: '1' },
    ],
    constraints: [
      '0 <= amount <= 5000',
      '1 <= coins.length <= 300',
      '1 <= coins[i] <= 5000',
      'All the values of coins are unique.',
    ],
    hints: [
      'Count combinations, not permutations, so process coins in an outer loop.',
      'Let dp[x] be the number of ways to form total x.',
      'When you consider a coin, update totals from coin up to amount.',
    ],
    starterCode: changeCombinationsStarter,
    solutionCode: changeCombinationsSolution,
    solutionName: 'change',
    functionSignature: 'change(amount, coins)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: { amount: 5, coins: [1, 2, 5] }, expected: 4 },
      { input: { amount: 3, coins: [2] }, expected: 0 },
      { input: { amount: 10, coins: [10] }, expected: 1 },
    ],
  },
  {
    id: '73',
    slug: 'partition-labels',
    title: 'Partition Labels',
    difficulty: 'Medium',
    category: 'Greedy',
    tags: ['Greedy', 'Strings', 'Hash Map'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.',
      'For example, the string "abac" can be partitioned as ["aba", "c"], but not as ["a", "bac"].',
      'Return a list of integers representing the size of these parts.',
    ],
    examples: [
      { input: 's = "ababcbacadefegdehijhklij"', output: '[9,7,8]' },
      { input: 's = "eccbbbbdec"', output: '[10]' },
    ],
    constraints: [
      '1 <= s.length <= 500',
      's consists of lowercase English letters.',
    ],
    hints: [
      'If you know the last index where each character appears, you can determine how far a partition must extend.',
      'Scan from left to right while tracking the furthest last occurrence seen so far.',
      'When your current index reaches that furthest boundary, you have completed one partition.',
    ],
    starterCode: partitionLabelsStarter,
    solutionCode: partitionLabelsSolution,
    solutionName: 'partitionLabels',
    functionSignature: 'partitionLabels(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['ababcbacadefegdehijhklij'], expected: [9, 7, 8] },
      { input: ['eccbbbbdec'], expected: [10] },
      { input: ['caedbdedda'], expected: [1, 9] },
    ],
  },
  {
    id: '74',
    slug: 'subsets',
    title: 'Subsets',
    difficulty: 'Medium',
    category: 'Backtracking',
    tags: ['Backtracking', 'Arrays', 'Bit Manipulation'],
    companies: ['Amazon', 'Meta', 'Google'],
    description: [
      'Given an integer array nums of unique elements, return all possible subsets, also known as the power set.',
      'The solution set must not contain duplicate subsets.',
      'You may return the solution in any order.',
    ],
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' },
      { input: 'nums = [0]', output: '[[],[0]]' },
    ],
    constraints: [
      '1 <= nums.length <= 10',
      '-10 <= nums[i] <= 10',
      'All the numbers of nums are unique.',
    ],
    hints: [
      'For each number, every existing subset can either include it or skip it.',
      'You can build the answer iteratively by cloning current subsets and appending the new value.',
      'A depth-first search that decides include versus exclude also works well.',
    ],
    starterCode: subsetsStarter,
    solutionCode: subsetsSolution,
    solutionName: 'subsets',
    functionSignature: 'subsets(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[1, 2, 3]], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
      { input: [[0]], expected: [[], [0]] },
      { input: [[1, 2]], expected: [[], [1], [2], [1, 2]] },
    ],
  },
  {
    id: '75',
    slug: 'merge-strings-alternately',
    title: 'Merge Strings Alternately',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['Strings', 'Two Pointers'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'You are given two strings word1 and word2.',
      'Merge the strings by adding letters in alternating order, starting with word1.',
      'If a string is longer than the other, append the additional letters onto the end of the merged string.',
    ],
    examples: [
      { input: 'word1 = "abc", word2 = "pqr"', output: '"apbqcr"' },
      { input: 'word1 = "ab", word2 = "pqrs"', output: '"apbqrs"' },
      { input: 'word1 = "abcd", word2 = "pq"', output: '"apbqcd"' },
    ],
    constraints: [
      '1 <= word1.length, word2.length <= 100',
      'word1 and word2 consist of lowercase English letters.',
    ],
    hints: [
      'Keep one pointer in each string and take turns appending characters.',
      'Stop only after both pointers reach the ends of their strings.',
      'Be careful to append the leftover suffix from the longer string.',
    ],
    starterCode: mergeAlternatelyStarter,
    solutionCode: mergeAlternatelySolution,
    solutionName: 'mergeAlternately',
    functionSignature: 'mergeAlternately(word1, word2)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['abc', 'pqr'], expected: 'apbqcr' },
      { input: ['ab', 'pqrs'], expected: 'apbqrs' },
      { input: ['abcd', 'pq'], expected: 'apbqcd' },
    ],
  },
  {
    id: '76',
    slug: 'implement-trie-prefix-tree',
    title: 'Implement Trie (Prefix Tree)',
    difficulty: 'Medium',
    category: 'Trie',
    tags: ['Trie', 'Design', 'Strings'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'A trie, also called a prefix tree, is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.',
      'Implement the Trie class with insert, search, and startsWith methods.',
      'insert(word) inserts the string word, search(word) returns true if the exact word exists, and startsWith(prefix) returns true if any inserted word starts with prefix.',
    ],
    examples: [
      { input: 'operations = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"], values = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]', output: '[null,null,true,false,true,null,true]' },
      { input: 'insert("cat"), insert("car"), startsWith("ca"), search("cap")', output: '[null,null,true,false]' },
    ],
    constraints: [
      '1 <= word.length, prefix.length <= 2000',
      'word and prefix consist only of lowercase English letters.',
      'At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.',
    ],
    hints: [
      'Store each character as an edge to a nested map or dictionary.',
      'Mark the end of a complete word separately from ordinary prefixes.',
      'All three operations are simple walks from the root through the characters.',
    ],
    starterCode: trieSearchStarter,
    solutionCode: trieSearchSolution,
    solutionName: 'Trie',
    functionSignature: 'Trie.insert(word), Trie.search(word), Trie.startsWith(prefix)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: {
          operations: ['Trie', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'],
          values: [[], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']],
        },
        expected: [null, null, true, false, true, null, true],
      },
      {
        input: {
          operations: ['Trie', 'insert', 'insert', 'startsWith', 'search'],
          values: [[], ['cat'], ['car'], ['ca'], ['cap']],
        },
        expected: [null, null, null, true, false],
      },
    ],
  },
  {
    id: '77',
    slug: 'decode-string',
    title: 'Decode String',
    difficulty: 'Medium',
    category: 'Stack',
    tags: ['Stack', 'Strings'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given an encoded string, return its decoded version.',
      'The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.',
      'You may assume the input string is always valid, digits only represent repeat counts, and the original data does not contain digits.',
    ],
    examples: [
      { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
      { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
      { input: 's = "2[abc]3[cd]ef"', output: '"abcabccdcdcdef"' },
    ],
    constraints: [
      '1 <= s.length <= 30',
      's consists of lowercase English letters, digits, and square brackets [].',
      '1 <= k <= 300',
      'The decoded output length never exceeds 10^5.',
    ],
    hints: [
      'When you see an opening bracket, save the string built so far and the repeat count.',
      'When you see a closing bracket, pop the saved state and expand the current substring.',
      'A stack naturally handles nested brackets from the inside out.',
    ],
    starterCode: decodeStringStarter,
    solutionCode: decodeStringSolution,
    solutionName: 'decodeString',
    functionSignature: 'decodeString(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['3[a]2[bc]'], expected: 'aaabcbc' },
      { input: ['3[a2[c]]'], expected: 'accaccacc' },
      { input: ['2[abc]3[cd]ef'], expected: 'abcabccdcdcdef' },
    ],
  },
  {
    id: '78',
    slug: 'find-median-from-data-stream',
    title: 'Find Median from Data Stream',
    difficulty: 'Hard',
    category: 'Heap',
    tags: ['Heap', 'Design', 'Data Stream'],
    companies: ['Google', 'Amazon', 'Microsoft'],
    description: [
      'The median is the middle value in an ordered integer list. If the size of the list is even, there is no single middle value, so the median is the mean of the two middle values.',
      'Design a data structure that supports addNum(num) to add an integer from the stream and findMedian() to return the median of all elements so far.',
      'Answers within 10^-5 of the actual value are accepted.',
    ],
    examples: [
      { input: 'operations = ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"], values = [[], [1], [2], [], [3], []]', output: '[null,null,null,1.5,null,2.0]' },
      { input: 'addNum(5), addNum(15), addNum(1), addNum(3), findMedian()', output: '4.0' },
    ],
    constraints: [
      '-10^5 <= num <= 10^5',
      'There will be at least one element in the data structure before calling findMedian.',
      'At most 5 * 10^4 calls will be made to addNum and findMedian.',
    ],
    hints: [
      'Keep the lower half of numbers in one heap and the upper half in another.',
      'One heap should let you read the maximum of the lower half efficiently.',
      'Rebalance after each insertion so the heap sizes differ by at most one.',
    ],
    starterCode: medianFinderStarter,
    solutionCode: medianFinderSolution,
    solutionName: 'MedianFinder',
    functionSignature: 'MedianFinder.addNum(num), MedianFinder.findMedian()',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: {
          operations: ['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'],
          values: [[], [1], [2], [], [3], []],
        },
        expected: [null, null, null, 1.5, null, 2],
      },
      {
        input: {
          operations: ['MedianFinder', 'addNum', 'addNum', 'addNum', 'addNum', 'findMedian'],
          values: [[], [5], [15], [1], [3], []],
        },
        expected: [null, null, null, null, null, 4],
      },
    ],
  },
  {
    id: '79',
    slug: 'sort-colors',
    title: 'Sort Colors',
    difficulty: 'Medium',
    category: 'Arrays',
    tags: ['Arrays', 'Two Pointers', 'Sorting'],
    companies: ['Meta', 'Amazon', 'Microsoft'],
    description: [
      'Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent.',
      'Use the integers 0, 1, and 2 to represent the colors red, white, and blue respectively.',
      'You must solve this problem without using the library sort function.',
    ],
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]' },
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 300',
      'nums[i] is either 0, 1, or 2.',
    ],
    hints: [
      'Think about partitioning the array into regions for 0s, 1s, and 2s.',
      'A single pass with three pointers is enough.',
      'When you swap in a 2 from the right side, re-check the current position before advancing.',
    ],
    starterCode: sortColorsStarter,
    solutionCode: sortColorsSolution,
    solutionName: 'sortColors',
    functionSignature: 'sortColors(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[2, 0, 2, 1, 1, 0]], expected: [0, 0, 1, 1, 2, 2] },
      { input: [[2, 0, 1]], expected: [0, 1, 2] },
      { input: [[1, 2, 0]], expected: [0, 1, 2] },
    ],
  },
  {
    id: '80',
    slug: 'non-overlapping-intervals',
    title: 'Non-overlapping Intervals',
    difficulty: 'Medium',
    category: 'Greedy',
    tags: ['Greedy', 'Intervals', 'Sorting'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given an array of intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
      'Intervals that only touch at an endpoint, such as [1,2] and [2,3], are not overlapping.',
      'Choose removals so that the maximum number of intervals can remain.',
    ],
    examples: [
      { input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]', output: '1' },
      { input: 'intervals = [[1,2],[1,2],[1,2]]', output: '2' },
      { input: 'intervals = [[1,2],[2,3]]', output: '0' },
    ],
    constraints: [
      '1 <= intervals.length <= 10^5',
      'intervals[i].length == 2',
      '-5 * 10^4 <= starti < endi <= 5 * 10^4',
    ],
    hints: [
      'Sorting by end time often helps with interval scheduling problems.',
      'Keep the interval that finishes earliest whenever there is a conflict.',
      'Count how many intervals must be skipped while scanning left to right.',
    ],
    starterCode: nonOverlappingIntervalsStarter,
    solutionCode: nonOverlappingIntervalsSolution,
    solutionName: 'eraseOverlapIntervals',
    functionSignature: 'eraseOverlapIntervals(intervals)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[ [1, 2], [2, 3], [3, 4], [1, 3] ]], expected: 1 },
      { input: [[ [1, 2], [1, 2], [1, 2] ]], expected: 2 },
      { input: [[ [1, 2], [2, 3] ]], expected: 0 },
    ],
  },
  {
    id: '81',
    slug: 'remove-nth-node-from-end-of-list',
    title: 'Remove Nth Node From End of List',
    difficulty: 'Medium',
    category: 'Linked List',
    tags: ['Linked List', 'Two Pointers'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    description: [
      'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
      'You should solve this in one pass if possible.',
      'The linked list is represented with objects that use val and next fields.',
    ],
    examples: [
      { input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]' },
      { input: 'head = [1], n = 1', output: '[]' },
      { input: 'head = [1,2], n = 1', output: '[1]' },
    ],
    constraints: [
      'The number of nodes in the list is sz.',
      '1 <= sz <= 30',
      '0 <= Node.val <= 100',
      '1 <= n <= sz',
    ],
    hints: [
      'A dummy node helps when the head itself needs to be removed.',
      'Move one pointer n steps ahead of another pointer.',
      'When the front pointer reaches the end, the trailing pointer will be just before the node to delete.',
    ],
    starterCode: removeNthFromEndStarter,
    solutionCode: removeNthFromEndSolution,
    solutionName: 'removeNthFromEnd',
    functionSignature: 'removeNthFromEnd(head, n)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: [
          {
            val: 1,
            next: {
              val: 2,
              next: {
                val: 3,
                next: {
                  val: 4,
                  next: { val: 5, next: null },
                },
              },
            },
          },
          2,
        ],
        expected: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: { val: 5, next: null },
            },
          },
        },
      },
      {
        input: [{ val: 1, next: null }, 1],
        expected: null,
      },
      {
        input: [{ val: 1, next: { val: 2, next: null } }, 1],
        expected: { val: 1, next: null },
      },
    ],
  },
  {
    id: '82',
    slug: 'single-number',
    title: 'Single Number',
    difficulty: 'Easy',
    category: 'Bit Manipulation',
    tags: ['Arrays', 'Bit Manipulation'],
    companies: ['Amazon', 'Google', 'Meta'],
    description: [
      'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.',
      'You must implement a solution with linear runtime complexity and use only constant extra space.',
    ],
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
    ],
    constraints: [
      '1 <= nums.length <= 3 * 10^4',
      '-3 * 10^4 <= nums[i] <= 3 * 10^4',
      'Each element in the array appears twice except for one element which appears only once.',
    ],
    hints: [
      'What happens when you XOR a number with itself?',
      'XOR is associative and commutative, so the order does not matter.',
      'All paired values cancel out, leaving only the unique value.',
    ],
    starterCode: singleNumberStarter,
    solutionCode: singleNumberSolution,
    solutionName: 'singleNumber',
    functionSignature: 'singleNumber(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[2, 2, 1]], expected: 1 },
      { input: [[4, 1, 2, 1, 2]], expected: 4 },
      { input: [[1]], expected: 1 },
    ],
  },
  {
    id: '83',
    slug: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    category: 'String',
    tags: ['String', 'Two Pointers', 'Dynamic Programming'],
    companies: ['Amazon', 'Microsoft', 'Bloomberg'],
    description: [
      'Given a string s, return the longest palindromic substring in s.',
      'A palindrome reads the same forward and backward.',
      'If there are multiple valid answers, returning any one of them is acceptable.',
    ],
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: [
      '1 <= s.length <= 1000',
      's consist of only digits and English letters.',
    ],
    hints: [
      'A palindrome can be centered on one character or between two characters.',
      'Try expanding outward from every possible center.',
      'Track the best start position and length as you scan the string.',
    ],
    starterCode: longestPalindromicSubstringStarter,
    solutionCode: longestPalindromicSubstringSolution,
    solutionName: 'longestPalindrome',
    functionSignature: 'longestPalindrome(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['babad'], expected: 'bab' },
      { input: ['cbbd'], expected: 'bb' },
      { input: ['a'], expected: 'a' },
    ],
  },
  {
    id: '84',
    slug: 'reverse-words-in-a-string',
    title: 'Reverse Words in a String',
    difficulty: 'Medium',
    category: 'Strings',
    tags: ['String', 'Two Pointers'],
    companies: ['Meta', 'Amazon', 'Microsoft'],
    description: [
      'Given an input string s, reverse the order of the words.',
      'A word is defined as a sequence of non-space characters.',
      'The returned string should only have a single space separating words and should not include leading or trailing spaces.',
    ],
    examples: [
      { input: 's = "the sky is blue"', output: '"blue is sky the"' },
      { input: 's = "  hello world  "', output: '"world hello"' },
      { input: 's = "a good   example"', output: '"example good a"' },
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's contains English letters, digits, and spaces.',
      'There is at least one word in s.',
    ],
    hints: [
      'Splitting on whitespace already handles repeated spaces cleanly.',
      'Reverse the list of words instead of reversing characters one by one.',
      'Join the reversed words with a single space.',
    ],
    starterCode: reverseWordsStarter,
    solutionCode: reverseWordsSolution,
    solutionName: 'reverseWords',
    functionSignature: 'reverseWords(s)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: ['the sky is blue'], expected: 'blue is sky the' },
      { input: ['  hello world  '], expected: 'world hello' },
      { input: ['a good   example'], expected: 'example good a' },
    ],
  },
  {
    id: '85',
    slug: 'minimum-path-sum',
    title: 'Minimum Path Sum',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Dynamic Programming', 'Matrix'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'Given a m x n grid filled with non-negative numbers, find a path from the top left to the bottom right that minimizes the sum of all numbers along its path.',
      'You can only move either down or right at any point in time.',
      'Return the minimum path sum.',
    ],
    examples: [
      { input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]', output: '7', explanation: 'The path 1 → 3 → 1 → 1 → 1 has the smallest sum.' },
      { input: 'grid = [[1,2,3],[4,5,6]]', output: '12' },
    ],
    constraints: [
      'm == grid.length',
      'n == grid[i].length',
      '1 <= m, n <= 200',
      '0 <= grid[i][j] <= 100',
    ],
    hints: [
      'The best path to a cell only depends on the best path to the cell above it and to the left of it.',
      'You can update one row of dynamic programming values in-place as you scan the grid.',
      'Handle the first row and first column carefully because they each have only one incoming direction.',
    ],
    starterCode: minimumPathSumStarter,
    solutionCode: minimumPathSumSolution,
    solutionName: 'minPathSum',
    functionSignature: 'minPathSum(grid)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[ [1, 3, 1], [1, 5, 1], [4, 2, 1] ]], expected: 7 },
      { input: [[ [1, 2, 3], [4, 5, 6] ]], expected: 12 },
      { input: [[ [5] ]], expected: 5 },
    ],
  },
  {
    id: '86',
    slug: 'kth-smallest-element-in-a-bst',
    title: 'Kth Smallest Element in a BST',
    difficulty: 'Medium',
    category: 'Trees',
    tags: ['Tree', 'Binary Search Tree', 'Depth-First Search'],
    companies: ['Amazon', 'Google', 'Bloomberg'],
    description: [
      'Given the root of a binary search tree and an integer k, return the kth smallest value of all the values of the nodes in the tree.',
      'The tree is represented with nested objects that use val, left, and right fields.',
      'You may assume that k is valid and 1-indexed.',
    ],
    examples: [
      { input: 'root = [3,1,4,null,2], k = 1', output: '1' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '3' },
    ],
    constraints: [
      'The number of nodes in the tree is n.',
      '1 <= k <= n <= 10^4',
      '0 <= Node.val <= 10^4',
    ],
    hints: [
      'An in-order traversal of a BST visits values in sorted order.',
      'You do not need to store every value if you count nodes as you traverse.',
      'An explicit stack works well for iterative in-order traversal.',
    ],
    starterCode: kthSmallestBstStarter,
    solutionCode: kthSmallestBstSolution,
    solutionName: 'kthSmallest',
    functionSignature: 'kthSmallest(root, k)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      {
        input: [
          {
            val: 3,
            left: { val: 1, left: null, right: { val: 2, left: null, right: null } },
            right: { val: 4, left: null, right: null },
          },
          1,
        ],
        expected: 1,
      },
      {
        input: [
          {
            val: 5,
            left: {
              val: 3,
              left: { val: 2, left: { val: 1, left: null, right: null }, right: null },
              right: { val: 4, left: null, right: null },
            },
            right: { val: 6, left: null, right: null },
          },
          3,
        ],
        expected: 3,
      },
    ],
  },
  {
    id: '87',
    slug: 'jump-game-ii',
    title: 'Jump Game II',
    difficulty: 'Medium',
    category: 'Greedy',
    tags: ['Arrays', 'Greedy'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    description: [
      'You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].',
      'Each element nums[i] represents the maximum length of a forward jump from index i.',
      'Return the minimum number of jumps needed to reach the last index. You can assume that you can always reach the last index.',
    ],
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: '2', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' },
      { input: 'nums = [2,3,0,1,4]', output: '2' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '0 <= nums[i] <= 1000',
      'It is guaranteed that you can reach nums[n - 1].',
    ],
    hints: [
      'Think of each jump as choosing the best next range you can reach.',
      'Track the farthest index available within the current jump window.',
      'When you finish scanning the current window, you must commit to one more jump.',
    ],
    starterCode: jumpGameTwoStarter,
    solutionCode: jumpGameTwoSolution,
    solutionName: 'jump',
    functionSignature: 'jump(nums)',
    optimalSolution: {
      timeComplexity: 'See solution',
      spaceComplexity: 'See solution',
      summary: 'Uses the standard interview-optimal approach for this problem.',
    },
    tests: [
      { input: [[2, 3, 1, 1, 4]], expected: 2 },
      { input: [[2, 3, 0, 1, 4]], expected: 2 },
      { input: [[1, 2, 1, 1, 1]], expected: 3 },
    ],
  },
]

const optimalSolutionById: Record<string, OptimalSolutionDetails> = {
  "1": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Scans once while storing seen values in a hash map, so each complement check is constant time on average."
  },
  "2": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Builds a lowercase alphanumeric-only string, then compares it with its reverse to test for palindrome symmetry."
  },
  "3": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Tracks the cheapest buy price seen so far and updates the best profit at each step."
  },
  "4": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Uses a set to detect the first repeated value during a single pass through the array."
  },
  "5": {
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "summary": "Repeatedly halves the sorted search space until the target is found or the interval is empty."
  },
  "6": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Counts characters from one string and subtracts with the other, returning true only when every count balances out."
  },
  "7": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1) extra output excluded",
    "summary": "Builds prefix products and folds in suffix products so each index gets every value except itself without division."
  },
  "8": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Counts frequencies, places values into frequency buckets, then collects from highest frequency down until k elements are chosen."
  },
  "9": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(min(n, charset))",
    "summary": "Uses a sliding window and last-seen indexes to keep the current substring free of duplicates."
  },
  "10": {
    "timeComplexity": "O(n^2)",
    "spaceComplexity": "O(1) extra output excluded",
    "summary": "Sorts the array, fixes one number, then uses two pointers to find the remaining pair while skipping duplicates."
  },
  "11": {
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "summary": "Sorts intervals by start time, then merges each overlap into the last interval already in the answer."
  },
  "12": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Kadane's algorithm keeps the best subarray ending here and the best seen overall."
  },
  "13": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Computes the Fibonacci-style recurrence iteratively using only the previous two staircase counts."
  },
  "14": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Pushes opening brackets onto a stack and validates each closing bracket against the latest unmatched opener."
  },
  "15": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(w)",
    "summary": "Runs breadth-first search level by level and records each level's values before moving to the next."
  },
  "16": {
    "timeComplexity": "O((V + E) log V)",
    "spaceComplexity": "O(V + E)",
    "summary": "Runs Dijkstra's algorithm from the source and returns the longest shortest-path distance if every node is reachable."
  },
  "17": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Reverses the list in place by rewiring each next pointer as it walks through the nodes."
  },
  "18": {
    "timeComplexity": "O(k^t) worst case",
    "spaceComplexity": "O(t)",
    "summary": "Backtracks over sorted candidates, reusing the current number when helpful and pruning branches once values get too large."
  },
  "19": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Maintains an increasing stack of bars so each bar's maximal rectangle is computed exactly once when it is popped."
  },
  "20": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Greedily resets the starting station whenever the running tank goes negative, after first checking total feasibility."
  },
  "21": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Tracks prefix-sum frequencies in a hash map so each position can count earlier sums that make k."
  },
  "22": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Walks the Roman numeral string and subtracts when a smaller value appears before a larger one."
  },
  "23": {
    "timeComplexity": "O(amount * coins.length)",
    "spaceComplexity": "O(amount)",
    "summary": "Dynamic programming stores the minimum coins needed for every amount up to the target."
  },
  "24": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Uses two pointers and running left/right maxima so the shorter side determines trapped water at each step."
  },
  "25": {
    "timeComplexity": "O(S)",
    "spaceComplexity": "O(1)",
    "summary": "Shrinks a shared prefix candidate until every string starts with it, where S is the total number of characters checked."
  },
  "26": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "summary": "Depth-first search carries valid low and high bounds so every node is checked against its full ancestor range."
  },
  "27": {
    "timeComplexity": "O(mn)",
    "spaceComplexity": "O(1)",
    "summary": "Uses the first row and first column as in-place markers, plus two booleans for their original zero state."
  },
  "28": {
    "timeComplexity": "O(n + m)",
    "spaceComplexity": "O(1)",
    "summary": "Builds a merged sorted list with a dummy head, always attaching the smaller current node first."
  },
  "29": {
    "timeComplexity": "O(mn)",
    "spaceComplexity": "O(mn)",
    "summary": "Visits each land cell once with DFS, turning each discovered island into a full traversal."
  },
  "30": {
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(k)",
    "summary": "Keeps a size-k min-heap so the heap top is always the kth largest value seen so far."
  },
  "31": {
    "timeComplexity": "O(number of set bits)",
    "spaceComplexity": "O(1)",
    "summary": "Removes the lowest-set bit each loop with n & (n - 1) and counts how many removals occur."
  },
  "32": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Solves two linear house-robber passes, excluding either the first or last house because the street is circular."
  },
  "33": {
    "timeComplexity": "O(mn * 4^L) worst case",
    "spaceComplexity": "O(L)",
    "summary": "Backtracks from each cell, marking cells temporarily so each path spells the word without reusing positions."
  },
  "34": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(w)",
    "summary": "Breadth-first search returns as soon as it reaches the first leaf, which is guaranteed to be the minimum depth."
  },
  "35": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Uses a monotonic decreasing stack of indexes to resolve each day when a warmer temperature appears."
  },
  "36": {
    "timeComplexity": "O(log(min(m, n)))",
    "spaceComplexity": "O(1)",
    "summary": "Binary-searches the partition in the smaller array until left and right halves are correctly ordered."
  },
  "37": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Greedily tracks the farthest reachable index while scanning from left to right."
  },
  "38": {
    "timeComplexity": "O(mn)",
    "spaceComplexity": "O(1) extra output excluded",
    "summary": "Peels the matrix layer by layer using top, bottom, left, and right boundaries."
  },
  "39": {
    "timeComplexity": "O(|s| + |t|)",
    "spaceComplexity": "O(|t|)",
    "summary": "Expands and shrinks a sliding window while tracking how many target character requirements are currently satisfied."
  },
  "40": {
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "summary": "Binary search compares the middle element with the right boundary to discard the sorted half that cannot contain the minimum."
  },
  "41": {
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "summary": "Performs topological sorting with indegrees, and succeeds only if every course can be removed from the graph."
  },
  "42": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Evaluates the expression with a stack, applying each operator to the two most recent operands."
  },
  "43": {
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "summary": "Binary search determines which half is sorted on each step and keeps only the half that could contain the target."
  },
  "44": {
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "summary": "Checks rows, columns, and 3x3 boxes with sets; the board is fixed-size 9x9 so the work is constant."
  },
  "45": {
    "timeComplexity": "O(mn)",
    "spaceComplexity": "O(mn)",
    "summary": "Runs multi-source BFS from all rotten oranges at once, counting minutes by processing the queue level by level."
  },
  "46": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Floyd's tortoise-and-hare pointers detect a cycle when fast and slow pointers eventually meet."
  },
  "47": {
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "summary": "Maintains the smallest possible tail for each subsequence length and uses binary search to place each number."
  },
  "48": {
    "timeComplexity": "O(N * L * 26)",
    "spaceComplexity": "O(N)",
    "summary": "Breadth-first search mutates one character at a time and uses a dictionary set to test valid next words quickly."
  },
  "49": {
    "timeComplexity": "O(4^n * n)",
    "spaceComplexity": "O(n)",
    "summary": "Builds all combinations by backtracking over the letter choices for each digit."
  },
  "50": {
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(k)",
    "summary": "Greedily schedules the most frequent remaining tasks with a max-heap and a cooldown queue."
  },
  "51": {
    "timeComplexity": "O(mn)",
    "spaceComplexity": "O(mn)",
    "summary": "Runs reverse-flow DFS/BFS from both oceans and keeps cells reachable from both traversals."
  },
  "52": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "summary": "Swaps left and right children recursively for every node in the tree."
  },
  "53": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Dynamic programming rolls forward the number of decodings ending at the previous one and two positions."
  },
  "54": {
    "timeComplexity": "O(C + P)",
    "spaceComplexity": "O(C + P)",
    "summary": "Builds a precedence graph from adjacent words, then topologically sorts the character graph unless a contradiction appears."
  },
  "55": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Compares the left-prefix sum with the implied right-prefix sum at each index."
  },
  "56": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(w)",
    "summary": "Processes the tree level by level and records the last node seen on each level."
  },
  "57": {
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "summary": "Sorts meetings by start time and uses a min-heap of ending times to track how many rooms are simultaneously active."
  },
  "58": {
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(k)",
    "summary": "Keeps the k points with smallest squared distance in a heap-based selection."
  },
  "59": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Adds all non-overlapping intervals before and after the new interval, merging any middle overlaps into one range."
  },
  "60": {
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "summary": "Topological sorting returns one valid course order when all nodes can be processed, otherwise an empty list."
  },
  "61": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "summary": "Recursively compares both trees node by node, returning false on the first structural or value mismatch."
  },
  "62": {
    "timeComplexity": "O(mn)",
    "spaceComplexity": "O(n)",
    "summary": "Counts paths row by row, where each cell equals paths from above plus paths from the left."
  },
  "63": {
    "timeComplexity": "O(n α(n))",
    "spaceComplexity": "O(n)",
    "summary": "Union-find joins endpoints of each edge and returns the first edge whose endpoints are already connected."
  },
  "64": {
    "timeComplexity": "O(log(mn))",
    "spaceComplexity": "O(1)",
    "summary": "Treats the matrix as one sorted array and binary-searches by converting indexes back to row and column."
  },
  "65": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Starts sequences only from numbers without a predecessor and stretches each run forward once."
  },
  "66": {
    "timeComplexity": "O(h)",
    "spaceComplexity": "O(1)",
    "summary": "Walks down the BST and uses ordering to move left or right until the split point is found."
  },
  "67": {
    "timeComplexity": "O(|s| + |p|)",
    "spaceComplexity": "O(1)",
    "summary": "Uses fixed-size frequency arrays and a sliding window to compare anagram character counts in constant time per step."
  },
  "68": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Rolls forward the cheapest cost to stand on the previous two steps and chooses the cheaper finishing option."
  },
  "69": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(w)",
    "summary": "Performs level-order traversal and alternates whether each completed level is appended left-to-right or right-to-left."
  },
  "70": {
    "timeComplexity": "O(n log m)",
    "spaceComplexity": "O(1)",
    "summary": "Binary-searches the eating speed and checks each candidate by summing required hours across piles."
  },
  "71": {
    "timeComplexity": "O(n^2)",
    "spaceComplexity": "O(1)",
    "summary": "Transposes the matrix in place, then reverses each row to achieve a 90-degree clockwise rotation."
  },
  "72": {
    "timeComplexity": "O(amount * coins.length)",
    "spaceComplexity": "O(amount)",
    "summary": "Counts combinations with 1D dynamic programming, adding each coin in outer-loop order to avoid duplicates."
  },
  "73": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1) extra output excluded",
    "summary": "Tracks the last position of each character and closes a partition exactly when the current scan reaches its farthest needed index."
  },
  "74": {
    "timeComplexity": "O(n * 2^n)",
    "spaceComplexity": "O(n * 2^n)",
    "summary": "Iteratively doubles the result set by cloning every existing subset with the next number included."
  },
  "75": {
    "timeComplexity": "O(n + m)",
    "spaceComplexity": "O(n + m)",
    "summary": "Appends alternating characters from each string until both inputs are exhausted."
  },
  "76": {
    "timeComplexity": "O(L)",
    "spaceComplexity": "O(total inserted characters)",
    "summary": "Stores characters in trie nodes and walks the trie for insert, exact search, and prefix search."
  },
  "77": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Uses a stack to remember prior string contexts and repeat counts while decoding nested bracketed substrings."
  },
  "78": {
    "timeComplexity": "addNum: O(log n), findMedian: O(1)",
    "spaceComplexity": "O(n)",
    "summary": "Balances a max-heap and min-heap so the middle value or middle pair can be read directly."
  },
  "79": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Uses the Dutch national flag partitioning to group 0s, 1s, and 2s in one in-place pass."
  },
  "80": {
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1) extra",
    "summary": "Sorts by end time and greedily keeps the earliest finishing non-overlapping intervals, counting the rest as removals."
  },
  "81": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Uses a dummy node and a fixed gap between fast and slow pointers to remove the nth node from the end."
  },
  "82": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "XOR cancels every duplicated value, leaving only the element that appears once."
  },
  "83": {
    "timeComplexity": "O(n^2)",
    "spaceComplexity": "O(1)",
    "summary": "Expands around every character and every gap to find the longest odd or even palindrome."
  },
  "84": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "summary": "Splits on whitespace, discards extras automatically, then rejoins the words in reverse order."
  },
  "85": {
    "timeComplexity": "O(mn)",
    "spaceComplexity": "O(n)",
    "summary": "Dynamic programming accumulates the cheapest path sum to each cell using only the current row state."
  },
  "86": {
    "timeComplexity": "O(h + k)",
    "spaceComplexity": "O(h)",
    "summary": "Iterative inorder traversal visits BST nodes in sorted order and stops at the kth visited node."
  },
  "87": {
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "summary": "Greedily expands the farthest index reachable within the current jump window and increments jumps when the window ends."
  }
}

const javascriptCodeById: Record<string, ProblemCodeBundle> = {
  "1": {
    "starterCode": "function twoSum(nums, target) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function twoSum(nums, target) {\n    let seen = {}\n\n    for (const [i, value] of nums.entries()) {\n        let complement = target - value\n        if (complement in seen) {\n            return [seen[complement], i]\n        }\n        seen[value] = i\n\n    }\n    return []\n}",
    "functionName": "twoSum",
    "functionSignature": "twoSum(nums, target)"
  },
  "2": {
    "starterCode": "function isPalindrome(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function isPalindrome(s) {\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')\n  return cleaned === cleaned.split('').reverse().join('')\n}",
    "functionName": "isPalindrome",
    "functionSignature": "isPalindrome(s)"
  },
  "3": {
    "starterCode": "function maxProfit(prices) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function maxProfit(prices) {\n    let min_price = Infinity\n    let best = 0\n\n    for (const price of prices) {\n        let min_price = min(min_price, price)\n        let best = max(best, price - min_price)\n\n    }\n    return best\n}",
    "functionName": "maxProfit",
    "functionSignature": "maxProfit(prices)"
  },
  "4": {
    "starterCode": "function containsDuplicate(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function containsDuplicate(nums) {\n    let seen = new Set()\n\n    for (const value of nums) {\n        if (seen.has(value)) {\n            return true\n        }\n        seen.add(value)\n\n    }\n    return false\n}",
    "functionName": "containsDuplicate",
    "functionSignature": "containsDuplicate(nums)"
  },
  "5": {
    "starterCode": "function search(nums, target) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function search(nums, target) {\n    let left = 0\n    let right = nums.length - 1\n\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2)\n        if (nums[mid] == target) {\n            return mid\n        }\n        if (nums[mid] < target) {\n            let left = mid + 1\n        }\n        else {\n            let right = mid - 1\n\n        }\n    }\n    return -1\n}",
    "functionName": "search",
    "functionSignature": "search(nums, target)"
  },
  "6": {
    "starterCode": "function isAnagram(s, t) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function isAnagram(s, t) {\n    if (s.length != t.length) {\n        return false\n\n    }\n    let counts = {}\n\n    for (const ch of s) {\n        counts[ch] = (counts[ch] ?? 0) + 1\n\n    }\n    for (const ch of t) {\n        if (!(ch in counts)) {\n            return false\n        }\n        counts[ch] -= 1\n        if (counts[ch] == 0) {\n            delete counts[ch]\n\n        }\n    }\n    return Object.keys(counts).length == 0\n}",
    "functionName": "isAnagram",
    "functionSignature": "isAnagram(s, t)"
  },
  "7": {
    "starterCode": "function productExceptSelf(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function productExceptSelf(nums) {\n    let result = Array(nums.length).fill(1)\n\n    let prefix = 1\n    for (let i = 0; i < nums.length; i += 1) {\n        result[i] = prefix\n        prefix *= nums[i]\n\n    }\n    let postfix = 1\n    for (let i = nums.length - 1; i >= -1; i -= 1) {\n        result[i] *= postfix\n        postfix *= nums[i]\n\n    }\n    return result\n}",
    "functionName": "productExceptSelf",
    "functionSignature": "productExceptSelf(nums)"
  },
  "8": {
    "starterCode": "function topKFrequent(nums, k) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function topKFrequent(nums, k) {\n  const counts = {}\n  for (const num of nums) {\n    counts[num] = (counts[num] ?? 0) + 1\n  }\n\n  const buckets = Array.from({ length: nums.length + 1 }, () => [])\n  for (const [num, frequency] of Object.entries(counts)) {\n    buckets[frequency].push(Number(num))\n  }\n\n  const result = []\n  for (let frequency = buckets.length - 1; frequency > 0; frequency -= 1) {\n    for (const num of buckets[frequency]) {\n      result.push(num)\n      if (result.length === k) {\n        return result\n      }\n    }\n  }\n\n  return result\n}",
    "functionName": "topKFrequent",
    "functionSignature": "topKFrequent(nums, k)"
  },
  "9": {
    "starterCode": "function lengthOfLongestSubstring(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function lengthOfLongestSubstring(s) {\n    let seen = {}\n    let left = 0\n    let best = 0\n\n    for (const [right, ch] of s.entries()) {\n        if (ch in seen && seen[ch] >= left) {\n            let left = seen[ch] + 1\n        }\n        seen[ch] = right\n        let best = max(best, right - left + 1)\n\n    }\n    return best\n}",
    "functionName": "lengthOfLongestSubstring",
    "functionSignature": "lengthOfLongestSubstring(s)"
  },
  "10": {
    "starterCode": "function threeSum(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function threeSum(nums) {\n    nums.sort()\n    let result = []\n\n    for (let i = 0; i < nums.length; i += 1) {\n        if (i > 0 && nums[i] == nums[i - 1]) {\n            continue\n\n        }\n        let left = i + 1\n        let right = nums.length - 1\n\n        while (left < right) {\n            let total = nums[i] + nums[left] + nums[right]\n            if (total < 0) {\n                left += 1\n            }\n            else if (total > 0) {\n                right -= 1\n            }\n            else {\n                result.push([nums[i], nums[left], nums[right]])\n                left += 1\n                right -= 1\n                while (left < right && nums[left] == nums[left - 1]) {\n                    left += 1\n                }\n                while (left < right && nums[right] == nums[right + 1]) {\n                    right -= 1\n\n                }\n            }\n        }\n    }\n    return result\n}",
    "functionName": "threeSum",
    "functionSignature": "threeSum(nums)"
  },
  "11": {
    "starterCode": "function merge(intervals) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function merge(intervals) {\n    intervals.sort(key=lambda interval: interval[0])\n    let merged = []\n\n    intervals.includes(for start, end):\n        if (! merged || start > merged[-1][1]) {\n            merged.push([start, end])\n        }\n        else {\n            merged[-1][1] = max(merged[-1][1], end)\n\n        }\n    return merged\n}",
    "functionName": "merge",
    "functionSignature": "merge(intervals)"
  },
  "12": {
    "starterCode": "function maxSubArray(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function maxSubArray(nums) {\n    let current = nums[0]\n    let best = nums[0]\n\n    for (const value of nums.slice(1)) {\n        let current = max(value, current + value)\n        let best = max(best, current)\n\n    }\n    return best\n}",
    "functionName": "maxSubArray",
    "functionSignature": "maxSubArray(nums)"
  },
  "13": {
    "starterCode": "function climbStairs(n) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function climbStairs(n) {\n    if (n <= 3) {\n        return n\n\n    }\n    let first = 2\n    let second = 3\n\n    for (let __index = 4; __index < n + 1; __index += 1) {\n        [first, second] = [second, first + second]\n\n    }\n    return second\n}",
    "functionName": "climbStairs",
    "functionSignature": "climbStairs(n)"
  },
  "14": {
    "starterCode": "function isValid(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function isValid(s) {\n    let pairs = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    let stack = []\n\n    for (const ch of s) {\n        if (pairs.includes(ch)) {\n            if (! stack || stack[-1] != pairs[ch]) {\n                return false\n            }\n            stack.pop()\n        }\n        else {\n            stack.push(ch)\n\n        }\n    }\n    return stack.length == 0\n}",
    "functionName": "isValid",
    "functionSignature": "isValid(s)"
  },
  "15": {
    "starterCode": "function levelOrder(root) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function levelOrder(root) {\n  if (!root) {\n    return []\n  }\n\n  const result = []\n  const queue = [root]\n  let head = 0\n\n  while (head < queue.length) {\n    const levelSize = queue.length - head\n    const level = []\n\n    for (let i = 0; i < levelSize; i += 1) {\n      const node = queue[head]\n      head += 1\n      level.push(node.val)\n\n      if (node.left != null) {\n        queue.push(node.left)\n      }\n      if (node.right != null) {\n        queue.push(node.right)\n      }\n    }\n\n    result.push(level)\n  }\n\n  return result\n}",
    "functionName": "levelOrder",
    "functionSignature": "levelOrder(root)"
  },
  "16": {
    "starterCode": "function networkDelayTime(times, n, k) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "class MinHeap {\n  constructor() {\n    this.data = []\n  }\n\n  push(value) {\n    this.data.push(value)\n    this.bubbleUp(this.data.length - 1)\n  }\n\n  pop() {\n    if (this.data.length === 0) {\n      return null\n    }\n\n    const top = this.data[0]\n    const last = this.data.pop()\n    if (this.data.length > 0) {\n      this.data[0] = last\n      this.bubbleDown(0)\n    }\n\n    return top\n  }\n\n  bubbleUp(index) {\n    while (index > 0) {\n      const parent = Math.floor((index - 1) / 2)\n      if (this.data[parent][0] <= this.data[index][0]) {\n        break\n      }\n      ;[this.data[parent], this.data[index]] = [this.data[index], this.data[parent]]\n      index = parent\n    }\n  }\n\n  bubbleDown(index) {\n    const length = this.data.length\n    while (true) {\n      let smallest = index\n      const left = index * 2 + 1\n      const right = index * 2 + 2\n\n      if (left < length && this.data[left][0] < this.data[smallest][0]) {\n        smallest = left\n      }\n      if (right < length && this.data[right][0] < this.data[smallest][0]) {\n        smallest = right\n      }\n      if (smallest === index) {\n        break\n      }\n\n      ;[this.data[smallest], this.data[index]] = [this.data[index], this.data[smallest]]\n      index = smallest\n    }\n  }\n}\n\nfunction networkDelayTime(times, n, k) {\n  const graph = Object.fromEntries(Array.from({ length: n }, (_, index) => [index + 1, []]))\n  for (const [source, target, time] of times) {\n    graph[source].push([target, time])\n  }\n\n  const distances = new Map()\n  const heap = new MinHeap()\n  heap.push([0, k])\n\n  while (true) {\n    const entry = heap.pop()\n    if (entry === null) {\n      break\n    }\n\n    const [currentTime, node] = entry\n    if (distances.has(node)) {\n      continue\n    }\n\n    distances.set(node, currentTime)\n\n    for (const [neighbor, travelTime] of graph[node]) {\n      if (!distances.has(neighbor)) {\n        heap.push([currentTime + travelTime, neighbor])\n      }\n    }\n  }\n\n  if (distances.size !== n) {\n    return -1\n  }\n\n  return Math.max(...distances.values())\n}",
    "functionName": "networkDelayTime",
    "functionSignature": "networkDelayTime(times, n, k)"
  },
  "17": {
    "starterCode": "function reverseList(head) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function reverseList(head) {\n    let prev = null\n    let current = head\n\n    while (current is ! null) {\n        let nxt = current.next\n        current.next = prev\n        let prev = current\n        let current = nxt\n\n    }\n    return prev\n}",
    "functionName": "reverseList",
    "functionSignature": "reverseList(head)"
  },
  "18": {
    "starterCode": "function combinationSum(candidates, target) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function combinationSum(candidates, target) {\n    let result = []\n    candidates.sort()\n\n    function backtrack(start, remaining, path) {\n        if (remaining == 0) {\n            result.push(path.slice())\n            return\n\n        }\n        for (let index = start; index < candidates.length; index += 1) {\n            let value = candidates[index]\n            if (value > remaining) {\n                break\n\n            }\n            path.push(value)\n            backtrack(index, remaining - value, path)\n            path.pop()\n\n        }\n    }\n    backtrack(0, target, [])\n    return result\n}",
    "functionName": "combinationSum",
    "functionSignature": "combinationSum(candidates, target)"
  },
  "19": {
    "starterCode": "function largestRectangleArea(heights) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function largestRectangleArea(heights) {\n    let stack = []\n    let best = 0\n\n    for (const [index, height] of heights + [0].entries()) {\n        let start = index\n\n        while (stack && stack[-1][1] > height) {\n            [start_index, popped_height] = [stack.pop()]\n            let best = max(best, popped_height * (index - start_index))\n            let start = start_index\n\n        }\n        stack.push((start, height))\n\n    }\n    return best\n}",
    "functionName": "largestRectangleArea",
    "functionSignature": "largestRectangleArea(heights)"
  },
  "20": {
    "starterCode": "function canCompleteCircuit(gas, cost) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function canCompleteCircuit(gas, cost) {\n    let total = 0\n    let tank = 0\n    let start = 0\n\n    for (let index = 0; index < gas.length; index += 1) {\n        let gain = gas[index] - cost[index]\n        total += gain\n        tank += gain\n\n        if (tank < 0) {\n            let start = index + 1\n            let tank = 0\n\n        }\n    }\n    return start if total >= 0 else -1\n}",
    "functionName": "canCompleteCircuit",
    "functionSignature": "canCompleteCircuit(gas, cost)"
  },
  "21": {
    "starterCode": "function subarraySum(nums, k) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function subarraySum(nums, k) {\n    let count = 0\n    let prefix = 0\n    let seen = {0: 1}\n\n    for (const num of nums) {\n        prefix += num\n        count += (seen[prefix - k] ?? 0)\n        seen[prefix] = (seen[prefix] ?? 0) + 1\n\n    }\n    return count\n}",
    "functionName": "subarraySum",
    "functionSignature": "subarraySum(nums, k)"
  },
  "22": {
    "starterCode": "function romanToInt(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function romanToInt(s) {\n    let values = {\n        \"I\": 1,\n        \"V\": 5,\n        \"X\": 10,\n        \"L\": 50,\n        \"C\": 100,\n        \"D\": 500,\n        \"M\": 1000,\n    }\n    let total = 0\n\n    for (const [index, ch] of s.entries()) {\n        let value = values[ch]\n        if (index + 1 < s.length && value < values[s[index + 1]]) {\n            total -= value\n        }\n        else {\n            total += value\n\n        }\n    }\n    return total\n}",
    "functionName": "romanToInt",
    "functionSignature": "romanToInt(s)"
  },
  "23": {
    "starterCode": "function coinChange(coins, amount) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function coinChange(coins, amount) {\n    let dp = Array((amount + 1)).fill(amount + 1)\n    dp[0] = 0\n\n    for (let current = 1; current < amount + 1; current += 1) {\n        for (const coin of coins) {\n            if (coin <= current) {\n                dp[current] = min(dp[current], dp[current - coin] + 1)\n\n            }\n        }\n    }\n    return dp[amount] if dp[amount] != amount + 1 else -1\n}",
    "functionName": "coinChange",
    "functionSignature": "coinChange(coins, amount)"
  },
  "24": {
    "starterCode": "function trap(height) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function trap(height) {\n    let left = 0\n    let right = height.length - 1\n    let left_max = 0\n    let right_max = 0\n    let trapped = 0\n\n    while (left < right) {\n        if (height[left] < height[right]) {\n            let left_max = max(left_max, height[left])\n            trapped += left_max - height[left]\n            left += 1\n        }\n        else {\n            let right_max = max(right_max, height[right])\n            trapped += right_max - height[right]\n            right -= 1\n\n        }\n    }\n    return trapped\n}",
    "functionName": "trap",
    "functionSignature": "trap(height)"
  },
  "25": {
    "starterCode": "function longestCommonPrefix(strs) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function longestCommonPrefix(strs) {\n    let prefix = strs[0]\n\n    for (const word of strs.slice(1)) {\n        while (! word.startsWith(prefix)) {\n            let prefix = prefix[:-1]\n            if (prefix.length === 0) {\n                return \"\"\n\n            }\n        }\n    }\n    return prefix\n}",
    "functionName": "longestCommonPrefix",
    "functionSignature": "longestCommonPrefix(strs)"
  },
  "26": {
    "starterCode": "function isValidBST(root) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function isValidBST(root) {\n    function dfs(node, low, high) {\n        if (node is null) {\n            return true\n\n        }\n        let value = node.val\n        if (! (low < value < high)) {\n            return false\n\n        }\n        return dfs(node.left, low, value) && dfs(node.right, value, high)\n\n    }\n    return dfs(root, float(\"-inf\"), float(\"inf\"))\n}",
    "functionName": "isValidBST",
    "functionSignature": "isValidBST(root)"
  },
  "27": {
    "starterCode": "function setZeroes(matrix) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function setZeroes(matrix) {\n    let first_row_zero = matrix.includes(any(value == 0 for value)[0])\n    let first_col_zero = matrix.includes(any(row[0] == 0 for row))\n\n    for (let row = 1; row < matrix.length; row += 1) {\n        for (let col = 1; col < matrix[0].length; col += 1) {\n            if (matrix[row][col] == 0) {\n                matrix[row][0] = 0\n                matrix[0][col] = 0\n\n            }\n        }\n    }\n    for (let row = 1; row < matrix.length; row += 1) {\n        for (let col = 1; col < matrix[0].length; col += 1) {\n            if (matrix[row][0] == 0 || matrix[0][col] == 0) {\n                matrix[row][col] = 0\n\n            }\n        }\n    }\n    if (first_row_zero) {\n        for (let col = 0; col < matrix[0].length; col += 1) {\n            matrix[0][col] = 0\n\n        }\n    }\n    if (first_col_zero) {\n        for (let row = 0; row < matrix.length; row += 1) {\n            matrix[row][0] = 0\n\n        }\n    }\n    return matrix\n}",
    "functionName": "setZeroes",
    "functionSignature": "setZeroes(matrix)"
  },
  "28": {
    "starterCode": "function mergeTwoLists(list1, list2) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function mergeTwoLists(list1, list2) {\n    let dummy = {\"val\": 0, \"next\": null}\n    let tail = dummy\n\n    while (list1 is ! null && list2 is ! null) {\n        if (list1.val <= list2.val) {\n            tail.next = list1\n            let list1 = list1.next\n        }\n        else {\n            tail.next = list2\n            let list2 = list2.next\n        }\n        let tail = tail.next\n\n    }\n    tail.next = list1 if list1 is ! null else list2\n    return dummy.next\n}",
    "functionName": "mergeTwoLists",
    "functionSignature": "mergeTwoLists(list1, list2)"
  },
  "29": {
    "starterCode": "function numIslands(grid) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function numIslands(grid) {\n    let rows = grid.length\n    let cols = grid[0].length\n    let islands = 0\n\n    function dfs(row, col) {\n        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] != \"1\") {\n            return\n\n        }\n        grid[row][col] = \"0\"\n        dfs(row + 1, col)\n        dfs(row - 1, col)\n        dfs(row, col + 1)\n        dfs(row, col - 1)\n\n    }\n    for (let row = 0; row < rows; row += 1) {\n        for (let col = 0; col < cols; col += 1) {\n            if (grid[row][col] == \"1\") {\n                islands += 1\n                dfs(row, col)\n\n            }\n        }\n    }\n    return islands\n}",
    "functionName": "numIslands",
    "functionSignature": "numIslands(grid)"
  },
  "30": {
    "starterCode": "function findKthLargest(nums, k) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function findKthLargest(nums, k) {\n  const heap = []\n\n  const bubbleUp = (index) => {\n    while (index > 0) {\n      const parent = Math.floor((index - 1) / 2)\n      if (heap[parent] <= heap[index]) {\n        break\n      }\n      ;[heap[parent], heap[index]] = [heap[index], heap[parent]]\n      index = parent\n    }\n  }\n\n  const bubbleDown = (index) => {\n    while (true) {\n      let smallest = index\n      const left = index * 2 + 1\n      const right = index * 2 + 2\n\n      if (left < heap.length && heap[left] < heap[smallest]) {\n        smallest = left\n      }\n      if (right < heap.length && heap[right] < heap[smallest]) {\n        smallest = right\n      }\n      if (smallest === index) {\n        break\n      }\n\n      ;[heap[index], heap[smallest]] = [heap[smallest], heap[index]]\n      index = smallest\n    }\n  }\n\n  const push = (value) => {\n    heap.push(value)\n    bubbleUp(heap.length - 1)\n  }\n\n  const pop = () => {\n    const top = heap[0]\n    const last = heap.pop()\n    if (heap.length > 0) {\n      heap[0] = last\n      bubbleDown(0)\n    }\n    return top\n  }\n\n  for (const num of nums) {\n    push(num)\n    if (heap.length > k) {\n      pop()\n    }\n  }\n\n  return heap[0]\n}",
    "functionName": "findKthLargest",
    "functionSignature": "findKthLargest(nums, k)"
  },
  "31": {
    "starterCode": "function hammingWeight(n) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function hammingWeight(n) {\n    let count = 0\n\n    while (n) {\n        n &= n - 1\n        count += 1\n\n    }\n    return count\n}",
    "functionName": "hammingWeight",
    "functionSignature": "hammingWeight(n)"
  },
  "32": {
    "starterCode": "function rob(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function rob(nums) {\n    if (nums.length == 1) {\n        return nums[0]\n\n    }\n    function rob_linear(houses) {\n        let prev_two = 0\n        let prev_one = 0\n\n        for (const money of houses) {\n            [prev_two, prev_one] = [prev_one, max(prev_one, prev_two + money)]\n\n        }\n        return prev_one\n\n    }\n    return max(rob_linear(nums[:-1]), rob_linear(nums.slice(1)))\n}",
    "functionName": "rob",
    "functionSignature": "rob(nums)"
  },
  "33": {
    "starterCode": "function exist(board, word) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function exist(board, word) {\n    let rows = board.length\n    let cols = board[0].length\n\n    function dfs(row, col, index) {\n        if (index == word.length) {\n            return true\n        }\n        if (row < 0 || row >= rows || col < 0 || col >= cols) {\n            return false\n        }\n        if (board[row][col] != word[index]) {\n            return false\n\n        }\n        let temp = board[row][col]\n        board[row][col] = '#'\n\n        let found = (\n            dfs(row + 1, col, index + 1)\n            || dfs(row - 1, col, index + 1)\n            || dfs(row, col + 1, index + 1)\n            || dfs(row, col - 1, index + 1)\n        )\n\n        board[row][col] = temp\n        return found\n\n    }\n    for (let row = 0; row < rows; row += 1) {\n        for (let col = 0; col < cols; col += 1) {\n            if (dfs(row, col, 0)) {\n                return true\n\n            }\n        }\n    }\n    return false\n}",
    "functionName": "exist",
    "functionSignature": "exist(board, word)"
  },
  "34": {
    "starterCode": "function minDepth(root) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function minDepth(root) {\n  if (!root) {\n    return 0\n  }\n\n  const queue = [[root, 1]]\n  let head = 0\n\n  while (head < queue.length) {\n    const [node, depth] = queue[head]\n    head += 1\n\n    if (node.left == null && node.right == null) {\n      return depth\n    }\n\n    if (node.left != null) {\n      queue.push([node.left, depth + 1])\n    }\n    if (node.right != null) {\n      queue.push([node.right, depth + 1])\n    }\n  }\n\n  return 0\n}",
    "functionName": "minDepth",
    "functionSignature": "minDepth(root)"
  },
  "35": {
    "starterCode": "function dailyTemperatures(temperatures) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function dailyTemperatures(temperatures) {\n    let answer = Array(temperatures.length).fill(0)\n    let stack = []\n\n    for (const [index, temperature] of temperatures.entries()) {\n        while (stack && temperatures[stack[-1]] < temperature) {\n            let prev_index = stack.pop()\n            answer[prev_index] = index - prev_index\n\n        }\n        stack.push(index)\n\n    }\n    return answer\n}",
    "functionName": "dailyTemperatures",
    "functionSignature": "dailyTemperatures(temperatures)"
  },
  "36": {
    "starterCode": "function findMedianSortedArrays(nums1, nums2) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function findMedianSortedArrays(nums1, nums2) {\n    if (nums1.length > nums2.length) {\n        [nums1, nums2] = [nums2, nums1]\n\n    }\n    let total = nums1.length + nums2.length\n    let half = Math.floor(total / 2)\n\n    let left = 0\n    let right = nums1.length\n\n    while (left <= right) {\n        let partition1 = Math.floor((left + right) / 2)\n        let partition2 = half - partition1\n\n        let left1 = nums1[partition1 - 1] if partition1 > 0 else -Infinity\n        let right1 = nums1[partition1] if partition1 < nums1.length else Infinity\n        let left2 = nums2[partition2 - 1] if partition2 > 0 else -Infinity\n        let right2 = nums2[partition2] if partition2 < nums2.length else Infinity\n\n        if (left1 <= right2 && left2 <= right1) {\n            if (total % 2 == 1) {\n                return min(right1, right2)\n            }\n            return (max(left1, left2) + min(right1, right2)) / 2\n\n        }\n        if (left1 > right2) {\n            let right = partition1 - 1\n        }\n        else {\n            let left = partition1 + 1\n\n        }\n    }\n    return 0\n}",
    "functionName": "findMedianSortedArrays",
    "functionSignature": "findMedianSortedArrays(nums1, nums2)"
  },
  "37": {
    "starterCode": "function canJump(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function canJump(nums) {\n    let farthest = 0\n\n    for (const [index, jump] of nums.entries()) {\n        if (index > farthest) {\n            return false\n\n        }\n        let farthest = max(farthest, index + jump)\n        if (farthest >= nums.length - 1) {\n            return true\n\n        }\n    }\n    return true\n}",
    "functionName": "canJump",
    "functionSignature": "canJump(nums)"
  },
  "38": {
    "starterCode": "function spiralOrder(matrix) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function spiralOrder(matrix) {\n    let result = []\n\n    let top = 0\n    let bottom = matrix.length - 1\n    let left = 0\n    let right = matrix[0].length - 1\n\n    while (top <= bottom && left <= right) {\n        for (let col = left; col < right + 1; col += 1) {\n            result.push(matrix[top][col])\n        }\n        top += 1\n\n        for (let row = top; row < bottom + 1; row += 1) {\n            result.push(matrix[row][right])\n        }\n        right -= 1\n\n        if (top <= bottom) {\n            for (let col = right; col < left - 1; col += NaN) {\n                result.push(matrix[bottom][col])\n            }\n            bottom -= 1\n\n        }\n        if (left <= right) {\n            for (let row = bottom; row < top - 1; row += NaN) {\n                result.push(matrix[row][left])\n            }\n            left += 1\n\n        }\n    }\n    return result\n}",
    "functionName": "spiralOrder",
    "functionSignature": "spiralOrder(matrix)"
  },
  "39": {
    "starterCode": "function minWindow(s, t) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function minWindow(s, t) {\n    if (! s || ! t) {\n        return ''\n\n    }\n    let target = {}\n    for (const ch of t) {\n        target[ch] = (target[ch] ?? 0) + 1\n\n    }\n    let window = {}\n    let have = 0\n    let need = Object.keys(target).length\n    let best_length = Infinity\n    let best_start = 0\n    let left = 0\n\n    for (const [right, ch] of s.entries()) {\n        window[ch] = (window[ch] ?? 0) + 1\n\n        if (ch in target && window[ch] == target[ch]) {\n            have += 1\n\n        }\n        while (have == need) {\n            let current_length = right - left + 1\n            if (current_length < best_length) {\n                let best_length = current_length\n                let best_start = left\n\n            }\n            let left_char = s[left]\n            window[left_char] -= 1\n            if (left_char in target && window[left_char] < target[left_char]) {\n                have -= 1\n            }\n            left += 1\n\n        }\n    }\n    if (best_length == Infinity) {\n        return ''\n\n    }\n    return s[best_start:best_start + best_length]\n}",
    "functionName": "minWindow",
    "functionSignature": "minWindow(s, t)"
  },
  "40": {
    "starterCode": "function findMin(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function findMin(nums) {\n    let left = 0\n    let right = nums.length - 1\n\n    while (left < right) {\n        let mid = Math.floor((left + right) / 2)\n\n        if (nums[mid] > nums[right]) {\n            let left = mid + 1\n        }\n        else {\n            let right = mid\n\n        }\n    }\n    return nums[left]\n}",
    "functionName": "findMin",
    "functionSignature": "findMin(nums)"
  },
  "41": {
    "starterCode": "function canFinish(numCourses, prerequisites) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function canFinish(numCourses, prerequisites) {\n  const graph = Object.fromEntries(Array.from({ length: numCourses }, (_, course) => [course, []]))\n  const indegree = Array(numCourses).fill(0)\n\n  for (const [course, prerequisite] of prerequisites) {\n    graph[prerequisite].push(course)\n    indegree[course] += 1\n  }\n\n  const queue = []\n  for (let course = 0; course < numCourses; course += 1) {\n    if (indegree[course] === 0) {\n      queue.push(course)\n    }\n  }\n\n  let head = 0\n  let completed = 0\n  while (head < queue.length) {\n    const course = queue[head]\n    head += 1\n    completed += 1\n\n    for (const nextCourse of graph[course]) {\n      indegree[nextCourse] -= 1\n      if (indegree[nextCourse] === 0) {\n        queue.push(nextCourse)\n      }\n    }\n  }\n\n  return completed === numCourses\n}",
    "functionName": "canFinish",
    "functionSignature": "canFinish(numCourses, prerequisites)"
  },
  "42": {
    "starterCode": "function evalRPN(tokens) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function evalRPN(tokens) {\n    let stack = []\n\n    for (const token of tokens) {\n        if (token in {'+', '-', '*', '/'}) {\n            let right = stack.pop()\n            let left = stack.pop()\n\n            if (token == '+') {\n                stack.push(left + right)\n            }\n            else if (token == '-') {\n                stack.push(left - right)\n            }\n            else if (token == '*') {\n                stack.push(left * right)\n            }\n            else {\n                stack.push(int(left / right))\n        else {\n            stack.push(int(token))\n\n        }\n            }\n        }\n    }\n    return stack[-1]\n}",
    "functionName": "evalRPN",
    "functionSignature": "evalRPN(tokens)"
  },
  "43": {
    "starterCode": "function search(nums, target) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function search(nums, target) {\n    let left = 0\n    let right = nums.length - 1\n\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2)\n\n        if (nums[mid] == target) {\n            return mid\n\n        }\n        if (nums[left] <= nums[mid]) {\n            if (nums[left] <= target < nums[mid]) {\n                let right = mid - 1\n            }\n            else {\n                let left = mid + 1\n        else {\n            if (nums[mid] < target <= nums[right]) {\n                let left = mid + 1\n            }\n            else {\n                let right = mid - 1\n\n            }\n        }\n            }\n        }\n    }\n    return -1\n}",
    "functionName": "search",
    "functionSignature": "search(nums, target)"
  },
  "44": {
    "starterCode": "function isValidSudoku(board) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function isValidSudoku(board) {\n    let rows = Array.from({ length: 9 }, () => new Set())\n    let cols = Array.from({ length: 9 }, () => new Set())\n    let boxes = Array.from({ length: 9 }, () => new Set())\n\n    for (let row = 0; row < 9; row += 1) {\n        for (let col = 0; col < 9; col += 1) {\n            let value = board[row][col]\n            if (value == '.') {\n                continue\n\n            }\n            let box = (row // 3) * 3 + (col // 3)\n            if (rows.includes(value)cols.includes([row] || value)boxes.includes([col] || value)[box]) {\n                return false\n\n            }\n            rows[row].add(value)\n            cols[col].add(value)\n            boxes[box].add(value)\n\n        }\n    }\n    return true\n}",
    "functionName": "isValidSudoku",
    "functionSignature": "isValidSudoku(board)"
  },
  "45": {
    "starterCode": "function orangesRotting(grid) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function orangesRotting(grid) {\n  const rows = grid.length\n  const cols = grid[0].length\n  const queue = []\n  let head = 0\n  let fresh = 0\n\n  for (let row = 0; row < rows; row += 1) {\n    for (let col = 0; col < cols; col += 1) {\n      if (grid[row][col] === 2) {\n        queue.push([row, col])\n      } else if (grid[row][col] === 1) {\n        fresh += 1\n      }\n    }\n  }\n\n  let minutes = 0\n  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]\n\n  while (head < queue.length && fresh > 0) {\n    const levelSize = queue.length - head\n\n    for (let i = 0; i < levelSize; i += 1) {\n      const [row, col] = queue[head]\n      head += 1\n\n      for (const [dr, dc] of directions) {\n        const nextRow = row + dr\n        const nextCol = col + dc\n\n        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || grid[nextRow][nextCol] !== 1) {\n          continue\n        }\n\n        grid[nextRow][nextCol] = 2\n        fresh -= 1\n        queue.push([nextRow, nextCol])\n      }\n    }\n\n    minutes += 1\n  }\n\n  return fresh === 0 ? minutes : -1\n}",
    "functionName": "orangesRotting",
    "functionSignature": "orangesRotting(grid)"
  },
  "46": {
    "starterCode": "function hasCycle(head) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function hasCycle(head) {\n    let slow = head\n    let fast = head\n\n    while (fast is ! null && fast.next is ! null) {\n        let slow = slow.next\n        let fast = fast.next[\"next\"]\n\n        if (slow is fast) {\n            return true\n\n        }\n    }\n    return false\n}",
    "functionName": "hasCycle",
    "functionSignature": "hasCycle(head)"
  },
  "47": {
    "starterCode": "function lengthOfLIS(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function lengthOfLIS(nums) {\n    let tails = []\n\n    for (const num of nums) {\n        let left = 0\n        let right = tails.length\n\n        while (left < right) {\n            let mid = Math.floor((left + right) / 2)\n            if (tails[mid] < num) {\n                let left = mid + 1\n            }\n            else {\n                let right = mid\n\n            }\n        }\n        if (left == tails.length) {\n            tails.push(num)\n        }\n        else {\n            tails[left] = num\n\n        }\n    }\n    return tails.length\n}",
    "functionName": "lengthOfLIS",
    "functionSignature": "lengthOfLIS(nums)"
  },
  "48": {
    "starterCode": "from typing import List\n\n\nfunction ladderLength(beginWord, endWord, wordList) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function ladderLength(beginWord, endWord, wordList) {\n  const words = new Set(wordList)\n  if (!words.has(endWord)) {\n    return 0\n  }\n\n  const queue = [[beginWord, 1]]\n  let head = 0\n  const visited = new Set([beginWord])\n\n  while (head < queue.length) {\n    const [word, steps] = queue[head]\n    head += 1\n\n    if (word === endWord) {\n      return steps\n    }\n\n    for (let index = 0; index < word.length; index += 1) {\n      for (let code = 97; code <= 122; code += 1) {\n        const nextWord = word.slice(0, index) + String.fromCharCode(code) + word.slice(index + 1)\n        if (!words.has(nextWord) || visited.has(nextWord)) {\n          continue\n        }\n        visited.add(nextWord)\n        queue.push([nextWord, steps + 1])\n      }\n    }\n  }\n\n  return 0\n}",
    "functionName": "ladderLength",
    "functionSignature": "ladderLength(beginWord, endWord, wordList)"
  },
  "49": {
    "starterCode": "function letterCombinations(digits) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function letterCombinations(digits) {\n    if (! digits) {\n        return []\n\n    }\n    let mapping = {\n        \"2\": \"abc\",\n        \"3\": \"def\",\n        \"4\": \"ghi\",\n        \"5\": \"jkl\",\n        \"6\": \"mno\",\n        \"7\": \"pqrs\",\n        \"8\": \"tuv\",\n        \"9\": \"wxyz\",\n    }\n    let result = []\n\n    function backtrack(index, path) {\n        if (index == digits.length) {\n            result.push(''.join(path))\n            return\n\n        }\n        for (const ch of mapping[digits[index]]) {\n            path.push(ch)\n            backtrack(index + 1, path)\n            path.pop()\n\n        }\n    }\n    backtrack(0, [])\n    return result\n}",
    "functionName": "letterCombinations",
    "functionSignature": "letterCombinations(digits)"
  },
  "50": {
    "starterCode": "function leastInterval(tasks, n) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function leastInterval(tasks, n) {\n  const counts = new Map()\n  for (const task of tasks) {\n    counts.set(task, (counts.get(task) ?? 0) + 1)\n  }\n\n  const frequencies = [...counts.values()]\n  const maxCount = Math.max(...frequencies)\n  const maxCountTasks = frequencies.filter((count) => count === maxCount).length\n  return Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxCountTasks)\n}",
    "functionName": "leastInterval",
    "functionSignature": "leastInterval(tasks, n)"
  },
  "51": {
    "starterCode": "function pacificAtlantic(heights) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function pacificAtlantic(heights) {\n    if (! heights || ! heights[0]) {\n        return []\n\n    }\n    let rows = heights.length\n    let cols = heights[0].length\n    let pacific = new Set()\n    let atlantic = new Set()\n    let directions = ((1, 0), (-1, 0), (0, 1), (0, -1))\n\n    function dfs(row, col, visited) {\n        visited.add((row, col))\n\n        directions.includes(for d_row, d_col):\n            let next_row = row + d_row\n            let next_col = col + d_col\n\n            if (! (0 <= next_row < rows && 0 <= next_col < cols)) {\n                continue\n            }\n            if (visited.includes((next_row, next_col))) {\n                continue\n            }\n            if (heights[next_row][next_col] < heights[row][col]) {\n                continue\n\n            }\n            dfs(next_row, next_col, visited)\n\n    }\n    for (let row = 0; row < rows; row += 1) {\n        dfs(row, 0, pacific)\n        dfs(row, cols - 1, atlantic)\n\n    }\n    for (let col = 0; col < cols; col += 1) {\n        dfs(0, col, pacific)\n        dfs(rows - 1, col, atlantic)\n\n    }\n    let result = []\n    for (let row = 0; row < rows; row += 1) {\n        for (let col = 0; col < cols; col += 1) {\n            if (pacific.has((row, col))atlantic.has(&& (row, col))) {\n                result.push([row, col])\n\n            }\n        }\n    }\n    return result\n}",
    "functionName": "pacificAtlantic",
    "functionSignature": "pacificAtlantic(heights)"
  },
  "52": {
    "starterCode": "function invertTree(root) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function invertTree(root) {\n    if (! root) {\n        return null\n\n    }\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root\n}",
    "functionName": "invertTree",
    "functionSignature": "invertTree(root)"
  },
  "53": {
    "starterCode": "function numDecodings(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function numDecodings(s) {\n    if (! s || s[0] == \"0\") {\n        return 0\n\n    }\n    let prev2 = 1\n    let prev1 = 1\n\n    for (let index = 1; index < s.length; index += 1) {\n        let current = 0\n\n        if (s[index] != \"0\") {\n            current += prev1\n\n        }\n        let two_digit = int(s[index - 1:index + 1])\n        if (10 <= two_digit <= 26) {\n            current += prev2\n\n        }\n        let prev2 = prev1\n        let prev1 = current\n\n    }\n    return prev1\n}",
    "functionName": "numDecodings",
    "functionSignature": "numDecodings(s)"
  },
  "54": {
    "starterCode": "from typing import List\n\n\nfunction alienOrder(words) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function alienOrder(words) {\n  const graph = new Map()\n  const indegree = new Map()\n\n  for (const word of words) {\n    for (const ch of word) {\n      if (!graph.has(ch)) {\n        graph.set(ch, new Set())\n        indegree.set(ch, 0)\n      }\n    }\n  }\n\n  for (let index = 0; index < words.length - 1; index += 1) {\n    const first = words[index]\n    const second = words[index + 1]\n\n    if (first.length > second.length && first.startsWith(second)) {\n      return ''\n    }\n\n    const limit = Math.min(first.length, second.length)\n    for (let i = 0; i < limit; i += 1) {\n      const from = first[i]\n      const to = second[i]\n      if (from === to) {\n        continue\n      }\n\n      if (!graph.get(from).has(to)) {\n        graph.get(from).add(to)\n        indegree.set(to, indegree.get(to) + 1)\n      }\n      break\n    }\n  }\n\n  const queue = []\n  for (const [ch, degree] of indegree.entries()) {\n    if (degree === 0) {\n      queue.push(ch)\n    }\n  }\n\n  let head = 0\n  const order = []\n  while (head < queue.length) {\n    const ch = queue[head]\n    head += 1\n    order.push(ch)\n\n    for (const next of graph.get(ch)) {\n      indegree.set(next, indegree.get(next) - 1)\n      if (indegree.get(next) === 0) {\n        queue.push(next)\n      }\n    }\n  }\n\n  return order.length === graph.size ? order.join('') : ''\n}",
    "functionName": "alienOrder",
    "functionSignature": "alienOrder(words)"
  },
  "55": {
    "starterCode": "function pivotIndex(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function pivotIndex(nums) {\n    let total = nums.reduce((total, value) => total + value, 0)\n    let left_sum = 0\n\n    for (const [index, value] of nums.entries()) {\n        if (left_sum == total - left_sum - value) {\n            return index\n        }\n        left_sum += value\n\n    }\n    return -1\n}",
    "functionName": "pivotIndex",
    "functionSignature": "pivotIndex(nums)"
  },
  "56": {
    "starterCode": "function rightSideView(root) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function rightSideView(root) {\n  if (!root) {\n    return []\n  }\n\n  const result = []\n  const queue = [root]\n  let head = 0\n\n  while (head < queue.length) {\n    const levelSize = queue.length - head\n    let rightmost = null\n\n    for (let i = 0; i < levelSize; i += 1) {\n      const node = queue[head]\n      head += 1\n      rightmost = node.val\n\n      if (node.left != null) {\n        queue.push(node.left)\n      }\n      if (node.right != null) {\n        queue.push(node.right)\n      }\n    }\n\n    result.push(rightmost)\n  }\n\n  return result\n}",
    "functionName": "rightSideView",
    "functionSignature": "rightSideView(root)"
  },
  "57": {
    "starterCode": "function minMeetingRooms(intervals) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function minMeetingRooms(intervals) {\n  if (intervals.length === 0) {\n    return 0\n  }\n\n  const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b)\n  const ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b)\n\n  let start = 0\n  let end = 0\n  let roomsInUse = 0\n  let best = 0\n\n  while (start < starts.length) {\n    if (starts[start] < ends[end]) {\n      roomsInUse += 1\n      best = Math.max(best, roomsInUse)\n      start += 1\n    } else {\n      roomsInUse -= 1\n      end += 1\n    }\n  }\n\n  return best\n}",
    "functionName": "minMeetingRooms",
    "functionSignature": "minMeetingRooms(intervals)"
  },
  "58": {
    "starterCode": "function kClosest(points, k) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "import heapq\n\n\nfunction kClosest(points, k) {\n    return heapq.nsmallest(k, points, key=lambda point: (point[0] * point[0] + point[1] * point[1], point[0], point[1]))\n}",
    "functionName": "kClosest",
    "functionSignature": "kClosest(points, k)"
  },
  "59": {
    "starterCode": "function insert(intervals, newInterval) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function insert(intervals, newInterval) {\n    let merged = []\n    let index = 0\n\n    while (index < intervals.length && intervals[index][1] < newInterval[0]) {\n        merged.push(intervals[index])\n        index += 1\n\n    }\n    [start, end] = [newInterval]\n    while (index < intervals.length && intervals[index][0] <= end) {\n        let start = min(start, intervals[index][0])\n        let end = max(end, intervals[index][1])\n        index += 1\n\n    }\n    merged.push([start, end])\n\n    while (index < intervals.length) {\n        merged.push(intervals[index])\n        index += 1\n\n    }\n    return merged\n}",
    "functionName": "insert",
    "functionSignature": "insert(intervals, newInterval)"
  },
  "60": {
    "starterCode": "function findOrder(numCourses, prerequisites) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function findOrder(numCourses, prerequisites) {\n  const graph = Object.fromEntries(Array.from({ length: numCourses }, (_, course) => [course, []]))\n  const indegree = Array(numCourses).fill(0)\n\n  for (const [course, prereq] of prerequisites) {\n    graph[prereq].push(course)\n    indegree[course] += 1\n  }\n\n  const queue = []\n  for (let course = 0; course < numCourses; course += 1) {\n    if (indegree[course] === 0) {\n      queue.push(course)\n    }\n  }\n\n  let head = 0\n  const order = []\n  while (head < queue.length) {\n    const course = queue[head]\n    head += 1\n    order.push(course)\n\n    for (const next of graph[course]) {\n      indegree[next] -= 1\n      if (indegree[next] === 0) {\n        queue.push(next)\n      }\n    }\n  }\n\n  return order.length === numCourses ? order : []\n}",
    "functionName": "findOrder",
    "functionSignature": "findOrder(numCourses, prerequisites)"
  },
  "61": {
    "starterCode": "function isSameTree(p, q) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function isSameTree(p, q) {\n    if (! p && ! q) {\n        return true\n    }\n    if (! p || ! q) {\n        return false\n    }\n    if (p.val != q.val) {\n        return false\n\n    }\n    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)\n}",
    "functionName": "isSameTree",
    "functionSignature": "isSameTree(p, q)"
  },
  "62": {
    "starterCode": "function uniquePaths(m, n) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function uniquePaths(m, n) {\n    let dp = Array(n).fill(1)\n\n    for (let __index = 1; __index < m; __index += 1) {\n        for (let col = 1; col < n; col += 1) {\n            dp[col] += dp[col - 1]\n\n        }\n    }\n    return dp[-1]\n}",
    "functionName": "uniquePaths",
    "functionSignature": "uniquePaths(m, n)"
  },
  "63": {
    "starterCode": "function findRedundantConnection(edges) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function findRedundantConnection(edges) {\n    let parent = Array.from({ length: edges.length + 1 }, (_, index) => index)\n    let rank = Array((edges.length + 1)).fill(0)\n\n    function find(x) {\n        while (parent[x] != x) {\n            parent[x] = parent[parent[x]]\n            let x = parent[x]\n        }\n        return x\n\n    }\n    function union(a, b) {\n        let root_a = find(a)\n        let root_b = find(b)\n\n        if (root_a == root_b) {\n            return false\n\n        }\n        if (rank[root_a] < rank[root_b]) {\n            parent[root_a] = root_b\n        }\n        else if (rank[root_a] > rank[root_b]) {\n            parent[root_b] = root_a\n        }\n        else {\n            parent[root_b] = root_a\n            rank[root_a] += 1\n\n        }\n        return true\n\n    }\n    for (const edge of edges) {\n        [a, b] = [edge]\n        if (! union(a, b)) {\n            return edge\n\n        }\n    }\n    return []\n}",
    "functionName": "findRedundantConnection",
    "functionSignature": "findRedundantConnection(edges)"
  },
  "64": {
    "starterCode": "function searchMatrix(matrix, target) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function searchMatrix(matrix, target) {\n    if (! matrix || ! matrix[0]) {\n        return false\n\n    }\n    let rows = matrix.length\n    let cols = matrix[0].length\n    let left = 0\n    let right = rows * cols - 1\n\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2)\n        let value = matrix[mid // cols][mid % cols]\n\n        if (value == target) {\n            return true\n        }\n        if (value < target) {\n            let left = mid + 1\n        }\n        else {\n            let right = mid - 1\n\n        }\n    }\n    return false\n}",
    "functionName": "searchMatrix",
    "functionSignature": "searchMatrix(matrix, target)"
  },
  "65": {
    "starterCode": "function longestConsecutive(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function longestConsecutive(nums) {\n    let values = set(nums)\n    let best = 0\n\n    for (const num of values) {\n        if (values.includes(num - 1)) {\n            continue\n\n        }\n        let length = 1\n        let current = num\n        while (values.includes(current + 1)) {\n            current += 1\n            length += 1\n\n        }\n        let best = max(best, length)\n\n    }\n    return best\n}",
    "functionName": "longestConsecutive",
    "functionSignature": "longestConsecutive(nums)"
  },
  "66": {
    "starterCode": "function lowestCommonAncestor(root, p, q) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function lowestCommonAncestor(root, p, q) {\n    let current = root\n\n    while (current) {\n        if (p.val < current.val && q.val < current.val) {\n            let current = current.left\n        }\n        else if (p.val > current.val && q.val > current.val) {\n            let current = current.right\n        }\n        else {\n            return current\n\n        }\n    }\n    return null\n}",
    "functionName": "lowestCommonAncestor",
    "functionSignature": "lowestCommonAncestor(root, p, q)"
  },
  "67": {
    "starterCode": "function findAnagrams(s, p) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function findAnagrams(s, p) {\n    if (p.length > s.length) {\n        return []\n\n    }\n    let target = Array(26).fill(0)\n    let window = Array(26).fill(0)\n    let result = []\n\n    for (const ch of p) {\n        target[ord(ch) - ord('a')] += 1\n\n    }\n    for (const [index, ch] of s.entries()) {\n        window[ord(ch) - ord('a')] += 1\n\n        if (index >= p.length) {\n            let left_char = s[index - p.length]\n            window[ord(left_char) - ord('a')] -= 1\n\n        }\n        if (window == target) {\n            result.push(index - p.length + 1)\n\n        }\n    }\n    return result\n}",
    "functionName": "findAnagrams",
    "functionSignature": "findAnagrams(s, p)"
  },
  "68": {
    "starterCode": "function minCostClimbingStairs(cost) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function minCostClimbingStairs(cost) {\n    let prev2 = 0\n    let prev1 = 0\n\n    for (const value of cost) {\n        [prev2, prev1] = [prev1, min(prev1, prev2) + value]\n\n    }\n    return min(prev1, prev2)\n}",
    "functionName": "minCostClimbingStairs",
    "functionSignature": "minCostClimbingStairs(cost)"
  },
  "69": {
    "starterCode": "from collections import deque\n\n\nfunction zigzagLevelOrder(root) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function zigzagLevelOrder(root) {\n  if (!root) {\n    return []\n  }\n\n  const result = []\n  const queue = [root]\n  let head = 0\n  let leftToRight = true\n\n  while (head < queue.length) {\n    const levelSize = queue.length - head\n    const level = []\n\n    for (let i = 0; i < levelSize; i += 1) {\n      const node = queue[head]\n      head += 1\n      level.push(node.val)\n\n      if (node.left != null) {\n        queue.push(node.left)\n      }\n      if (node.right != null) {\n        queue.push(node.right)\n      }\n    }\n\n    if (!leftToRight) {\n      level.reverse()\n    }\n\n    result.push(level)\n    leftToRight = !leftToRight\n  }\n\n  return result\n}",
    "functionName": "zigzagLevelOrder",
    "functionSignature": "zigzagLevelOrder(root)"
  },
  "70": {
    "starterCode": "function minEatingSpeed(piles, h) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function minEatingSpeed(piles, h) {\n    let left = 1\n    let right = max(piles)\n\n    while (left < right) {\n        let speed = Math.floor((left + right) / 2)\n        let hours = 0\n\n        for (const pile of piles) {\n            hours += (pile + speed - 1) // speed\n\n        }\n        if (hours <= h) {\n            let right = speed\n        }\n        else {\n            let left = speed + 1\n\n        }\n    }\n    return left\n}",
    "functionName": "minEatingSpeed",
    "functionSignature": "minEatingSpeed(piles, h)"
  },
  "71": {
    "starterCode": "function rotate(matrix) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function rotate(matrix) {\n    let n = matrix.length\n\n    for (let row = 0; row < n; row += 1) {\n        for (let col = row + 1; col < n; col += 1) {\n            matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]\n\n        }\n    }\n    for (const row of matrix) {\n        row.reverse()\n\n    }\n    return matrix\n}",
    "functionName": "rotate",
    "functionSignature": "rotate(matrix)"
  },
  "72": {
    "starterCode": "function change(amount, coins) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function change(amount, coins) {\n    let dp = Array((amount + 1)).fill(0)\n    dp[0] = 1\n\n    for (const coin of coins) {\n        for (let total = coin; total < amount + 1; total += 1) {\n            dp[total] += dp[total - coin]\n\n        }\n    }\n    return dp[amount]\n}",
    "functionName": "change",
    "functionSignature": "change(amount, coins)"
  },
  "73": {
    "starterCode": "function partitionLabels(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function partitionLabels(s) {\n    let last_index = {}\n\n    for (const [index, ch] of s.entries()) {\n        last_index[ch] = index\n\n    }\n    let result = []\n    let start = 0\n    let end = 0\n\n    for (const [index, ch] of s.entries()) {\n        let end = max(end, last_index[ch])\n\n        if (index == end) {\n            result.push(end - start + 1)\n            let start = index + 1\n\n        }\n    }\n    return result\n}",
    "functionName": "partitionLabels",
    "functionSignature": "partitionLabels(s)"
  },
  "74": {
    "starterCode": "function subsets(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function subsets(nums) {\n    let result = [[]]\n\n    for (const num of nums) {\n        let additions = []\n        for (const subset of result) {\n            additions.push(subset + [num])\n        }\n        result.extend(additions)\n\n    }\n    return result\n}",
    "functionName": "subsets",
    "functionSignature": "subsets(nums)"
  },
  "75": {
    "starterCode": "function mergeAlternately(word1, word2) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function mergeAlternately(word1, word2) {\n    let result = []\n    let i = 0\n    let j = 0\n\n    while (i < word1.length || j < word2.length) {\n        if (i < word1.length) {\n            result.push(word1[i])\n            i += 1\n        }\n        if (j < word2.length) {\n            result.push(word2[j])\n            j += 1\n\n        }\n    }\n    return ''.join(result)\n}",
    "functionName": "mergeAlternately",
    "functionSignature": "mergeAlternately(word1, word2)"
  },
  "76": {
    "starterCode": "class Trie {\n  constructor() {\n    // Write your solution here\n  }\n\n  insert(word) {}\n\n  search(word) {}\n\n  startsWith(prefix) {}\n}",
    "solutionCode": "class Trie {\n  constructor() {\n    this.root = {}\n    this.end = '#'\n  }\n\n  insert(word) {\n    let node = this.root\n    for (const ch of word) {\n      if (!(ch in node)) {\n        node[ch] = {}\n      }\n      node = node[ch]\n    }\n    node[this.end] = true\n  }\n\n  search(word) {\n    let node = this.root\n    for (const ch of word) {\n      if (!(ch in node)) {\n        return false\n      }\n      node = node[ch]\n    }\n    return node[this.end] === true\n  }\n\n  startsWith(prefix) {\n    let node = this.root\n    for (const ch of prefix) {\n      if (!(ch in node)) {\n        return false\n      }\n      node = node[ch]\n    }\n    return true\n  }\n}",
    "functionName": "Trie",
    "functionSignature": "Trie.insert(word), Trie.search(word), Trie.startsWith(prefix)"
  },
  "77": {
    "starterCode": "function decodeString(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function decodeString(s) {\n    let stack = []\n    let current_num = 0\n    let current_str = ''\n\n    for (const ch of s) {\n        if (ch.match(/^[0-9]$/) !== null) {\n            let current_num = current_num * 10 + int(ch)\n        }\n        else if (ch == '[') {\n            stack.push((current_str, current_num))\n            let current_str = ''\n            let current_num = 0\n        }\n        else if (ch == ']') {\n            [prev_str, repeat] = [stack.pop()]\n            let current_str = prev_str + current_str * repeat\n        }\n        else {\n            current_str += ch\n\n        }\n    }\n    return current_str\n}",
    "functionName": "decodeString",
    "functionSignature": "decodeString(s)"
  },
  "78": {
    "starterCode": "class MedianFinder {\n  constructor() {\n    // Write your solution here\n  }\n\n  addNum(num) {}\n\n  findMedian() {}\n}",
    "solutionCode": "class Heap {\n  constructor(compare) {\n    this.data = []\n    this.compare = compare\n  }\n\n  size() {\n    return this.data.length\n  }\n\n  peek() {\n    return this.data[0] ?? null\n  }\n\n  push(value) {\n    this.data.push(value)\n    this.bubbleUp(this.data.length - 1)\n  }\n\n  pop() {\n    if (this.data.length === 0) {\n      return null\n    }\n\n    const top = this.data[0]\n    const last = this.data.pop()\n    if (this.data.length > 0) {\n      this.data[0] = last\n      this.bubbleDown(0)\n    }\n    return top\n  }\n\n  bubbleUp(index) {\n    while (index > 0) {\n      const parent = Math.floor((index - 1) / 2)\n      if (!this.compare(this.data[index], this.data[parent])) {\n        break\n      }\n      ;[this.data[index], this.data[parent]] = [this.data[parent], this.data[index]]\n      index = parent\n    }\n  }\n\n  bubbleDown(index) {\n    while (true) {\n      let best = index\n      const left = index * 2 + 1\n      const right = index * 2 + 2\n\n      if (left < this.data.length && this.compare(this.data[left], this.data[best])) {\n        best = left\n      }\n      if (right < this.data.length && this.compare(this.data[right], this.data[best])) {\n        best = right\n      }\n      if (best === index) {\n        break\n      }\n\n      ;[this.data[index], this.data[best]] = [this.data[best], this.data[index]]\n      index = best\n    }\n  }\n}\n\nclass MedianFinder {\n  constructor() {\n    this.small = new Heap((a, b) => a > b)\n    this.large = new Heap((a, b) => a < b)\n  }\n\n  addNum(num) {\n    this.small.push(num)\n    this.large.push(this.small.pop())\n\n    if (this.large.size() > this.small.size()) {\n      this.small.push(this.large.pop())\n    }\n  }\n\n  findMedian() {\n    if (this.small.size() > this.large.size()) {\n      return this.small.peek()\n    }\n\n    return (this.small.peek() + this.large.peek()) / 2\n  }\n}",
    "functionName": "MedianFinder",
    "functionSignature": "MedianFinder.addNum(num), MedianFinder.findMedian()"
  },
  "79": {
    "starterCode": "function sortColors(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function sortColors(nums) {\n    let left = 0\n    let current = 0\n    let right = nums.length - 1\n\n    while (current <= right) {\n        if (nums[current] == 0) {\n            nums[left], nums[current] = nums[current], nums[left]\n            left += 1\n            current += 1\n        }\n        else if (nums[current] == 2) {\n            nums[current], nums[right] = nums[right], nums[current]\n            right -= 1\n        }\n        else {\n            current += 1\n\n        }\n    }\n    return nums\n}",
    "functionName": "sortColors",
    "functionSignature": "sortColors(nums)"
  },
  "80": {
    "starterCode": "function eraseOverlapIntervals(intervals) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function eraseOverlapIntervals(intervals) {\n    intervals.sort(key=lambda interval: interval[1])\n    let removals = 0\n    let previous_end = -Infinity\n\n    intervals.includes(for start, end):\n        if (start < previous_end) {\n            removals += 1\n        }\n        else {\n            let previous_end = end\n\n        }\n    return removals\n}",
    "functionName": "eraseOverlapIntervals",
    "functionSignature": "eraseOverlapIntervals(intervals)"
  },
  "81": {
    "starterCode": "function removeNthFromEnd(head, n) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function removeNthFromEnd(head, n) {\n    let dummy = {\"val\": 0, \"next\": head}\n    let fast = dummy\n    let slow = dummy\n\n    for (let _ = 0; _ < n + 1; _ += 1) {\n        let fast = fast.next\n\n    }\n    while (fast is ! null) {\n        let fast = fast.next\n        let slow = slow.next\n\n    }\n    slow.next = slow.next[\"next\"]\n    return dummy.next\n}",
    "functionName": "removeNthFromEnd",
    "functionSignature": "removeNthFromEnd(head, n)"
  },
  "82": {
    "starterCode": "function singleNumber(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function singleNumber(nums) {\n    let result = 0\n\n    for (const num of nums) {\n        result ^= num\n\n    }\n    return result\n}",
    "functionName": "singleNumber",
    "functionSignature": "singleNumber(nums)"
  },
  "83": {
    "starterCode": "function longestPalindrome(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function longestPalindrome(s) {\n    let best_start = 0\n    let best_len = 1\n\n    function expand(left, right) {\n        while (left >= 0 && right < s.length && s[left] == s[right]) {\n            left -= 1\n            right += 1\n        }\n        return left + 1, right - left - 1\n\n    }\n    for (let index = 0; index < s.length; index += 1) {\n        [start, length] = [expand(index, index)]\n        if (length > best_len) {\n            let best_start = start\n            let best_len = length\n\n        }\n        [start, length] = [expand(index, index + 1)]\n        if (length > best_len) {\n            let best_start = start\n            let best_len = length\n\n        }\n    }\n    return s[best_start:best_start + best_len]\n}",
    "functionName": "longestPalindrome",
    "functionSignature": "longestPalindrome(s)"
  },
  "84": {
    "starterCode": "function reverseWords(s) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function reverseWords(s) {\n    let words = s.split()\n    return ' '.join(reversed(words))\n}",
    "functionName": "reverseWords",
    "functionSignature": "reverseWords(s)"
  },
  "85": {
    "starterCode": "function minPathSum(grid) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function minPathSum(grid) {\n    let rows = grid.length\n    let cols = grid[0].length\n\n    let dp = Array(cols).fill(0)\n\n    for (let row = 0; row < rows; row += 1) {\n        for (let col = 0; col < cols; col += 1) {\n            if (row == 0 && col == 0) {\n                dp[col] = grid[row][col]\n            }\n            else if (row == 0) {\n                dp[col] = dp[col - 1] + grid[row][col]\n            }\n            else if (col == 0) {\n                dp[col] = dp[col] + grid[row][col]\n            }\n            else {\n                dp[col] = min(dp[col], dp[col - 1]) + grid[row][col]\n\n            }\n        }\n    }\n    return dp[-1]\n}",
    "functionName": "minPathSum",
    "functionSignature": "minPathSum(grid)"
  },
  "86": {
    "starterCode": "function kthSmallest(root, k) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function kthSmallest(root, k) {\n    let stack = []\n    let current = root\n\n    while (stack || current is ! null) {\n        while (current is ! null) {\n            stack.push(current)\n            let current = current.left\n\n        }\n        let current = stack.pop()\n        k -= 1\n        if (k == 0) {\n            return current.val\n\n        }\n        let current = current.right\n    }\n}",
    "functionName": "kthSmallest",
    "functionSignature": "kthSmallest(root, k)"
  },
  "87": {
    "starterCode": "function jump(nums) {\n    # Write your solution here\n    // Write your solution here\n}",
    "solutionCode": "function jump(nums) {\n    let jumps = 0\n    let current_end = 0\n    let farthest = 0\n\n    for (let index = 0; index < nums.length - 1; index += 1) {\n        let farthest = max(farthest, index + nums[index])\n\n        if (index == current_end) {\n            jumps += 1\n            let current_end = farthest\n\n        }\n    }\n    return jumps\n}",
    "functionName": "jump",
    "functionSignature": "jump(nums)"
  }
}

const isSerializableForRuntime = (value: unknown, seen = new WeakSet<object>()): boolean => {
  if (value === null || value === undefined) {
    return true
  }

  if (typeof value !== 'object') {
    return true
  }

  if (seen.has(value as object)) {
    return false
  }

  seen.add(value as object)

  if (Array.isArray(value)) {
    return value.every((item) => isSerializableForRuntime(item, seen))
  }

  return Object.values(value as Record<string, unknown>).every((item) => isSerializableForRuntime(item, seen))
}

export const problems: Problem[] = baseProblems
  .filter((problem) => problem.tests.every((test) => isSerializableForRuntime(test.input) && isSerializableForRuntime(test.expected)))
  .map((problem) => ({
    ...problem,
    optimalSolution: optimalSolutionById[problem.id],
  }))

function toJavascriptStarter(functionName: string, params: string) {
  return `function ${functionName}(${params}) {\n  // Write your solution here\n}`
}

function toJavascriptSolution(functionName: string, pythonSolution: string, fallbackParams = '') {
  const body = pythonSolution
    .split('\n')
    .slice(1)
    .map((line) => line.replace(/^ {4}/, ''))
    .join('\n')

  return `function ${functionName}(${fallbackParams}) {\n${body || '  return null'}\n}`
}

export const getProblemCodeBundle = (problem: Problem, language: SupportedLanguage): ProblemCodeBundle => {
  if (language === 'python') {
    return {
      starterCode: problem.starterCode,
      solutionCode: problem.solutionCode,
      functionName: problem.solutionName,
      functionSignature: problem.functionSignature,
    }
  }

  const configured = problem.codeByLanguage?.[language] ?? (language === 'javascript' ? javascriptCodeById[problem.id] : undefined)
  if (configured) {
    return configured
  }

  const signatureMatch = problem.functionSignature.match(/^[^(]+\((.*)\)$/)
  const params = signatureMatch?.[1] ?? ''

  return {
    starterCode: toJavascriptStarter(problem.solutionName, params),
    solutionCode: toJavascriptSolution(problem.solutionName, problem.solutionCode, params),
    functionName: problem.solutionName,
    functionSignature: problem.functionSignature,
  }
}

export const allTags = Array.from(new Set(problems.flatMap((problem) => problem.tags))).sort()
export const allCompanies = Array.from(new Set(problems.flatMap((problem) => problem.companies))).sort()
export const allDifficulties = ['Easy', 'Medium', 'Hard'] as const
