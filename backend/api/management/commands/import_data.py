import json
from django.core.management.base import BaseCommand
from api.models import User

class Command(BaseCommand):
    help = 'Import data from db.json'

    def handle(self, *args, **kwargs):
        with open('db.json') as file:
            data = json.load(file)
            for item in data:
                User.objects.update_or_create(
                    id=item['id'],
                    defaults={
                        'name': item['name'],
                        'email': item['email'],
                        # add other fields as needed
                    }
                )
        self.stdout.write(self.style.SUCCESS('Data imported successfully.'))
