from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
	path('register/', UserRegistrationAPIView.as_view(), name='register'),
	path('login/', UserLoginAPIView.as_view(), name='login'),
	path('logout/', UserLogoutAPIView.as_view(), name='logout'),
	path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
	path('user/', UserAPIView.as_view(), name='user'),
]