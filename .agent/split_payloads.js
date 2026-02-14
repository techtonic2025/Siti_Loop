const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Progetti\\Siti_Loop';
const agentDir = path.join(rootDir, '.agent');
const MAX_SIZE = 20000; // 20KB safety limit for tool calls

const payloadsToProcess = ['payload_3.json', 'payload_4.json', 'payload_5.json', 'payload_6.json'];

function getSize(str) {
    return Buffer.byteLength(str, 'utf8');
}

payloadsToProcess.forEach(filename => {
    const filePath = path.join(agentDir, filename);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const files = JSON.parse(content);

    let currentChunk = [];
    let currentSize = 0;
    let part = 1;

    files.forEach(file => {
        const fileJson = JSON.stringify(file);
        const fileSize = getSize(fileJson);

        if (currentChunk.length > 0 && currentSize + fileSize > MAX_SIZE) {
            const chunkFilename = `${filename.replace('.json', '')}_part_${part}.json`;
            fs.writeFileSync(path.join(agentDir, chunkFilename), JSON.stringify(currentChunk, null, 2));
            console.log(`Created ${chunkFilename} with ${currentChunk.length} files`);
            currentChunk = [];
            currentSize = 0;
            part++;
        }

        currentChunk.push(file);
        currentSize += fileSize;
    });

    if (currentChunk.length > 0) {
        const chunkFilename = `${filename.replace('.json', '')}_part_${part}.json`;
        fs.writeFileSync(path.join(agentDir, chunkFilename), JSON.stringify(currentChunk, null, 2));
        console.log(`Created ${chunkFilename} with ${currentChunk.length} files`);
    }
});
