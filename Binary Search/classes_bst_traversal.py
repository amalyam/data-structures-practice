# Write your class here.
class Node:
    def __init__(self, value):
        self._left = None
        self._right = None
        self._val = None
        
    @property
    def left(self):
        return self._left
    
    @left.setter
    def left(self, value):
        self._left = value
    
    @property
    def right(self):
        return self._right
    
    @right.setter
    def right(self, value):
        self._right = value
    
    @property
    def val(self):
        return self._val
    
    @val.setter
    def val(self, value):
        self._val = value
  
    
class Tree:
    def __init__(self):
        self._root = None
    
    @property
    def root(self):
        return self._root
    
    @root.setter
    def root(self, root_val):
        self._root = root_val
    
    
    def insert(self, root_node, new_node):
        # places new node in correct location in BST
        if self.root == None:
            self.root = new_node
            return
        else:
            if new_node < root_node:
                if root_node.left == None:
                    root_node.left = new_node
                    return
                else:
                    self.insert(self, root_node.left, new_node)
            elif new_node >= root_node:
                if root_node.right == None:
                    root_node.right = new_node
                    return
                else:
                    self.insert(self, root_node.right, new_node)
    
        
    def preorder_traversal(self, root_node):
        # traverses the tree and prints the value of 
        # each node in pre-order succession
        if root_node == None:
            return
        
        print(root_node.val)
        
        if root_node.left:
            self.preorder_traversal(self, root_node.left)
        
        if root_node.right:
            self.preorder_traversal(self, root_node.right)
            
        
    def inorder_traversal(self, root_node):
        # traverses the tree and prints the value of 
        # each node in in-order succession
        if root_node == None:
            return
        
        if root_node.left:
            self.inorder_traversal(self, root_node.left)
            
        print(root_node.val)
        
        if root_node.right:
            self.inorder_traversal(self, root_node.right)
        
        
    def postorder_traversal(self, root_node):
        # traverses the tree and prints the value of 
        # each node in post-order succession
        if root_node == None:
            return

        if root_node.left:
            self.postorder_traversal(self, root_node.left)
        
        if root_node.right:
            self.postorder_traversal(self, root_node.right)
        
        print(root_node.val)
        
tree = Tree()

root = Node(4)
tree.insert(root, Node(1))
tree.insert(root, Node(2))
tree.insert(root, Node(3))

print("** PRE ORDER: **")
tree.preorder_traversal(root) # 4, 1, 2, 3

print("** IN ORDER: **")
tree.inorder_traversal(root) # 1, 2, 3, 4

print("** POST ORDER: **")
tree.postorder_traversal(root) # 3, 2, 1, 4
