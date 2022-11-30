import juros from "readline-sync";

let taxa_juros

let divida = juros.question("Informe o valor da divida:");
if(divida > 0){
    let dias_passaram = juros.question("Informe quantos dias se passaram desde o vencimento do boleto:");
    if(dias_passaram > 0){
        if(dias_passaram > 15) 
        {
            taxa_juros = 10;
        }
        else
        {
            taxa_juros = 5;
        }
        
        divida = Number(divida);
        dias_passaram = Number(dias_passaram);

        let total_juros = (divida / 100) * taxa_juros;
        let valor_total = divida + total_juros;
        
        divida = Number(divida)

        console.log("\nValor original da dívida: R$"+divida);
        console.log("Dias atrasados: "+dias_passaram);
        console.log("Taxa de Juros: "+taxa_juros+"%");
        console.log("Valor total com juros: R$ "+valor_total);
    }
    else{
        console.log("Você está em dia!");
    }
}
else{
    console.log("O valor da dívida deve ser maior que zero!")
}








