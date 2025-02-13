// Isabel Ojeda
// HW 3
// Q2

function solve(amount, bottles) {
    let start = new Array(bottles.length).fill(0); // empty bottles
    let queue = [{ curr: start, path: [start] }]; 
    let visited = new Set(); 
    visited.add(JSON.stringify(start)); // needs to be a string 
    while (queue.length > 0) {
        let { curr, path } = queue.shift(); 
        // all other bottles need to be empty
        if (curr.includes(amount) && curr.filter(b => b == amount || b == 0).length == bottles.length) {
            return path; 
        }
        for (let i = 0; i < bottles.length; i++) {
            let next = curr.slice(); 
            next[i]= bottles[i]; 
            enqueue(next, path, queue, visited);
            // empty bottle 
            next = curr.slice(); 
            next[i] = 0; 
            enqueue(next, path, queue, visited); 
            // pur water from one bottle to the other 
            for (let j = 0; j < bottles.length; j++) {
                if (i != j) {
                    let next = curr.slice(); 
                    let pour = Math.min(next[i], bottles[j] - next[j]);
                    next[i] -= pour;
                    next[j] += pour; 
                    enqueue(next, path, queue, visited);
                }
            }
        }
    }
    return null; 
}
function enqueue(next, path, queue, visited) {
    let n = JSON.stringify(next); // needs to be a string 
    if (!visited.has(n)) {
        visited.add(n); 
        queue.push({ curr:next, path: [...path, next] }); 
    }
}