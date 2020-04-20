# check if a string is a palindrom


# iterative version
def is_palindrom(str):
  left_index = 0
  right_index = len(str) - 1

  while left_index < right_index:
    # check mismatch
    if str[left_index] != str[right_index]:
      return False
    # move to the next characters to check
    left_index += 1
    right_index -= 1
  return True




# recursive version
def is_palindrom_recursive(str, left_index, right_index):
  # base case, stop
  if left_index == right_index:
    return True
  if str[left_index] != str[right_index]:
    return False
  # recursive case, call the function within itself
  if left_index < right_index:
    return is_palindrom_recursive(str, left_index + 1, right_index - 1)
  return True

print(is_palindrom("racecar"))
print(is_palindrom_recursive("racecar", 0, len("racecar")-1))
