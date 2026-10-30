IQRA digital school.
index.html   student site only (no admin tools; every account is treated as a student here).
admin.html   staff console, opens at /admin (admins and teachers only; students are turned away).
app/         shared code used by both pages: style.css, gate.js (Firebase login), data.js, small.js, app.js.
When you change a file in app/, bump the ?v= number in both index.html and admin.html so browsers fetch the new copy.
Edit and push to main; GitHub Pages publishes it.
