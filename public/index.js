const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
userCreateForm.addEventListener("submit",submitUserCreate)




function submitUserCreate(event) {
    event.preventDefault()
    User = {
        Name: userCreateForm.userName.value,
        Email: userCreateForm.emailAddress.value,
        Phone: userCreateForm.phone.value,
        SocialMedia: userCreateForm.url.value,
        CommunicationMethod: userCreateForm.comMethod.value,
        UsedDevices: userCreateForm.device.value,
        UserType: userCreateForm.userType.value,
        MemeSpicinessLevel: userCreateForm.spiciness.value
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