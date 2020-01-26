class Parent():
    def __init__(self, last_name, eye_color):
        print("Parent constructor called")
        self.last_name = last_name
        self.eye_color = eye_color

class Child(Parent):
    def __init__(self, last_name, eye_color, num_of_toys):
        print("Child constructor called")
        Parent.__init__(self, last_name, eye_color)
        self.num_of_toys = num_of_toys

miley_cyrus = Child("Cyrus", "Blue", 5)
print(miley_cyrus.last_name)
print(miley_cyrus.eye_color)
print(miley_cyrus.num_of_toys)
