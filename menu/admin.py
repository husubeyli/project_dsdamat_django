from django.contrib import admin
from .models import (
    Menu,
)

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['title', 'displayParent']
    ordering = ('created_at',)
    list_filter = ['title']

    def displayParent(self, obj):
        return ", ".join([
            story.title for story in obj.parent_categories.all()
        ])
    
    displayParent.short_description = "Sub Categories"
    

