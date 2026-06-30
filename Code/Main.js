const UserAddName = document.getElementById("UserAddName");
const UserAddPassword = document.getElementById("UserAddPassword");
const UserAddButton = document.getElementById("UserAddButton");
const UserListDiv = document.getElementById("UserListDiv");
const Overlay = document.getElementById("Overlay")
const AccountLogin = document.getElementById("AccountLogin")
const AccountLoginPassword = document.getElementById("AccountLoginPassword")
let UserList = []
let CurrentPassword = null;

UserAddButton.addEventListener("click", (event) => {
    if (UserAddPassword.value.length > 3) {
        if (UserAddName.value !== "" && UserList.includes(UserAddName.value) === false) {
            let NewUser = document.createElement("p");
            let NewUserCloseButton = document.createElement("img");
            let NewUserPassword = UserAddPassword.value
            NewUser.textContent = UserAddName.value;
            NewUser.className = "UserP"
            NewUserCloseButton.src = "Images/Close Button Black.svg";
            NewUserCloseButton.className = "UserSVG"
            NewUser.append(NewUserCloseButton)
            UserListDiv.append(NewUser)

            

            UserList.push(UserAddName.value)
            UserList.push(UserAddPassword.value)
            console.log(UserList)

            NewUser.addEventListener("click", (event) => {
                let chosenAccountName = UserList.indexOf(NewUser.textContent);
                CurrentPassword = UserList[chosenAccountName + 1];              
                AccountLogin.style.visibility = "visible";
                Overlay.style.visibility = "visible";
            })
        }
        else if (UserList.includes(UserAddName.value) === true ) {
            UserAddButton.textContent = "Please Enter A Different Name"
        }
        else {
            UserAddButton.textContent = "Pleasse Enter A Name"
        }
    }
    else if (UserAddPassword.value === "") {
        UserAddButton.textContent = "Please Enter A Password"
    }
    else {
        UserAddButton.textContent = "Your password is too short"
    }
})

Overlay.addEventListener("click", (event) => {
    Overlay.style.visibility = "hidden"
    AccountLogin.style.visibility = "hidden";
})

AccountLoginPassword.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        if (AccountLoginPassword.value === CurrentPassword) {
            console.log("Yeah")
        }
    }
})
