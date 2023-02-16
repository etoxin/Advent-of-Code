const input = await Deno.readTextFile("day-7-input.txt");

const uuid = () => Math.random().toString(36).slice(-4);

interface Item {
    id: string,
    name: string,
    type: 'file' | 'directory',
    fileSize: number,
    parent: string
}

const items: Item[] = [
    {id: 'root', type: 'directory', name: '/', fileSize: 0, parent: 'root'}
];

let pwd = items[0];

input.split('\n').forEach((c) => {
    if (c === '$ cd /') return;
    if (/dir\s/.test(c)) {
        const pathName = c.match(/([a-z]+)/g)[1];
        items.push({id: uuid(), type: 'directory', name: pathName, parent: pwd.id, fileSize: 0})
        return
    }
    if (/([0-9]+)\s/.test(c)) {
        const [fileSize, name] = c.split(" ");
        items.push({
            id: uuid(),
            type: 'file',
            name: name,
            fileSize: Number(fileSize), parent: pwd.id
        })
        return
    }

    if (/\$\scd\s\.\./.test(c)) {
        pwd = items.find(i => i.id === pwd.parent)
        return
    }

    if (/\$\scd\s([a-z]+)/.test(c)) {
        const name = c.match(/[a-z]+/g)[1];
        pwd = items.find(i => i.name === name && i.parent === pwd.id)
        return
    }

    if (pwd === undefined) {
        throw Error("pwd undefined")
    }
})



const size = (id: string): number => items.filter(i => i.parent === id)
    .reduce((a, c) => {
        if (id === 'root') return a
        return a + (c.type === 'file' ? c.fileSize : size(c.id));
    }, 0)

const size2 = (id: string): number => items.filter(i => i.parent === id)
    .reduce((a, c) => {
        // if (id === 'root') return a
        return a + (c.type === 'file' ? c.fileSize : size(c.id));
    }, 0)

const sizes = items.filter(item => item.type === 'directory').map(directory => {
    return size(directory.id)
})

const totalSize = sizes
    .filter(d => d < 100000)
    .reduce((a, c) => a + c, 0)


console.log(sizes);


const required = 30000000 - (70000000 - size2('root'));
const B = sizes.sort((a, b) => a - b).find((s) => s >= required);
console.log(B);