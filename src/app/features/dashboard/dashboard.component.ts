import { Component, Injectable, OnInit } from "@angular/core";
import { ThemeService } from "../../core/services/theme.service";
import { LanguageService } from "../../core/services/language.service";
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports:[MatSidenavContainer,MatToolbarModule,MatSlideToggleModule,TranslateModule],
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
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }

  switchLanguage(lang: 'en' | 'vn') {
    this.languageService.setLanguage(lang);
    this.currentLang = lang;
  }

  get themeLabel(): string {
    return this.isDarkMode ? 'DARK' : 'LIGHT';
  }
}
