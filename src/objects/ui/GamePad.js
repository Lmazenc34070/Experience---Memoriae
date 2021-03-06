class GamePad extends Phaser.GameObjects.Container{
    constructor(scene, x, y, size = 100) {
        super(scene, x, y)
        scene.add.existing(this);

        if (scene.sys.game.device.os.desktop !== true) {/////////////////////
            this.size = size;
            let w = this.size;
            let dragW = this.size / 2;
            let pad2 = scene.add.container();

            let circle = scene.add.circle(0, 0, this.size / 2, 0x1854A2, 0.5)
            let circleDrag = scene.add.circle(0, 0, dragW / 2, 0x12F1BB, 0.7)

            this.add(pad2);
            pad2.add(circle);
            pad2.add(circleDrag);
            pad2.x = w / 2;
            pad2.y = w / 2;

            let droite = false;
            let gauche = false;

            circleDrag.setInteractive();
            scene.input.setDraggable(circleDrag, true);
            circleDrag.on('drag', (pointer, dragX, dragY) => {
                circleDrag.x = dragX
                circleDrag.y = dragY
                circleDrag.x = Phaser.Math.Clamp(dragX, -w / 2, w / 2);
                circleDrag.y = Phaser.Math.Clamp(dragY, -w / 2, w / 2);
                if (dragX < -w / 4) {
                    Tableau.current.player.directionX = -1;
                } else if (dragX > w / 4) {
                    Tableau.current.player.directionX = 1;
                } else {
                    Tableau.current.player.directionX = 0;
                }
                if (dragY < -w / 4) {
                    Tableau.current.player.directionY = -1;
                } else if (dragY > w / 4) {
                    Tableau.current.player.directionY = 1;
                } else {
                    Tableau.current.player.directionY = 0;
                }

            });
            circleDrag.on('dragend', (pointer, dragX, dragY) => {
                circleDrag.x = 0;
                circleDrag.y = 0;
                Tableau.current.player.directionX = 0;
                Tableau.current.player.directionY = 0;
            });

        
        }////////////////////////////////////////////////////////////////////////////////////
        this.cursors = scene.input.keyboard.createCursorKeys();

        scene.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.key) {
                case "ArrowRight":
                    Tableau.current.player.directionX = 1;
                    break;

                case "ArrowLeft":
                    Tableau.current.player.directionX = -1;
                    break;

                case "ArrowUp":
                    Tableau.current.player.directionY = -1;
                    break;

                case "ArrowDown":
                    Tableau.current.player.directionY = 1;
                    break;
            }
        });
        scene.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.key) {
                case "ArrowRight":

                    Tableau.current.player.directionX = 0;
                    break;

                case "ArrowLeft":
                    Tableau.current.player.directionX = 0;
                    break;

                case "ArrowUp":
                    Tableau.current.player.directionY = 0;
                    break;

                case "ArrowDown":
                    Tableau.current.player.directionY = 0;
                    break;
            }
        });

    }


}