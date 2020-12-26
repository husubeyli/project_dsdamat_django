from django.db import models
from django.contrib.auth.models import AbstractUser, UnicodeUsernameValidator
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _

from django.utils import timezone

from account.managers import UserManager


class User(AbstractUser):
    username_validator = UnicodeUsernameValidator  # username silmek(overwrite elemek)
    username = models.CharField(
        _('username'),
        max_length=150,
        blank=True,
        null=True,
        unique=False,
        help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[username_validator],
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )

    #informations
    email = models.EmailField(_('Email'), unique=True)
    first_name = models.CharField(_("Name"), max_length=50)
    last_name = models.CharField(_("Surname"), max_length=50)
    image = models.ImageField(_("Image"), upload_to='profile_photo', blank=True, null=True)
    phonenumber = models.CharField(_("Phone"), max_length=50)
    is_agreement = models.BooleanField(_("Agreement"), default=False)
    is_notifaction_email = models.BooleanField(_("Notifaction for email"), default=False)
    is_notifaction_phone = models.BooleanField(_("Notifaction for phone"), default=False)
    rewardpoints = models.IntegerField(_("rewardpoints"), default=0)
    

    #moderations
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email


