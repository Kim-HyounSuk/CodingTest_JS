function solution(wallpaper) {
    let minX = 50, minY = 50;
    let maxX = 0, maxY = 0;
    
    wallpaper.forEach((xAxis, idx) => {
        if(xAxis.includes('#')) {
            minY = Math.min(minY, idx);
            maxY = Math.max(maxY, idx + 1);
            minX = Math.min(minX, xAxis.indexOf('#'));
            maxX = Math.max(maxX, xAxis.lastIndexOf('#') + 1);
        }
    });
    
    return [minY, minX, maxY, maxX];
}