let users = ["Ali", "Ahmad",1,2,3,4,5,"Mazen","absar"] ; 

for (let   i = 0 ; i<users.length ; i++){
    if(typeof users[i] !=='number'){
        continue;
    }
    console.log(users[i]);
}


let users1 = ["Ali", "Ahmad",1,2,3,4,5,"Mazen","absar"] ; 

for (let   i = 0 ; i<users1.length ; i++){
    if(typeof users1[i] =='number'){
        continue;
    }
    console.log(users1[i]);
}