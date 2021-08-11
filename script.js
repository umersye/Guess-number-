var guess=Math.floor(Math.random()*100)+1
function calc()
{
  var n=parseInt(document.getElementById('num').value)
  if (n===guess)
    document.getElementById('out').innerText="Congrats ! you got it correctly"
  else if(n>guess)
    document.getElementById('out').innerText="Give a small number"
  else
    document.getElementById('out').innerText="Give a greatest number"
}