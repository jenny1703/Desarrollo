# Generated by Django 5.1.2 on 2024-10-28 03:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='Aspirante',
            new_name='aspirante',
        ),
        migrations.RenameField(
            model_name='car',
            old_name='Marca',
            new_name='marca',
        ),
        migrations.RenameField(
            model_name='car',
            old_name='Sucursal',
            new_name='sucursal',
        ),
    ]
