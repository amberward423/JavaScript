function num_candidates(){
    candidates=[];
    candidates.push(prompt("Enter a number of candidates: "));
    candidates.push(prompt("Enter the name of the candidates: "));
   return candidates;
}

function num_voters(){
    voters= [];
    voters.push(prompt("Enter a number of voters: "));
    return voters;

}
function decision () {
    votes= [];
    votes.push(prompt("Who are you voting for: "))
    return votes;
}

function results() {
    let candidate = num_candidates();
    let num_voter = num_voters();
    let resultsArray= decision();

    let final = num_candidates.concat(num_voters,decision)

    let total ={
        candidate: final[1],
        Votes: final[3]
    };

    console.log(total);

}
num_candidates()
num_voters()
decision()
results()