import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <!-- Background elements -->
      <div class="hero-bg">
        <div class="bg-circle bg-circle-1"></div>
        <div class="bg-circle bg-circle-2"></div>
        <div class="bg-circle bg-circle-3"></div>
        <div class="bg-grid"></div>
      </div>

      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <span class="badge-dot"></span>
              <span>זמין לפגישות פנים אל פנים ואונליין</span>
            </div>

            <h1 class="hero-title">
              מסע ריפוי<br/>
              <span class="title-gradient">גוף, נפש ורוח</span>
            </h1>

            <p class="hero-subtitle">
              בטיפול אינטגרטיבי המשלב גישות מגוונות, אנו יוצרים יחד מרחב בטוח ומכיל
              לתהליך צמיחה עמוק ומשמעותי
            </p>

            <div class="hero-stats">
              <div class="stat">
                <span class="stat-number">15+</span>
                <span class="stat-label">שנות ניסיון</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat">
                <span class="stat-number">500+</span>
                <span class="stat-label">מטופלים</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat">
                <span class="stat-number">8</span>
                <span class="stat-label">גישות טיפוליות</span>
              </div>
            </div>

            <div class="hero-actions">
              <a href="https://wa.me/972501234567" target="_blank" rel="noopener" class="btn-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                שלח הודעה בוואטסאפ
              </a>
              <a href="#about" class="btn-outline" (click)="scrollTo($event, 'about')">
                למד עוד אודותי
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M19 12H5M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="visual-card">
              <div class="avatar-ring">
                <div class="avatar-placeholder">
                  <img src="/logo.jpeg" alt="אברהם אליעזר - פסיכותרפיסט אינטגרטיבי" />
                </div>
              </div>

              <div class="floating-card card-top">
                <div class="fc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <span class="fc-title">סביבה בטוחה</span>
                  <span class="fc-sub">מרחב חסוי ומכיל</span>
                </div>
              </div>

              <div class="floating-card card-bottom">
                <div class="fc-icon fc-icon-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <span class="fc-title">גישה הוליסטית</span>
                  <span class="fc-sub">גוף, נפש ורוח</span>
                </div>
              </div>

              <div class="experience-badge">
                <span class="exp-number">15</span>
                <span class="exp-text">שנות<br/>ניסיון</span>
              </div>
            </div>
          </div>
        </div>

        <div class="scroll-indicator">
          <span>גלול למטה</span>
          <div class="scroll-line">
            <div class="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      padding-top: 100px;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .bg-circle {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
    }

    .bg-circle-1 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(82, 183, 136, 0.2) 0%, transparent 70%);
      top: -100px;
      right: -100px;
      animation: float 8s ease-in-out infinite;
    }

    .bg-circle-2 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(201, 167, 90, 0.15) 0%, transparent 70%);
      bottom: 100px;
      left: -50px;
      animation: float 10s ease-in-out infinite reverse;
    }

    .bg-circle-3 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(27, 67, 50, 0.1) 0%, transparent 70%);
      top: 40%;
      left: 40%;
      animation: float 12s ease-in-out infinite;
    }

    .bg-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(27, 67, 50, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(27, 67, 50, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-30px) scale(1.05); }
    }

    .container {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      padding: 60px 0;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(82, 183, 136, 0.12);
      border: 1px solid rgba(82, 183, 136, 0.3);
      border-radius: 50px;
      padding: 8px 18px;
      margin-bottom: 28px;
      font-family: 'Rubik', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--primary-light);

      .badge-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #22c55e;
        animation: pulse-dot 2s infinite;
        flex-shrink: 0;
      }
    }

    @keyframes pulse-dot {
      0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
      50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
    }

    .hero-title {
      font-family: 'Rubik', sans-serif;
      font-size: clamp(3rem, 5.5vw, 5rem);
      font-weight: 900;
      color: var(--primary);
      line-height: 1.05;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
    }

    .title-gradient {
      background: linear-gradient(135deg, var(--accent) 0%, var(--sage) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.15rem;
      color: var(--text-medium);
      line-height: 1.8;
      margin-bottom: 40px;
      max-width: 480px;
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 28px;
      margin-bottom: 44px;
      padding: 24px 28px;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(27, 67, 50, 0.1);
      border-radius: 16px;
      width: fit-content;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .stat-number {
        font-family: 'Rubik', sans-serif;
        font-size: 2.2rem;
        font-weight: 800;
        color: var(--primary);
        line-height: 1;
        letter-spacing: -0.03em;
      }

      .stat-label {
        font-size: 0.75rem;
        color: var(--text-light);
        margin-top: 4px;
        white-space: nowrap;
      }
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(27, 67, 50, 0.15);
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn-whatsapp {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #25d366;
      color: white;
      padding: 16px 32px;
      border-radius: 50px;
      font-family: 'Rubik', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);

      &:hover {
        background: #1ebe5d;
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.45);
      }
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--primary);
      padding: 14px 28px;
      border-radius: 50px;
      font-family: 'Rubik', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      border: 2px solid rgba(27, 67, 50, 0.3);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary);
        background: rgba(27, 67, 50, 0.06);
        transform: translateY(-2px);
      }

      svg {
        transform: rotate(180deg);
      }
    }

    /* Visual / Avatar Card */
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .visual-card {
      position: relative;
      width: 380px;
      height: 440px;
    }

    .avatar-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--sage) 100%);
      animation: morph 8s ease-in-out infinite;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 20px 60px rgba(27, 67, 50, 0.25);

      &::before {
        content: '';
        position: absolute;
        inset: -4px;
        border-radius: inherit;
        background: linear-gradient(135deg, var(--accent), var(--sage), var(--primary));
        z-index: -1;
        animation: morph 8s ease-in-out infinite;
        opacity: 0.3;
        filter: blur(8px);
      }
    }

    @keyframes morph {
      0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      50% { border-radius: 50% 60% 30% 60% / 30% 70% 60% 40%; }
      75% { border-radius: 60% 40% 60% 40% / 70% 30% 50% 40%; }
    }

    .avatar-placeholder {
      width: 240px;
      height: 240px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid rgba(255,255,255,0.4);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 20%;
      }
    }

    .floating-card {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(27, 67, 50, 0.08);
      border-radius: 16px;
      padding: 14px 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      min-width: 180px;

      .fc-icon {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: rgba(82, 183, 136, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--sage);
        flex-shrink: 0;
      }

      .fc-icon-gold {
        background: rgba(201, 167, 90, 0.15);
        color: var(--accent);
      }

      .fc-title {
        display: block;
        font-family: 'Rubik', sans-serif;
        font-weight: 600;
        font-size: 0.85rem;
        color: var(--text-dark);
        line-height: 1.2;
      }

      .fc-sub {
        display: block;
        font-size: 0.72rem;
        color: var(--text-light);
      }
    }

    .card-top {
      top: 20px;
      right: -20px;
      animation: float-card 5s ease-in-out infinite;
    }

    .card-bottom {
      bottom: 40px;
      left: -20px;
      animation: float-card 7s ease-in-out infinite reverse;
    }

    @keyframes float-card {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .experience-badge {
      position: absolute;
      bottom: 20px;
      right: 0;
      background: var(--primary);
      color: white;
      border-radius: 50%;
      width: 90px;
      height: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 8px 24px rgba(27, 67, 50, 0.3);
      animation: float-card 6s ease-in-out infinite 2s;

      .exp-number {
        font-family: 'Rubik', sans-serif;
        font-size: 1.8rem;
        font-weight: 900;
        line-height: 1;
        color: var(--accent);
      }

      .exp-text {
        font-size: 0.6rem;
        font-weight: 500;
        opacity: 0.9;
        line-height: 1.3;
      }
    }

    /* Scroll Indicator */
    .scroll-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding-bottom: 40px;
      color: var(--text-light);
      font-size: 0.75rem;
      letter-spacing: 0.1em;

      .scroll-line {
        width: 1px;
        height: 50px;
        background: rgba(27, 67, 50, 0.15);
        position: relative;
        overflow: hidden;
      }

      .scroll-dot {
        position: absolute;
        top: -8px;
        left: -3px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent);
        animation: scroll-bounce 2s ease-in-out infinite;
      }
    }

    @keyframes scroll-bounce {
      0% { top: -8px; opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { top: 51px; opacity: 0; }
    }

    @media (max-width: 900px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
      }

      .hero-visual {
        order: -1;
      }

      .visual-card {
        width: 300px;
        height: 360px;
      }

      .avatar-ring {
        width: 240px;
        height: 240px;
      }

      .avatar-placeholder {
        width: 180px;
        height: 180px;
      }

      .hero-subtitle {
        margin: 0 auto 40px;
      }

      .hero-stats {
        margin: 0 auto 44px;
      }

      .hero-actions {
        justify-content: center;
      }

      .hero-badge {
        display: inline-flex;
      }

      .card-top {
        right: -10px;
      }

      .card-bottom {
        left: -10px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2.4rem;
      }

      .hero-stats {
        gap: 16px;
        padding: 18px 20px;
      }

      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .btn-whatsapp, .btn-outline {
        justify-content: center;
      }

      .visual-card {
        width: 260px;
        height: 320px;
      }

      .avatar-ring {
        width: 200px;
        height: 200px;
      }
    }
  `]
})
export class HeroComponent {
  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
