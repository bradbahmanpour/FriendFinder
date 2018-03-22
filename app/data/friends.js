// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" survey data.
// But you could have it be an empty array as well.
// ===============================================================================
var friendList = [
  {
    "name": "Brad Bahmanpour",
    "photo": "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAIA_wDGAAAAAQAAAAAAAAnUAAAAJGUxMzFhZTBjLTI4MmItNGY3NS1iMjI2LTRkMDUzNjBhNDYwNQ.jpg",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendList;
