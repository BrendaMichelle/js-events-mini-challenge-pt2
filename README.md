# JS Mini Challenge: Event Handling (PART 2)

## Instructions

Fork this repo, then run `git clone` to download your fork locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.


## Assignment

In this challenge, we're going to keep working on Raffy's Amazon trip page and give our users the ability to:

- Like an animal sighting
- Delete an animal sighting
- View the update animal sighting description form
- **BONUS**: Update animal sighting description 

We've got some starter code already written for us (this should look somewhat familiar from the previous challenges - a few extra elements are being created inside the `renderAnimalSightingPost` function for today's deliverables). Your job is to add some additional functionality to make our app even more dynamic by handling user interactions.

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Like an animal sighting

**When a user clicks an animal sighting's like button**, that animal sighting's likes should increase by 1. The likes won't persist (if you refresh the page, they'll reset to their original value) - we'll add persistence in a future challenge.


**YOUR NOTES:**
We can use event delegation to implement this feature. First we target the first common parent of the elements we want to add an event listener to. In our case, this is element that contains all sightings posts. We add an event listener to this parent element with the event type `click`. Then, we within this event listener method, we ask whether our event target (the element that we clicked) is a like button or a delete button. For our like button, we want to target the element that displays our likes, and increase the number by one every time we click on the like button.
```js
const allPosts = document.querySelector('ul#animals')

allPosts.addEventListener('click', function(event) {
    // Like button
    if (event.target.matches('button.like-button')) {
        const likesDisplay = event.target.previousElementSibling
        const addNewLike = parseInt(likesDisplay.textContent) + 1
        likesDisplay.textContent = addNewLike + " Likes"
    }
    // Delete button
    else if (event.target.matches('button.delete-button')) {
        // ...
    }
})
```

## Deliverable 2: Delete an animal sighting

**When a user clicks an animal sighting's delete button**, that animal sighting should be removed from the page. This won't persist (if you refresh the page, you'll see the animal sighting is back) - we'll add persistence in a future challenge.

**YOUR NOTES:**
For our delete button, we add onto the event listener we created in the Deliverable 1. We want to make sure our event target is the a delete button. If so, we target the parent container that displays all the post information, and we remove that container.
```js
const allPosts = document.querySelector('ul#animals')

allPosts.addEventListener('click', function(event) {
    // Like button
    if (event.target.matches('button.like-button')) {
        // ...
    }
    // Delete button
    else if (event.target.matches('button.delete-button')) {
        const postDisplay = event.target.closest('li')
        postDisplay.remove()
    }
})
```

## Deliverable 3: View the update animal sighting description form

**When a user clicks an animal sighting's 'Toggle Update Form' button**, the form associated with that animal sighting should toggle between displaying and not displaying on the page. Look into the [display](https://www.w3schools.com/css/css_display_visibility.asp) CSS property to accomplish this task. Think about how we access CSS properties on elements using JavaScript (*hint - `element.style`*).


**YOUR NOTES:**
For our toggle button, we add to the event listener we worked with in Deliverable 1 and Deliverable 2. We want to make sure our event target is the 'Toggle Update Form' button. When this button is clicked, we target the update form (which is initially hidden). With this update form, we create and call a function that toggles the display of this update form.
```js
const allPosts = document.querySelector('ul#animals')

allPosts.addEventListener('click', function(event) {
    // Like button
    if (event.target.matches('button.like-button')) {
        // ...
    }
    // Delete button
    else if (event.target.matches('button.delete-button')) {
        // ...
    }
    // Toggle display button
    else if (event.target.matches('button.toggle-update-form-button')) {
        const updateForm = event.target.nextSibling
        toggleDisplay(updateForm)
    }
})

function toggleDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = ""
    } else {
        element.style.display = "none"
    }
}
```


## BONUS: Update animal sighting description

**When a user submits an animal sighting's `form.update-form`**, the `<p></p>` element that displays the description of that animal sighting should be updated with the new description.

The data won't persist (when you refresh the page, the description will reset to its original value) - we'll see how to fix this later on. For now, focus on updating the description of the animal sighting on the page when the form is submitted!


Some things to keep in mind:

- Make sure you're using the form *submit* event, not the *click* event.
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.
- You can use the `name` attribute of the input elements as an easy way to reference the input fields within the form. For example: `document.querySelector("#new-animal-sighting-form").link` will look inside the `form#new-animal-sighting-form` and return the `input` element with the `name='link'` attribute
- Once you have access to an input field, you still need to retrieve its *value* to see what the user entered in the form!

**YOUR NOTES:**
We can add to the code we wrote for Deliverable 3. We add a new event listener to the update form with event type `submit`. We access the value of the input of this form, then update the description display with this new value (a new description).
```js
const allPosts = document.querySelector('ul#animals')

allPosts.addEventListener('click', function(event) {
    // Like button
    if (event.target.matches('button.like-button')) {
        // ...
    }
    // Delete button
    else if (event.target.matches('button.delete-button')) {
        // ...
    }
    // Toggle display button
    else if (event.target.matches('button.toggle-update-form-button')) {
        const updateForm = event.target.nextSibling
        toggleDisplay(updateForm)
        // Update description
        updateForm.addEventListener('submit', function(event) {
            event.preventDefault()

            const newDescription = updateForm.querySelector('input').value
            const descriptionDisplay = updateForm.closest('li').querySelector('p')
            descriptionDisplay.textContent = newDescription
        })
    }
})
```
