console.log('1. Inicio (Síncrono)');

// Un pedido "normal" para la Macro-task Queue
setTimeout(() => {
    console.log('4. FIN (Macro-task)');
}, 0);

// Un post-it "URGENTE" para la Micro-task Queue
Promise.resolve().then(() => {
    console.log('3. URGENTE (Micro-task)');
});

console.log('2. Fin (Síncrono)');


// La salida en la consola SIEMPRE será:

// 1. Inicio(Síncrono)
// 2. Fin(Síncrono)
// 3. URGENTE(Micro - task)
// 4. FIN(Macro - task)


// El "3"(la promesa) se ejecuta antes que el "4"(el setTimeout), 
// aunque ambos fueron programados casi al mismo tiempo y con un retraso de "cero".
// Esto demuestra que la Micro - task Queue(Promesas) tiene prioridad absoluta sobre la Macro - task Queue(Callbacks normales).