class DesktopTheme {
  constructor() {
    if (!DesktopTheme.instance) {
      this.theme = "light";
      this.allPrevious = [];
      DesktopTheme.instance = this;
    }
    return this;
  }

  changeTheme(themeName) {
    if (this.theme !== themeName) {
      this.allPrevious.push(this.theme);
      this.theme = themeName;
      return this.displayThemeChanged();
    }
    return `${themeName} is the current theme and there is no need to change`;
  }

  displayThemesHistory() {
    return this.allPrevious;
  }

  displayThemeChanged() {
    return `the theme was changed from ${this.allPrevious} to ${this.theme}`;
  }
}

const desktopTheme = new DesktopTheme();

export default desktopTheme;
