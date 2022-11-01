const contenedor = document.querySelector('#container')
const list = document.querySelector('#lista')
const form = document.querySelector('#formulario')
const inputTask = document.querySelector('#input-producto')
const deleteBtn = document.querySelectorAll('.borrar-btn')
const aggBtn = document.querySelectorAll('.agg-btn')


form.addEventListener('submit', e => {
    const tarea = inputTask.value;
        e.preventDefault()
        const listItem = document.createElement('li')
        listItem.innerHTML = `
    
          <button class="agg-btn">Completar</button>${tarea} <button class="borrar-btn">Eliminar</button>
        `;
        list.append(listItem)
        inputTask.value = '';

        
    })
    list.addEventListener('click', e => {
    
        if (e.target.classList.contains('borrar-btn')){
            e.target.parentElement.remove();
        }
    
    })
    aggBtn.forEach(aggBtn => {
        aggBtn.addEventListener('click', e => {
            const text = e.target.parentElement.children[1];
            text.classList.toggle('checked');
            
        })
    })
    
  