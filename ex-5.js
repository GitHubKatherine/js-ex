let employeeProfile = {
  name: 'John',
  age: 30,
  scores: {
    thai: 40
  }
}
let employeeScores = {
  math: 30,
  english: 70,
  tech: 100
}

employeeProfile.scores = { ...employeeProfile['scores'], ...employeeScores }

// Start coding here

let newEmployeeProfile = { ...employeeProfile }

console.log(newEmployeeProfile)
