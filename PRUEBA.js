const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Configurar opciones para Chrome
let options = new chrome.Options();
//options.addArguments("--headless"); // Ejecutar en modo headless

// Crear una instancia de WebDriver para Chrome fuera de la función testLogin
let driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

async function testLogin() {
    try {
        // Navegar a la página de login
        await driver.get('https://staging.fortesza.com/register');

        // Esperar hasta que el campo de usuario sea visible y esté listo para interactuar
        let correoUsuario = await driver.wait(until.elementLocated(By.xpath('//*[@id="input-email-register"]')), 100000);
        await driver.wait(until.elementIsVisible(correoUsuario), 1000000);
        await correoUsuario.sendKeys('daphne.c.solis@gmail.com');

        // Esperar hasta que el campo de contraseña sea visible y esté listo para interactuar
        let contraseñaUsuario = await driver.wait(until.elementLocated(By.xpath('//*[@id="input-password-register"]')), 100000);
        await driver.wait(until.elementIsVisible(contraseñaUsuario), 10000);
        await contraseñaUsuario.sendKeys('esFortesza23*', Key.RETURN);

        // Esperar hasta que el campo de contraseña sea visible y esté listo para interactuar
        let seleccionAdulto = await driver.wait(until.elementLocated(By.xpath('//*[@id="check-terms-and-conditions"]/label/span[1]')), 100000);
        await driver.wait(until.elementIsVisible(seleccionAdulto), 10000);
        await seleccionAdulto.click();

         // Esperar hasta que el campo de contraseña sea visible y esté listo para interactuar
         let botonCrearCuenta = await driver.wait(until.elementLocated(By.xpath('//*[@id="btn-register-user"]')), 100000);
         await driver.wait(until.elementIsVisible(botonCrearCuenta), 10000);
         await botonCrearCuenta.click();
 


    } finally {
        // Cerrar el navegador
        //await driver.quit();
    }
}

testLogin();