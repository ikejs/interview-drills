# Write a function called compute_sum() that takes in a single integer argument n and 
# returns the sum of the positive integers from 1 to n. For example compute_sum(4) would 
# return 10, or 1+2+3+4. You need to use a loop to complete this function. 
# Upload your .py file when you are done.


def compute_sum(n):
  sum = 0
  for num in range(n+1):
    sum = sum+num
  return sum


print(compute_sum(4))