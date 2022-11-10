from datetime import datetime

def isValid(x,y,mat,vis):
    if x>=0 and y>=0 and x<=125 and y<=24 and vis[x][y]==False and mat[x][y]!='0':
        return True
    return False

size=0
def dfs(mat,i,j,vis):
    if isValid(i,j,mat,vis)==False:
        return
    vis[i][j]=True
    global size
    size+=1
    x = [1,1,0,-1,-1,-1,0,1]
    y = [0,-1,-1,-1,0,1,1,1]
    for k in range(8):
        if isValid(i+x[k],j+y[k],mat,vis):
            dfs(mat,i+x[k],j+y[k],vis)
            
def exploreMatrix(mat):
    if len(mat)==0:
        return []
    numOfComponents=0
    fi=0
    visited = [[False for j in range(25)]for i in range(126)]
    for i in range(126):
        for j in range(25):
            if(mat[i][j]!='0' and visited[i][j]==False):
                global size
                size=0
                numOfComponents+=1
                fi=i
                dfs(mat,i,j,visited)
                
    return [numOfComponents,size,fi]

matrices=[]
timeStamp=[]
f = open("Readings for 126x25 mat.txt", "r")
lines = f.readlines()

mat=[]
timest=""
count=0
stream=[]
ts=[]
index=[]
sizeOfComp=[]
for line in lines:
    if(line=="\n"):
        if len(mat)!=0:
            timeStamp.append(timest)
            details = exploreMatrix(mat)
            if(len(details)>0):
                stream.append(details[0])
                ts.append(timest)
                index.append(details[2])
                sizeOfComp.append(details[1])
            matrices.append(mat)
            timest=""
            mat=[]
            count=0
            continue
        else:
            count=0
            continue
    count+=1
    entries = line.split()
    if(count==63):
        timest=entries[0]
    mat.append(entries[1:])
f.close()

wasEverOnes=False
ones=False
maxSize=0
footStart=0
tstmp=""
footDetails=[]
footNum=0
cnt=0
for i in range(len(stream)):
    if stream[i]==1:
        ones=True
        wasEverOnes=True
        cnt=0
    else:
        cnt+=1
        ones=False
    if(ones==True):
        if(maxSize<sizeOfComp[i]):
            maxSize=sizeOfComp[i]
            footStart=index[i]
            tstmp=ts[i]
    else:
        if(wasEverOnes==True and cnt==1):
            li = [tstmp,footStart]
            footDetails.append(li)
#             if(footNum%2==0):
#                 leftFootDetails.append(li)
#             else:
#                 rightFootDetails.append(li)
            footNum+=1
            footStart=0
            maxSize=0
            tstmp=""

strideNum=1
for i in range(len(footDetails)):
    if i+2<len(footDetails):
        stride_len = abs(footDetails[i][1]-footDetails[i+2][1])
        t1 = datetime.strptime(footDetails[i][0], "%H:%M:%S.%f")
        t2 = datetime.strptime(footDetails[i+2][0], "%H:%M:%S.%f")
        diff = (t2-t1).total_seconds()
        velocity = stride_len/diff
        cadence = 180/diff
        print("=======Stride number #",strideNum,"=======")
        print("Stride length: ",stride_len,"cells")
        print("Velocity : ",velocity,"cells/second")
        print("Cadence : ",cadence,"number of steps/minute")
        strideNum+=1