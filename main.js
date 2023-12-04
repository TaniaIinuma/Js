function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
    }

    function tocaSomVaia(){
        document.querySelector("#som_tecla_vaia").play();
        }

    function tocaSomRisada(){
            document.querySelector("#som_tecla_risada").play();
            }
//document.querySelector(".tecla_aplausos").onclick = tocaSomAplausos;   
const listaDeTeclas = document.querySelectorAll(".tecla");
listaDeTeclas[0].onclick = tocaSomAplausos;
listaDeTeclas[1].onclick = tocaSomVaia;
listaDeTeclas[2].onclick = tocaSomRisada;
