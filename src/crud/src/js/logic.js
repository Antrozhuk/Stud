function createNewBro(id,fName,lName,age){
    let Bro={
      id:id,
      fName:fName,
      lName:lName,
      age:age,
    }
    localStorage.setItem(id,JSON.stringify(Bro))
    return Bro
  }
  function updateBro(Bro,id,fName,lName,age){
    if(fName) Bro.fName=fName
    if(lName) Bro.lName=lName
    if(age) Bro.age=age
    localStorage.setItem(id,JSON.stringify(Bro))
    return Bro
  }
  function deleteBro(id){
    localStorage.removeItem(id)
    return 'Bro removed'
  }
  function read(i){
    return JSON.parse(localStorage.getItem(i))
  }
  module.exports.func={
    create:createNewBro,
    update:updateBro,
    delete:deleteBro,
    read:read,
  }