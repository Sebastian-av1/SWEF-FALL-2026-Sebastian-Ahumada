# Longest Substring Without Repeating Characters
# Full problem: see ../README.md Part 3
# Run: python3 solution.py


def length_of_longest_substring(s):
    # Sliding window: "left" is the start of the current substring with no repeats.
    # "last_seen" remembers the last position where each character showed up.
    last_seen = {}
    left = 0
    best = 0

    for right in range(len(s)):
        ch = s[right]

        # If this character is already inside the window, move the left edge
        # to just past its earlier position so the window has no repeats again.
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1

        last_seen[ch] = right
        best = max(best, right - left + 1)

    return best


print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))     # 1
print(length_of_longest_substring("pwwkew"))    # 3
