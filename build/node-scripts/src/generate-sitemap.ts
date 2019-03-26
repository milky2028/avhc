import * as fs from 'fs';

function findMatches(file: string): string[] {
  const matches = [];
  const pathFinder = /path: '(.*)'/gi;
  let match = pathFinder.exec(file);
  while (match !== null) {
    matches.push(match[1]);
    match = pathFinder.exec(file);
  }
  return matches;
}

fs.readFile(`${process.cwd()}/router.ts`, 'utf8', (err, file: string): void => {
  if (err) {
    console.error(err);
    throw err;
  }

  console.log(findMatches(file));
});