function onKeyDown(e) {
    if (e.key === "Enter") {
        aoSalvar()
    }
}
class postBlog {
    constructor(titulo, autor, texto){
        this.titulo = titulo
        this.autor = autor
        this.texto = texto
    }
}
const arrayPost = []

function aoSalvar(){
    const novoPost = new postBlog(tituloPost = document.getElementById("titulo").value, autorPost = document.getElementById("autor").value, textoPost = document.getElementById("texto").value)
    arrayPost.push(novoPost)
    let containerArticle = document.getElementById("article-container")
    containerArticle.innerHTML = ""
    for(let postagem of arrayPost){
        containerArticle.innerHTML += "<h3>" + postagem.titulo + "</h3>"
                                        + "<h5>" + postagem.autor + "</h5>"
                                        + "<p>" + postagem.texto + "</p>"
    } 
   
}


