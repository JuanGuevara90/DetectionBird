# Página web

### Archivos importantes:
* index.html -> pagina web para la visualizar la información.
* index.js -> cliente firebase y manejador de la tabla.
* index.php -> punto de ejecucion por parte del servidor web de heroku.
### Lenguajes usados:

* Html v5 
* JavaScript
* CSS3 - Bootstrap v4.5

### Librerias:

* Firebase

### Comandos para gestionar proyecto heroku
> **Nota**: Abrir un terminal y ubicarse en un directorio favorito.

```bash
$ heroku login
```
Clonar el repostorio de heroku
```bash
$ heroku git:clone -a aves-deteccion-utn 
$ cd aves-deteccion-utn
```
Desplegar cambios al servidor de heroku
```bash
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```