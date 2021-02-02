const btnEvent1 = document.getElementById('event1');

btnEvent1.addEventListener("click", function() {
    ga('send', 'event', 'button click', 'button click', 'button click', ); 
});