const { Adicionar, Remover, Listar, Atualizar } = require("./feriasB");

const prompt = require("prompt-sync")({ sigint: true });
let Atividade=[];
let escolha
while (escolha!=0) {
    

console.log(`
//     >>>> Atividades nas Férias <<<<
//     1. Adicionar uma nova
//     2. Remover
//     3. Listar todas as atividades
//     4. Atualizar uma atividade
//     0. Sair
//     `);
escolha= prompt("Escolha uma opção: ");
switch (escolha) {
    case "1":
        console.log(Adicionar(Atividade));
        break
        case "2":
            console.log(Remover(Atividade));
            break
            case "3":
                console.log(Listar(Atividade));
                break
                case "4":
                    console.log(Atualizar(Atividade));
                    break
                    case "0":
                        console.log("encerrando..");
        break;

    default:
        console.log("opção inválida");
        break;
}
}

// const { listar, adicionar } = require("./feriasB");


// const prompt = require("prompt-sync")();
// let atividades = []
// let opcao
// while (opcao!=0) {
// let opcao=prompt("Você fez algo nas férias?");
// if (opcao== "fiz") {
//     adicionar(atividades);
//     listar(atividades)
//     }else if (opcao=="mostrar") {
//         listar(atividades)
//     }else if (opcao=="não")
//         break

//     }
