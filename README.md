# proyectoCajero
Este es el repositorio de el proyecto "Cajero Automático"

Cuando eliges otra cuenta se refresca la página. Si seleccionas por ejemplo la cuenta de gera, 
y le depositas dinero, el cambió se efectúa y lo puedes comprobar dandole a la opción "Consultar saldo"
posteriormente, pero si se lo depositas y después abres otra cuenta; se borran los cambios.

Para que esto no pase, se tiene que iniciar sesión con la cuenta y no depositar ni retirar dinero. Después,
abres otra cuenta y haces lo mismo; y lo mismo con la otra. Ahora puedes depositar o retirar dinero en cualquier
cuenta, sin que se refresque la página.

Si depositas o retiras alguna cantidad que no sea un número; el saldo se va cambiar a un valor NaN. No pude arreglar eso., 
intenté usar la verificación isNaN, pero el valor siguió siendo NaN. De igual forma, si ingresas un valor float, 
el programa hará un floor.

Me disculpo por hacer el código innecesariamente largo.