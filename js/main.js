var pacientes = document.querySelectorAll('.paciente')

    for(let i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var peso = paciente.querySelector('.info-peso').textContent
        var altura = paciente.querySelector('.info-altura').textContent
        var tdImc = paciente.querySelector('.info-imc')

        var pesoValido = validaPeso(peso) //retorna true or false
        var alturaValida = validaAltura(altura)

        if(!pesoValido){
            console.log('Peso inválido')
            tdImc.textContent = "Peso inválido"
            pesoValido = false
            paciente.classList.add("paciente-invalido")
        }

        if(!alturaValida){
            console.log('Altura inválida')
            tdImc.textContent = "Altura inválida"
            alturaValida = false
            paciente.classList.add("paciente-invalido")
        }

        if (pesoValido && alturaValida){
             var imc = calculaImc(peso, altura)
            tdImc.textContent = imc
        }
        
    }

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function calculaImc(peso, altura){
    var imc = 0
    imc = peso / altura**2
    return imc.toFixed(1)
}



    


