var a = +prompt("Son kiriting, biz uni darajaga ko'paytirib beramiz")
while(isNaN(a) || a==0){
    a = +prompt("Xatolik yuz berdi. Iltimos, qaytadan son kiritib ko'ring")
}

var b = +prompt("Sonni darajasini kiriting")
while(isNaN(b) || b==0){
    b = +prompt("Xatolik yuz berdi. Iltimos, qaytadan son kiritib ko'ring")
}
let box = 1
for (let i = 0; i < b && a; i++) {
    box = box*a
console.log(box);
    
}

alert("Siz kiritgan sonning darajasi " + box)
