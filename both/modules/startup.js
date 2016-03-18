let startup = () => {
  _setMarkedOptions();
};

var _setMarkedOptions = () => Modules.both.setMarkedOptions();

Modules.both.startup = startup;
