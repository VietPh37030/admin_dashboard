import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ThemeService{
    private currentTheme:'light-theme'|'dark-theme'='light-theme';
    constructor(){
        const saved = localStorage.getItem('app-theme') as 'light-theme'|'dark-theme';
        if(saved){
            this.currentTheme = saved;
            document.documentElement.classList.add(this.currentTheme);

        } else{
            this.setTheme('light-theme')
        }
    }
    setTheme(theme:'light-theme'|'dark-theme'){
        document.documentElement.classList.remove(this.currentTheme);
        document.documentElement.classList.add(theme);
        this.currentTheme = theme;
        localStorage.setItem('app-theme',theme);
    }
    toggleTheme(){
        this.setTheme(this.currentTheme==='light-theme'?'dark-theme':'light-theme');
    }
    getCurrentTheme(){
        return this.currentTheme;
    }
}