// classical method
 let a = document.getElementsByTagName(`div`)[0]
// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';


// Another Method

let div=document.createElement('div');
div.innerHTML='<h1>Hello World!</h1>';
// a.append(div);  // print Hello world after "End"  // In the container

// a.prepend(div);  // print before "start"  // in the container

// a.before(div);  // out of container

// a.after(div);  // out of container

a.replaceWith(div);  // replace with container div