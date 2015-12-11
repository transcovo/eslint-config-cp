module.exports = function(context) {
  return {
    VariableDeclaration: function(node) {
      node.declarations.forEach (function (declaration) {
        if (declaration.init && declaration.init.callee && declaration.init.callee.name === 'require') {
          declaration.init.arguments.forEach (function (argument) {
            if (argument.value === 'moment') {
              return context.report(node, 'Use moment-timezone instead and use: moment.tz.setDefault(\'Europe/Paris\')');
            }
          });
        }
      });
    }
  };
};
