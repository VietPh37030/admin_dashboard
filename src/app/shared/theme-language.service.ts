// import { Injectable } from '@angular/core';
// import { Theme, Language } from './theme-language.entity';
// import { translations } from './translations';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeLanguageService {
//   private themes: Theme[] = [
//     { name: 'Light', class: 'light-theme' },
//     { name: 'Dark', class: 'dark-theme' }
//   ];
//   private languages: Language[] = [
//     { code: 'vi', class: 'Tiếng Việt' },
//     { code: 'en', class: 'English' }
//   ];
//   private currentTheme: Theme = this.themes[0];
//   private currentLanguage: Language = this.languages[0];
//   private translationSubject = new BehaviorSubject<{ [key: string]: string }>(translations[this.currentLanguage.code]);

//   translation$ = this.translationSubject.asObservable();

//   constructor() {
//     this.loadSavedSettings();
//   }

//   private loadSavedSettings() {
//     const savedTheme = localStorage.getItem('currentTheme');
//     const savedLang = localStorage.getItem('currentLanguage');
//     if (savedTheme) {
//       this.currentTheme = JSON.parse(savedTheme);
//       document.body.className = this.currentTheme.class;
//     }
//     if (savedLang) {
//       this.currentLanguage = JSON.parse(savedLang);
//       this.translationSubject.next(translations[this.currentLanguage.code]);
//     }
//   }

//   setTheme(theme: Theme) {
//     this.currentTheme = theme;
//     document.body.className = theme.class;
//     localStorage.setItem('currentTheme', JSON.stringify(theme));
//   }

//   setLanguage(language: Language) {
//     this.currentLanguage = language;
//     this.translationSubject.next(translations[language.code]);
//     localStorage.setItem('currentLanguage', JSON.stringify(language));
//   }

//   getThemes(): Theme[] {
//     return this.themes;
//   }

//   getLanguages(): Language[] {
//     return this.languages;
//   }

//   getCurrentTheme(): Theme {
//     return this.currentTheme;
//   }

//   getCurrentLanguage(): Language {
//     return this.currentLanguage;
//   }
// }