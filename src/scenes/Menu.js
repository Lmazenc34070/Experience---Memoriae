class Menu extends Tableau{

    preload() {
        super.preload();
        this.load.image('MenuArt', 'assets/MenuArt.png');
        this.load.video('Intro', 'assets/ciné1.mp4')

        this.load.audio('MenuZik', 'assets/Sounds/E_Menu.mp3');

        this.load.audio('clic','assets/Sounds/button_click.mp3')



        let width = 14 * 64; //896;
        let height = 7 * 64; //448;

        this.scene.bringToTop();
    }
    create() {
        super.create();
        this.vid = this.add.video(14 * 64 / 2, 7 * 64 / 2, 'Intro');
        this.vid.setDisplaySize(14 * 64, 7 * 64);
        this.vid.play(true);
        this.vid.setDepth(200);
        this.vid.setLoop(false);
        this.cameras.main.setBounds(0, 0, width, height);
        this.physics.world.setBounds(0, 0, width, height);
        this.back = this.sound.add('MenuZik');

        this.back.loop = true; 
        this.back.play();
        this.back.pause();
        this.pasfait = true;
        var musicConfig =
            {
                mute: false,
                volume: 0.2,
                rate : 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay:0,
            }
        this.back.play(musicConfig);
       
    }
    update(time,delta) {
        if(this.vid.getCurrentTime() == this.vid.getDuration()){
            this.back.resume();
            this.bg = this.add.image(14 * 64 / 2, 7 * 64 / 2, 'MenuArt');
            this.bg.setDisplaySize(14 * 64, 7 * 64);
            this.bg.setDepth(201);
            if (this.pasfait) {
                this.tuch = new Start(this, 0, 0);
                this.tuch.y = this.sys.canvas.height / 2 - this.tuch.size - 32;
                this.tuch.x = this.sys.canvas.width / 2 - this.tuch.size - 32;

                this.tuch.bringToTop();
                this.tuch.setDepth(202);
                this.pasfait = false;
            }
        }
            
    }
}