class DesktopTheme {
  constructor() {
    if (!DesktopTheme.instance) {
      this.previous = null;
      this.theme = "light";
      DesktopTheme.instance = this;
    }
    return this;
  }

  changeTheme(themeName) {
    if (this.theme !== themeName) {
      this.previous = this.theme;
      this.theme = themeName;
      return this.displayThemeChanged();
    }
    return `${themeName} is the current theme and there is no need to change`;
  }

  displayThemeChanged() {
    return `the theme was changed from ${this.previous} to ${this.theme}`;
  }
}

const desktopTheme = new DesktopTheme();

export default desktopTheme;
