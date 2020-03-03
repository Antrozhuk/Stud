const{func}=require('../logic')
describe('create tests', () => {
    it('Person id', () => {
        assert.equal(func.create(1,"Anton","Rozhuk",19).id, 1);
    })
    it('Person fName', () => {
        assert.equal(func.create(1,"Anton","Rozhuk",19).fName, "Anton");
    })
    it('Person lName', () => {
        assert.equal(func.create(1,"Anton","Rozhuk",19).lName, "Rozhuk");
    })
    it('Person age', () => {
        assert.equal(func.create(1,"Anton","Rozhuk",19).age, 19);
    })
    it('localStorage', () => {
        assert.equal(localStorage.getItem(1),'{"id":1,"fName":"Anton","lName":"Rozhuk","age":19}');
    })
})
const Bro={
    id:3,
    fName:"Anton",
    lName:"Rozhuk",
    age:19
}
describe('update tests', () => {
    it('Person id', () => {
        assert.equal(func.update(Bro,3,"Yana","Shuvaieva",21).id, 3);
    })
    it('Person fName', () => {
        assert.equal(func.update(Bro,3,"Yana","Shuvaieva",21).fName, "Yana");
    })
    it('Person lName', () => {
        assert.equal(func.update(Bro,3,"Yana","Shuvaieva",21).lName, "Shuvaieva");
    })
    it('Person age', () => {
        assert.equal(func.update(Bro,3,"Yana","Shuvaieva",21).age, 21);
    })
    it('Only fName', () => {
        assert.equal(func.update(Bro,3,"Yanina",'',).fName, "Yanina");
    })
    it('Only lName', () => {
        assert.equal(func.update(Bro,3,'',"Shuvaeva",).lName, "Shuvaeva");
    })
    it('Only age', () => {
        assert.equal(func.update(Bro,3,'','',20).age, 20);
    })
    it('localStorage', () => {
        assert.equal(localStorage.getItem(3),'{"id":3,"fName":"Yanina","lName":"Shuvaeva","age":20}');
    })
})
describe('delete tests', () => {
    it('Person remove', () => {
        assert.equal(func.delete(1), 'Bro removed');
    })
    it('localStorage', () => {
        assert.equal(localStorage.getItem(1), undefined);
    })
})
describe('read test', () => {
    it('deleted localStorage', () => {
        assert.equal(func.read(1), undefined);
    })
    it('localStorage id', () => {
        assert.equal(func.read(3).id, 3);
    })
    it('localStorage fName', () => {
        assert.equal(func.read(3).fName, "Yanina");
    })
    it('localStorage lName', () => {
        assert.equal(func.read(3).lName, "Shuvaeva");
    })
    it('localStorage age', () => {
        assert.equal(func.read(3).age, 20);
    })
})
