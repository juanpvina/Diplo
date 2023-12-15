


function isesion() {
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    const check = document.getElementById("check");




    let usuarios = [['shino', '123'], ['jp', '234'], ['utn', '012']]
    let flag = "Usuario erroneo";
    usuarios.forEach(function name(usuario) {
        if (user.value === usuario[0] && pass.value === usuario[1]) 
        {

            flag = 'Login Correcto';

            check.classList.add("correcto");
            setInterval(() => {
                location.href = "./login.html";
            }, 2500);
            return;
        } else if (user.value === usuario[0] && !pass.value !== usuario[1])
    {
        flag = 'Contraseña erronea';
        return;
    }
})


check.value = flag;
}


async function getSampleText() {
    console.log( (await fetch('usuarios.txt')).text() );
  }

  getSampleText()

//usuarios.forEach(function name(usuario) {

/*
if (user.value === usuario[0] && pass.value === usuario[1]) {
 
    check.value = 'Login Correcto';
 
    check.classList.add("correcto");
    setInterval(() => {
        location.href = "./login.html";
    }, 2500);
    return;
} else if (user.value === usuario[0]) {
    check.value = 'Contraseña erronea';
    return;
} else {
    check.value = 'Usuario erroneo';
}
})*/



