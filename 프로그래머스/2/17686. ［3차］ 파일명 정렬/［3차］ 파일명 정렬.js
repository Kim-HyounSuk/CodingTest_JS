const fileSort = (files) => {
    const arr = [];
    
    files.forEach((file) => {
        let head = '', number='', tail = '';
        
        for(let i = 0; i < file.length; i++) {
            if(file[i] === ' ') {
                if(!number) {
                    head += file[i];
                }
                else if(number) {
                    tail += file[i];
                }
            } else if(!number && isNaN(file[i])) {
                head += file[i];
            } else if(!tail && !isNaN(file[i])) {
                number += file[i];
            } else {
                tail += file[i];
            }
        }
        
        arr.push([head, number, tail]);
    });
    
    arr.sort((a, b) => {
        a > b
        if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        else if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        else return a[1] - b[1];
    });
    
    return arr.map((file) => file.join(''));
};

function solution(files) {
    const answer = fileSort(files);
    
    return answer;
}