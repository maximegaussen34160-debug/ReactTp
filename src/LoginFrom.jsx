function Login(email, password) {

    const getUsers = () => {
        return fetch("http://localhost:8000/api/users", {
            type: "GET",
        }).then((res) => res.json());
    }
}