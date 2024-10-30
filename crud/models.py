from django.db import models

class Car(models.Model): 
    Marca = models.CharField(max_length=200)
    Sucursal = models.CharField(max_length=200)
    Aspirante = models.CharField(max_length=200)

    def __str__(self):
        return self.Aspirante
