 /*Operadores aritméticos:
        + Soma 
        - Subtração
        * Multiplicação
        / Divisão
        ++ Incremento (Soma mais 1)
        -- Decremento (Subtrai menos 1)
        
         Operadores de atribuição:
        + Igual 
        += Mais ou igual
        -= Menos ou igual
        /= Dividido ou igual
        *= Multiplicado ou igual

        Operadores de sequência:
        + (serve para concatenar valores
            (string ou variáveis)) 
        - (serve para subtrair valores
            (string ou variáveis))

        Operadores de comparação:
        RETORNA TRUE (VERDADEIRO) OU FALSE (FALSO)

        == (comparar 2 valores) 
        === (comparar valores e tipo de dado)
        != (diferente) de valores apenas
        !== (comparar a diferença de valores e tipo de dado)

        < menor      > maior
        <= menor ou igual     > = maior ou igual
        */

        function somar (){
            let n1= Number(document.getElementById("num1").value);
            let n2= Number(document.getElementById("num2").value);
            let resultado = n1 + n2; 
            document.getElementById("resultado")
            .innerHTML = resultado;

            //alterar cor do resultado caso for número negativo//
         const corResultado = document.getElementById("resultado")
         if (resultado <0)
         (corResultado.style.backgroundColor = "red");
         else (corResultado.style.backgroundColor = "pink");

        }

        function subtrair (){
            let n1= Number(document.getElementById("num1").value);
            let n2= Number(document.getElementById("num2").value);
            let resultado = n1 - n2; 
            document.getElementById("resultado")
            .innerHTML = resultado;

               //alterar cor do resultado caso for número negativo//
         const corResultado = document.getElementById("resultado")
         if (resultado <0)
         (corResultado.style.backgroundColor = "red");
         else (corResultado.style.backgroundColor = "pink");
        }

        function multiplicar (){
            let n1= Number(document.getElementById("num1").value);
            let n2= Number(document.getElementById("num2").value);
            let resultado = n1 * n2; 
            document.getElementById("resultado")
            .innerHTML = resultado;

               //alterar cor do resultado caso for número negativo//
         const corResultado = document.getElementById("resultado")
         if (resultado <0)
         (corResultado.style.backgroundColor = "red");
         else (corResultado.style.backgroundColor = "pink");
        }

        function dividir (){
            let n1= Number(document.getElementById("num1").value);
            let n2= Number(document.getElementById("num2").value);

            if (n2 === 0){
                document.getElementById("resultado")
                .innerHTML = "Divisão por 0, não existe!";
                document.getElementById("resultado").style.backgroundColor = "light purple";
            }
            else{
                let resultado = n1 / n2; 
            document.getElementById("resultado")
            .innerHTML = resultado;

               //alterar cor do resultado caso for número negativo//
         const corResultado = document.getElementById("resultado")
         if (resultado <0)
         (corResultado.style.backgroundColor = "red");
         else (corResultado.style.backgroundColor = "pink");
        }
            }

    

        const corResultado = document.getElementById("resultado")

        function limpar(){
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("resultado").innerHTML = "---";
            document.getElementById("resultado").style.backgroundColor = "lightgreen";
        }



















