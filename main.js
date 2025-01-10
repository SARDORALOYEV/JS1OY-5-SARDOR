const room = {
    name: prompt("Ismingizni kiriting"),
    id: +prompt("ID kiriting"),
    password: +prompt("Parolingizni kiriting")
}
if(room.name == "" || room.id == 0 || room.password == 0){
    alert("To'g'ri ma'lumot kiriting")
}else{
console.log(room);
}


