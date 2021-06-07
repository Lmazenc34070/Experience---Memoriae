class TableauEnd extends Tableau {

    preload() {
        super.preload();
        this.load.video('Outro', 'assets/ciné2.mp4')

        let width = 14 * 64; //896;
        let height = 7 * 64; //448;

        // this.scene.bringToTop();
    }
    create() {
        super.create();
        this.movie = this.add.video(14 * 64 / 2, 7 * 64 / 2, 'Outro');
        this.movie.setDisplaySize(14 * 64, 7 * 64);
        this.movie.play(true);
        this.movie.setDepth(200);
        this.movie.setLoop(false);
        this.cameras.main.setBounds(0, 0, width, height);
        this.physics.world.setBounds(0, 0, width, height);
    }
}