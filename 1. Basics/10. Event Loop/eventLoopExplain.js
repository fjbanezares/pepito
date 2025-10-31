/*
 * === EL GRAN EJEMPLO DEL EVENT LOOP ===
 * * Lee los comentarios ANTES de mirar la consola.
 * Intenta predecir el orden de los números.
 * * - [Sync]: Código síncrono. Se ejecuta INMEDIATAMENTE en el Call Stack.
 * - [Macro]: Macro-task (Cola Normal). Ej: setTimeout, clics.
 * - [Micro]: Micro-task (Cola URGENTE). Ej: .then(), await.
 * * REGLA DE ORO: 
 * 1. Ejecutar todo el código [Sync].
 * 2. Revisar la cola [Micro] (URGENTE). Ejecutar TODO lo que haya en ella.
 * 3. Revisar la cola [Macro] (Normal). Ejecutar SOLO UNA tarea.
 * 4. Volver al paso 2.
 */

// -----------------------------------------------------------------
// [FASE 1: EJECUCIÓN SÍNCRONA]
// El Chef (Call Stack) empieza a leer el script línea por línea.
// -----------------------------------------------------------------

console.log('1. [Sync] ¡Comienza el script! El Chef está trabajando.');

// -----------------------------------------------------------------
// PEDIDO MACRO 1: Un "pedido normal" para setTimeout.
// El Chef se lo da al "electrodoméstico" de Timers y sigue.
// El callback se pondrá en la COLA MACRO (Normal) en ~0ms.
setTimeout(() => {
    // --- INICIO DE LA MACRO-TASK 1 ---
    console.log('11. [Macro] ¡TURNO 3! Se ejecuta setTimeout 1 (el primer pedido "Normal").');

    // Desde esta Macro-task, creamos más pedidos:
    // Un pedido "Urgente" (Micro)
    Promise.resolve().then(() => {
        console.log('12. [Micro] ¡URGENTE! Creado dentro de setTimeout 1. (Se ejecuta ANTES que el setTimeout 2)');
    });

    // Un pedido "Normal" (Macro)
    setTimeout(() => {
        console.log('14. [Macro] ¡TURNO 5! Se ejecuta setTimeout 2 (creado en setTimeout 1).');
    }, 0);
    // --- FIN DE LA MACRO-TASK 1 ---
}, 0);

// -----------------------------------------------------------------
// PEDIDO MICRO 1: Un "pedido urgente" de Promesa.
// El Chef ve que es una Promesa. Se resuelve al instante.
// El callback de .then() se pone INMEDIATAMENTE en la COLA MICRO (Urgente).
Promise.resolve().then(() => {
    // --- INICIO DE LA MICRO-TASK 1 ---
    console.log('4. [Micro] ¡TURNO 2! Se ejecuta Promise 1 (el primer pedido "Urgente").');

    // Desde esta Micro-task, creamos más pedidos:
    // Un pedido "Normal" (Macro)
    setTimeout(() => {
        console.log('13. [Macro] ¡TURNO 4! Se ejecuta setTimeout 3 (creado en Promise 1).');
    }, 0);

    // Un pedido "Urgente" (Micro)
    Promise.resolve().then(() => {
        console.log('5. [Micro] ¡TURNO 2! Se ejecuta Promise 2 (creada en Promise 1).');
    });

    console.log('6. [Micro] ¡TURNO 2! Saliendo de Promise 1.');
    // --- FIN DE LA MICRO-TASK 1 ---
});

// -----------------------------------------------------------------
// ¿DÓNDE ENCAJA ASYNC/AWAIT?
// 'async/await' es AZÚCAR SINTÁCTICO para PROMESAS.
// ¡Por lo tanto, también usa la COLA MICRO (Urgente)!
// -----------------------------------------------------------------

async function miFuncionAsync() {
    // Esta parte se ejecuta síncronamente como parte de la FASE 1.
    console.log('2. [Sync] Entrando en miFuncionAsync (síncrono).');

    // 'await' es como un '.then()'.
    // 1. "Pausa" la ejecución de esta función.
    // 2. Ejecuta la promesa (Promise.resolve()).
    // 3. Pone TODO EL RESTO de la función en la COLA MICRO (Urgente).
    await Promise.resolve();

    // --- INICIO DE LA MICRO-TASK 2 ---
    // Este código se ejecuta cuando le toque el turno a esta Micro-task.
    console.log('7. [Micro] ¡TURNO 2! Ejecutando el código DESPUÉS de await.');

    // Creamos otra Micro-task desde aquí.
    await Promise.resolve();
    console.log('9. [Micro] ¡TURNO 2! Ejecutando después del SEGUNDO await.');
    // --- FIN DE LA MICRO-TASK 2 ---
}

// Llamamos a la función. 
// Esto pone en marcha la parte síncrona (el 'console.log 2')
// y registra la primera Micro-task (el código tras 'await').
miFuncionAsync().then(() => {
    // Este .then() se encadena a la promesa que devuelve miFuncionAsync.
    // Se añade a la COLA MICRO (Urgente) después de que la función async termine.
    console.log('10. [Micro] ¡TURNO 2! Ejecutando el .then() de miFuncionAsync (después del 9).');
});

// -----------------------------------------------------------------
// PEDIDO MICRO 2: Otra Promesa "Urgente".
// Se añade a la COLA MICRO (Urgente) al final del fajo de "post-its".
Promise.resolve().then(() => {
    console.log('8. [Micro] ¡TURNO 2! Se ejecuta Promise 3 (la última Micro-task del primer fajo).');
});

// -----------------------------------------------------------------
// FIN DE LA FASE 1
// -----------------------------------------------------------------
console.log('3. [Sync] FIN del script. El Chef (Call Stack) está libre.');
console.log('--- El Gerente (Event Loop) toma el control ---');

/*
 * --- PREDICCIÓN DE LA EJECUCIÓN ---
 * * FASE 1: Síncrono
 * 1. [Sync] ¡Comienza el script!
 * 2. [Sync] Entrando en miFuncionAsync (síncrono).
 * 3. [Sync] FIN del script.
 * --- El Call Stack se vacía ---
 * * FASE 2: Micro-tasks (TURNO 2: El Gerente vacía el fajo "URGENTE")
 * El orden aquí es el orden en que se añadieron al fajo.
 * 4. [Micro] ¡TURNO 2! Se ejecuta Promise 1...
 * 5. [Micro] ¡TURNO 2! Se ejecuta Promise 2 (creada en Promise 1).
 * 6. [Micro] ¡TURNO 2! Saliendo de Promise 1.
 * 7. [Micro] ¡TURNO 2! Ejecutando el código DESPUÉS de await.
 * 8. [Micro] ¡TURNO 2! Se ejecuta Promise 3...
 * 9. [Micro] ¡TURNO 2! Ejecutando después del SEGUNDO await.
 * 10. [Micro] ¡TURNO 2! Ejecutando el .then() de miFuncionAsync...
 * --- La cola de Micro-tasks se vacía ---
 * * FASE 3: Macro-tasks (TURNO 3: El Gerente toma UN pedido "Normal")
 * 11. [Macro] ¡TURNO 3! Se ejecuta setTimeout 1...
 * (Dentro de esta Macro-task, se crea una NUEVA Micro-task (12)
 * y una NUEVA Macro-task (14))
 * --- El Call Stack se vacía ---
 * * FASE 4: Revisión de Micro-tasks (El Gerente revisa "URGENTES" OTRA VEZ)
 * 12. [Micro] ¡URGENTE! Creado dentro de setTimeout 1.
 * --- La cola de Micro-tasks se vacía ---
 * * FASE 5: Macro-tasks (TURNO 4: El Gerente toma el siguiente pedido "Normal")
 * Nota: El 'setTimeout 3' (13) se creó antes que el 'setTimeout 2' (14).
 * 13. [Macro] ¡TURNO 4! Se ejecuta setTimeout 3...
 * --- El Call Stack se vacía ---
 * * FASE 6: Revisión de Micro-tasks
 * (No hay ninguna nueva)
 * * FASE 7: Macro-tasks (TURNO 5: El Gerente toma el último pedido "Normal")
 * 14. [Macro] ¡TURNO 5! Se ejecuta setTimeout 2...
 * * --- FIN ---
 */