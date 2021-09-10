var i = 0;

function counter() {
  i = i + 1;

  postMessage(i);

  setTimeout("counter()", 1000);
}

counter();
