var pacientes = document.querySelectorAll('.paciente')

    for(let i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var peso = paciente.querySelector('.info-peso').textContent
        var altura = paciente.querySelector('.info-altura').textContent
        var tdImc = paciente.querySelector('.info-imc')

        var pesoValido = true
        var alturaValida = true

        if(peso <= 0 || peso >= 300 ){
            console.log('Peso inválido')
            tdImc.textContent = "Peso inválido"
            pesoValido = false
            paciente.classList.add("paciente-invalido")

        }

        if(altura <= 0 || altura >= 3.00 ){
            console.log('Altura inválida')
            tdImc.textContent = "Altura inválida"
            alturaValida = false
            paciente.classList.add("paciente-invalido")
        }

        if (pesoValido && alturaValida){
             var imc = peso / altura**2

            tdImc.innerHTML = imc.toFixed(1)

        }
        
    }

    var botaoAdicionar = document.querySelector('#adicionar-paciente')

    botaoAdicionar.addEventListener("click", function(event)){
        event.preventDefault()
    }



