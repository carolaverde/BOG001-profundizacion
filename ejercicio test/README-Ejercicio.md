Ejercicio con Lupo sobre Testing

## Actividades:

- [x] Realizar función
- [x] Implementar testing a la función realizada
- [x] Ejercicios personales para aplicar lo visto
- [x] Registro del espacio (¿que se comprendio?)
- [x] Actualización de bitacora

## Realizar función: 
se encuentra en el ejercicio.js



##  Registro del espacio (¿que se comprendio?):
####  Descripción del ejercicio:
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Realizar test.

Las funciones tienen un firma. 
La firma viene a decir que parametros espera esa función y que tipo de valor de retorno espera; en el ejercicio.js tenemos una función que tiene una firma en blanco, solo sabemos que se llama "function pareimpar", el enunciado nos habla de un parámetro que debe ser un número entero, para esto le vamos agregar un parametro a nuestra función, lo cual lo vamos hacer entre los parentecis que quedan a la derecha del nombre de nuestra función, que recibe el nombre de "lista de argumentos".
Como parametro se va a recibir un número, para este ejemplo se dio como "num", para indicar que eso va a ser un número. Otra cosa que podemos ver en el enunciado, dice que esta función debe retornar un string o cadena de texto, es decir nos debe devolver si el número dado es par o impar, trabajariamos con un condición por que existen dos posibles respuestas.

En la terminal comenzamos a inicializar node para instalar dependencias.
" >npm init -y, para iniciar el cual ha creado un package.json."
Despues de esto, instalamos como dependencia de desarrollo a jest
" >nmp i --save-dev jest "
En el testing comenzamos con dos console.log, los cuales nos muestran los resultados que deseamos obtener es decir queremos que estas afirmaciones sean verdaderas y poder hacer las especificaciones. En una especificaciones necesitamos tener una referencia a lo que queremos testear y para traernos una referencia a la pagina de testing pues las funciones declaradas viven en el ambito unicamente de ejercicio.js, y lo realizamos con un import|export, para lo cual necesitamos instalar babel.
En la página jestjs.io buscamos la sección donde habla de babel para agregrar las dependencias y copiamos los modulos que queremos instalar copiamos babel-jest @babel/core @babel/preset-env, que son las tres dependencias que queremos agregar al proyecto que son dependencias de desarrollo y las agregue a al package.json, y en la terminal escribimos npm install --save-dev babel-jest @babel/core @babel/preset-env y enter.
Tambien se debe agregar un archivo de configuración, el cual nos dice que se debe crear un archivo con el nombre babel.config.js y agregar el codigo que se encuentra en la pagina de jest. En la terminal creamos un archivo touch babel.config.js, y luego abrimos el archivo para pegar el codigo de configuración.

// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

con npx invocamos a jest, para correr el test, sale error por que el test no contiene ninguna prueba. En el archivo .testing escribimos el testing y cuando lo corremos con jest pasa la prueba por que ya tenemos un archivo el cual esta ejecutando. luego usamos una libreria de jest que es expect que traduce que nosotros esperamos algo, 
expect(pareimpar(1)).toBe("impar"); esto quiere decir que esperamos que el valor que le pasamos a expect, que eso sea impar. toBe viene siendo igualdad estricta (===) en jest, no hay ninguna otra opción. Cuando se ejecuto dio como resultado undefine, y este resultado esta conectado al archivo de ejercicio.js por que en ese momento la función no hacia nada.


