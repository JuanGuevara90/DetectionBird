# **************************************************************
# **************************************************************
# ************* ARCHIVO MANEJO DE CLIENTE FIREBASE *************
# **************************************************************
# **************************************************************


# Import database module.
from firebase_admin import db
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
# Modulo de base64
import base64
# Modulo de fecha
from datetime import datetime

# Fetch the service account key JSON file contents
cred = credentials.Certificate('serviceAccountKey.json')
# Initialize the app with a None auth variable, limiting the server's access
firebase_admin.initialize_app(cred, {'databaseURL': 'https://visionartificial-e9514-default-rtdb.firebaseio.com'})
# Metodo para el encode de la image en base64
def get_base64_encoded_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')

# Metodo para enviar los datos a Firebase
def sendDataFireBase(file):
    try:
        fecha = datetime.today().strftime('%Y-%m-%d')
        hora = datetime.today().strftime('%H:%M:%S')
        ref = db.reference('')
        posts_ref = ref.child('tasks')
        image=get_base64_encoded_image(file)
        new_post_ref = posts_ref.push()
        new_post_ref.set({
            'fecha': fecha,
            'hora': hora,
            'imagen':image
        })
        print("Registro guardado")
    except  Exception as e:
        print(e)