document.getElementById('loadModule').addEventListener('click', async () => {
    // Dynamically import the module when the button is clicked
    const module = await import('./module.js');
    const result = module.dynamicFunction();
    document.getElementById('result').innerHTML = result;
});
