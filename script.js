function mudarEstado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
        document.getElementById(el).style.display = 'flex';
    }        
    else
        document.getElementById(el).style.display = 'none';
}

function clicarOne(){
    const one = document.getElementById('1').innerHTML;  
    const p = document.querySelector('.legenda'); 

    if(one){
        p.innerHTML = '<span> You selected ' + one +' out of 5</span>';
    }
};

function clicarTwo(){
    const two = document.getElementById('2').innerHTML;    
    const p = document.querySelector('.legenda');

    if (two){
        p.innerHTML = '<span> You selected ' + two +' out of 5</span>';
    }
};

function clicarThree(){
    const three = document.getElementById('3').innerHTML;
    const p = document.querySelector('.legenda');

    if (three){
        p.innerHTML = '<span> You selected ' + three +' out of 5</span>';
    }
};
   
function clicarFour(){
    const four = document.getElementById('4').innerHTML;
    const p = document.querySelector('.legenda');

    if (four){
        p.innerHTML = '<span> You selected ' + four +' out of 5</span>';
    }
};

function clicarFive (){
    const five = document.getElementById('5').innerHTML;
    const p = document.querySelector('.legenda'); 

    if (five){
        p.innerHTML = '<span> You selected ' + five +' out of 5</span>';
    }    
};



