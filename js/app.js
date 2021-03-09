const FORM = document.querySelector('form');
const TCONTANER = document.querySelector('main div')
const TABLE = document.querySelector('table');
const TBODY = document.querySelector('tbody');



function Student(id, name, email, mobile,age,tuition){
    this.id = id;
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.age =  age;
    this.tuition = tuition;
    Student.all.push(this);
}
if(localStorage['STU']){
Student.all = JSON.parse(localStorage['STU']);
}else{
    Student.all = [];
}
FORM.addEventListener('submit',getData);

function getData(event){
    event.preventDefault();
    let email = FORM.querySelector('#email').value;
    console.log(email)
    let mobile = FORM.querySelector('#tel').value;
    console.log(mobile)
    let tuition = FORM.querySelector('#tuition').value;
    console.log(tuition)
    makeObject(email,mobile, tuition);
}

function makeObject(email, mobile, tuition){
    let id = getId(); 
    let name = email.split('@')[0];
    let age = getRandomAge();
    const STU = new Student(id,name,email, mobile, age,tuition);
    saveToLocalStorage(STU);
}

function getId(){
    return Student.all.length
}

function saveToLocalStorage(STU){

    localStorage.setItem('STU',JSON.stringify(Student.all));
    STU.render();
}

function getRandomAge(min = 18,max = 24){
    const r = Math.random()*(max-min) + min
    return Math.floor(r);
}

const trEl = document.createElement('tr');
TBODY.appendChild(trEl);
let tdEl = document.createElement('td');



// render
Student.prototype.render = function(){
    for(let i=0; i<TBODY.querySelectorAll('tr').length;i++){
    trEl.remove();
    }
    for(let i=0;i<Student.all.length;i++){
        const trEl = document.createElement('tr');
        TBODY.appendChild(trEl);
        let tdEl = document.createElement('td');
        tdEl.textContent= Student.all[i].id;
        console.log(tdEl)
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');
        tdEl.textContent = Student.all[i].name;
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');
        tdEl.textContent = Student.all[i].email;
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');

        tdEl.textContent = Student.all[i].mobile;
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');

        tdEl.textContent = Student.all[i].age;
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');

        tdEl.textContent = Student.all[i].tuition;
        trEl.appendChild(tdEl);
    }
}

