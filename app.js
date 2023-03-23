
const body = document.body;
const preguntas = document.querySelectorAll(".pregunta");
const parrafos = document.querySelectorAll(".parrafo-faq");
let activo = -1;

const resetPreguntas = () => {
    preguntas.forEach(pregunta => {
        pregunta.classList.remove("active");
    });
};

body.addEventListener("click", (e) => {
    resetPreguntas();
})

preguntas.forEach((pregunta, index) => {
    pregunta.addEventListener("click", (e) => {
        e.stopPropagation();
        resetPreguntas();

        if(activo === -1) {
            pregunta.classList.add("active");
            activo = index;
        } else {
            if(activo === index) {
                pregunta.classList.remove("active");
                activo = -1;
            } else {
                pregunta.classList.add("active");
                activo = index;
            }
        }
        
        
    })
});

parrafos.forEach(parrafo => {
    parrafo.addEventListener("click", (e) => {
        e.stopPropagation();
    })
});

