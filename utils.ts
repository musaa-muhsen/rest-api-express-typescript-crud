import fs from 'fs';

//const filePath = path.resolve(__dirname, "./agree.json");

export const writeUsersToJson: () => void = () => {
    fs.writeFileSync(path.join(__dirname, '../users.json', JSON.stringify(users)))
}