from flask import Flask

def create_app():
    app = Flask(__name__)

    # Importar rutas aquí si tienes rutas
    from .routes import main
    app.register_blueprint(main)

    return app
