const campoMostrarContato = document.getElementById('campo-que-mostra-o-contato');
let input = document.querySelector('input');
const botaoProcurarContato = document.querySelector('button');


const contatos = [
    {name: 'Rodolpho', number: '(19) 98319-0697' },
    {name: 'Priscilla', number: '(11) 94568-2561' },
    {name: 'Phelipe', number: '(12) 97611-8673' },
    {name: 'Raphael', number: '(14) 94075-5390' }
]
    
function encontrarContato(){

   if(input.value != ''){

    for( i = 0; i < contatos.length; i++){

        if(input.value.toLowerCase() === contatos[i].name.toLowerCase()){

            campoMostrarContato.innerHTML = `Contato: ${contatos[i].name} Tel: ${contatos[i].number}`;

            break
            // break: uma instrução utilizada para sair de um loop antes que a condição de término normal seja alcançada.
            
        } else {
            campoMostrarContato.innerHTML = "Contato não encontrado!";
        }
        
    }
   } else{

    alert("Por favor, digite um número válido para procurar um contato")
   }
}

botaoProcurarContato.addEventListener("click", encontrarContato)


