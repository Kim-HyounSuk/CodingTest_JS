function solution(sizes) {
    let answer = [0, 0];
    
    const redefine = sizes.map(([w, h]) => w >= h ? [w, h] : [h, w]);
    
    redefine.forEach(([w, h]) => {
        if(w > answer[0]) answer[0] = w;
        if(h > answer[1]) answer[1] = h;
    });
    
    return answer[0] * answer[1];
}