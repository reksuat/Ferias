module.exports={
    Adicionar: Adicionar,
    Remover: Remover,
    Listar: Listar,
    Atualizar: Atualizar,
}
function Adicionar(atv) {
    const prompt = require("prompt-sync")({ sigint: true });
    let dia = prompt("Dia: ");
    let ativDia=[];
    while (true) {
        let atividade = prompt("Atividade feita (ou pressione Enter para encerrar): ");
        
        if (!atividade) {
            break;
        }

        ativDia.push(atividade);
    }
    if (ativDia.length > 0) {
        atv.push({ dia: dia, atividades: ativDia });
        return "Atividades adicionadas para o dia " + dia;
    }
}
        function Remover(atv) {
            const prompt = require("prompt-sync")({ sigint: true });
            let cancelar= prompt("Digite a atividade que deseja remover: ")
            if (cancelar >= 1 || cancelar < atv.length){
                atv.splice(cancelar -1,1);
                return ("atividade cancelada! ")
            }
        }

        function Listar(atv) {
                if (atv.length==0) {
                    return "Não tem nenhuma atividade"
                    
                }else{
                    let lista="";
                    atv.forEach((atv, index) => {
                lista+=(`${index + 1}. ${atv.dia} - ${atv.ativDia}\n`);
        });
        return lista.trim()
    }
        }
        function Atualizar(atv, dia) {
            if(atv.length===0){
                return("Nenhuma atividade para alterar.");
            } else { 
                const prompt = require("prompt-sync")({ sigint: true });
                let dia = prompt("Digite o dia que deseja mudar atividade: ");
                indice=  Number(indice)
                if (dia>=0 && dia < atv.length) {
                        dia = prompt("dia: ");
                    let atividade = prompt("atividade: ");
    
                    atv[dia]={ dia, atividade};
                    return("Atividade atualizada! ");
        }else{
            return "Dia inexistente"
        }
            }}


// module.exports= {
//     listar: listar,
//     adicionar: adicionar
// }
// function adicionar(atv) {
//     const prompt = require("prompt-sync")({ sigint: true });
//     let dia = prompt("Dia: ");
//     let atividade = prompt("Atividade: ")
//     atv.push({dia, atividade})
//     return ("registrado!");
// }
//     function listar(atv) {
//         if (atv.length==0) {
//             return "não tem atividades"
//         }else{
//         let lista="";
//         atv.forEach((atv, index )=>{
//             lista+= `${index+1} dia: ${atv.dia}, atividade: ${atv.atividade}`;
//         })
//         return lista.trim()
//     }
//     }
//     // atividades.forEach((atividades, index) => {
//     //     console.log(`${index+1} dia: ${atividades.dia}, atividade: ${atividades.atividade}`);
    
//     // });
