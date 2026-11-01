/* Personal profile for a Samsung UE50AU7172UXXH (AU7100, 2021, Tizen 6.0).
   ES5 only. Read once by main.js.

   - home/apps/look seed the very first launch only. Once preferences are
     saved under cleanframe.home.v1 they win, and the normal migration and
     validation in main.js still apply to every value below.
   - clock and lowMotion are display options and apply on every launch. */
(function () {
  'use strict';
  window.CleanFrameProfile = {
    // Dock order, first is selected. Known IDs reuse the built-in catalogue.
    home: ['netflix', 'youtube', '5b8c3eb16b.BeamCTVDev', 'org.tizen.tv-viewer'],
    // Apps outside the built-in catalogue, in the saved appRecords shape.
    apps: [
      // HBO Max: the ID device.js already maps to the hbomax brand mark.
      { id: '5b8c3eb16b.BeamCTVDev', appId: '5b8c3eb16b.BeamCTVDev', name: 'HBO Max', brand: 'hbomax' },
      // Live TV: UNVERIFIED native ID. Confirm through All apps on this TV;
      // a wrong ID shows a real launch error, never a simulated success.
      { id: 'org.tizen.tv-viewer', appId: 'org.tizen.tv-viewer', name: 'Live TV', brand: '' }
    ],
    look: { bg: 'dark', layout: 'dock' },
    // '24h' or '12h'
    clock: '24h',
    // Older/slower TV: no animated movement or scaling, no text shadows,
    // fewer compositor layers. Focus stays visible through opacity/plates.
    lowMotion: true
  };
}());
