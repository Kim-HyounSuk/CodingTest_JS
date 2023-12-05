function solution(genres, plays) {
    let answer = [];
    let playCountMap = new Map();
    let musicMap = genres.reduce((map, genre, idx) => {
        if(map.get(genre)) {
            map.set(genre, [...map.get(genre), {idx, play: plays[idx]}].sort((a, b) => b.play - a.play));
            playCountMap.set(genre, playCountMap.get(genre) + plays[idx]);
        } else {
            map.set(genre, [{idx, play: plays[idx]}]);
            playCountMap.set(genre, plays[idx]);
        }
        return map;
    }, new Map);
    
    playCountMap = [...playCountMap].sort((a, b) => b[1] - a[1]);
    
    playCountMap.forEach((genre) => {
        const item = musicMap.get(genre[0]);
        
        if(item.length > 1) answer = [...answer, item[0].idx, item[1].idx];
        else if(item.length > 0) answer = [...answer, item[0].idx];
    });
    
    return answer;
}