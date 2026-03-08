import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-main">
        <div class="container">
          <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-brand">
              <div class="footer-logo">
                <div class="logo-icon">
                  <img src="/logo.jpeg" alt="אברהם אליעזר" />
                </div>
                <div>
                  <div class="logo-name">אברהם אליעזר</div>
                  <div class="logo-title">פסיכותרפיסט אינטגרטיבי</div>
                </div>
              </div>
              <p class="brand-desc">
                מטפל גוף ונפש עם מעל 15 שנות ניסיון, המלווה אנשים בתהליכים עמוקים של ריפוי, צמיחה ושינוי משמעותי בחייהם.
              </p>
              <a href="https://wa.me/972501234567" target="_blank" rel="noopener" class="footer-wa-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                שלח הודעה בוואטסאפ
              </a>
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
              <h4 class="footer-col-title">ניווט מהיר</h4>
              <ul class="footer-links">
                @for (link of navLinks; track link.label) {
                  <li>
                    <a [href]="link.href" (click)="scrollTo($event, link.id)">{{ link.label }}</a>
                  </li>
                }
              </ul>
            </div>

            <!-- Services Links -->
            <div class="footer-col">
              <h4 class="footer-col-title">שירותים</h4>
              <ul class="footer-links">
                @for (s of serviceLinks; track s) {
                  <li><a href="#services" (click)="scrollTo($event, 'services')">{{ s }}</a></li>
                }
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="footer-col">
              <h4 class="footer-col-title">פרטי קשר</h4>
              <div class="footer-contact-items">
                <div class="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                  </svg>
                  <span>050-123-4567</span>
                </div>
                <div class="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>avraham&#64;therapy.co.il</span>
                </div>
                <div class="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>רחוב הרצל 45, תל אביב</span>
                </div>
                <div class="footer-hours">
                  <div class="hours-title">שעות קבלה</div>
                  <div>א׳-ה׳: 9:00-20:00</div>
                  <div>ו׳: 9:00-14:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="container">
          <div class="bottom-inner">
            <p class="copyright">
              &copy; {{ currentYear }} אברהם אליעזר | פסיכותרפיסט אינטגרטיבי. כל הזכויות שמורות.
            </p>
            <div class="bottom-badges">
              <span class="ethic-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                סודיות מלאה
              </span>
              <span class="ethic-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                קוד אתיקה מקצועי
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--primary-dark);
      color: rgba(255,255,255,0.8);
    }

    .footer-main {
      padding: 80px 0 60px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.4fr;
      gap: 48px;
    }

    /* Brand */
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 14px;

      .logo-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        border: 2px solid rgba(255,255,255,0.2);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
        }
      }

      .logo-name {
        font-family: 'Rubik', sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        color: white;
      }

      .logo-title {
        font-size: 0.7rem;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.05em;
      }
    }

    .brand-desc {
      font-size: 0.88rem;
      color: rgba(255,255,255,0.55);
      line-height: 1.8;
    }

    .footer-wa-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #25d366;
      color: white;
      padding: 11px 22px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.85rem;
      text-decoration: none;
      transition: all 0.3s ease;
      width: fit-content;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.25);

      &:hover {
        background: #1ebe5d;
        transform: translateY(-2px);
      }
    }

    /* Cols */
    .footer-col {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .footer-col-title {
      font-family: 'Rubik', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: white;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin: 0;
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0;
      margin: 0;

      li a {
        font-size: 0.88rem;
        color: rgba(255,255,255,0.55);
        text-decoration: none;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 6px;

        &:hover {
          color: var(--accent);
          padding-right: 4px;
        }
      }
    }

    /* Contact */
    .footer-contact-items {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-contact-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.6);

      svg {
        color: var(--accent);
        flex-shrink: 0;
      }
    }

    .footer-hours {
      margin-top: 8px;
      padding: 14px;
      background: rgba(255,255,255,0.05);
      border-radius: 10px;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.7;

      .hours-title {
        color: var(--accent);
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 4px;
      }
    }

    /* Bottom Bar */
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 20px 0;
    }

    .bottom-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }

    .copyright {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.35);
      margin: 0;
    }

    .bottom-badges {
      display: flex;
      gap: 12px;
    }

    .ethic-badge {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.35);
      padding: 5px 12px;
      background: rgba(255,255,255,0.05);
      border-radius: 50px;

      svg {
        color: var(--accent);
      }
    }

    @media (max-width: 900px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }

      .footer-brand {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 480px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }

      .footer-main {
        padding: 50px 0 40px;
      }

      .bottom-inner {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'ראשי', href: '#home', id: 'home' },
    { label: 'אודות', href: '#about', id: 'about' },
    { label: 'שירותים', href: '#services', id: 'services' },
    { label: 'תעודות', href: '#certificates', id: 'certificates' },
    { label: 'צור קשר', href: '#contact', id: 'contact' },
  ];

  serviceLinks = [
    'פסיכותרפיה אינטגרטיבית',
    'טיפול בטראומה EMDR',
    'עבודת גוף-נפש',
    'טיפול זוגי',
    'טיפול משפחתי',
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
