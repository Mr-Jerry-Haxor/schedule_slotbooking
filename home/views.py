from django.shortcuts import render , HttpResponse
from datetime import datetime, timedelta
from .models import *
from slot_booking.module import *

# Create your views here.


def home(request):
    if request.user.is_authenticated:
        days = validWeekday(7)
        
        bookings = {}
        for i in days:
            bookings[i[0]] = [
                ['System 1',['', '', '', '']],
                ['System 2',['', '', '', '']],
                ['System 3',['', '', 'booked', '']],
                ['System 4',['', '', '', '']],
                ['System 5',['', '', '', '']]
            ] 
        
        if request.method == 'GET':
            
            return render(request, 'home.html', {'bookings': bookings})
        else:
            date = request.POST.get('selected_date')
            system = request.POST.get('selected_system')
            slot = request.POST.get('selected_time_slot')
            ans = date + '-' + system + '-' + slot
            return HttpResponse("details successfully received:  " + ans)
    else:
        return render(request, 'index.html')
    
 
 
 
 
 
 
 
 
    
def validWeekday(days):
    today = datetime.now()
    weekdays = []
    for i in range (0, days):
        x = today + timedelta(days=i)
        y = x.strftime('%A')
        if y == 'Monday' or y == 'Tuesday' or y == 'Wednesday'  or y == 'Thursday'  or y == 'Friday':
            weekdays.append([x.strftime('%d-%m-%Y'), y])
    return weekdays