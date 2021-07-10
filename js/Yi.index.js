// The index.html file has a form with a search input. When the form is submitted, it should take the value of the input and search GitHub for user matches using the User Search Endpoint.

// Using the results of the search, display information about the users to the page. (You might include showing their username, avatar and a link to their profile.)
// Clicking on one of these users should send a request to the User Repos Endpoint and return data about all the repositories for that user.
// Using the response from the Users Repos Endpoint, display all the repositories for that user on the page

document.addEventListener('DOMContentLoaded', () => {
    // call functions here

    
})


//Form ---------------------------------------------------------------------------
//Form needs an add event, then
function form() {
    document.querySelector('#github-form').addEventListener('submit', () => {
        console.log("hi")

    })
}

//Fetch!---------------------------------------------------------------------------

function fetch(){
    fetch(`https://api.github.com/search/users?q=${user}`)
    .then(res => res.json())
    .then(json => console.log(json))
}