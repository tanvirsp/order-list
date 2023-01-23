
const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const formData  = {};

    [...this.elements].forEach(el=>{
    
        if(el.type != 'submit'){
            formData[el.name] = el.value;
        }
    })

    //showing data in HTML
    showList(formData);
    this.reset();
    

})


function showList(obj){
    const ul = document.getElementById('list');
    const li = document.createElement('li');

    const {order, price, client} = obj;

    li.innerHTML = `<h3>${order}</h3>
                    <span>$${price}</span>
                    <span>${client}</span>
                    <div>
                      
                        <button class="delete-btn" onclick="deleteList(event)"> Delete</button>
                    </div>
                    `
    ul.appendChild(li);
}


function deleteList(event){
    event.target.parentNode.parentNode.remove();

}

function editList(event){
    console.log(event.target.parentNode.parentNode);
    

}