var dataInput = document.querySelector("input[type='text']");
var ulSpisok = document.getElementById("list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');


function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('todoAplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoAplication');
        deleteTodo();
        strike();
    }
};
// addEventListener - обработчик событий с последующим вызовом функции

dataInput.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        if (dataInput.value.trim() === ""){
           alert('Пустая строка');
        }
        else {
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete ';
        let now = new Date();
        
        var newTodo = this.value; // получение value из input
        this.value = '';
        
        ulSpisok.appendChild(newLi).append(newSpan, newTodo + " [", now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "]");

            // для даты хватит и now.getDate()
        // проверка на пустое окно
        deleteTodo();
        strike();
    }}
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoAplication', ulSpisok.innerHTML);
});
clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML)
});
deleteTodo();
loadTodo();

// зачеркивание целей


function strike(){
    let li = document.getElementsByTagName('li');
    for(let list of li){
        list.addEventListener('click', function(){
            this.style.textDecoration = 'line-through';
        });
    }
};


// кнопка добавляющая модальное окно 
let about = document.getElementById("flex__aboutMe");

function aboutmeBtn(){
    if(about.style.display === 'none'){
        about.style.display = 'flex';
    } else{
        about.style.display = 'none';
    }
};
