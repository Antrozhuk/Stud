let addFirst=new Alist([8,5,2])
describe("addStart",function(){
    it("[8,5,2]+7 => [7,8,5,2]",function(){
        assert.deepEqual(addFirst.addStart(7),[7,8,5,2])
    });
    it("[7,8,5,2]+3 => [3,7,8,5,2]",function(){
        assert.deepEqual(addFirst.addStart(3),[3,7,8,5,2])
    });
});
let addLast=new Alist([8,5,2])
describe("addEnd",function(){
    it("[8,5,2]+7 => [8,5,2,7]",function(){
        assert.deepEqual(addLast.addEnd(7),[8,5,2,7])
    });
    it("[8,5,2,7]+3 => [8,5,2,7,3]",function(){
        assert.deepEqual(addLast.addEnd(3),[8,5,2,7,3])
    });
});
let delFirst=new Alist([8,5,2])
describe("delStart",function(){
    it("[8,5,2] => 8",function(){
        assert.equal(delFirst.delStart(),8)
    });
    it("[5,2] => 5",function(){
        assert.equal(delFirst.delStart(),5)
    });
});
let delLast=new Alist([8,5,2])
describe("delEnd",function(){
    it("[8,5,2] => 2",function(){
        assert.equal(delLast.delEnd(),2)
    });
    it("[8,5] => 5",function(){
        assert.equal(delLast.delEnd(),5)
    });
});
let delPos=new Alist([8,5,2,4,7])
describe("delPosition",function(){
    it("[8,5,2,4,7] ind=3 => 4",function(){
        assert.equal(delPos.delPosition(3),4)
    });
    it("[8,5,2,7] ind=3 => 7",function(){
        assert.equal(delPos.delPosition(3),7)
    });
});
let got=new Alist([8,5,2,4,7])
describe("get",function(){
    it("[8,5,2,4,7] (3)=> 4",function(){
        assert.equal(got.get(3),4)
    })
})
let zet=new Alist([8,5,2,4,7])
describe("set",function(){
    it("[8,5,2,4,7] (3)=11 => [8,5,2,11,7]",function(){
        assert.deepEqual(zet.set(3,11),[8,5,2,11,7])
    })
})
let toStr=new Alist([8,5,2,4,7])
describe("toString",function(){
    it("[8,5,2,4,7] => '85247'",function(){
        assert.equal(toStr.toString(),'85247')
    })
})
let arrSize=new Alist([8,5,2,4,7])
describe("size",function(){
    it("[8,5,2,4,7] => 5",function(){
        assert.equal(arrSize.size(),5)
    })
})
let defolt=new Alist([8,5,2,4,7])
defolt.delStart
describe("clear",function(){
    it("[5,2,4,7] => [8,5,2,4,7]",function(){
        assert.deepEqual(defolt.clear(),[8,5,2,4,7])
    });
});
let arrMin=new Alist([8,5,2,4,7])
describe("min",function(){
    it("[8,5,2,4,7] => 2",function(){
        assert.equal(arrMin.min(),2)
    });
});
let arrMax=new Alist([8,5,2,4,7])
describe("max",function(){
    it("[8,5,2,4,7] => 8",function(){
        assert.equal(arrMax.max(),8)
    });
});
let bubble=new Alist([8,5,2,4,7])
describe("sort",function(){
    it("[8,5,2,4,7] => [2,4,5,7,8]",function(){
        assert.deepEqual(bubble.sort(),[2,4,5,7,8])
    });
});
let minInd=new Alist([8,5,2,4,7])
describe("minIndex",function(){
    it("[8,5,2,4,7] => 2",function(){
        assert.deepEqual(minInd.minIndex(),2)
    });
});
let maxInd=new Alist([8,5,2,4,7])
describe("minIndex",function(){
    it("[8,5,2,4,7] => 0",function(){
        assert.deepEqual(maxInd.maxIndex(),0)
    });
});
let revers=new Alist([8,5,2,4,7])
describe("reverse",function(){
    it("[8,5,2,4,7] => [7,4,2,5,8]",function(){
        assert.deepEqual(revers.reverse(),[7,4,2,5,8])
    });
    let revers1=new Alist([8,5,2,4])
    it("[8,5,2,4] => [4,2,5,8]",function(){
        assert.deepEqual(revers1.reverse(),[4,2,5,8])
    });
});
let halfRev=new Alist([8,5,2,4,7])
describe("halfReverse",function(){
    it("[8,5,2,4,7] => [5,8,2,7,4]",function(){
        assert.deepEqual(halfRev.halfReverse(),[5,8,2,7,4])
    });
    let halfRev1=new Alist([5,2,4,7])
    it("[5,2,4,7] => [2,5,7,4]",function(){
        assert.deepEqual(halfRev1.halfReverse(),[2,5,7,4])
    });
});



