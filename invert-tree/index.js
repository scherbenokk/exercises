'use strict';

module.exports = function invert(node) {
    if (!node.left && !node.right) {
        return;
    }
    
    if (!node.left) {
        node.left = node.right;
        node.right = undefined;

        return invert(node.left);
    }

    if (!node.right) {
        node.right = node.left;
        node.left = undefined;

        return invert(node.right);
    }
    
    let nodeLeft = node.left;

    node.left = node.right;
    node.right = nodeLeft;

    nodeLeft = undefined;

    invert(node.left);
    invert(node.right);
} 