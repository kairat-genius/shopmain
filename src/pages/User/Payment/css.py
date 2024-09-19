import re

# Замените на путь к вашему CSS-файлу
css_file_path = './Payment.css'

with open(css_file_path, 'r') as file:
    css_data = file.read()

# Добавляем !important к каждому свойству
updated_css_data = re.sub(r'([^{}:]+:\s*[^;]+)(;|\s*})', r'\1 !important\2', css_data)

with open(css_file_path, 'w') as file:
    file.write(updated_css_data)

print('CSS обновлен успешно.')