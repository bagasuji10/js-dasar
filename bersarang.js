var s = '';
for (var i = 1; i <= 5; i++) {
    for(var j = 1; j <= i; j++){
        s += j;
    }
    s += '\n';
}
console.log(s);

var a = '';
for (var i = 10; i >= 1; i--) {
    for(var j = 1; j <= i; j++){
        a += j;
    }
    a += '\n';
}

console.log(a);