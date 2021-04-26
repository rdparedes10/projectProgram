function loadRegisterUser() {
    var html = '<div class="div-login register-form">' +
        '<input type="checkbox" id="isClient" style="width: 10%;" value="second_checkbox"> <label for="isClient">Usted No Es cliente</label>' +
        '<input type="tel" id="ciRegister" placeholder="cedula"/>' +
        '<input type="text" id="usernameRegister" placeholder="username"/>' +
        '<input type="password"  id="passRegister" placeholder="password"/>' +
        '<input type="text"  id="emailRegister" placeholder="email address"/>' +
        '</div>' +
        '<button onclick="openRegistration();">create</button>' +
        ' <p class="message">Already registered? <a href="#">Sign In</a></p>' +
        '</div>';
}