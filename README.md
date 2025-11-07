# OnyxCloud Pterodactyl Admin Theme

A sleek, modern dark theme for Pterodactyl Panel 1.x, designed to enhance the admin interface with a professional and intuitive experience.

![OnyxCloud Theme Preview](preview.png)

## Features

- 🎨 Modern dark theme with a clean, professional look
- 🖥️ Optimized for all screen sizes
- 🚀 Improved UI/UX for all admin panel sections
- 🎯 Better contrast and readability
- ⚡ Performance optimized
- 🔧 Easy to customize and extend

## Installation

### Prerequisites

- Pterodactyl Panel 1.x
- Node.js 16.x or later
- Composer
- PHP 8.1 or later

### Installation Steps

1. **Clone the repository** into your Pterodactyl themes directory:
   ```bash
   cd /var/www/pterodactyl/themes/
   git clone https://github.com/yourusername/onyxcloud-theme.git onyxcloud
   ```

2. **Install dependencies**:
   ```bash
   cd onyxcloud
   composer install --no-dev --optimize-autoloader
   npm install
   ```

3. **Build the assets**:
   ```bash
   npm run build
   ```

4. **Enable the theme** by adding the following to your `.env` file:
   ```
   APP_THEME=onyxcloud
   ```

5. **Clear the view cache**:
   ```bash
   php artisan view:clear
   php artisan cache:clear
   ```

6. **Set proper permissions**:
   ```bash
   chown -R www-data:www-data /var/www/pterodactyl/
   chmod -R 755 /var/www/pterodactyl/
   ```

7. **Restart your web server**:
   ```bash
   # For Apache
   systemctl restart apache2

   # For Nginx + PHP-FPM
   systemctl restart nginx
   systemctl restart php8.1-fpm
   ```

## Updating

To update the theme to the latest version:

```bash
cd /var/www/pterodactyl/themes/onyxcloud
git pull origin main
npm install
npm run build
php artisan view:clear
php artisan cache:clear
```

## Customization

### Colors

You can customize the theme colors by modifying the CSS variables in `resources/scripts/overrides.css`. The main color variables are:

```css
:root {
    --onyx-primary: #6c5ce7;
    --onyx-primary-hover: #5649b8;
    --onyx-secondary: #a29bfe;
    --onyx-dark: #2d3436;
    --onyx-darker: #1e2224;
    --onyx-darkest: #141718;
    --onyx-light: #f8f9fa;
    --onyx-lighter: #ffffff;
    --onyx-danger: #ff7675;
    --onyx-success: #00b894;
    --onyx-warning: #fdcb6e;
    --onyx-info: #74b9ff;
}
```

### Custom CSS/JS

To add custom CSS or JavaScript, you can create a `custom.css` or `custom.js` file in the `public` directory. These files will be automatically loaded by the theme.

## Development

If you want to contribute to the theme or make custom modifications, follow these steps:

1. Install development dependencies:
   ```bash
   npm install --save-dev
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Make your changes to the source files in the `resources` directory.

4. Build the assets for production:
   ```bash
   npm run build
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/yourusername/onyxcloud-theme/issues).

## Preview

![Dashboard Preview](screenshots/dashboard.png)
![Servers List](screenshots/servers.png)
![Server View](screenshots/server-view.png)

## Credits

- [Pterodactyl Panel](https://pterodactyl.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Inter Font](https://rsms.me/inter/)
