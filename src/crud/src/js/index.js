let allBro=[]
const create=document.getElementById('Create')
create.addEventListener('click', createNewLine)
function createNewLine(){
    const id=+document.getElementById('id').value;
    const fName=document.getElementById('name').value;
    const lName=document.getElementById('lname').value;
    const age=+document.getElementById('age').value;
    if((id<1)||(!Number.isInteger(+id)))alert( "ID is not correct, Bro!")
    else if(!Number.isInteger(age))alert( "Age is not correct, Bro!")
    else if(!(id&&fName&&lName&&age))alert( "Not enough info about new Bro, Bro!")
    else if(!allBro[id]){
    allBro[id]=new createNewBro(id,fName,lName,age)

        let newLine=document.createElement("div")
        newLine.className="newDiv"
        newLine.id="div"+id

        let inputId = document.createElement('input');
        inputId.disabled=true;
        inputId.id="id"+id
        inputId.className="inputadd"
        inputId.value = +allBro[id].id
        newLine.prepend(inputId);

        let inputFName = document.createElement('input');
        inputFName.disabled=true;
        inputFName.id="fName"+id
        inputFName.className="inputadd"
        inputFName.value = allBro[id].fName  ;
        newLine.append(inputFName);

        let inputLName = document.createElement('input');
        inputLName.disabled=true;
        inputLName.id="lName"+id
        inputLName.className="inputadd"
        inputLName.value = allBro[id].lName
        newLine.append(inputLName);

        let inputAge = document.createElement('input');
        inputAge.disabled=true;
        inputAge.id="age"+id
        inputAge.className="inputadd"
        inputAge.value = allBro[id].age;
        newLine.append(inputAge);

        for(let i=id-1;i>=0;i--){
          if(allBro[i]){
            document.getElementById("div"+i).after(newLine);
            break;
          }
          else if(i==0) root.after(newLine);
        }
      }
      else alert( "One of our Bro already has this id, Bro! ")
    }
    
    const update=document.getElementById('Update')
    update.addEventListener('click', updateLine)
    function updateLine(){
      const id=+document.getElementById('id').value;
      const fName=document.getElementById('name').value;
      const lName=document.getElementById('lname').value;
      const age=+document.getElementById('age').value;
      if(!Number.isInteger(+age))alert("Age is not correct, Bro!")
      else if(allBro[id]){
        allBro[id]=updateBro(allBro[id],id,fName,lName,age)
        let inputFName = document.getElementById("fName"+id);
        inputFName.value = allBro[id].fName  ;

        let inputLName = document.getElementById("lName"+id);
        inputLName.value = allBro[id].lName

        let inputAge = document.getElementById("age"+id);
        inputAge.value = allBro[id].age;

      }
      else alert("We don't have such Bro, so, we can't update him, Bro! ")

    }
    const deleted=document.getElementById('Delete')
    deleted.addEventListener('click', deleteLine)
    function deleteLine(){
      const id=+document.getElementById('id').value;
      
        
      if(allBro[id]){
        delete allBro[id]
        deleteBro(id)
        document.getElementById("div"+id).remove()
      }
      else alert("We don't have such Bro, so, we can't remove him, Bro! ")
    }
    const read=document.getElementById('Read')
    read.addEventListener('click', readLS)
    function readLS(){
      for(let i in localStorage){
        if(JSON.parse(localStorage.getItem(i))){
          let Obj=JSON.parse(localStorage.getItem(i))
          let id=Obj.id;
          Obj.fName;
          Obj.lName;
          Obj.age;
          if(!allBro[id]){
            allBro[id]=new createNewBro(id,Obj.fName,Obj.lName,Obj.age)

            let newLine=document.createElement("div")
            newLine.className="newDiv"
            newLine.id="div"+id

            let inputId = document.createElement('input');
            inputId.disabled=true;
            inputId.id="id"+id
            inputId.className="inputadd"
           inputId.value = +allBro[id].id
            newLine.prepend(inputId);

            let inputFName = document.createElement('input');
            inputFName.disabled=true;
            inputFName.id="fName"+id
            inputFName.className="inputadd"
            inputFName.value = allBro[id].fName  ;
            newLine.append(inputFName);

            let inputLName = document.createElement('input');
            inputLName.disabled=true;
            inputLName.id="lName"+id
            inputLName.className="inputadd"
            inputLName.value = allBro[id].lName
            newLine.append(inputLName);

            let inputAge = document.createElement('input');
            inputAge.disabled=true;
            inputAge.id="age"+id
            inputAge.className="inputadd"
            inputAge.value = allBro[id].age;
            newLine.append(inputAge);

            for(let i=id-1;i>=0;i--){
              if(allBro[i]){
                document.getElementById("div"+i).after(newLine);
                break;
              }
              else if(i==0) root.after(newLine);
            }
          }
        }
      }
    }
    