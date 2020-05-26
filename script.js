var dataInput = document.querySelector("input[type='text']");
var ulSpisok = document.getElementById("list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var lis = document.getElementsByTagName('li');


function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
}

function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};
// addEventListener - обработчик событий с последующим вызовом функции

dataInput.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
       
        newSpan.innerHTML = 'Delete ';
        
        var newTodo = this.value; // сбор текущего value из input
        this.value = '';

        ulSpisok.appendChild(newLi).append(newSpan, newTodo);
        
        deleteTodo();
    }
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML)
});
clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML)
});
deleteTodo();
loadTodo();

// зачеркивание целей


function strike(){
    for(let li of lis){
        li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through';
            event.preventDefault();
        })
    }
};
strike();

// кнопка добавляющая модальное окно 
let about = document.getElementById("flex__aboutMe");

function aboutmeBtn(){
    if(about.style.display === 'none'){
        about.style.display = 'flex';
    } else{
        about.style.display = 'none';
    }
};
// проверка на пустое окно