from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from crud import views

router = routers.DefaultRouter()
router.register (r'crud', views.Carview, 'Carro')

urlpatterns = [
    path ("api/car/", include(router.urls)),
    path ("docs/", include_docs_urls(title="Cars API"))
]