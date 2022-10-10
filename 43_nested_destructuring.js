//nested destructuring


const users = [
    { userId: 1, firstName: 'mohit', gender: "M" },
    { userId: 2, firstName: 'gaurav', gender: "M" },
    { userId: 3, firstName: 'sohan', gender: "M" }
]


const [user1, user2, user3] = users;

const [{ firstName: user1Name }, , { gender: user3gender }] = users;

console.log(user1Name, user3gender);

console.log(typeof null);