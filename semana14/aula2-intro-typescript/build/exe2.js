var post1 = {
    autor: 'José',
    texto: 'blábláblá'
};
var post2 = {
    autor: 'Creuza',
    texto: 'huehuehuehue'
};
var post3 = {
    autor: 'Divino',
    texto: 'kkkkkkkkkk'
};
var post4 = {
    autor: 'Chico',
    texto: 'hihihihihi'
};
var post5 = {
    autor: 'Maria',
    texto: 'kekekeke'
};
var posts = [post1, post2, post3, post4, post5];
var filtrarPost = function (posts, autor) {
    var filtroPosts = posts.filter(function (post) {
        return post.autor === autor;
    });
    return filtroPosts;
};
var filtroPostPorAutor = filtrarPost(posts, "Chico");
console.log(filtroPostPorAutor);
