type post = {
    autor: string,
    texto: string,
}

const post1: post = {
    autor: 'José',
    texto: 'blábláblá'
}
const post2: post = {
    autor: 'Creuza',
    texto: 'huehuehuehue'
}
const post3: post = {
    autor: 'Divino',
    texto: 'kkkkkkkkkk'
}
const post4: post = {
    autor: 'Chico',
    texto: 'hihihihihi'
}
const post5: post = {
    autor: 'Maria',
    texto: 'kekekeke'
}

const posts: post[] = [post1, post2, post3, post4, post5]

const filtrarPost = (posts: post[], autor?: string) =>{
    const filtroPosts: post[] = posts.filter((post)=>{
        return post.autor === autor
    })
    return filtroPosts
}

const filtroPostPorAutor: post[] = filtrarPost(posts, "Chico")
console.log(filtroPostPorAutor)
