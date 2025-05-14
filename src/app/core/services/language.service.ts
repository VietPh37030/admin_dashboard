import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLanguage: 'en' | 'vn' = 'en';
  private isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.translate.addLangs(['en', 'vn']);
    this.translate.setDefaultLang('en');

    // Chỉ dùng localStorage nếu đang chạy trong trình duyệt
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('app-language') as 'en' | 'vn';
      this.setLanguage(savedLang || 'en');
    } else {
      this.setLanguage('en');
    }

    console.log('LanguageService initialized with language:', this.currentLanguage);
    console.log('TranslateService default lang:', this.translate.getDefaultLang());
    console.log('TranslateService current lang:', this.translate.currentLang);
  }

  setLanguage(lang: 'en' | 'vn') {
    console.log('Setting language to:', lang);

    if (['en', 'vn'].includes(lang)) {
      this.currentLanguage = lang;
      this.translate.use(lang);

      if (this.isBrowser) {
        localStorage.setItem('app-language', lang);
      }

      console.log('Language set to:', lang);
      console.log('TranslateService current lang now:', this.translate.currentLang);
    } else {
      console.error('Invalid language:', lang);
    }
  }

  getCurrentLanguage(): 'en' | 'vn' {
    return this.currentLanguage;
  }
}
