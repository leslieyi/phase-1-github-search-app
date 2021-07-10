document.addEventListener('DOMContentLoaded', () => {
    form()
})

//Form
function form() {
    document.getElementById('github-form').addEventListener('submit', (e) => {
        e.preventDefault()

        fetchAllUsers(e.target.search.value)

    })

}


//GET Requests -----------------------------------------
function fetchAllUsers(user) {
    document.querySelector('#user-list').innerHTML = ""
    fetch(`https://api.github.com/search/users?q=${user}`)
        .then(res => res.json())
        .then(json => json.items.forEach(renderUser)) //toMake each of the elements based on the user
}

function fetchAllRepos(login) {
    document.querySelector('#repos-list').innerHTML = ""
    fetch(`https://api.github.com/users/${login}/repos`)
        .then(res => res.json())
        .then(json => json.forEach(renderRepo))

}


//Rendering -----------------------------------------
function renderUser(user) {
    //Draw out how the card is going to look like, this case
    //List is our big container, inside the container we put <a> and inside we got our img, div
    
    //making Elements
    let idList = document.createElement('li')
    let idLink = document.createElement('a')
    let idImg = document.createElement('img')
    let idDiv = document.createElement('div')

    //class Name
    idImg.className = 'avatar'


    //giving some content
    idDiv.textContent = user.login
    idImg.src = user.avatar_url

    //appending it
    idLink.append(idImg, idDiv)
    idList.append(idLink)
    idLink.href = "#repos-list"
    idLink.addEventListener('click', () => {
        fetchAllRepos(user.login)
    })
    
    document.querySelector('#user-list').append(idList)


}

function renderRepo(repo) {
    let repoList = document.createElement('li')
    repoList.textContent = repo.full_name
    document.querySelector("#repos-list").append(repoList)
}


