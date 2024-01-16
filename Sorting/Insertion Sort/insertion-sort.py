# out-of-place insertion sort
def insertion_sort_out(lst):
    # copy the original list
    list_copy = lst.copy()
    
    # create a list to store the sorted values
    sorted_list = []
    
    # pop the last item off of the copied list 
    # and append it to the sorted list
    sorted_list.append(list_copy.pop())
    
    # while the copied list still contains elements
    while list_copy:
        # pop the last item off the copied list
        # and store in a temp
        temp = list_copy.pop()
        
        # append None to the end of the sorted list
        sorted_list.append(None)
        
        # create a variable to track the insertion point
        insertion = len(sorted_list) - 1
        
        # starting from the end of the sorted list
        while insertion > 0 and (sorted_list[insertion - 1] is None or sorted_list[insertion - 1] > temp):
            # move the item prior in the list to the current location
            sorted_list[insertion] = sorted_list[insertion - 1]
            insertion -= 1
            
        # insert the value in temp into the insertion point
        sorted_list[insertion] = temp
    
    # return the sorted list
    return sorted_list
 
 
 # in-place insertion sort
def insertion_sort_in(lst):
    # set a pointer dividing the list into sorted and unsorted sections
    divider = 1
    
    # while the unsorted section is not empty
    while divider < len(lst):
        for i in range(0, divider):
            temp = lst[divider]
            current = lst[i]
            if current > temp:
                lst[divider] = current
                lst[i] = temp
        divider += 1
    
    return lst
    
    

print("Out-of-place sort:")
print(insertion_sort_out([55, 21, 5, 3, 6, 95])) #> [3, 5, 6, 21, 55, 95]
print(insertion_sort_out([4, 1, 0, 3, 8, 9])) #> [0, 1, 3, 4, 8, 9]
print(insertion_sort_out([1, 4, 3, 0, 3, 0, 2, 8])) #> [0, 0, 1, 2, 3, 3, 4, 8]
print("In-place sort:")
print(insertion_sort_in([55, 21, 5, 3, 6, 95])) #> [3, 5, 6, 21, 55, 95]
print(insertion_sort_in([4, 1, 0, 3, 8, 9])) #> [0, 1, 3, 4, 8, 9]
print(insertion_sort_in([1, 4, 3, 0, 3, 0, 2, 8])) #> [0, 0, 1, 2, 3, 3, 4, 8]
