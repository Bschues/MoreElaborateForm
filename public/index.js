const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
userCreateForm.addEventListener("submit",submitUserCreate)




function submitUserCreate(event) {
    event.preventDefault()
    User = {
        userName: document.getElementById("newUserName").value,
        email: userCreateForm.email.value,
        password: userCreateForm.password.value,
        newPassword: userCreateForm.newPassword.value
    }
    fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(User),
        }).then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response));
}