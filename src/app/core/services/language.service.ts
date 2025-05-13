import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLanguage: 'en' | 'vn' = 'en';

  constructor(private translate: TranslateService) {
    // Khởi tạo danh sách ngôn ngữ được hỗ trợ
    this.translate.addLangs(['en', 'vn']);
    
    // Đặt ngôn ngữ mặc định
    this.translate.setDefaultLang('en');
    
    // Lấy ngôn ngữ đã lưu từ localStorage hoặc dùng mặc định
    const savedLang = localStorage.getItem('app-language') as 'en' | 'vn';
    
    // Đặt ngôn ngữ hiện tại
    this.setLanguage(savedLang || 'en');
    
    console.log('LanguageService initialized with language:', this.currentLanguage);
    console.log('TranslateService default lang:', this.translate.getDefaultLang());
    console.log('TranslateService current lang:', this.translate.currentLang);
  }

  setLanguage(lang: 'en' | 'vn') {
    console.log('Setting language to:', lang);
    
    // Kiểm tra xem ngôn ngữ có hợp lệ không
    if (['en', 'vn'].includes(lang)) {
      this.currentLanguage = lang;
      
      // Áp dụng ngôn ngữ cho TranslateService
      this.translate.use(lang);
      
      // Lưu ngôn ngữ vào localStorage
      localStorage.setItem('app-language', lang);
      
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