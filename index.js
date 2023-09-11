radio = document.querySelectorAll('.radio');
otz = document.querySelectorAll('.otz');
document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('radio')){
        if (e.target.classList.contains('active')){
            
        }
        else{
            document.querySelector('.active').classList.toggle('active');
            e.target.classList.toggle('active');
            otz.forEach(element => {
                element.classList.toggle('hide');
            });
        }
    }

    if (e.target.classList.contains('strelka')){
        radio.forEach(element => {
            element.classList.toggle('active');
        });
        otz.forEach(element => {
            element.classList.toggle('hide');
        });
    }
})