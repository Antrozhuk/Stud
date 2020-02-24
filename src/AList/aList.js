function Alist(array){
    this.defaultArray=array
    this.init()
}
//init
////////////////////////////////
Alist.prototype.init=function(){
    this.arr=[]
    this.defaultArray
    index=0;
    while(this.defaultArray[index]){
        this.arr[index]=this.defaultArray[index]
        index++
    }
}
//1
////////////////////////////////////////
Alist.prototype.addStart=function(elem){
    let arrAddStart=this.arr
    for(let i=arrAddStart.length;i>=1;i--)
    {
        arrAddStart[i]=arrAddStart[i-1]
    }
    arrAddStart[0]=elem
    return this.arr=arrAddStart
}
//2
//////////////////////////////////////
Alist.prototype.addEnd=function(elem){
    let arrAddEnd=this.arr
    arrAddEnd[this.arr.length]=elem
    return this.arr=arrAddEnd
}
//3
////////////////////////////////////
Alist.prototype.delStart=function(){
    let elem=this.arr[0]
    let arrDelStart=[]
    for(let i=1;i<this.arr.length;i++)
    {
        arrDelStart[i-1]=this.arr[i]
    }
    this.arr=arrDelStart
    return elem
}
//4
//////////////////////////////////
Alist.prototype.delEnd=function(){
    let elem=this.arr[this.arr.length-1]
    let arrDelEnd=[]
    for(let i=0;i<this.arr.length-1;i++)
    {
        arrDelEnd[i]=this.arr[i]
    }
    this.arr=arrDelEnd
    return elem
}
//5
////////////////////////////////////////////
Alist.prototype.delPosition=function(index){
    let elem=this.arr[index]
    let arrPosDel=[]
    for(let i=index;i<this.arr.length-1;i++)
    {
        arrPosDel[i]=this.arr[i+1]
    }
    this.arr=arrPosDel
    return elem
}
//6
////////////////////////////////////
Alist.prototype.get=function(index){
    return this.arr[index]
}
//7
//////////////////////////////////////////
Alist.prototype.set=function(index,value){
    this.arr[index]=value
    return this.arr
}
//8
////////////////////////////////////
Alist.prototype.toString=function(){
    let toString=''
    for(let i=0;i<this.arr.length;i++)
    {
        toString+=this.arr[i]
    }
    return toString
}
//9
////////////////////////////////
Alist.prototype.size=function(){
    let length=0
    for(let i of this.arr)
        length++;
    return length
}
//10
/////////////////////////////////
Alist.prototype.clear=function(){
    this.arr=this.defaultArray
    return this.arr
}
//11
///////////////////////////////
Alist.prototype.min=function(){
    let min=this.arr[0]
    for(let i of this.arr){
        if (this.arr[i]<min)min=this.arr[i]
    }
    return min
}
//12
///////////////////////////////
Alist.prototype.max=function(){
    let max=this.arr[0]
    for(let i of this.arr){
        if (this.arr[i]>max)max=this.arr[i]
    }
    return max
}
//13
////////////////////////////////
Alist.prototype.sort=function(){
    for(let j=0;j<this.arr.length;j++)
    {
        for(let i=0;i<this.arr.length-j;i++)
        {
            if(this.arr[i]>this.arr[i+1])
            {
                let a=this.arr[i];
                this.arr[i]=this.arr[i+1];
                this.arr[i+1]=a;
            }
        }
    }
    return this.arr
}
//14
////////////////////////////////////
Alist.prototype.minIndex=function(){
    let min=this.arr[0]
    let minIndex=0
    for(let i of this.arr){
        if (this.arr[i]<min){min=this.arr[i];this.minIndex=i}
    }
    return this.minIndex
}
//15
////////////////////////////////////
Alist.prototype.maxIndex=function(){
    let max=this.arr[0]
    let maxIndex=0
    for(let i of this.arr){
        if (this.arr[i]>max){max=this.arr[i];maxIndex=i}
    }
    return maxIndex
}
Alist.prototype.reverse=function(){
    function ind(size){
        if (size%2)return (size-1)/2
        else return size/2
    }
    for(let i=0;i<ind(this.size());i++){
        let a=this.arr[i]
        this.arr[i]=this.arr[this.size()-(i+1)]
        this.arr[this.size()-(i+1)]=a
    }
    return this.arr
}
Alist.prototype.halfReverse=function(){
    function ind(size){
        if (size%2)return (size-1)/2
        else return size/2
    }
    let half=ind(this.size())
    let halfArr=[]
    for(let i=0;i<half;i++){
        if(this.size()%2){
            halfArr[i]=this.arr[half-(i+1)]
            halfArr[i+half+1]=this.arr[this.size()-(i+1)]
            halfArr[half]=this.arr[half]
        }
        else
        {
            halfArr[i]=this.arr[half-(i+1)]
            halfArr[i+half]=this.arr[this.size()-(i+1)]  
        }
    }
    return this.arr=halfArr
}


