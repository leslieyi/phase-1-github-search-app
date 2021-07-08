document.addEventListener('DOMContentLoaded', () => {
    fetchAllUsers()
    // fetchAllRepo()
    form()
})

//Form fuck these forms
function form() {
    document.getElementById('github-form').addEventListener('submit', (e) => {
        e.preventDefault()

        console.log(e.target.search.value)

    })

}


//GET Requests -----------------------------------------
function fetchAllUsers(user) {
    fetch(`https://api.github.com/search/users?q=${user}`)
        .then(res => res.json())
        .then(json => json.items.forEach(rederUsers))
}

// function fetchAllRepo( ) {
// fetch("https://api.github.com/users/octocat/repos")
// .then(res => res.json())
// .then(json => console.log(json))

// }


//Rendering -----------------------------------------
function rederUsers(userId) {
    //making Elements
    let idLink= document.createElement('a')
    let idList = document.createElement('li')
    let idImg = document.createElement('img')

    //making Elements Class Name
    idList.class = 'user-id'
    idImg.class = 'user-image'
    // idImg.src = I dont know this part??? userId.avatar-url didn't work.

    //giving some content
    idLink.textContent = `GitHub Page of ${userId.login}`
    idLink.href = " " // equal to empty string? but why? I don't know what's happening here

    console.log(idList)
    
    //Append and Shit
    // document.querySelector('#user-list').append(idList, idLink, idImg)

    // document.querySelector('')

}




