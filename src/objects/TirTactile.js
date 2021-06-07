class Spells extends Phaser.GameObjects.Container {
    constructor(scene, x, y, size = 80    ) {
        super(scene, x, y)
        scene.add.existing(this);

        this.size = size;
        let w = this.size;

        let pad2 = scene.add.container();

        let circlefond = scene.add.circle(0, 0, this.size / 1.8, 0x272123, 0.5)
        circlefond.setStrokeStyle(2, 0x1a65ac);
        circlefond.setAlpha(0);
        let circle = scene.add.circle(0, 0, this.size / 2, 0xFFFFFF, 0.5)
        circle.setAlpha(0);
        this.add(pad2);
        pad2.add(circlefond);
        pad2.add(circle);

 circle.setInteractive();
  circle.on('pointerdown', function () {
            Tableau.current.player.shoot();
            circle.setAlpha(0.1);
            circlefond.setAlpha(0.8);
        });
        circle.on('pointerup', function () {
            circle.setAlpha(0.5);
            circlefond.setAlpha(1);
        });
    }
}