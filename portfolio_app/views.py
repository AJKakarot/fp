from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from .forms import ContactForm
from .projects_data import BEGINNER_PROJECTS, INTERMEDIATE_PROJECTS, ADVANCED_PROJECTS


def home_view(request):
    form = ContactForm()
    beginner_projects = BEGINNER_PROJECTS
    intermediate_projects = INTERMEDIATE_PROJECTS
    advanced_projects = ADVANCED_PROJECTS

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            subject = f"New Contact Form Submission from {name}"
            full_message = f"Message from {name} ({email}):\n\n{message}"

            try:
                send_mail(
                    subject,
                    full_message,
                    settings.DEFAULT_FROM_EMAIL,
                    ['dangerm249@gmail.com'],
                    fail_silently=False,
                )
                return redirect('thanks')
            except Exception:
                messages.error(request, "We couldn't send your message. Please try again or email directly.")
        else:
            messages.error(request, "Please correct the errors below.")

    context = {
        'form': form,
        'beginner_projects': beginner_projects,
        'intermediate_projects': intermediate_projects,
        'advanced_projects': advanced_projects,
    }

    return render(request, 'index.html', context)


def thanks_view(request):
    return render(request, 'thanks.html')
