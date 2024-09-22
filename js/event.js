//Task 1:Hide the heading when the "Hide Heading" button is clicked
document.getElementById('hide-btn').addEventListener('click',function(){
document.querySelector('h1').style.display='none';
});
//Task 2:Show the heading when the "Show Heading" button is clicked
document.getElementById('show-btn').addEventListener('click',function(){
document.querySelector('h1').style.display='block';
 });
 //Task 3:Change the color of the heading when the "Change Heading Color" button is clicked
document.getElementById('change-color-btn').addEventListener('click',function(){
document.querySelector('h1').style.color='blue';
});
//Task 4:Toggle the visibility of the heading with a single button (combine hide and show functionality).
document.getElementById('toggle-btn').addEventListener('click',function(){
 if(document.querySelector('h1').style.display=='none')
    document.querySelector('h1').style.display='block';
else
document.querySelector('h1').style.display='none';
});
//Task 5:Automatically change the heading color every second (use setInterval)
let colors=['red','green','blue','yellow','brown','pink','gray'];
let i=0;
setInterval(function()
{
   let index=i%colors.length;
    document.querySelector('h1').style.color=colors[index];
i++;},1000);