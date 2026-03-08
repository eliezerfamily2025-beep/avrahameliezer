import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="about-grid">
          <!-- Left: Visual -->
          <div class="about-visual">
            <div class="img-wrapper">
              <div class="img-placeholder">
                <img src="/logo.jpeg" alt="אברהם אליעזר - פסיכותרפיסט אינטגרטיבי" />
              </div>
              <div class="img-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>מוסמך ומנוסה</span>
              </div>
            </div>

            <div class="about-cards">
              <div class="mini-card">
                <div class="mini-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <div class="mini-card-num">500+</div>
                  <div class="mini-card-label">מטופלים</div>
                </div>
              </div>
              <div class="mini-card mini-card-accent">
                <div class="mini-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <div class="mini-card-num">15+</div>
                  <div class="mini-card-label">שנות ניסיון</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Text -->
          <div class="about-text">
            <span class="section-label">אודות</span>
            <h2 class="section-title">גישה אינטגרטיבית לריפוי הנפש</h2>
            <p class="about-lead">
              שלום, אני אברהם אליעזר — פסיכותרפיסט אינטגרטיבי ומטפל גוף-נפש עם ניסיון של מעל 15 שנה
              בליווי אנשים בתהליכים עמוקים של ריפוי וצמיחה אישית.
            </p>
            <p class="about-body">
              גישתי הטיפולית משלבת עולמות שונים: פסיכולוגיה מערבית קלאסית לצד ידע מזרחי עמוק,
              עבודה עם הגוף, הנפש והרוח כמכלול אחד. אני מאמין שכל אחד נושא בתוכו את הכוח להחלים
              ולצמוח, ותפקידי הוא לסייע לך למצוא ולממש כוח זה.
            </p>
            <p class="about-body">
              הטיפול שאני מציע הוא מרחב בטוח, חסוי ומכיל, שבו ניתן לחקור יחד את הדפוסים, הפצעים
              והמשאבים שלך — ולצעוד קדימה לחיים מלאים ומשמעותיים יותר.
            </p>

            <div class="about-highlights">
              @for (h of highlights; track h.text) {
                <div class="highlight-item">
                  <div class="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>{{ h.text }}</span>
                </div>
              }
            </div>

            <div class="about-actions">
              <a href="#contact" class="btn-primary-about" (click)="scrollTo($event, 'contact')">
                קבע פגישת היכרות
              </a>
              <a href="https://wa.me/972501234567" target="_blank" rel="noopener" class="btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                שלח הודעה
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--white);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(27, 67, 50, 0.1), transparent);
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 80px;
      align-items: center;
    }

    /* Visual Side */
    .about-visual {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .img-wrapper {
      position: relative;
    }

    .img-placeholder {
      border-radius: 24px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      aspect-ratio: 3/4;
      max-height: 480px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 15%;
        display: block;
      }
    }

    .img-badge {
      position: absolute;
      bottom: -16px;
      left: 24px;
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--accent);
      color: white;
      padding: 12px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.85rem;
      box-shadow: 0 4px 20px rgba(201, 167, 90, 0.4);
    }

    .about-cards {
      display: flex;
      gap: 16px;
      margin-top: 8px;
    }

    .mini-card {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 14px;
      background: var(--cream);
      border: 1px solid rgba(27, 67, 50, 0.08);
      border-radius: 16px;
      padding: 18px 20px;

      .mini-card-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: rgba(27, 67, 50, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary);
        flex-shrink: 0;
      }

      .mini-card-num {
        font-family: 'Rubik', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary);
        line-height: 1;
      }

      .mini-card-label {
        font-size: 0.75rem;
        color: var(--text-light);
        margin-top: 2px;
      }
    }

    .mini-card-accent {
      background: var(--primary);

      .mini-card-icon {
        background: rgba(255,255,255,0.15);
        color: var(--accent);
      }

      .mini-card-num {
        color: var(--accent);
      }

      .mini-card-label {
        color: rgba(255,255,255,0.7);
      }
    }

    /* Text Side */
    .about-text {
      display: flex;
      flex-direction: column;
    }

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
      width: fit-content;
    }

    .section-title {
      font-size: clamp(1.8rem, 3vw, 2.6rem);
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 20px;
    }

    .about-lead {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--text-dark);
      line-height: 1.75;
      margin-bottom: 16px;
    }

    .about-body {
      font-size: 1rem;
      color: var(--text-medium);
      line-height: 1.85;
      margin-bottom: 16px;
    }

    .about-highlights {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 28px 0;
    }

    .highlight-item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.95rem;
      color: var(--text-dark);
      font-weight: 500;

      .highlight-icon {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(82, 183, 136, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--sage);
        flex-shrink: 0;
      }
    }

    .about-actions {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn-primary-about {
      display: inline-flex;
      align-items: center;
      background: var(--primary);
      color: white;
      padding: 14px 30px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(27, 67, 50, 0.3);

      &:hover {
        background: var(--primary-light);
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(27, 67, 50, 0.4);
      }
    }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--primary);
      padding: 12px 24px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      border: 2px solid rgba(27, 67, 50, 0.2);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary);
        background: rgba(27, 67, 50, 0.05);
      }
    }

    @media (max-width: 900px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 50px;
      }

      .about-visual {
        max-width: 400px;
        margin: 0 auto;
        width: 100%;
      }

      .img-placeholder {
        max-height: 360px;
      }
    }

    @media (max-width: 480px) {
      .about-cards {
        flex-direction: column;
      }

      .about-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .btn-primary-about, .btn-ghost {
        justify-content: center;
        text-align: center;
      }
    }
  `]
})
export class AboutComponent {
  highlights = [
    { text: 'טיפול בגישה אינטגרטיבית המשלבת גוף, נפש ורוח' },
    { text: 'פגישות פנים אל פנים ואונליין לנוחיותכם' },
    { text: 'סודיות מלאה ומרחב בטוח לכל תהליך' },
    { text: 'התאמה אישית של הטיפול לצרכים ייחודיים' },
    { text: 'עבודה עם מבוגרים, זוגות ומשפחות' },
  ];

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
