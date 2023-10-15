
//GET ELEMENTS BY TAG NAME//
var li=document.getElementsByTagName('li')
console.log(items[1]);
li[1].textContent="hello";
//li[1].style.fontWeight='Bold';
//li[1].style.backgroundColor='green';
//li.style.backgroundColor='yellow'; iT GIVES ERROR
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='#f4f4f4';
}

//GET ELEMENT BY CLASSS NAME//
var list=document.getElementsByClassName('list-group-item')
for(var i=0;i<list.length;i++)
{
    list[i].style.backgroundColor='pink';
}