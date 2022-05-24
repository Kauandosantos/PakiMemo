// memórias
function abre_jan1(){
    window.open("jan1.html", " janelaNova", "toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=no,resizable=no,width=500px, height=500px,")
}
function abre_jan2(){
    window.open("jan2.html", " janelaNova", "toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=no,resizable=no,width=500px, height=500px")
}
function abre_jan3(){
    window.open("jan3.html", " janelaNova", "toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=no,resizable=no,width=500px, height=500px")
}
function abre_jan4(){
    window.open("jan4.html", " janelaNova", "toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=no,resizable=no,width=500px, height=500px")
}
//fim memórias
// cadastro
function verificar(){

    if(document.getElementById('tel').value.length > 9 || document.getElementById('tel').value.length < 9)
    {
        alert('O telefone precisa ter 9 digítos!');
        document.getElementById('tel').focus()
        return false;
    }
    if(document.getElementById('cel').value.length > 8 || document.getElementById('cel').value.length < 8)
    {
        alert('O celular precisa ter 8 digítos!');
        document.getElementById('cel').focus()
        return false;
    }
return true;
}
// fim cadastro

//compras
function SelIncluir(){
    let bot = document.getElementById('inclu')
    let sel= document.getElementById('selProduto')
    
}