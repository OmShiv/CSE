import Service from '@ember/service';

// Escaped backslashes for JS strings
const SOURCE = [
  {name: 'smss.exe', device: 'Mario', path: '\\\\Device\\\\HarddiskVolume2\\\\Windows\\\\System32\\\\smss.exe', status: 'scheduled'},
  {name: 'netsh.exe', device: 'Luigi', path: '\\\\Device\\\\HarddiskVolume2\\\\Windows\\\\System32\\\\netsh.exe', status: 'available'},
  {name: 'uxtheme.dll', device: 'Peach', path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\uxtheme.dll', status: 'available'},
  {name: 'aries.sys', device: 'Daisy', path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\aries.sys', status: 'scheduled'},
  {name: 'cryptbase.dll', device: 'Yoshi', path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\cryptbase.dll', status: 'scheduled'},
  {name: '7za.exe', device: 'Toad', path: '\\\\Device\\\\HarddiskVolume1\\\\temp\\\\7za.exe', status: 'scheduled'}
];

export default class FilesService extends Service {
  /**
   * Fake API call; can swap with `fetch('/<xyz-api>/files')` later.
   */
  list() {
    // actually, this is not needed since the `model` hook can handle promises
    // but just to fake some network latency
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(SOURCE);
        }, 300);
      } catch (error) {
        reject(error);
      }
    });
  }

  // Future methods like `download(files)`, `delete(files)`, etc. can go here
}
