function calculadora() {
    const escolha = Number(prompt("Escolha uma operação:\n 1-Adição\n 2-Subtração\n 3-Multiplicação\n 4-Divisão")); //"\n" serve para quebra de linha

    if (escolha < 1 || escolha > 4 || !escolha) { //"!" garante que o valor deve ser declarado e não pode ser nulo
        alert("Operação inválida");
        calculadora();
    }

    else {

        let n1 = Number(prompt("Digite o primeiro número"));
        let n2 = Number(prompt("Digite o segundo número"));
        let resultado;

        if (!n1 || !n2){
            alert("Número inválido");
            calculadora();
        }
        else{
            function Adicao() {
                resultado = n1 + n2;
                alert("Resultado da soma:" + n1 + "+" + n2 + "=" + resultado);
            };
            function Subtracao() {
                resultado = n1 - n2;
                alert("Resultado da subtração:" + n1 + "-" + n2 + "=" + resultado);
            };
            function Multiplicacao() {
                resultado = n1 * n2;
                alert("Resultado da multiplicação:" + n1 + "*" + n2 + "=" + resultado);
            };
            function Divisao() {
                resultado = n1 / n2;
                alert("Resultado da divisão:" + n1 + "/" + n2 + "=" + resultado);
            };

            function novaOperacao(){
                let novaop = (prompt("Voçê deseja fazer uma nova operação?\n 1-Sim\n 2-Não"));
                if(novaop == 1){
                    calculadora();
                }
                else if(novaop ==2){ //"!=" Significa diferente
                    alert("Até a próxima!");
                }
                alert("Parâmetro inválido");
                    novaOperacao();
            };
    
            switch (escolha) {
                case 1:
                    Adicao();
                    break;
    
                case 2:
                    Subtracao();
                    break;
    
                case 3:
                    Multiplicacao();
                    break;
    
                case 4:
                    Divisao();
                    break;
            };
            novaOperacao();
        };
        };
};
calculadora();