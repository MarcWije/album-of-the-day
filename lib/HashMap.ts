
let map :  Map<string, string> = new Map([
    ["04032026","the-bends.md"],
    ["05032026", "parachutes.md"],
    ["06032026", "octavarium.md"],
    ["07032026", "magma.md"],
    ["08032026", "a-night-at-the-opera.md"],
    ["09032026", "aim-and-ignite.md"],
    ["10032026", "loveless.md"],
    ["11032026", "pretty-odd.md"],
]);


export default function getMap() : Map<string, string> {
    return map;
}