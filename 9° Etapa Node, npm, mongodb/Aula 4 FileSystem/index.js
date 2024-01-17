const fs = require('fs');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.promises.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.promises.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if (
            !/\.html$/g.test(fileFullPath)
        ) continue;
        console.log(fileFullPath);
    }
}
readdir('c:\\Users\\mathe\\Desktop\\Curso JS\\JS.Atividades\\9° Etapa Node, npm, mongodb\\Aula 4 FileSystem')
