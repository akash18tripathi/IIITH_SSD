import csv

initial=[]
#Read csv
with open('lab_11_data.csv', 'r') as file:
    my_reader = csv.reader(file, delimiter=',')
    next(my_reader,None)
    for row in my_reader:
        initial.append(row)
        
#Drop 6 columns from end
dropped_columns=[]
for i in initial:
    dropped_columns.append(i[0:len(i)-6])

#Drop rows with %change >-3
dropped_rows = list(filter(lambda li: (float(li[6])>=-3), dropped_columns))

#Average
openList = list(map(lambda x: float(x[1].replace(',','')),dropped_rows))
avgOpen = sum(openList)/len(openList)

highList = list(map(lambda x: float(x[2].replace(',','')),dropped_rows))
avgHigh = sum(highList)/len(highList)

lowList = list(map(lambda x: float(x[3].replace(',','')),dropped_rows))
avgLow = sum(lowList)/len(lowList)

#Write average out put in file
f = open("avg_output.txt", "w")
f.write(str(avgOpen)+"\n")
f.write(str(avgHigh)+"\n")
f.write(str(avgLow)+"\n")
f.close()



#Take input from user
char = input("Enter a character from A-Z: ")
filtered_rows = list(filter(lambda x: x[0].startswith(char),dropped_rows))

#Write filtered output in file
f = open('stock_output.txt', 'w')

for i in filtered_rows:
    s = ""
    for col in i:
        s+=str(col)+' '
    s+='\n'
    f.write(s)
f.close()