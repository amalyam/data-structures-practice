# Complete the mergeLists function below.
#
#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def mergeLists(head1, head2):
    if not head1:
        return head2
    if not head2:
        return head1
    if not head1 and not head2:
        return None
    
    merged_head = SinglyLinkedListNode(None)
    current = merged_head
    
    pointer1 = head1
    pointer2 = head2
    
    while head1 and head2:
        if head1.data < head2.data:
            current.next = head1
            head1 = head1.next
        else:
            current.next = head2
            head2 = head2.next
        current = current.next
    
    current.next = head1 or head2
    
    return merged_head.next
