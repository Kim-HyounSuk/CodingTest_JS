function solution(players, callings) {
    const map = {};
    
    players.forEach((player, idx) => {
        map[player] = idx;
    });
    
    callings.forEach((player) => {
        const idx = map[player];
        const prevPlayer = players[idx - 1];
        
        [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
        
        map[prevPlayer] = idx;
        map[player] = idx - 1;
    });
    
    return players;
}