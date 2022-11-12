import { navegacion, showModal, loadCharacterInfo, loadData, showCharacters, urlBase } from './eventos.js';

document.querySelector('#respuesta').addEventListener('click', showModal);

loadData(urlBase);

document.querySelector('.botones').addEventListener('click', navegacion);

/*const creaButtons = () => {
    const contenedorButtons = document.querySelector('#botones');
    contenedorButtons.innerText = '';    
    const btnPrev = document.createElement('button');
    btnPrev.id = 'prev';
    btnPrev.className = 'btn btn-success btn-lg  mx-3';
    btnPrev.innerText = 'Anterior';
    contenedorButtons.appendChild(btnPrev);
    const btnNext = document.createElement('button');
    btnNext.id = 'next';
    btnNext.className = 'btn btn-success btn-lg mx-3';
    btnNext.innerText = 'Siguiente';
    contenedorButtons.appendChild(btnNext);
}*/