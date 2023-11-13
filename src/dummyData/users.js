const dummyUser = [
    {
        username: "gahar",
        password: "123",
        userId: "1"
    },
    {
        username: "eman",
        password: "123",
        userId: "2"
    }
]

export const getDummyUser = ({username, password}) => {
    const user = dummyUser.find(user => user.username === username && user.password === password);

    if(user) {
        return ({
            status: 200,
            data: user
        })
    } else {
        return ({
            status: 400,
            data: null
        })
    }
}