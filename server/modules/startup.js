let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _emailConfig();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();
var _setBrowserPolicies = () => {};
var _generateAccounts = () => Modules.server.generateAccounts();
var _emailConfig = () => Modules.server.emailConfig();

Modules.server.startup = startup;
