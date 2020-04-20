# Reverse a string without using any built-in methods or string slices.

# I will loop over each character in the string backwards from the last index,
# puch each character to a new string, and then return that string


# hold current_index (last index of list)
# for each character in the string
  # get current index
  # push index's character to new string
  # subtract current index


def reverse_string(str):
  reversed_string = ""
  index = len(str) - 1
  while index >= 0:
    reverse_string += str[index]
    index -= 1

  return reversed_string


reverse_string("hello")