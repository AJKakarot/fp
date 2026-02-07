from django.shortcuts import render
from django.core.mail import send_mail
from .forms import ContactForm
from .models import BeginnerProject, IntermediateProject, AdvancedProject

def home_view(request):
    form = ContactForm()
    beginner_projects = BeginnerProject.objects.all()
    intermediate_projects = IntermediateProject.objects.all()
    advanced_projects = AdvancedProject.objects.all()

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            subject = f"New Contact Form Submission from {name}"
            full_message = f"Message from {name} ({email}):\n\n{message}"

            send_mail(
                subject,
                full_message,
                'email',
                ['dangerm249@gmail.com'],
            )
            return render(request, 'thanks.html')

    context = {
        'form': form,
        'beginner_projects': beginner_projects,
        'intermediate_projects': intermediate_projects,
        'advanced_projects': advanced_projects,
    }

    return render(request, 'index.html', context)
