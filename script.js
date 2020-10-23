function slideIn()
{
    let burgur = document.querySelector('.burger');
    let slideIn = document.querySelector('.slideIn');
    let close = document.querySelector('.close');
    
    burgur.addEventListener("click", () =>
    {
        slideIn.classList.toggle('slideInActive');
    });
    close.addEventListener("click", () =>
    {
        slideIn.classList.toggle('slideInActive');
    });
}
slideIn();