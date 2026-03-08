import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="services">
      <div class="services-bg">
        <div class="bg-shape-1"></div>
        <div class="bg-shape-2"></div>
      </div>

      <div class="container">
        <div class="section-header">
          <span class="section-label">שירותים</span>
          <h2 class="section-title">תחומי הטיפול שלי</h2>
          <p class="section-subtitle">
            אני מציע מגוון שירותים טיפוליים המותאמים לצרכים האישיים שלך,
            תוך שימוש בגישות מוכחות ועדכניות
          </p>
        </div>

        <div class="services-grid">
          @for (service of services; track service.title) {
            <div class="service-card" [style.--card-color]="service.color">
              <div class="card-icon">
                <span [innerHTML]="service.icon"></span>
              </div>
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-desc">{{ service.desc }}</p>
              <div class="card-tags">
                @for (tag of service.tags; track tag) {
                  <span class="tag">{{ tag }}</span>
                }
              </div>
              <div class="card-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          }
        </div>

        <div class="services-cta">
          <p>לא בטוח איזה טיפול מתאים לך? בוא נדבר על כך</p>
          <a href="https://wa.me/972501234567" target="_blank" rel="noopener" class="cta-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            שלח הודעה ונדבר
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background: var(--cream);
      position: relative;
      overflow: hidden;
    }

    .services-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .bg-shape-1 {
      position: absolute;
      top: -100px;
      right: -200px;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(82, 183, 136, 0.08) 0%, transparent 70%);
    }

    .bg-shape-2 {
      position: absolute;
      bottom: -100px;
      left: -200px;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(201, 167, 90, 0.08) 0%, transparent 70%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }

    .section-header {
      text-align: center;
      margin-bottom: 64px;

      .section-label {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--accent);
        background: rgba(201, 167, 90, 0.12);
        border: 1px solid rgba(201, 167, 90, 0.3);
        border-radius: 50px;
        padding: 6px 20px;
        margin-bottom: 20px;
      }

      .section-title {
        font-size: clamp(1.8rem, 3.5vw, 2.8rem);
        color: var(--primary);
        margin-bottom: 16px;
      }

      .section-subtitle {
        font-size: 1.05rem;
        color: var(--text-light);
        max-width: 560px;
        margin: 0 auto;
        line-height: 1.8;
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 60px;
    }

    .service-card {
      background: var(--white);
      border-radius: var(--border-radius);
      padding: 36px 28px;
      border: 1px solid rgba(27, 67, 50, 0.06);
      box-shadow: var(--shadow-sm);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      cursor: default;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 4px;
        background: var(--card-color, var(--primary));
        transform: scaleX(0);
        transition: transform 0.35s ease;
        transform-origin: right;
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);

        &::before {
          transform: scaleX(1);
        }

        .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .card-icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: color-mix(in srgb, var(--card-color, var(--primary)) 10%, transparent);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        font-size: 24px;
      }

      .card-title {
        font-family: 'Rubik', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 12px;
        line-height: 1.3;
      }

      .card-desc {
        font-size: 0.92rem;
        color: var(--text-medium);
        line-height: 1.75;
        margin-bottom: 20px;
      }

      .card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .tag {
        font-size: 0.72rem;
        font-weight: 500;
        color: var(--text-light);
        background: var(--cream);
        border-radius: 50px;
        padding: 4px 12px;
        border: 1px solid rgba(27, 67, 50, 0.08);
      }

      .card-arrow {
        position: absolute;
        top: 28px;
        left: 28px;
        color: var(--card-color, var(--primary));
        opacity: 0;
        transform: translateX(-8px);
        transition: all 0.3s ease;
      }
    }

    .services-cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
      padding: 40px;
      background: var(--white);
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(27, 67, 50, 0.08);
      box-shadow: var(--shadow-sm);

      p {
        font-size: 1.05rem;
        color: var(--text-medium);
        font-weight: 500;
      }
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #25d366;
      color: white;
      padding: 14px 28px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
      white-space: nowrap;

      &:hover {
        background: #1ebe5d;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
      }
    }

    @media (max-width: 900px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .services-grid {
        grid-template-columns: 1fr;
      }

      .services-cta {
        flex-direction: column;
        text-align: center;
        padding: 28px 20px;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '🧠',
      title: 'פסיכותרפיה אינטגרטיבית',
      desc: 'גישה המשלבת כלים מגוונים מעולמות פסיכולוגיים שונים, מותאמת לאישיותך ולצרכיך הייחודיים.',
      tags: ['חרדה', 'דיכאון', 'משבר זהות'],
      color: '#1b4332',
    },
    {
      icon: '💚',
      title: 'טיפול בטראומה (EMDR)',
      desc: 'שיטה מוכחת לעיבוד טראומות ממוקד ויעיל, המאפשרת ריפוי עמוק של חוויות כאובות מהעבר.',
      tags: ['PTSD', 'טראומה', 'ריפוי'],
      color: '#52b788',
    },
    {
      icon: '🌿',
      title: 'עבודת גוף-נפש',
      desc: 'שילוב מודע של הגוף בתהליך הטיפולי — דרך הנשימה, התחושות הפיזיות והתנועה.',
      tags: ['סומטי', 'מיינדפולנס', 'גוף'],
      color: '#2d6a4f',
    },
    {
      icon: '💑',
      title: 'טיפול זוגי',
      desc: 'מרחב בטוח לזוג לשיפור תקשורת, פתרון קונפליקטים ובניית קשר עמוק ומחבר יותר.',
      tags: ['תקשורת', 'זוגיות', 'אינטימיות'],
      color: '#c9a75a',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'טיפול משפחתי',
      desc: 'עבודה עם המשפחה כמערכת שלמה להבנת דינמיקות, שיפור יחסים וחיזוק הקשרים המשפחתיים.',
      tags: ['משפחה', 'הורות', 'דינמיקה'],
      color: '#8b5cf6',
    },
    {
      icon: '🌱',
      title: 'צמיחה אישית',
      desc: 'ליווי בתהליך מעמיק של הכרה עצמית, שינוי דפוסים מגבילים ובניית חיים מלאים ומשמעותיים.',
      tags: ['עצמי', 'פוטנציאל', 'שינוי'],
      color: '#0ea5e9',
    },
  ];
}
