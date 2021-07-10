// The index.html file has a form with a search input. 
//When the form is submitted, 
//it should take the value of the input and search GitHub for user matches using the User Search Endpoint.
// Using the results of the search, display information about the users to the page. (You might include showing their username, avatar and a link to their profile.)
// Clicking on one of these users should send a request to the User Repos Endpoint and return data about all the repositories for that user.
// Using the response from the Users Repos Endpoint, display all the repositories for that user on the page

document.addEventListener('DOMContentLoaded', () => {
    // call functions here
    form()

})


//Form------------------------------------------------------------------
//addEventListener to form
//e.target ===> form
//e needs to get the value of the input name ="search" ====> e.target.search.value
function form() {
    document.querySelector('#github-form').addEventListener('submit', (e) => {
        e.preventDefault()

        let userValue = e.target.search.value

        fetchAllUsers(userValue)


    })
}

//Fetch!---------------------------------------------------------------
//Need to fetch url from all the users that we pass in to the variable name 'user'
//therefor we need string interpolation 
//We must use the data for all the stuff we are told to make, so do a forEach
//json.items ===> because the json has a key name items, under there we have access to user info
function fetchAllUsers(user) {
    document.querySelector('#user-list').innerHTML= ""
    fetch(`https://api.github.com/search/users?q=${user}`)
        .then(res => res.json())
        .then(json => json.items.forEach(renderUsers))

}


//Rendering---------------------------------------------------------------
//don't need to call this function bc it is called by the function above
//making all the elements, assinging values and then appending

function renderUsers(user) {
    //make elements and containers
    let userLogin = document.createElement('li')
    let userUrl = document.createElement('a')
    let userAvatar = document.createElement('img')

    //assign content?
    userLogin.textContent = user.login
    userUrl.textContent = user.html_url

    userUrl.href =  `${user}.html_url`
    userAvatar.src = user.avatar_url

  
    //append
    document.querySelector('#user-list').append(userLogin, userUrl, userAvatar)

}
//Now what to do what to do?
//Go back up to the form function, 
//When the form is clicked, all this data needs to be presented. 
//This data needs to be rendered when the submit event happens
//Where is the form? it is inthe form function!
//What function do we pass? ===> fetch function
//form function > fetch function > render function