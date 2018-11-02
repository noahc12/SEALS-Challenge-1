document.getElementById('left').addEventListener('click',function() {

    var position = document.getElementById('circle').style.left;
    var newPosition = parseInt(position) - 10;
 
    document.getElementById('circle').style.left = newPosition + 'px';
 
    if (position <= 0){
       
    }
 
 });
 
 document.getElementById('right').addEventListener('click',function() {
 
    var position = document.getElementById('circle').style.left;
    var newPosition = parseInt(position) + 10;
 
    document.getElementById('circle').style.left = newPosition + 'px';
 
 });
 
 document.getElementById('up').addEventListener('click',function() {
 
    var position = document.getElementById('circle').style.top;
    var newPosition = parseInt(position) - 10;
 
    document.getElementById('circle').style.top = newPosition + 'px';
 
 });
 
 document.getElementById('down').addEventListener('click',function() {
 
    var position = document.getElementById('circle').style.top;
    var newPosition = parseInt(position) + 10;
 
    document.getElementById('circle').style.top = newPosition + 'px';
 
 });
 