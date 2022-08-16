//console.log(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = aishwary;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms[10]);
//document.all[10].textContent = 'Hello Everyone';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 5px #000';

//var headerClass = document.getElementById('main');
//headerClass.innerHTML = <h2 style="color: green;"> ADD ITEMS</h2>

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[2].style.backgroundColor = 'green';
//for(var i = 0;i<items.length;i++){
//    items[i].style.fontWeight = 'bold';
//}
//var li = document.getElementsByTagName('li');
//console.log(li);
//li[2].style.backgroundColor = 'green';
//for(var i = 0;i<li.length;i++){
//    li[i].style.fontWeight = 'bold';
//}

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor = 'green';
//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.color = 'white';


//var items = document.querySelectorAll('li:nth-child(2)');
//items.style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}