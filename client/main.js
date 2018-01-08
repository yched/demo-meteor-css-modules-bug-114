import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App';

console.log('When file App.scss exists, \'import App from "../imports/ui/App"\' imports from it rather than from App.jsx');
console.log('App is :', App);
console.log('It happens with the combination of *.js + *.scss extensions specifically :');
console.log('- App.js + App.css :');
console.log('  --> OK: \'import App from "../imports/ui/App"\' imports from App.js');
console.log('- App.js + App.scss :');
console.log('  --> OK: \'import App from "../imports/ui/App"\' imports from App.js');
console.log('- App.jsx + App.css :');
console.log('  --> OK: \'import App from "../imports/ui/App"\' imports from App.js');
console.log('- App.jsx + App.scss :');
console.log('  --> KO: \'import App from "../imports/ui/App"\' imports from App.scss');

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
