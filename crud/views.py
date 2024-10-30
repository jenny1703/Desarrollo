
from rest_framework import viewsets
from .serializer import Carserializer
from .models import Car
# Create your views here.
class Carview (viewsets.ModelViewSet):
    serializer_class = Carserializer
    queryset= Car.objects.all ()