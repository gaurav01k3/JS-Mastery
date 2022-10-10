// objects inside array 
// very useful in real world applications


const users = [
    {
        userId: 1,
        firstName: 'mohit',
        gender: "M"
    },
    {
        userId: 2,
        firstName: 'gaurav',
        gender: "M"
    }, {
        userId: 3,
        firstName: 'sohan',
        gender: "M"
    }
]

for (let user of users) {
    console.log(user.firstName);
}


// console.log(users);