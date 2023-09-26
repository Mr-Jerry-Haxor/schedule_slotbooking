from django.contrib import admin
from .models import Booking

class BookingAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'date', 'system', 'slot', 'is_accepted', 'accepted_by')
    list_filter = ('is_accepted',)
    search_fields = ('first_name', 'last_name', 'email', 'date', 'system', 'slot', 'accepted_by')
    list_editable = ('is_accepted',)

admin.site.register(Booking, BookingAdmin)
