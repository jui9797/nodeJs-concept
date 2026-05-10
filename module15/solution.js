db.users.find({ age: { $gt: 30 } }, { name: 1, email: 1, _id: 0 });
//{ "name": "Jui", "age": 35 }

db.users.find({
  favoriteColor: { $in: ["Maroon", "Blue"] },
});
/*
{
  "name": "Jui",
  "favoriteColor": "Blue"
}
*/

db.users.find({
  skills: { $size: 0 },
});
//{ "skills": []}

db.users.find({
  skills: { $all: ["JavaScript", "Java"] },
});
db.users.find({
  "skills.name": { $all: ["JavaScript", "Java"] }, // if skill property is object array
});
//{ "skills": ["JavaScript", "Java", "Python"]}

//Step 1: Insert User
db.users.insertOne({
  email: "amccurry3@cnet.com",
  skills: [],
});
//{"email": "amccurry3@cnet.com","skills": []}   -----creating a new user

// Step 2: Add Skill

db.users.updateOne(
  { email: "amccurry3@cnet.com" },
  {
    $push: {
      skills: {
        name: "Python",
        level: "Beginner",
        isLearning: true,
      },
    },
  },
);

/**
 * "skills": [
  {
    "name": "Python",
    "level": "Beginner",
    "isLearning": true
  }
]
 */

db.users.updateOne(
  { email: "amccurry3@cnet.com" },
  {
    $push: {
      languages: "Spanish",
    },
  },
);

//"languages": ["English", "Spanish"]

db.users.updateOne(
  { email: "amccurry3@cnet.com" },
  {
    $pull: {
      skills: {
        name: "Kotlin",
      },
    },
  },
);

//"skills": [{ "name": "Java" }]
