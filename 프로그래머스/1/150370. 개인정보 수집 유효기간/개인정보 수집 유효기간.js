const convertYeartoDay = (date) => {
    const [year, month, day] = date.split('.').map(Number);
    
    return (year * 12 + month) * 28 + day;
};

function solution(today, terms, privacies) {
    let answer = [];
    const expiration = {};
    today = convertYeartoDay(today);
    
    terms.forEach((ele) => {
        const [term, expire] = ele.split(' ');
        
        expiration[term] = Number(expire) * 28;
    });
    
    privacies.forEach((ele, idx) => {
        const [collectionDate, term] = ele.split(' ');
        const date = convertYeartoDay(collectionDate);
        
        if(date + expiration[term] <= today) answer.push(idx + 1);
    });
    
    return answer;
}