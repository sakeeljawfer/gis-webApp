# gis-webApp

Gis WebApp

### Getting start with this project

##### Download the project

```bash
git clone https://github.com/iamtekson/geodjango-app.git
cd geodjango-app
```

Make sure to change the database connection parameters from `geoProject/settings.py` file,

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'geoapp',
        'USER': 'postgres',
        'PASSWORD': 'admin',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

##### Installation of geoserver

For the geoserver installation in windows, watch [this video](https://www.youtube.com/watch?v=PftviHKP7Us), For ubuntu installation follow [this tutorial](https://dev.to/iamtekson/deploy-web-gis-in-ubuntu-server-nginx-tomcat-postgis-259j)

##### Installation of dependencies

In windows the gdal can be installed by following method;

```bash
# Gdal installations
pip install pipwin
pipwin refresh
pipwin install gdal
```

In Ubuntu, the gdal can be installed by following method;

```bash
sudo apt install -y gdal-bin libgdal-dev libgeos-dev libproj-dev
pip install pygdal=="`gdal-config --version`.*"
```

Install [geopandas](https://geopandas.org/) and [geoserver-rest](https://pypi.org/project/geoserver-rest/) manually by following there official documentation.

Now you can install the other dependencies as mentioned in requirements.txt

```bash
# Other dependencies
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
```

Create the django superuser

```bash
python manage.py createsuperuser
```

##### Run server

Now you can run the django server using following command,

```bash
python manage.py runserver
```

Now your site will be running in this url: http://localhost:8000/
