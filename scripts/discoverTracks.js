const fs = require('fs');
const path = require('path');
const tracksPath = './public/assets/sounds/musicalCube/tracks';
const outputPath = path.resolve("./src/pages/realms/musicalCubes/sounds/index.ts")

//https://gist.github.com/kethinov/6658166
const getFilePaths = (folderPath) => {
    const entryPaths = fs.readdirSync(folderPath).filter(file => file != '.DS_Store').map(entry => path.join(folderPath, entry));
    const filePaths = entryPaths.filter(entryPath => fs.statSync(entryPath).isFile());
    const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath));
    const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), []);

    return [...filePaths, ...dirFiles];
};

const getSoundsForTrack = (trackName, trackFolderPath) => {
    const fileList = getFilePaths(trackFolderPath);
    const formatFileList = (fileList) => `"${trackName}" : [${fileList.map(filepath => `"${filepath.replace('public/', './')}"`)}]`;

    return formatFileList(fileList);
}

const tracks = fs.readdirSync(tracksPath)
    .filter(file => file != '.DS_Store')
    .map(trackName => getSoundsForTrack(trackName, path.join(tracksPath, trackName)));

const formatTracks = trackArray => `const tracks = { ${trackArray.join(',')} } \n\nexport default tracks;`;

const finalFileContent = formatTracks(tracks);
// console.log(`tracks`, formatTracks(tracks));

fs.writeFile(outputPath, finalFileContent, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Discovered sounds : ${outputPath}`);
    }
});
