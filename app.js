/*var httpRequest = new XMLHttpRequest();*/
var url = 'http://localhost:8888/info2180-lab4/superheroes.php';

function loadJS(){
    let searchBtn = document.createElement("button");
    searchBtn.innerHTML = "Search";
    document.body.appendChild(searchBtn);
    searchBtn.addEventListener('click', function onclickk(){
        fetch(url).then(Response => Response.text())
        .then(data =>{
            alert(data);
        })
        .catch(error => console.log(error));
    });
}
loadJS();