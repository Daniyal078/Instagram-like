let con = document.querySelector('#card');
let like = document.querySelector('i');


con.addEventListener('dblclick', function () {
    like.style.transform = "translate(-50%, -50%) scale(1)";
    like.style.opacity = 0.9;
    like.style.color = 'Red';

    setTimeout(function () {
        like.style.opacity = 0;
    }, 1000);
})