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
/************************** deliverable 1 *******************************/

//likes button increases likes by 1
// 1 find the like button 
// 2 find the closest parent element
// 3 add event listener to that parent 
// 4 find the likes display 
// increment likes by 1 and then display

const profileDiv = document.querySelector('div#profile')

profileDiv.addEventListener('click', (e) => {

    if (e.target.matches('button.like-button')) {
        //find likes view
        const likesPTag = e.target.previousElementSibling
        const likes = parseInt(likesPTag.textContent) +1 
        likesPTag.textContent = `${likes}, Likes`
    } 
} )

/******************************** deliverable 2 *************************/

// 1 locate the delete button 
// 2 locate the closest parent element/container for all sightings 
// 3 add event listener to the parent element 
// 4 use matches to listen for click on delete button 
// 5 find container for individual animalSighting
// 6 remove the sighting 

const ulAnimals = document.querySelector('ul#animals')

ulAnimals.addEventListener('click', (e) => {
    if (e.target.matches('button.delete-button')) {
        console.log("clicked delete!!")
        const animalSighting = e.target.closest('li')
        animalSighting.remove()
    }
})


/******************************** deliverable 3 *************************/

// find parent element(container) to the toggle button 
// add event listener to the parent element  
// use matches to listen for click on the toggle button 
//change the styling of form display 



ulAnimals.addEventListener('click', (e) => {
    if (e.target.matches('button.toggle-update-form-button')) {
       const form = e.target.nextElementSibling
       if (form.style.display == "none") {
           form.style.display = ""
       } else if (form.style.display == "") {
           form.style.display = "none"
       }
    
    }
})

/******************************** BONUS *************************/

//find the form element associated with update    
//add event listener on a submit event 
//prevent the default event 
//get the value of the submission 
//change the innerContent of the p tag 
ulAnimals.addEventListener('submit', (e) => {
    e.preventDefault()
    e.target.closest('li').querySelector('p').textContent = e.target.querySelector('input').value
    
})

