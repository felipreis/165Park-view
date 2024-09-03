
const entrada = document.getElementById("entrada-btn");
const saida = document.getElementById("saida-btn");
const veiculos = document.getElementById("veiculos-btn");

const entradaForm = document.getElementById("entrada-veiculo");
const saidaForm = document.getElementById("saida-veiculo");
const veiculosForm = document.getElementById("veiculo");


entrada.addEventListener('click', function(){
    entradaForm.classList.remove('invisivel');
    saidaForm.classList.add('invisivel');
    veiculosForm.classList.add('invisivel');
})


saida.addEventListener('click', function(){
    entradaForm.classList.add('invisivel');
    saidaForm.classList.remove('invisivel');
    veiculosForm.classList.add('invisivel');
})

veiculos.addEventListener('click', function(){
    entradaForm.classList.add('invisivel');
    saidaForm.classList.add('invisivel');
    veiculosForm.classList.remove('invisivel');
})