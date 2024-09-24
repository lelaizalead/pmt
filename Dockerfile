# PHP 8.2 FPM kullanarak yeni bir Docker imajı oluştur
FROM php:8.2-fpm

# Sistem paketlerini güncelle ve gerekli paketleri kur
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libzip-dev \
    && docker-php-ext-install zip pdo pdo_mysql

# Composer'ı yükle
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

# Laravel Installer'ı global olarak yükle
RUN composer global require laravel/installer

# Çalışma dizinini ayarla
WORKDIR /var/www
