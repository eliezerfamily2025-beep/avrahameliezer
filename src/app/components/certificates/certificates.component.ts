import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  template: `
    <section id="certificates" class="certificates">
      <div class="container">
        <div class="section-header">
          <span class="section-label">הכשרה ותעודות</span>
          <h2 class="section-title">השכלה ורקע מקצועי</h2>
          <p class="section-subtitle">
            מחויבות לידע מקצועי, הכשרה מתמשכת ועמידה בסטנדרטים הגבוהים ביותר של הפרופסיה
          </p>
        </div>

        <div class="certs-layout">
          <!-- Timeline Left -->
          <div class="timeline">
            @for (cert of certificates; track cert.title; let i = $index) {
              <div class="timeline-item" [class.featured]="cert.featured">
                <div class="timeline-marker">
                  <div class="marker-dot" [style.background]="cert.color"></div>
                  @if (i < certificates.length - 1) {
                    <div class="marker-line"></div>
                  }
                </div>
                <div class="timeline-card">
                  <div class="cert-icon" [style.background]="cert.color + '18'" [style.color]="cert.color">
                    <span [innerHTML]="cert.icon"></span>
                  </div>
                  <div class="cert-content">
                    <div class="cert-year">{{ cert.year }}</div>
                    <h3 class="cert-title">{{ cert.title }}</h3>
                    <div class="cert-institution">{{ cert.institution }}</div>
                    @if (cert.desc) {
                      <p class="cert-desc">{{ cert.desc }}</p>
                    }
                    @if (cert.featured) {
                      <span class="cert-badge">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        הסמכה ראשית
                      </span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Right: Member + Training -->
          <div class="certs-sidebar">
            <div class="membership-card">
              <div class="member-header">
                <div class="member-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h3>חברות מקצועית</h3>
                  <p>עמיתות וחברויות בארגונים</p>
                </div>
              </div>
              <div class="member-list">
                @for (m of memberships; track m.name) {
                  <div class="member-item">
                    <div class="member-dot"></div>
                    <div>
                      <div class="member-name">{{ m.name }}</div>
                      <div class="member-role">{{ m.role }}</div>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div class="training-card">
              <h3 class="training-title">הכשרות נוספות</h3>
              <div class="training-grid">
                @for (t of trainings; track t) {
                  <div class="training-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {{ t }}
                  </div>
                }
              </div>
            </div>

            <div class="supervision-card">
              <div class="supervision-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <div class="supervision-text">
                <h4>סופרוויזיה שוטפת</h4>
                <p>עובד בסופרוויזיה מקצועית קבועה לשמירה על איכות הטיפול</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .certificates {
      background: var(--white);
      position: relative;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 80% 20%, rgba(82, 183, 136, 0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(201, 167, 90, 0.06) 0%, transparent 60%);
        pointer-events: none;
      }
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

    .certs-layout {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 48px;
      align-items: start;
    }

    /* Timeline */
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .timeline-item {
      display: flex;
      gap: 20px;
      position: relative;

      &.featured .timeline-card {
        border-color: rgba(201, 167, 90, 0.3);
        background: linear-gradient(135deg, rgba(201, 167, 90, 0.05), var(--white));
      }
    }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      padding-top: 24px;
    }

    .marker-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(255,255,255,1), 0 0 0 6px currentColor;
      flex-shrink: 0;
    }

    .marker-line {
      width: 2px;
      flex: 1;
      min-height: 40px;
      background: linear-gradient(180deg, rgba(27, 67, 50, 0.15) 0%, rgba(27, 67, 50, 0.05) 100%);
      margin: 8px 0;
    }

    .timeline-card {
      background: var(--white);
      border: 1px solid rgba(27, 67, 50, 0.08);
      border-radius: var(--border-radius);
      padding: 24px;
      margin-bottom: 20px;
      flex: 1;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      display: flex;
      gap: 16px;
      align-items: flex-start;

      &:hover {
        box-shadow: var(--shadow-md);
        transform: translateX(-4px);
      }

      .cert-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        flex-shrink: 0;
      }

      .cert-content {
        flex: 1;
      }

      .cert-year {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--accent);
        letter-spacing: 0.1em;
        margin-bottom: 4px;
      }

      .cert-title {
        font-family: 'Rubik', sans-serif;
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 4px;
        line-height: 1.3;
      }

      .cert-institution {
        font-size: 0.85rem;
        color: var(--text-light);
        margin-bottom: 8px;
      }

      .cert-desc {
        font-size: 0.85rem;
        color: var(--text-medium);
        line-height: 1.6;
      }

      .cert-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: var(--accent);
        color: white;
        padding: 4px 12px;
        border-radius: 50px;
        font-size: 0.7rem;
        font-weight: 600;
        margin-top: 8px;
      }
    }

    /* Sidebar */
    .certs-sidebar {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .membership-card {
      background: var(--primary);
      border-radius: var(--border-radius);
      padding: 28px;
      color: white;

      .member-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;

        .member-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }

        h3 {
          font-family: 'Rubik', sans-serif;
          font-size: 1.1rem;
          color: white;
          margin: 0 0 4px;
        }

        p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }
      }

      .member-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .member-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;

        .member-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          margin-top: 5px;
          flex-shrink: 0;
        }

        .member-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: white;
          line-height: 1.3;
        }

        .member-role {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
          margin-top: 2px;
        }
      }
    }

    .training-card {
      background: var(--cream);
      border: 1px solid rgba(27, 67, 50, 0.08);
      border-radius: var(--border-radius);
      padding: 24px;

      .training-title {
        font-family: 'Rubik', sans-serif;
        font-size: 1rem;
        color: var(--primary);
        margin-bottom: 16px;
      }

      .training-grid {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .training-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.88rem;
        color: var(--text-medium);
        font-weight: 500;

        svg {
          color: var(--sage);
          flex-shrink: 0;
        }
      }
    }

    .supervision-card {
      display: flex;
      align-items: center;
      gap: 16px;
      background: rgba(82, 183, 136, 0.1);
      border: 1px solid rgba(82, 183, 136, 0.2);
      border-radius: var(--border-radius);
      padding: 20px 24px;

      .supervision-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: var(--sage);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        flex-shrink: 0;
      }

      h4 {
        font-family: 'Rubik', sans-serif;
        font-size: 0.95rem;
        color: var(--primary);
        margin: 0 0 4px;
      }

      p {
        font-size: 0.8rem;
        color: var(--text-medium);
        margin: 0;
        line-height: 1.5;
      }
    }

    @media (max-width: 900px) {
      .certs-layout {
        grid-template-columns: 1fr;
      }

      .timeline-card:hover {
        transform: none;
      }
    }
  `]
})
export class CertificatesComponent {
  certificates = [
    {
      icon: '🎓',
      year: '2008',
      title: 'תואר שני בפסיכותרפיה אינטגרטיבית',
      institution: 'האוניברסיטה העברית בירושלים',
      desc: 'מחקר מקיף בתחומי הפסיכולוגיה הקלינית והאינטגרטיבית',
      color: '#1b4332',
      featured: true,
    },
    {
      icon: '🔬',
      year: '2011',
      title: 'הסמכה ב-EMDR',
      institution: 'EMDR Institute International',
      desc: 'הסמכה בינלאומית בשיטת עיבוד חוויות דרך תנועות עיניים',
      color: '#52b788',
      featured: false,
    },
    {
      icon: '🌿',
      year: '2014',
      title: 'Somatic Experiencing Practitioner',
      institution: 'SE International — מכון בריטי',
      desc: 'גישה גופנית לריפוי טראומה ולחץ',
      color: '#2d6a4f',
      featured: false,
    },
    {
      icon: '🧘',
      year: '2017',
      title: 'הסמכה ב-DBT',
      institution: 'Behavioral Tech — Linehan Institute',
      desc: 'טיפול דיאלקטי-התנהגותי לויסות רגשי',
      color: '#c9a75a',
      featured: false,
    },
    {
      icon: '💞',
      year: '2020',
      title: 'הכשרה בטיפול זוגי EFT',
      institution: 'ICEEFT — International Centre for Excellence in EFT',
      desc: 'פסיכותרפיה ממוקדת-רגש לזוגות',
      color: '#8b5cf6',
      featured: false,
    },
  ];

  memberships = [
    { name: 'האגודה הישראלית לפסיכותרפיה', role: 'חבר פעיל' },
    { name: 'ארגון מטפלי EMDR בישראל', role: 'חבר מייסד' },
    { name: 'הפורום לפסיכותרפיה אינטגרטיבית', role: 'חבר ועד' },
  ];

  trainings = [
    'מיינדפולנס ומדיטציה קלינית',
    'אינטליגנציה רגשית בטיפול',
    'נוירופסיכולוגיה וטיפול',
    'טיפול בשכול ואבל',
    'פסיכולוגיה חיובית',
    'התמכרויות ויחסי תלות',
  ];
}
