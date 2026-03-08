import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="container">
        <div class="nav-inner">
          <!-- Logo -->
          <a href="#home" class="logo" (click)="scrollTo($event, 'home')">
            <div class="logo-icon">
              <img src="/logo.jpeg" alt="אברהם אליעזר" />
            </div>
            <div class="logo-text">
              <span class="logo-name">אברהם אליעזר</span>
              <span class="logo-title">פסיכותרפיסט אינטגרטיבי</span>
            </div>
          </a>

          <!-- Desktop Nav Links -->
          <ul class="nav-links" [class.open]="menuOpen()">
            @for (item of navItems; track item.id) {
              <li>
                <a [href]="'#' + item.id" (click)="scrollTo($event, item.id); closeMenu()">{{ item.label }}</a>
              </li>
            }
          </ul>

          <!-- CTA + Hamburger -->
          <div class="nav-actions">
            <a href="https://wa.me/972501234567" target="_blank" rel="noopener" class="btn-whatsapp-nav">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>קבע תור</span>
            </a>
            <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen()" aria-label="תפריט">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu backdrop -->
      @if (menuOpen()) {
        <div class="backdrop" (click)="closeMenu()"></div>
      }
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 900;
      padding: 20px 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      &.scrolled {
        background: rgba(245, 240, 232, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        padding: 12px 0;
        box-shadow: 0 2px 20px rgba(27, 67, 50, 0.1);
      }
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      flex-shrink: 0;

      .logo-icon {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        border: 2px solid rgba(27, 67, 50, 0.15);
        box-shadow: 0 2px 8px rgba(27, 67, 50, 0.12);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
        }
      }

      .logo-text {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
      }

      .logo-name {
        font-family: 'Rubik', sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--primary);
      }

      .logo-title {
        font-family: 'Rubik', sans-serif;
        font-size: 0.7rem;
        color: var(--text-light);
        letter-spacing: 0.05em;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      margin: 0;
      padding: 0;

      li a {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 0.95rem;
        color: var(--text-medium);
        padding: 8px 14px;
        border-radius: 50px;
        transition: all 0.3s ease;
        cursor: pointer;
        display: block;

        &:hover {
          color: var(--primary);
          background: rgba(27, 67, 50, 0.08);
        }
      }
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .btn-whatsapp-nav {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #25d366;
      color: white;
      padding: 10px 22px;
      border-radius: 50px;
      font-family: 'Rubik', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
      text-decoration: none;

      &:hover {
        background: #1ebe5d;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.3s ease;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--primary);
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      &.active {
        span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; }
        span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      }

      &:hover {
        background: rgba(27, 67, 50, 0.08);
      }
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: -1;
    }

    @media (max-width: 900px) {
      .nav-links {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        width: 280px;
        height: 100vh;
        background: var(--white);
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        padding: 100px 24px 40px;
        box-shadow: -4px 0 30px rgba(0,0,0,0.15);
        z-index: 800;

        &.open {
          display: flex;
        }

        li a {
          width: 100%;
          font-size: 1.1rem;
          padding: 12px 20px;
        }
      }

      .hamburger {
        display: flex;
      }

      .btn-whatsapp-nav span {
        display: none;
      }

      .btn-whatsapp-nav {
        padding: 10px 14px;
      }
    }

    @media (max-width: 480px) {
      .logo-title {
        display: none;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { id: 'about', label: 'אודות' },
    { id: 'services', label: 'שירותים' },
    { id: 'certificates', label: 'תעודות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
