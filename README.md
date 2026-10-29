# 🥐 כל דגן — DaganForge (DF)

**מאגר אתר הקטלוג של מאפיית כל דגן** · מהדורת פיתוח **0.0.4** · 29.10.2026

🌐 [אתר ההדגמה](https://kol-dagan-market-2026.cybershamanic.chatgpt.site)

> מוצרי האתר ותמונות המקור מבוססים על הקטלוג שהועבר לפרויקט. מחירים, קופונים והנחות הם להמחשה בלבד. אין סליקה או משלוח הזמנות.

## ✨ יכולות

- 68 מוצרים עם קטגוריות, חיפוש, מיון ומועדפים
- 22 צילומי מקור ו־4 גיליונות הדמיות מוצרים
- סל הנשמר במכשיר ומצב לקוח פרטי/סיטונאי
- מבצעים וקופונים לדוגמה
- מפת דרכים המתעדכנת מתוך `TODO.md`
- כרטיס מוצר מורחב, חיפוש חלופי למילים נפוצות והדפסת קטלוג מסונן
- טופס ליצירת טיוטת הצעת מחיר סיטונאית להעתקה (ללא שליחה)
- חלונות יומן גרסאות ואודות בונה האתר
- עברית RTL ועיצוב מותאם למובייל

## 🚀 התקנה ב־GitHub Pages ללא תלות חיצונית

1. צור מאגר חדש ב־GitHub, לדוגמה `kol-dagan-bakery`.
2. העלה את **תוכן התיקייה הראשית של הארכיון**, כולל `docs` וכל מסמכי Markdown.
3. פתח **Settings → Pages → Build and deployment**.
4. בחר **Deploy from a branch**, ענף `main`, תיקייה `/docs`, ואז **Save**.
5. לאחר הפריסה יופיע קישור בפורמט `https://USERNAME.github.io/kol-dagan-bakery/`.

אפשר להשתמש בחשבון [Anlominus](https://github.com/Anlominus), ב־[AnLoMinus](https://github.com/AnLoMinus?tab=repositories) או בכל מאגר בשליטתך.

### ⌨️ לחלופין, העלאה דרך Git

```bash
git init
git add .
git commit -m "feat: DaganForge 0.0.4"
git branch -M main
git remote add origin https://github.com/USERNAME/kol-dagan-bakery.git
git push -u origin main
```

אין לבצע `git init` בתוך מאגר שכבר קיים.

## 📂 מבנה המאגר

```text
kol-dagan-bakery/
├── README.md
├── DEPLOYMENT.md
├── CREDITS.md
├── CHANGELOG.md
├── TODO.md
└── docs/
    ├── index.html
    ├── app.js / upgrade.js / roadmap.js / release004.js
    ├── style.css / fusion.css / photos.css
    ├── upgrade.css / roadmap.css / release004.css
    ├── CHANGELOG.md / TODO.md
    ├── catalog/  (22 תמונות מקור)
    └── catalog-products-0.png ... catalog-products-3.png
```

## 🛠️ איך עורכים?

- מוצרים ומחירי הדגמה: `docs/app.js`.
- מבצעים וקופונים: `docs/index.html`, מקטע `#deals`.
- מראה וצבעים: `docs/fusion.css`, `docs/roadmap.css`.
- קרדיטים באתר: `docs/index.html`, חלון `builderDialog`.
- משימות: `docs/TODO.md` ועותק `TODO.md` בשורש.
- גרסאות: `docs/CHANGELOG.md` ועותק `CHANGELOG.md` בשורש.
- כרטיסי מוצר, הדפסה וטופס הצעת מחיר: `docs/release004.js` ו־`docs/release004.css`.

**הערת מספור:** 0.0.4 נקבעה לבקשת בעל הפרויקט, אף שהמהדורות הקודמות נשאו מספרים 0.3.0 ו־0.2.0. ההיסטוריה נשמרת ב־CHANGELOG.

### 🔬 בדיקה מקומית

```bash
python3 -m http.server 8000 --directory docs
```

לאחר מכן פתח `http://localhost:8000`. אין צורך ב־Node או בספריות JavaScript חיצוניות.

## 📚 מסמכי המשך

- [מפת הדרכים](TODO.md)
- [יומן גרסאות](CHANGELOG.md)
- [מדריך הפריסה](DEPLOYMENT.md)
- [קרדיטים](CREDITS.md)

## 👨‍💻 בונה האתר

**לאון יעקובוב · Cyber Shamanic · AnLoMinus** — אתרים, אבטחת סייבר, בינה מלאכותית, אוטומציה, OSINT וקוד פתוח.

- [WhatsApp — 053-536-6687](https://wa.me/972535366687) · טלפון נוסף: 054-328-5967
- [cybershamanic@gmail.com](mailto:cybershamanic@gmail.com)
- [GitHub](https://github.com/Anlominus) · [LinkedIn](https://www.linkedin.com/in/anlominus/) · [Facebook](https://www.facebook.com/AnlominusX) · [CodePen](https://codepen.io/Anlominus)

**זכויות תוכן העסק ותצלומיו שייכות לבעליהן.** אין במסירה זו רישיון שימוש חוזר בתמונות לצד שלישי ללא הרשאה.
