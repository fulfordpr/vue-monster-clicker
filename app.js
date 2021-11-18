const attackCalculate = (min,max)=>{
    damage = Math.floor(Math.random()* (max-min)) + min;
    return damage;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            round:1,
            battleLog:[],
            gameOver: false,
            gameOverMessage: ''
        }
    },
    methods:{
        startNewGame(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.round=1;
            this.gameOver = false;
            this.battleLog = []
        },
        attackMonster(){
            playerhit = attackCalculate(5,12);
            this.monsterHealth -= playerhit;
            monsterhit = this.attackPlayer()
            monsterhit
            this.battleLog.unshift(`Player ⚔ Monster for ${playerhit}`)
            this.battleLog.unshift(`Monster ⚔ Player for ${monsterHit}`)
            this.round++

        },
        attackPlayer(){
            monsterHit = attackCalculate(5,18)
            this.playerHealth -= monsterHit;
            return monsterHit;
        },
        specialAttack(){
            if(this.round % 3 ===0){
                playerhit = attackCalculate(12,28);
                this.monsterHealth -= playerhit;
                monsterhit = this.attackPlayer()
                monsterhit
                this.battleLog.unshift(`Player ⚔ Monster for ${playerhit}`)
                this.battleLog.unshift(`Monster ⚔ Player for ${monsterHit}`)
                this.round++
            }
        },
        heal(){
            if(this.round % 5 === 0){
                healAmount = attackCalculate(10,20)
                this.playerHealth += healAmount;
                monsterhit = this.attackPlayer()
                monsterhit
                this.battleLog.unshift(`Player healed 🧪 for ${healAmount}`)
                this.battleLog.unshift(`Monster ⚔ Player for ${monsterHit}`)
                this.round++
            }
        },
        quit(){
            this.gameOverMessage = "You quit. . . "
            this.gameOver = true;
        }
    },
    computed:{
        playerHealthWidth(){
            if(this.playerHealth <=0){
                return '0%'
            }
            return `${this.playerHealth}%`
        },
        monsterHealthWidth(){
            if(this.monsterHealth <=0){
                return '0%'
            }
            return `${this.monsterHealth}%`
        },
        specialAvailable(){
            if (this.round % 3 === 0){
                return false;
            } else {
                return true;
            }
        },
        healAvailable(){
            if (this.round % 5 === 0){
                return false;
            } else {
                return true;
            }
        }
    },
    watch:{
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0){
                this.gameOverMessage = "It's a Draw!"
                this.gameOver = true;
            } else if (value <= 0 && this.monsterHealth > 0){
                this.gameOverMessage = "You Lost!"
                this.gameOver = true;
            } 
            if(this.playerHealth > 100){
                this.playerHealth = 100
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0){
                this.gameOverMessage = "It's a Draw!"
                this.gameOver = true;
            } else if (value <= 0 && this.playerHealth > 0){
                this.gameOverMessage = "You win!"
                this.gameOver = true;
            } 
        }
    }
})

app.mount('#game')