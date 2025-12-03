let numCandidates = parseInt(prompt('Enter the number of candidates: '));

let candidates = [];

for (let i = 0; i < numCandidates; i++) {
    let name = prompt("Enter candidate name. Candidate number " + (i + 1) + ":");
    candidates.push({ name: name, votes: 0 });
}

let numVoters = parseInt(prompt("How many voters are there: "));

for (let i = 0; i < numVoters; i++) {
    let vote = prompt("Who are you voting for: ");

    for (let candidate of candidates) {
        if (vote === candidate.name) {
            candidate.votes += 1;
            break;
        }
    }
}

// Sort by votes (highest first)
candidates.sort((a, b) => b.votes - a.votes);

// Print result
for (let candidate of candidates) {
    console.log(candidate.name, candidate.votes);
}

