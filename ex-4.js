let dogProfile = {
  name: 'John',
  breeds: 'Poodle',
  color: 'Black'
}

let additionalProfile = {
  photo: 'https://placedog.net/500',
  size: 'Small'
}

// Start coding here

let newDogProfile = { ...dogProfile, ...additionalProfile }

console.log(newDogProfile)
