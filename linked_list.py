"""
============================================================================
Implementation Exercise: Singly Linked List
============================================================================

-------
Phase 1:
-------
1. Node and LinkedList initialization
2. Getting a node by its position
3. Adding a node to the list's tail
4. Adding a node to list's head
5. Removing the head node
6. Removing the tail node
7. Returning the list length

-------
Phase 2:
-------

1. Check whether the list contains_value a value
2. Inserting a node value into the list at a specific position
3. Updating a list node's value at a specific position
4. Removing a node value from the list at a specific position
5. Format the list as a string whenever `print()` is invoked
"""

# Phase 1

# TODO: Implement a Linked List Node class here
class Node:
  # TODO: Set the `_value` `_next` node instance variables
  def __init__(self, value):
    self._value = value
    self._next = None
  
  @property
  def value(self):
    return self._value
  
  @property
  def next(self):
    return self._next
  
  @next.setter
  def next(self, value):
    self._next = value
  

# TODO: Implement a Singly Linked List class here
class LinkedList:
  # TODO: Set the `_head` node, `_tail` node, and list `_length` instance variables
  def __init__(self):
    self._head = None
    self._tail = None
    self._length = 0
  
  @property
  def head(self):
    return self._head
  
  @head.setter
  def head(self, value):
    self._head = value
  
  @property
  def length(self):
    return self._length
  
  @length.setter
  def length(self, value):
    self._length = value
  
  @property
  def tail(self):
    return self._tail
  
  @tail.setter
  def tail(self, value):
    self._tail = value
    
  # TODO: Implement the get_node method here
  def get_node(self, position):
    if position > self.length:
      raise Exception("That position is greater than the length of the list.")
    current = self.head
    index = 0
    
    while index <= position:
      if position == index:
        return current
      
      current = current.next
      index += 1
      
  # TODO: Implement the add_to_tail method here
  def add_to_tail(self, value):
    new_node = Node(value)
    if not self.tail:
      self.head = self.tail = new_node
    else:
      self.tail.next = new_node
    self.length += 1

  # TODO: Implement the add_to_head method here
  def add_to_head(self, value):
    new_node = Node(value)
    if not self.head:
      self.head = new_node
    else:  
      new_node.next = self.head
      self.head = new_node
    self.length += 1

  # TODO: Implement the remove_head method here
  def remove_head(self):
    if self.head.next:
      dummy = self.head
      self.head = self.head.next
      dummy.next = None
      self.length -= 1
    
    if self.length == 1:
      self.tail = self.head
    
    if self.length == 0:
      self.tail == None
    
    return dummy
      

  # TODO: Implement the remove_tail method here
  def remove_tail(self):
    dummy = self.tail
    if self.length == 1:
      self.head = self.tail = None
    if self.length == 2:
      self.head = self.tail
      self.tail = self.head
    if self.head and self.length > 2:
      self.tail = None
      index = 1
      current = self.head
      while index <= self.length:
        if index == self.length:
          self.tail = current
          break
        current = current.next
        index += 1
        
    self.length -= 1
      
    return dummy
    

  # TODO: Implement the __len__ method here
  def __len__(self):
    pass

# Phase 2

  # TODO: Implement the contains_value method here
  def contains_value(self, target):
    pass

  # TODO: Implement the insert_value method here
  def insert_value(self, position, value):
    pass

  # TODO: Implement the update_value method here
  def update_value(self, position, value):
    pass

  # TODO: Implement the remove_node method here
  def remove_node(self, position):
    pass

  # TODO: Implement the __str__ method here
  # def __str__(self):
  #   pass

# Phase 1 Manual Testing:

# 1. Test Node and LinkedList initialization
node = Node('hello')
print(node)                                     # <__main__.Node object at ...>
print(node._value)                              # hello
linked_list = LinkedList()
print(linked_list)                              # <__main__.LinkedList object at ...>

# 2. Test getting a node by its position
print(linked_list.get_node(0))                # None

# 3. Test adding a node to the list's tail
linked_list.add_to_tail('new tail node')
print(linked_list.get_node(0))                # <__main__.Node object at ...>
print(linked_list.get_node(0)._value)         # `new tail node`

# # 4. Test adding a node to list's head
linked_list.add_to_head('new head node')
print(linked_list.get_node(0))                # <__main__.Node object at ...>
print(linked_list.get_node(0)._value)         # `new head node`

# # 5. Test removing the head node
linked_list.remove_head()
print(linked_list.get_node(0)._value)         # `new tail node` because `new head node` has been removed
print(linked_list.get_node(1))                # `None` because `new head node` has been removed

# # 6. Test removing the tail node
print(linked_list.get_node(0)._value)         # `new tail node`
linked_list.remove_tail()
print(linked_list.get_node(0))                # None

# # 7. Test returning the list length
print(len(linked_list))                                 # 2

# Phase 2 Manual Testing

# # 1. Test whether the list contains_value a value
# linked_list = LinkedList()
# linked_list.add_to_head('new head node')
# print(linked_list.contains_value('new head node'))      # True
# print(linked_list.contains_value('App Academy node'))   # False

# # 2. Test inserting a node value into the list at a specific position
# linked_list.insert_value(0, 'hello!')
# print(linked_list.get_node(0)._value)                   # `hello!`

# # 3. Test updating a list node's value at a specific position
# linked_list.update_value(0, 'goodbye!')
# print(linked_list.get_node(0)._value)                   # `goodbye!`

# # 4. Test removing a node value from the list at a specific position
# print(linked_list.get_node(1)._value)                   # `new head node`
# linked_list.remove_node(1)
# print(linked_list.get_node(1))                          # None

# # 5. Format the list as a string whenever `print()` is invoked
# new_linked_list = LinkedList()
# print(new_linked_list)                  # Empty List
# new_linked_list.add_to_tail('puppies')
# print(new_linked_list)                  # puppies
# new_linked_list.add_to_tail('kittens')
# print(new_linked_list)                  # puppies, kittens
