let loadP = async() => {

}

async function loadPosts() {
    document.getElementById("posts").innerHTML = "Carregando...";


    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();

    montarBlog(json);


    /*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(json){

        montarBlog(json);
    })
    .catch(function(error){
        console.log('Deu problema');
    });*/


}


function montarBlog(lista){
    let html = "";

    for(let i=0; i<lista.length; i++){
        html += "<h3>"+lista[i].title+"</h3>"
        html += lista[i].body+"<br/>";
        html += "<hr/>";
    }

    document.getElementById("posts").innerHTML = html;
}


async function inserirPost() {
    document.getElementById("posts").innerHTML = "Carregando...";

    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "Titulo de teste",
            body: "Corpo de teste",
            userID: 4
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let json = await req.json();

    console.log(json);

}




async function enviar (){
    let arquivo = document.getElementById("arquivo").files[0];

    let body = new FormData();
    body.append("title", "bla bla bla");
    body.append("arquivo", arquivo);

    let req = await fetch("http://www.meusite.com.br/upload", {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }); 
}




