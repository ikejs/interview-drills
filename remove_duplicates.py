def remove_duplicates(sorted_linked_list):
  index = 0
  no_duplicates = []

  while index < len(sorted_linked_list) - 1:
    if sorted_linked_list[index + 1] != sorted_linked_list[index]:
      no_duplicates.append(sorted_linked_list[index])
    index += 1
  no_duplicates.append(sorted_linked_list[-1])
  return no_duplicates


print(remove_duplicates([3, 3, 4, 4, 4, 5, 5, 5, 5, 6]))