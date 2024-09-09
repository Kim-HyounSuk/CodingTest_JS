const timeTransSec = (time) => {
    const [min, sec] = time.split(':');
    return Number(min) * 60 + Number(sec);
};

const timeTransMin = (time) => {
    const [min, sec] = [
        String(Math.floor(time / 60)).padStart(2, '0'),
        String(Math.floor(time % 60)).padStart(2, '0')
    ]
    return `${min}:${sec}`;
};

function solution(video_len, pos, op_start, op_end, commands) {
    let answer = '';
    [video_len, pos, op_start, op_end] = [timeTransSec(video_len), timeTransSec(pos), timeTransSec(op_start), timeTransSec(op_end)];
    
    let cur = pos;
    
    for(let command of commands) {
        if(cur >= op_start && cur <= op_end) cur = op_end;
        
        if(command === 'next') {
            cur += 10;
            cur >= video_len ? cur = video_len : cur;
        }
        if(command === 'prev') {
            cur -= 10;
            cur >= 0 ? cur : cur = 0;
        }
    }
    
    if(cur >= op_start && cur <= op_end) cur = op_end;
    
    answer = timeTransMin(cur);
    
    return answer;
}