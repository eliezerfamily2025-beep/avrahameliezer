import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="contact">
      <div class="contact-bg">
        <div class="bg-blob-1"></div>
        <div class="bg-blob-2"></div>
      </div>

      <div class="container">
        <div class="contact-layout">
          <!-- Info Side -->
          <div class="contact-info">
            <span class="section-label">צור קשר</span>
            <h2 class="section-title">בוא נדבר</h2>
            <p class="contact-intro">
              הצעד הראשון הוא לפנות. אני כאן כדי לענות על שאלות ולתאם פגישת היכרות
              ראשונה — ללא התחייבות.
            </p>

            <div class="contact-methods">
              <a href="https://wa.me/972501234567" target="_blank" rel="noopener" class="method-card method-whatsapp">
                <div class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div class="method-text">
                  <div class="method-title">וואטסאפ</div>
                  <div class="method-value">050-123-4567</div>
                  <div class="method-note">זמין בדרך כלל בין 9:00-20:00</div>
                </div>
                <svg class="method-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a href="tel:+972501234567" class="method-card method-phone">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="26" height="26">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                  </svg>
                </div>
                <div class="method-text">
                  <div class="method-title">טלפון</div>
                  <div class="method-value">050-123-4567</div>
                  <div class="method-note">שיחות ו-SMS</div>
                </div>
                <svg class="method-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a href="mailto:avraham@therapy.co.il" class="method-card method-email">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="26" height="26">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="method-text">
                  <div class="method-title">אימייל</div>
                  <div class="method-value">avraham&#64;therapy.co.il</div>
                  <div class="method-note">מגיב תוך 24 שעות</div>
                </div>
                <svg class="method-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div class="location-card">
              <div class="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div class="location-title">מיקום הקליניקה</div>
                <div class="location-address">רחוב הרצל 45, תל אביב</div>
                <div class="location-note">קומה 3 | קרוב לתחנת רכבת</div>
              </div>
            </div>
          </div>

          <!-- Form Side -->
          <div class="contact-form-wrapper">
            @if (!submitted()) {
              <div class="form-card">
                <h3 class="form-title">שלח הודעה</h3>
                <p class="form-subtitle">מלא את הפרטים ואחזור אליך בהקדם האפשרי</p>

                <form class="contact-form" (ngSubmit)="onSubmit()" #f="ngForm">
                  <div class="form-row">
                    <div class="form-group">
                      <label for="name">שם מלא *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        [(ngModel)]="formData.name"
                        required
                        placeholder="השם שלך"
                        class="form-input"
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone">טלפון *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        [(ngModel)]="formData.phone"
                        required
                        placeholder="05X-XXXXXXX"
                        class="form-input"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email">אימייל</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      placeholder="your&#64;email.com"
                      class="form-input"
                    />
                  </div>

                  <div class="form-group">
                    <label for="service">תחום הטיפול הרצוי</label>
                    <select id="service" name="service" [(ngModel)]="formData.service" class="form-input form-select">
                      <option value="">בחר תחום...</option>
                      @for (opt of serviceOptions; track opt) {
                        <option [value]="opt">{{ opt }}</option>
                      }
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="message">הודעה</label>
                    <textarea
                      id="message"
                      name="message"
                      [(ngModel)]="formData.message"
                      placeholder="ספר/י בקצרה על מה שמביא אותך לפנות..."
                      rows="4"
                      class="form-input form-textarea"
                    ></textarea>
                  </div>

                  <div class="form-privacy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    כל הפרטים שמורים בסודיות מלאה
                  </div>

                  <button type="submit" class="form-submit" [disabled]="!f.valid">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    שלח הודעה
                  </button>
                </form>
              </div>
            } @else {
              <div class="success-card">
                <div class="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="48" height="48">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>ההודעה נשלחה בהצלחה!</h3>
                <p>תודה על פנייתך. אחזור אליך בהקדם האפשרי — בדרך כלל תוך 24 שעות.</p>
                <a href="https://wa.me/972501234567" target="_blank" rel="noopener" class="success-whatsapp">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  שלח הודעה בוואטסאפ במקביל
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--cream);
      position: relative;
      overflow: hidden;
    }

    .contact-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .bg-blob-1 {
      position: absolute;
      top: -150px;
      right: -150px;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(27, 67, 50, 0.06) 0%, transparent 70%);
      border-radius: 50%;
    }

    .bg-blob-2 {
      position: absolute;
      bottom: -150px;
      left: -150px;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(201, 167, 90, 0.06) 0%, transparent 70%);
      border-radius: 50%;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }

    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 64px;
      align-items: start;
    }

    /* Info Side */
    .contact-info {
      padding-top: 8px;
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
    }

    .section-title {
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
      color: var(--primary);
      margin-bottom: 16px;
    }

    .contact-intro {
      font-size: 1.05rem;
      color: var(--text-medium);
      line-height: 1.8;
      margin-bottom: 36px;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }

    .method-card {
      display: flex;
      align-items: center;
      gap: 16px;
      background: var(--white);
      border: 1px solid rgba(27, 67, 50, 0.08);
      border-radius: var(--border-radius);
      padding: 18px 20px;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
        transition: width 0.3s ease;
      }

      &:hover {
        transform: translateX(-4px);
        box-shadow: var(--shadow-md);

        &::before {
          width: 6px;
        }

        .method-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      }

      &.method-whatsapp {
        .method-icon { background: rgba(37, 211, 102, 0.12); color: #25d366; }
        &::before { background: #25d366; }
        &:hover { border-color: rgba(37, 211, 102, 0.3); }
      }

      &.method-phone {
        .method-icon { background: rgba(27, 67, 50, 0.1); color: var(--primary); }
        &::before { background: var(--primary); }
        &:hover { border-color: rgba(27, 67, 50, 0.2); }
      }

      &.method-email {
        .method-icon { background: rgba(201, 167, 90, 0.12); color: var(--accent); }
        &::before { background: var(--accent); }
        &:hover { border-color: rgba(201, 167, 90, 0.3); }
      }

      .method-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .method-text {
        flex: 1;
      }

      .method-title {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-light);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 2px;
      }

      .method-value {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 2px;
      }

      .method-note {
        font-size: 0.75rem;
        color: var(--text-light);
      }

      .method-arrow {
        color: var(--text-light);
        opacity: 0;
        transform: translateX(-8px);
        transition: all 0.3s ease;
        flex-shrink: 0;
      }
    }

    .location-card {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 20px;
      background: var(--white);
      border: 1px solid rgba(27, 67, 50, 0.08);
      border-radius: var(--border-radius);

      .location-icon {
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

      .location-title {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-light);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 4px;
      }

      .location-address {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 2px;
      }

      .location-note {
        font-size: 0.78rem;
        color: var(--text-light);
      }
    }

    /* Form Side */
    .contact-form-wrapper {
      position: sticky;
      top: 100px;
    }

    .form-card {
      background: var(--white);
      border-radius: var(--border-radius-lg);
      padding: 40px;
      box-shadow: var(--shadow-md);
      border: 1px solid rgba(27, 67, 50, 0.06);
    }

    .form-title {
      font-family: 'Rubik', sans-serif;
      font-size: 1.5rem;
      color: var(--primary);
      margin-bottom: 6px;
    }

    .form-subtitle {
      font-size: 0.9rem;
      color: var(--text-light);
      margin-bottom: 28px;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-dark);
      }
    }

    .form-input {
      padding: 13px 16px;
      background: var(--cream);
      border: 1.5px solid rgba(27, 67, 50, 0.12);
      border-radius: var(--border-radius-sm);
      font-family: 'Rubik', sans-serif;
      font-size: 0.95rem;
      color: var(--text-dark);
      transition: all 0.3s ease;
      outline: none;
      width: 100%;
      direction: rtl;

      &::placeholder {
        color: var(--text-light);
      }

      &:focus {
        border-color: var(--primary);
        background: var(--white);
        box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.08);
      }
    }

    .form-select {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b8a78' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: left 14px center;
    }

    .form-textarea {
      resize: vertical;
      min-height: 110px;
    }

    .form-privacy {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8rem;
      color: var(--text-light);

      svg {
        flex-shrink: 0;
        color: var(--sage);
      }
    }

    .form-submit {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: var(--primary);
      color: white;
      padding: 16px;
      border-radius: var(--border-radius-sm);
      font-family: 'Rubik', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(27, 67, 50, 0.3);
      width: 100%;

      &:hover:not(:disabled) {
        background: var(--primary-light);
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(27, 67, 50, 0.4);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    /* Success Card */
    .success-card {
      background: var(--white);
      border-radius: var(--border-radius-lg);
      padding: 60px 40px;
      text-align: center;
      box-shadow: var(--shadow-md);
      border: 1px solid rgba(82, 183, 136, 0.2);

      .success-icon {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(82, 183, 136, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px;
        color: var(--sage);
      }

      h3 {
        font-family: 'Rubik', sans-serif;
        font-size: 1.6rem;
        color: var(--primary);
        margin-bottom: 12px;
      }

      p {
        font-size: 1rem;
        color: var(--text-medium);
        line-height: 1.7;
        margin-bottom: 28px;
        max-width: 320px;
        margin-inline: auto;
      }
    }

    .success-whatsapp {
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

      &:hover {
        background: #1ebe5d;
        transform: translateY(-2px);
      }
    }

    @media (max-width: 900px) {
      .contact-layout {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .contact-form-wrapper {
        position: static;
      }

      .form-card {
        padding: 28px 24px;
      }
    }

    @media (max-width: 480px) {
      .form-row {
        grid-template-columns: 1fr;
      }

      .method-card:hover {
        transform: none;
      }
    }
  `]
})
export class ContactComponent {
  submitted = signal(false);

  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  };

  serviceOptions = [
    'פסיכותרפיה אינטגרטיבית',
    'טיפול בטראומה (EMDR)',
    'עבודת גוף-נפש',
    'טיפול זוגי',
    'טיפול משפחתי',
    'צמיחה אישית',
    'אחר',
  ];

  onSubmit() {
    this.submitted.set(true);
  }
}
