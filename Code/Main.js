const UserNumber = 0;
const UserAddName = document.getElementById("UserAddName");
const UserAddPassword = document.getElementById("UserAddPassword");
const UserAddButton = document.getElementById("UserAddButton");
const UserListDiv = document.getElementById("UserListDiv");

UserAddButton.addEventListener("click", (event) => {
    if (UserAddPassword.value.length > 3) {
        if (UserAddName.value !== "") {
            let NewUser = document.createElement("p");
            let NewUserCloseButton = document.createElement("img");
            NewUser.textContent = UserAddName.value;
            NewUser.className = "UserP"
            NewUserCloseButton.src = "Images/Close Button Black.svg";
            NewUserCloseButton.className = "UserSVG"
            NewUser.append(NewUserCloseButton)
            UserListDiv.append(NewUser)
            UserAddButton.textContent = "You created an account"
        }
    }
    else if (UserAddPassword.value === "") {
        UserAddButton.textContent = "Please Enter A Password"
    }
    else {
        UserAddButton.textContent = "Your password is too short"
    }
})