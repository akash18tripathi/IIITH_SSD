# Lab Activity 12

This consists of two tasks


# Libraries needed

datetime library in python3 is needed

## Instructions to execute task 1

1) Need 'Readings for 42x25 mat.txt' file inside the same folder as task_1.py
2) run command in terminal : python3 task_1.py


## Instructions to execute task 2

1) Need 'Readings for 126x25 mat.txt' file inside the same folder as task_2.py
2) run command in terminal : python3 task_2.py

## Assumptions in Task 1

1. The Stride length, velocity and cadence is calculated for 1-3-5-7th foot step and 2-4-6th foot step (i.e alternate foot) , Thus, it is assumed that right and left foot will be stepped alternately on mat.
2. Thus, there will be multiple strides , and the output will have multiple stride information.

## Assumptions in Task 2
1. If we combine 3 matrices of the sample input, we will get 126x25 matrix , but there will be multiple entries of the same foot (i.e 3 foot). Thus, it is very difficult/illogical to say which foot needs to be measured, Thus, Instead of combining the 3 matrices, an input stream of 126x25 matrices will run fine on the given solution.

```
