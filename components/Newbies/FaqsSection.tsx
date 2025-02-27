import { LINKS } from '@/config/consts';
import Faqs from '../Common/Faqs';

const faqs = [
  {
    question: '1. מה זה קוד פתוח?',
    answer: (
      <p>
        קוד פתוח מתייחס לתוכנות או פרויקטים שקוד המקור שלהם זמין לציבור, ומאפשר
        לכל אחד לצפות, לשנות ולהפיץ אותו. זה מעודד שיתוף פעולה ושקיפות בין
        מפתחים ברחבי העולם.
      </p>
    ),
  },
  {
    question: '2. למה קוד פתוח זה חשוב?',
    answer: (
      <p>
        קוד פתוח מספק שקיפות, תמיכה קהילתית, והזדמנויות לשיפור תוכנות קיימות. זה
        גם מקנה חופש בשימוש בתוכנות ומסייע למנוע תלות בספקי תוכנה מסוימים.
      </p>
    ),
  },
  {
    question: '3. למה כדאי לי לתרום לקוד פתוח?',
    answer: (
      <p>
        השתתפות בפרויקטים בקוד פתוח מאפשרת רכישת ניסיון בעולם האמיתי, קבלת פידבק
        ממפתחים מנוסים, הכרת שיטות עבודה חדשות, למידת טכנולוגיות חדשות, תרומה
        וקידום פרויקטים משמעותיים, ושיתוף פעולה עם קהילה מקומית וגלובלית.
      </p>
    ),
  },
  {
    question: '4. האם קוד פתוח מיועד למפתחים בלבד?',
    answer: (
      <p>
        לא! פרויקטי קוד פתוח צריכים אנשים מגוונים עם מגוון מיומנויות, כולל
        מפתחים, בודקים, מעצבים, מנהלי קהילה ועוד! כל אחד יכול לתרום לקוד פתוח.
      </p>
    ),
  },
  {
    question: '5. אין לי ניסיון בקוד פתוח / פרויקטים, האם קוד פתוח יתאים לי?',
    answer: (
      <p>
        בהחלט כן! פרויקטי קוד פתוח מקבלים בברכה תורמים בכל הרמות. לפרויקטים רבים
        יש משימות המתאימות גם למתחילים, ולעתים הן מסומנות בתור
        &quot;beginner-friendly&quot; או &quot;good first issue&quot;. תמיד
        תוכלו גם להתייעץ בדיסקורד כדי להבין איפה תוכלו להשתלב.
      </p>
    ),
  },
  {
    question: '6. איפה אפשר למצוא פרויקטים בקוד פתוח לתרום להם?',
    answer: (
      <p>
        ממש אצלנו בקהילה!{' '}
        <span className="underline  text-purple-500">
          <a href={LINKS.PROJECTS} target="_blank">
            בעמוד הפרויקטים
          </a>
        </span>{' '}
        תוכלו למצוא מידע על פרויקטים בקוד פתוח במגוון שפות ותחומים. <br />
        <span className="underline  text-purple-500">
          <a href={LINKS.DISCORD}target="_blank">
            בדיסקורד שלנו
          </a>
        </span>{' '}
        יש ערוצים לכל הפרויקטים, שם אפשר לשאול שאלות, להתייעץ ולהיעזר בחברי
        וחברות הקהילה.
      </p>
    ),
  },
  {
    question: '7. איך אפשר לתרום לפרויקט קוד פתוח?',
    answer: (
      <p>
        חשוב מאוד לקרוא את הנחיות התרומה לפרויקט שתרצו להצטרף אליו. בכל פרויקט
        יכולים להיות דגשים ותהליכים מעט שונים. <br />
        באופן כללי תהליך תרומה לפרויקט כולל את השלבים הבאים: <br />
        - בדיקה אילו Issues קיימים בפרויקט, או מציאת באג שצריך לתקן <br />
        - בקשה לטפל ב-Issue <br />
        - שכפול הפרויקט באמצעות Fork <br />
        - יצירת ענף (Branch) עבור הפיצ&apos;ר / הבאג <br />
        - עבודה על הפיצ&apos;ר / הבאג <br />
        - יצירת Pull Request למיזוג השינויים <br />
      </p>
    ),
  },
];

const FaqsSection = () => {
  return (
    <div className="w-full py-12 md:py-20">
      <Faqs faqs={faqs} />
    </div>
  );
};

export default FaqsSection;
