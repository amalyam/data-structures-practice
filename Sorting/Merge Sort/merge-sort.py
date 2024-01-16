# out-of-place mergesort
def merge_sort(lst):
    # if there is only one item left, list is sorted
    if len(lst) <= 1:
        return lst
    
    # determine the midpoint of the list
    midpoint  = len(lst) // 2
    
    # split the list into 2 lists of each half
    half1 = lst[:midpoint]
    half2 = lst[midpoint:]
    
    # return the merged lists
    return merge(half1, half2)

def merge(half1, half2):
    merged_list = []

    # set the pointers to the beginning of each list
    pointer1 = pointer2 = 0
    
    # while neither of the pointers have reached the end of their list
    while (pointer1 < len(half1) and pointer2 < len(half2)):
        if half1[pointer1] < half2[pointer2]:
            merged_list.append(half1[pointer1])
            pointer1 += 1
        else:
            merged_list.append(half2[pointer2])
            pointer2 += 1
    
    # if there are still remaining items in the list of the first half
    if pointer1 < len(half1):
        merged_list.extend(half1[pointer1:])
    
    # if there are still remaining items in the list of the second half
    if pointer2 < len(half2):
        merged_list.extend(half2[pointer2])
    
    # return the merged lists
    return merged_list

# in-place mergesort
def merge_sort_inplace(lst):
      # if there is only one item left, it is "sorted"
      if len(lst) <= 1:
          return lst
      
      # find the midpoint of the list
      midpoint = len(lst) // 2
      
      # perform the mergesort on each half
      half1 = merge_sort_inplace(lst[:midpoint])
      half2 = merge_sort_inplace(lst[midpoint:])
      
      # set pointers to the beginning of the lists
      pointer1 = pointer2 = merged_pointer = 0
      
      # while neither of the pointers for each half have reached the end of the list
      while pointer1 < len(half1) and pointer2 < len(half2):
          if half1[pointer1] < half2[pointer2]:
              lst[merged_pointer] = half1[pointer1]
              pointer1 += 1
          else:
              lst[merged_pointer] = half2[pointer2]
              pointer2 += 1
          merged_pointer += 1
          
      # copy remaining items from either half, if there are any
      while pointer1 < len(half1):
          lst[merged_pointer] = half1[pointer1]
          pointer1 += 1
          merged_pointer += 1
        
      while pointer2 < len(half2):
          lst[merged_pointer] = half2[pointer2]
          pointer2 += 1
          merged_pointer += 1
      
      return lst
         
lst = [5, 2, 38, 91, 16, 427]

sorted_lst = merge_sort(lst)        # Out of place solution
print(sorted_lst)

merge_sort_inplace(lst)             # In place solution
print(lst)
        
        
            
        
