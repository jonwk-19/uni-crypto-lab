# Crypto Translator - Algoritmo de César

Este es un proyecto simple que utiliza el **Algoritmo de César** para cifrar y descifrar texto. La interfaz es similar a la de un traductor, donde puedes introducir texto, aplicar el cifrado César y obtener el texto encriptado o desencriptado.

## Descripción

El proyecto cuenta con una interfaz de usuario (UI) en la que puedes ingresar un texto en el campo de entrada, y este será cifrado utilizando el **Algoritmo de César**. Luego, el texto cifrado o descifrado se mostrará en el campo de salida. El usuario puede elegir el número de desplazamientos del algoritmo para modificar el comportamiento del cifrado.

## Estructura del Proyecto

El proyecto está organizado en los siguientes archivos y directorios:

```

...\crypto-translator
│
├── .vscode/            # Configuración de Visual Studio Code (opcional)
│
├── src/                # Archivos de código fuente (JavaScript, HTML)
│
└── index.html          # Página principal que se ejecuta en el navegador

```

## Cómo Ejecutarlo

Este proyecto no depende de frameworks ni bibliotecas externas. Solo necesitas abrir el archivo `index.html` en tu navegador para ver la interfaz del traductor y el funcionamiento del algoritmo de César.

1. Navega al directorio del proyecto.
2. Abre el archivo `index.html` en cualquier navegador web moderno.
3. Ingresa un texto en el campo de entrada.
4. Selecciona el número de desplazamientos que deseas aplicar al algoritmo de César.
5. El texto cifrado o descifrado aparecerá en el campo de salida.

## Funcionalidad

- **Entrada de texto:** Puedes ingresar cualquier mensaje en el campo de texto de entrada.
- **Cifrado y Desencriptado:** El texto se encripta automáticamente con el algoritmo de César, y el texto resultante se muestra en el campo de salida.
- **Desplazamiento:** Puedes elegir el número de desplazamientos para cambiar cómo se encripta el texto (por ejemplo, un desplazamiento de 3 moverá cada letra tres posiciones en el alfabeto).
- **Interfaz Simple:** La interfaz es fácil de usar, similar a un traductor en línea.

## Tecnologías Usadas

- **HTML**: Para la estructura de la página web.
- **JavaScript**: Para implementar la lógica del algoritmo de César y la interacción de la interfaz.
- **CSS**: Para darle estilo a la interfaz y mejorar la experiencia del usuario (opcional).

## Contribuciones

Si deseas mejorar el proyecto o agregar más funcionalidades, como más algoritmos de cifrado o una interfaz más compleja, siéntete libre de hacer un *fork* y contribuir.

## Licencia

Este proyecto está bajo la Licencia MIT.
