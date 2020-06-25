//DOM
const form = document.getElementById('registro');

const name = document.getElementById('registro_nombre');
const secondName = document.getElementById('registro_apellido');
const email = document.getElementById('registro_email');
const pass = document.getElementById('registro_password');
const comments = document.getElementById('registro_comentarios');
const check = document.getElementById('registro_condiciones');

const formIsValid ={
    name : false,
    secondName: false,
    email: false,
    pass: false,
    comments: true,
    check: false
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
})

name.addEventListener('change', (e)=>{
    if(e.target.value != "")formIsValid.name=true;
})

secondName.addEventListener('change',(e)=>{
    if(e.target.value != "")formIsValid.secondName=true;
})

email.addEventListener('change',(e)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(e.target.value))formIsValid.email=true;
})

comments.addEventListener('keyup',(e)=>{
    if(e.target.value.length > 50)formIsValid.comments = false;
})

pass.addEventListener('change',(e)=>{
    if(e.target.value.match(/[a-z]/g) && e.target.value.match(/[A-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.length >= 6)
    formIsValid.pass=true;
})

check.addEventListener('click',(e)=>{
    formIsValid.check = e.target.checked;
})

const validateForm = ()=>{
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false);
    if(valid == -1)form.submit();
}