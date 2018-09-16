// https://www.npmjs.com/package/webfontloader
import WebFont from 'webfontloader';

WebFont.load({
  // google: {
  //   families: ['Open Sans']
  // },
  typekit: { id: 'zw6yzl' },
  loading: function() {
    window.console.log('LOADING FONTS');
  },
  active: function() {
    window.console.log('ACTIVE FONTS');
  },
  inactive: function() {},
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});
