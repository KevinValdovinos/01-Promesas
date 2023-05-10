function sumarUnoPromesa(numero){
    console.log(numero);
    var promesa=new Promise(function(resolve,reject){
        if(numero>=7){
            reject("El numero es muy grande");
            return;
        }
        setTimeout(function(){
            resolve(numero+1) ;
        },2000)
    });

    return promesa;
}
sumarUnoPromesa(5).then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch((err)=>{
    console.log(err);
})
// sumarUnoPromesa(5).then(function(nuevoValor){
//     console.log(nuevoValor);
//     sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
//         console.log(nuevoValor);
//         sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
//             console.log(nuevoValor);
//         })
//     })
// })
