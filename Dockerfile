# Використовуємо офіційний образ з PHP 8.3 + Apache
FROM php:8.3-apache

# Копіюємо всі файли проєкту в папку, де Apache шукає сайт
COPY . /var/www/html/

# Даємо права на запис (щоб file_put_contents працював з tabs.json)
RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite  # якщо треба для .htaccess, але в тебе не треба

# Порт (Render використовує $PORT)
ENV PORT=8080
EXPOSE $PORT

# Запускаємо Apache на порту з змінної середовища
CMD sed -i "s/80/$PORT/g" /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf && exec apache2-foreground