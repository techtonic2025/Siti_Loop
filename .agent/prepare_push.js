const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Progetti\\Siti_Loop';
const blacklistDirs = ['.git', 'node_modules', '.next', 'dist', 'build', '.agent'];
const blacklistFiles = ['package-lock.json', '.DS_Store', 'pnpm-lock.yaml', 'yarn.lock'];
const allowedExts = ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.html', '.md', '.txt', '.xml', '.yml', '.yaml', '.mjs', '.cjs'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!blacklistDirs.includes(file)) {
                arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (allowedExts.includes(ext) && !blacklistFiles.includes(file)) {
                arrayOfFiles.push(path.relative(rootDir, fullPath).replace(/\\/g, '/'));
            }
        }
    });

    return arrayOfFiles;
}

const fileList = getAllFiles(rootDir);
fs.writeFileSync(path.join(rootDir, '.agent', 'files_to_push_filtered.json'), JSON.stringify(fileList, null, 2));
console.log('Files to process:', fileList.length);
