class PlateformMouv extends ObjetPhysique{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) { //constructor est l'équivalent de Create dans une classe
        super(scene, x, y, "PlateformMouv");

        this.body.allowGravity=false;
        //this.setBodySize(this.body.width,this.body.height);
        //this.body.setSize(64,64);
        this.setOrigin(0,0);
        this.setDisplaySize(90, 35);
        this.setCollideWorldBounds(true);
        this.setBounce(0);

        this.setDepth(1000);
        //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
        
        this.originalX=x;
        this.minX=x;
        this.maxX=x-200;

        // Y
        this.originalY=y;
        this.minY=y;
        this.maxY=y-1;
        // on applique les propriétés du début de l'animation
        this.x=this.minX;

        this.y=this.minY;

        this.alpha=0;
        let me=this;
        scene.tweens.add({
            targets:this,
            duration:200,
            delay:Math.random()*1000,
            alpha:{
                startDelay:Math.random()*5000,
                from:0,
                to:1,
            },
            onComplete: function () {
                me.start();
            }
        })




    }

    start(){
        this.scene.tweens.add({
            targets: this,
            x: {
                from: this.minX,
                to:this.maxX,
                duration: 10*200,
                ease: 'Sine.easeInOut',
                yoyo: -1,
                repeat: -1,
                flipX:false,
            },
            y: {
                from: this.minY,
                to:this.maxY,
                duration: 1000,
                ease: 'Sine.easeInOut',
                yoyo: -1,
                repeat:-1
            }
        });


    }


}