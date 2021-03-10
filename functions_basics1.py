#1                                                            ALL T DIAGRAMS DONE ON PAPER
def a():
    return 5
print(a())
#prediction - 5


#2
def a():
    return 5
print(a()+a())
#prediction - 10




#3
def a():
    return 5
    return 10
print(a())
#prediction - 5



#4
def a():
    return 5
    print(10)
print(a())
#prediction - return 5 -  print 10(doesnt print 10)*



#5
def a():
    print(5)
x = a()
print(x)
#prediction -5  actual: print 5 and print none for print(x)



#6
def a(b,c):
    print(b+c)
print(a(1,2) + a(2,3))
#predict- 3, 5, 8   actual: 3,5 and unsupported operand type for +


#7
def a(b,c):
    return str(b)+str(c)
print(a(2,5))
#prediction - not much help from T diagram, but remembered str() in python automatically transforms the number into a string would would make 2 and 5 into 25


#8
def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a())
#prediction 100, 7 : function is called with no parameters, print b which = 100, than return 10 which stops the function.



#9
def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))
#predict 7, 14, 21 : first less than, return 7, second more, return 14, third, 7+14, return always ends function before hitting 3.




#10
def a(b,c):
    return b+c
    return 10
print(a(3,5))
#prediction 8 : 3+5 and the return ends the function






#11
b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)
#prediction 500, 300, 500, 500  actual: 500, 500, 300, 500 ::: missed that the second print(b) was called before the function so had to print 2 500 b's first .




#12
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)
#prediction: 500,500,300,500




#13
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)
#prediction 500, 500, 300, 300



#14
def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()
#prediction 1,3,2


#15
def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)
#prediction : 1,3,5,3,10 actual : 1,3,5,10 