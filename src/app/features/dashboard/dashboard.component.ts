import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../core/services/theme.service";
import { LanguageService } from "../../core/services/language.service";
import { MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatSidenavContainer,
    MatToolbarModule,
    MatSlideToggleModule,
    TranslateModule,
    MatButtonModule
  ],
})
export class DashboardComponent implements OnInit {
  isDarkMode = false;
  currentLang: 'en' | 'vn' = 'en';

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark-theme';
    this.currentLang = this.languageService.getCurrentLanguage();
    
    // Debug: In ra để kiểm tra ngôn ngữ hiện tại
    console.log("Current language:", this.currentLang);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }

  switchLanguage(lang: 'en' | 'vn') {
    console.log("Switching language to:", lang);
    this.languageService.setLanguage(lang);
    this.currentLang = lang;
  }

  get themeLabel(): string {
    return this.isDarkMode ? 'DARK' : 'LIGHT';
  }
}