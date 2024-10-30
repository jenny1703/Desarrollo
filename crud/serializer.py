from rest_framework import serializers
from .models import Car

class Carserializer (serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'Marca', 'Sucursal', 'Aspirante')