let movies = [
  {
    title: "Assassin's Creed",
    year: '2016'
  },
  {
    title: 'Luke Cage',
    year: '2016–'
  }
]

let otherMovies = [
  {
    title: 'Rogue One: A Star Wars Story',
    year: '2016'
  },
  {
    title: 'Doctor Strange',
    year: '2016'
  }
]

// Start coding here

let allMovies = [...movies, ...otherMovies]

console.log(allMovies)
