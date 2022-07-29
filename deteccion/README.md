# Detección de Aves

### Archivos importantes:
* Object_detection_webcam.py ->Detección de Aves
* sendRealDB.py  -> Cliente Firebase para insertar datos
* serviceAccountKey.json  -> Key para acceso a Firebase
### Lenguajes usados:

* Python 

### Librerias:
* Tensor Flow
* Firebase
* serial

### Comandos Jetson Nano
> **Nota**: Abrir un terminal y ejecutar cada comando.
#### 1. Activar ambiente
```bash
$ source tf/bin/activate
```
#### 2. Ruta del proyecto
```bash
$ cd /home/iw/tensorflow1/models/research/object_detection
```
#### 3. Comando para ejecutar
```bash
$ python  Object_detection_webcam.py
```

