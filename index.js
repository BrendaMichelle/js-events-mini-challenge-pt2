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

//Deliverable 1: When a user clicks an animal sighting's like button, that animal sighting's likes should increase by 1
const animalCollection = document.querySelector('ul#animals')

animalCollection.addEventListener('click', function(event){
    // console.log(event.target)

    if (event.target.matches('button.like-button')){
        // event.target.className === 'like-button' another option
        console.log(event.target)
        const li = event.target.closest('li') //li element of animal sighting
        const likesPtag = li.querySelector('p.likes-display') //get p tag of likes in that li element
        const currLikes = parseInt(likesPtag.textContent)  //get likes as an integer
        likesPtag.textContent = `${currLikes + 1} Likes` //add a like 
    }
//Deliverable 2: When a user clicks an animal sighting's delete button, that animal sighting should be removed from the page.
    else if(event.target.className === 'delete-button'){ //can also use matches
        // console.log('delete clicked!')
        const li = event.target.closest('li')
        li.remove()
    }
//Deliverable 3: When a user clicks an animal sighting's 'Toggle Update Form' button, the form associated with that animal sighting should toggle between displaying and not displaying on the page.
    else if(event.target.matches('button.toggle-update-form-button')){
        console.log('clicked')
        const form = li.querySelector('form') //find the form
        if(form.style.display === 'block'){
            form.style.display = 'none'
        }
        else{
            form.style.display = 'block'
        }
        //form.style.display = form.style.display === 'block' ? 'none' : 'block'
    }
})

//Bonus: When a user submits an animal sighting's form.update-form, the <p></p> element that displays the description of that animal sighting should be updated with the new description.

animalCollection.addEventListener('submit', function(event){
    if(event.target.matches('form.update-form')){
        event.preventDefault() 
        const descriptionInput = event.target[0].value //get the input
        // console.log(descriptionInput)
        //traverse the dom to get access and update the input
        const li = event.target.closets('li')
        const descriptionPtag = li.querySelector('p')
        descriptionPtag.textContent = descriptionInput
    }
})