let input = document.getElementById('inputValue');
let button = document.getElementById('btn');
let container = document.getElementById('container');

button.addEventListener('click', function() {
    if (input.value != "") {
        var paragraph = document.createElement('P');
        paragraph.classList.add = "style1";
        paragraph.innerText = input.value;
        container.appendChild(paragraph);
        input.value = "";
        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
            paragraph.style.color = "red";

        })
        paragraph.addEventListener('dblclick', function() {
            container.removeChild(paragraph);

        })
    } else {
        alert('Fill it please');

    }
})