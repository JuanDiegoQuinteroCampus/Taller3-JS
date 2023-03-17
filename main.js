/* 1. Construir un objeto literal "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap

1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas */

let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioPersonas = document.querySelector("#myFormularioPersonas");
let campus = {};

// 
let todo = document.querySelector("#todo");
let campers= document.querySelector("#campers");
let Trainers= document.querySelector("#Trainers");

todo.addEventListener(change), (e)=>{
    let total = e.target.value;
    let campers= document.querySelector("#campers");
    let Trainers= document.querySelector("#Trainers");
    let todo = document.querySelector("#todo");
    if(total=="camper"){
        Trainers.classList.add("div_hide")
        campers.classList.remove("div_hide")
        todo.classList.remove("div_hide")
    }if(total=="Trainers"){
        campers.classList.remove("div_hide")
        Trainers.classList.add("div_hide")
        todo.classList.remove("div_hide")
    }
}
    
myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: []};
    listaSedes();
    myFormularioCampus.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

myFormularioPersonas.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioPersonas.reset();
    
    
})

/* debo hacer ambas cosas por aparte uno de trainers y otro de campers, y otro que sea de las instalaciones, y teniendo en cuenta que ya se abrio un diccionario apora campers y otro para trainers */
/* let nivel = data.nivel;
    delete data.nivel;
    campus[`${nivel}`]["Camper"].unshift(data);
    let teams = data.teams;
    campus[`${teams}`]["Camper"].unshift(data); */