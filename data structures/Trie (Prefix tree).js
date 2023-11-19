/*
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

*/

const Trie = function () {
    this.root = {};
};

Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let letter of word) {
        if (node[letter] === undefined) node[letter] = {};
        node = node[letter]
    }
    node.isEnd = true;
};

Trie.prototype.search = function (word) {
    let node = this.root
    for (let letter of word) {
        if (!node[letter]) {
            return false;
        } else {
            node = node[letter];
        }
    }

    return node && node.isEnd === true;
};

Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (let letter of prefix) {
        if (!node[letter]) {
            return false;
        } else {
            node = node[letter];
        }
    }
    return true;
};