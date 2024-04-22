class Password {
    constructor() {
      this.ucl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      this.lcl = "abcdefghijklmnopqrstuvwxyz"
      this.num = "1234567890"
      this.spe = "!@#$%^&*()[]/.<>"
    }
    weakPassword() {
      let wp = [this.ucl, this.lcl]
      let pass = ""
      for (let i = 0; i < 8; i++) {
        let pass1 = Math.floor(Math.random() * wp.length);
        let pass2 = Math.floor(Math.random() * wp[pass1].length);
        pass = pass + wp[pass1][pass2];
      }
      return pass;
    }
    strongPassword() {
      let sp = [this.ucl, this.lcl, this.num];
      let pass = ""
      for (let i = 0; i < 10; i++) {
        let pass1 = Math.floor(Math.random() * sp.length)
        let pass2 = Math.floor(Math.random() * sp[pass1].length)
        pass = pass + sp[pass1][pass2];
      }
      return pass;
    }
  
    superStrongPassword() {
      let ssp = [this.ucl, this.lcl, this.num, this.spe];
      let pass = ""
      for (let i = 0; i < 12; i++) {
        let pass1 = Math.floor(Math.random() * ssp.length)
        let pass2 = Math.floor(Math.random() * ssp[pass1].length)
        pass = pass + ssp[pass1][pass2];
      }
      return pass;
    }
    funnyPassword() {
      let funny = [
        "password",
        "incorrect",
        "12345678",
        "iforgot",
        "secret",
        "hello123",
        "mypassword",
        "newpassword",
        "IamAHacker",
        "0password",
        "nothing",
        "master",
        "yourname",
        "starwars",
        "wonderful",
        "sunshine",
        "qwerty",
        "12345",
        "abc123",
        "Million2"
      ];
      let pass = funny[Math.floor(Math.random() * funny.length)];
      return pass;
    }
  
  }
  
  let display = document.getElementById("display");
  let btn = document.getElementById("btn");
  let radio = document.getElementsByClassName("redio");
  let copy = document.getElementById("copy");
  
  let a = new Password()
  
  btn.addEventListener("click", (e) => {
    e.preventDefault(e)
    let b;
    if (radio[0].checked) {
      b = a.weakPassword()
    }
    else if (radio[1].checked) {
      b = a.strongPassword()
    }
    else if (radio[2].checked) {
      b = a.superStrongPassword()
    }
    else if (radio[3].checked) {
      b = a.funnyPassword()
    }
  
    display.value = b;
  })