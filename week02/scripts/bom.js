const input1 = document.querySelector('#favchap');
const btn = document.querySelector('button');
const list = document.querySelector('#list');



btn.addEventListener('click', function () {

    if (input1.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        li.textContent = input1.value;

        deleteBtn.textContent = '❌';
        li.append(deleteBtn);

        list.append(li);
        input1.value='';

        deleteBtn.addEventListener('click',function(){
            
            list.removeChild(li);
            input1.focus();

        });
        input1.focus();
    } else {
        alert('add a chapter');
        input1.focus();
        return;
    };

    

});

