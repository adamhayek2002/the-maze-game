class Maze3WinScene extends Phaser.Scene{
    constructor(){
        super({
            key:CST.SCENES.WIN3
        })
    }

    init(data){
        this.coincount = data[0]
        this.monsterCount = data[1]
    }

    preload(){
        this.load.image('win', 'assets/win.png');
    }

    create(){
        this.add.image(200,0,'win').setOrigin(0,0);

        
        this.add.text(540, 310, 'You completed all Levels', { fontSize: '64px', fill: '#ffffff' }).setOrigin(0.5);

        this.add.text(540, 400, 'Coins Collected: ' + this.coincount+"/15", {
            fontSize: '32px',
            color: '#ffffff'
          }).setOrigin(0.5);
        
        this.add.text(540, 430, 'Ghosts Killed: ' + this.monsterCount+"/15", {
            fontSize: '32px',
            color: '#ffffff'
          }).setOrigin(0.5);
        this.add.text(540, 500, 'Press Enter to Exit Game', {
        fontSize: '24px',
        color: '#ffffff'
        }).setOrigin(0.5);;  
    }

    update(){
        let pressEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

        if(pressEnter.isDown){
        this.scene.start(CST.SCENES.MENU);
        }
    }
}