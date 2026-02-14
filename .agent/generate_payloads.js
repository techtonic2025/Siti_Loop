const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Progetti\\Siti_Loop';
const filesJsonPath = '.agent/files_to_push_filtered.json';

const files = JSON.parse(fs.readFileSync(path.join(rootDir, filesJsonPath), 'utf8'));

const CHUNK_SIZE = 10;
for (let i = 0; i < files.length; i += CHUNK_SIZE) {
    const chunk = files.slice(i, i + CHUNK_SIZE);
    const payload = chunk.map(file => {
        return {
            path: file,
            content: fs.readFileSync(path.join(rootDir, file), 'utf8')
        };
    });
    const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
    fs.writeFileSync(path.join(rootDir, '.agent', `payload_${chunkIndex}.json`), JSON.stringify(payload, null, 2));
    console.log(`Payload ${chunkIndex} written with ${payload.length} files.`);
}
