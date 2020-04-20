str = "Make (School is) awesome. The quick (brown fox (jumped over) the lazy dog." # change string to have balanced parentheses or not

def hasCorrectlyBalancedParentheses(string):
  closingParenthesesNeeded = 0
  for char in string:
    if char == "(":
      closingParenthesesNeeded += 1
    if char == ")":
      closingParenthesesNeeded -= 1
  if closingParenthesesNeeded != 0:
    return False
  else:
    return True



print(hasCorrectlyBalancedParentheses(str))