def bubble_sum(tup_list):
    for i in range(len(tup_list)-1):
        if (tup_list[i][0] + tup_list[i][1]) > (tup_list[i+1][0]+tup_list[i+1][1]):
            temp = tup_list[i]
            tup_list[i] = tup_list[i+1]
            tup_list[i+1] = temp
            
    return tup_list
                
print(bubble_sum([(3, 5), (1, 3), (6, 5), (2, 8)])) #> [(1, 3), (3, 5), (2, 8), (6, 5)]
print(bubble_sum([(2, 5), (2, 5), (7, 8), (2, 6)])) #> [(2, 5), (2, 5), (2, 6), (7, 8)]
print(bubble_sum([(5, 6), (1, 2), (3, 0), (2, 4)])) #> [(1, 2), (3, 0), (2, 4), (5, 6)]
print(bubble_sum([(5, 4), (1, 0), (2, 1), (4, 1)])) #> [(1, 0), (2, 1), (4, 1), (5, 4)]
