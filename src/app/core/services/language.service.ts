import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLanguage: 'en' | 'vn' = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'vn']);
    this.translate.setDefaultLang('en');
    const savedLang = localStorage.getItem('app-language') as 'en' | 'vn';
    this.setLanguage(savedLang ?? 'en');
  }

  setLanguage(lang: 'en' | 'vn') {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('app-language', lang);
  }

  getCurrentLanguage(): 'en' | 'vn' {
    return this.currentLanguage;
  }
}
