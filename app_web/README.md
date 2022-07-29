# Página web

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