from django.shortcuts import render, redirect
from .models import *
from account.models import *
# Create your views here.


def cart(request):
	try:
		customer = request.user.customer
	except:
		device = request.COOKIES['device']
		customer, created = Customer.objects.get_or_create(device=device)
	order, created = Order.objects.get_or_create(customer=customer, complete=False)
	context = {'order':order}
	return render(request, 'checkout.html', context)


def delete_from_cart(request, item_id):
	item_to_delete = OrderItem.objects.filter(pk=item_id)
	if item_to_delete.exists():
		item_to_delete[0].delete()
	return redirect('cart')