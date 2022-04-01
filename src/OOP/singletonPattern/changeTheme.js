import desktopTheme from "./singletonTheme";

const themeActions = () => {
  console.log("Actions performed", desktopTheme.changeTheme("light"));
  console.log("Actions performed", desktopTheme.changeTheme("light"));
  console.log("Actions performed", desktopTheme.changeTheme("light"));
  console.log("Actions performed", desktopTheme.changeTheme("dark"));
  console.log("Actions performed", desktopTheme.changeTheme("light"));
  console.log("Actions performed", desktopTheme.changeTheme("gray"));
  console.log("Actions performed", desktopTheme.changeTheme("red"));
  console.log("Actions performed", desktopTheme.changeTheme("red"));
  console.log("Actions performed", desktopTheme.changeTheme("red"));
  console.log("Actions performed", desktopTheme.changeTheme("blue"));
};

themeActions();
//directly accessing .displayThemeChanged directly

console.log("Actions performed", desktopTheme.displayThemeChanged());

console.log("All theme changes are", desktopTheme.displayThemesHistory());

//Studying array properties like push unshift pop
const themesHistory = desktopTheme.displayThemesHistory();

const addThemesBeginning = () => {
  return themesHistory.unshift("red", "blue", "green");
  console.log(
    "The following themes were added at the beginning",
    addThemesBeginning
  );
};
//Remove first theme
const result = themesHistory.shift();
console.log(
  `Removed theme is ${result} and the rest of the themes history object is ${themesHistory}`
);
