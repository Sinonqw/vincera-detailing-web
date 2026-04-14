Vincera: Detailing Management System
Это full-stack решение для студий детейлинга. Проект объединяет современный интерфейс для клиентов и автоматизацию бизнес-процессов на бэкенде

🌟 Key Features
Dynamic Booking System: Интуитивно понятный интерфейс для записи на услуги детейлинга
Business Automation (n8n): Полностью автоматизированный воркфлоу обработки заявок
CRM Integration: Автоматическое ведение базы клиентов и заказов в Google Sheets
Instant Notifications: Мгновенные уведомления о новых записях в Telegram для администратора
High-End Design: Премиальный адаптивный интерфейс, оптимизированный под любые устройства

🏗️ Architecture
Проект построен на основе Decoupled Architecture:
Frontend: Next.js (App Router) для высокой производительности и SEO
Automation Layer: n8n выступает в роли "мозга" системы, обрабатывая вебхуки с фронтенда
Data Stack: Google Sheets API для хранения данных и Telegram API для связи

🚀 Getting Started
1. Prerequisites
Node.js 18.x или выше

Установленный инстанс n8n (Self-hosted или Cloud)

2. Installation
git clone https://github.com/Sinonqw/vincera-detailing-web.git
cd vincera-detailing-web
npm install
3. Environment Setup
Создай файл .env.local в корне проекта:

Фрагмент коду
N8N_WEBHOOK_URL=your_n8n_webhook_url
4. Running the App
npm run dev

🤖 n8n Workflow Logic
Система автоматизации Vincera выполняет следующие шаги:

Catch Hook: Принимает данные формы записи с сайта
Data Processing: Валидирует и форматирует данные
Google Sheets: Создает новую строку в таблице учета
Telegram Bot: Отправляетсообщение менеджеру студии/клиенту

<img width="1044" height="469" alt="image" src="https://github.com/user-attachments/assets/42835dd4-82f1-4060-80b2-a507a5a0397c" />


🛠 Tech Stack
Framework: Next.js 
Language: TypeScript
Styling: Tailwind CSS
Automation: n8n (Webhooks & API)
Deployment: Vercel
