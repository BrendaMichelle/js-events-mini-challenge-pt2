/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost(animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    const sightLikesPtag = document.createElement('p')
    sightLikesPtag.className = 'likes-display'
    sightLikesPtag.textContent = `${animalObject.likes} Likes`

    const likeButton = document.createElement('button')
    likeButton.classList.add('like-button')
    likeButton.type = 'button'
    likeButton.textContent = 'Like'

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.type = 'button'
    deleteButton.textContent = 'Delete'
    
    const updateButton = document.createElement('button')
    updateButton.classList.add('toggle-update-form-button')
    updateButton.type = 'button'
    updateButton.textContent = 'Toggle Update Form'

    const updateForm = document.createElement('form')
    updateForm.className = 'update-form'
    updateForm.innerHTML = `
    <input type='text' value='${animalObject.description}'/>
    <input type="submit" value="Update description" />
    `
    updateForm.style.display = 'none'


    li.append(p, img, a, sightLikesPtag, likeButton, deleteButton, updateButton, updateForm)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightingObject) {
    renderAnimalSightingPost(animalSightingObject)
})

/***** Deliverable 5 *****/
// const animalToRemove = document.querySelector("[data-id='3'")
// animalToRemove.remove()

/************************** EVENTS PART 1 JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener('click', function (event) {
    toggleColor(event.target)
})

/***** Deliverable 2 *****/
const button = document.querySelector('button.like-button')

button.addEventListener('click', function () {
    likes.textContent = `${traveler.likes++} Likes`
})


/***** Deliverable 3 *****/
const newSightingForm = document.querySelector('form#new-animal-sighting-form')

newSightingForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const species = event.target[0].value
    const video = event.target[1].value
    const photo = event.target[2].value
    const description = event.target[3].value
    const lastIndex = traveler.animalSightings.length - 1

    const newSightingObject = {
        id: traveler.animalSightings[lastIndex].id + 1,
        travelerId: 1,
        species: species,
        photo: photo,
        link: video,
        description: description,
        likes: 0
    }

    renderAnimalSightingPost(newSightingObject)
    newSightingForm.reset()

})


/***** End of Starter Code *****/
/************************** EVENTS PART 2 JS MINI CHALLENGE ******************************/

/************************ deliverable 1 ********************************/
//find like button 
//find parent 
//add event listener to parent
//match with like button
//find the likes display
//increment like # by one 
//change the like display
/************************ deliverable 2 ********************************/
//find the delete button using dev tools elements search
// use else if and target match the delete button
/*target the individual animal sighting 'container' by testing it out in the console with a debugger*/
//delete the entire container
/************************ deliverable 3 ********************************/
//find toggle button with dev tools search elements
/*tag on another else if with condition of target match to toggle button use*/
//find the form tag it is held in
/*use debugger in the console to play around to get the style attribute from the form*/ 
//add conditional to change the display back and forth 
const ulAnimals = document.querySelector('ul#animals')

ulAnimals.addEventListener('click', (e) => {

    if(e.target.matches('button.like-button')) {

        const displayLikes = e.target.previousElementSibling
        const numLikes = parseInt(displayLikes.textContent) + 1
        displayLikes.textContent = `${numLikes} Likes`
    } else if(e.target.matches('button.delete-button')) {

        //finds closest li to the delete button and removes it
        e.target.closest('li').remove()
    
    } else if(e.target.matches('button.toggle-update-form-button')) {
        const form = e.target.nextElementSibling

        if (form.style.display === "none") {
            form.style.display = "block"
        } else {
            form.style.display = "none"
        }
        
    }
})

/************************ bonus ********************************/
//add event listener to the main ul container that listens for submit
//prevent the default behavior of the form
//use matches to trigger event if submit is clicked
//test it out in the console to make sure each seperate one is working
/*use debugger and console.dir to traverse to find the value of the input field*/
/*find the individual 'container' for the animalSighting by using the dev tools to select the form element and test different methods to select the wanted element from there */ 
/*find the description display and how to traverse to the relevant description*/
//set the inner content of that description equal to the value
ulAnimals.addEventListener('submit', (e) => {
    e.preventDefault()
    if(e.target.matches('form.update-form')) {
        
        const value = e.target[0].value
        const li = e.target.closest('li')
        const pTag = li.querySelector('p').textContent = value

    }
})



