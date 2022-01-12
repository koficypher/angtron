const electronInstaller = require('electron-winstaller');

// const options = {
//   src: 'package-win/singer-win32-x64/',
//   dest: 'installers/',
//   options: {
//     description: "a singers application",
//     authors: ['Kofi Cypher']
//   }
// }

async function main () {
  // NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.
console.log('Creating package (this may take a while)')
try {
  await electronInstaller.createWindowsInstaller({
    appDirectory: 'package-win/singer-win32-x64',
    outputDirectory: 'installers',
    authors: 'Kofi Cypher.',
    description: 'a singers app',
    exe: 'singer.exe'
  });
  console.log(`Successfully created package`);
} catch (e) {
  console.log(`No dice: ${e.message}`);
}
  // console.log('Creating package (this may take a while)')
  // try {
  //   await installer(options)
  //   console.log(`Successfully created package at ${options.dest}`)
  // } catch (err) {
  //   console.error(err, err.stack)
  //   process.exit(1)
  // }
}
main()
