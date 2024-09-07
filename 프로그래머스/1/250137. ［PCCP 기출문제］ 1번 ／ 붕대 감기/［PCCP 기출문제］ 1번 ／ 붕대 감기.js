function solution(bandage, health, attacks) {
    const [time, amount, addition] = bandage;
    let curHealth = health;
    let prevAttackTime = 0;
    
    for(const [attackTime, damage] of attacks) {
        
        const cureTime = (attackTime - prevAttackTime - 1)
        const fullCure = Math.floor(cureTime / time);

        curHealth += cureTime * amount + fullCure * addition;
        
        if(curHealth > health) curHealth = health;
        
        curHealth -= damage;
        
        if(curHealth <= 0) return -1;
        
        prevAttackTime = attackTime;
    }
    
    return curHealth;
}