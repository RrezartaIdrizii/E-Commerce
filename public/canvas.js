import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ background: '#686C72', resizeTo: window });

document.body.appendChild(app.view);


const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 100,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#00ADB5', '#000000'], // gradient
    stroke: '#393E46',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    align: 'center',
    wordWrapWidth: 1110,
    lineJoin: 'round',
});

const richText = new PIXI.Text('Best Shop In Town', style);

richText.anchor.set(0.5);
richText.position.set(app.screen.width / 2 , app.screen.height /4); // Center the text

app.stage.addChild(richText);

//Teksti tjeter
const skewStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    dropShadow: true,
    dropShadowAlpha: 0.8,
    dropShadowAngle: 2.1,
    dropShadowBlur: 4,
    dropShadowColor: '0x111111',
    dropShadowDistance: 10,
    fill: ['#000000'],
    stroke: '#00ADB5',
    fontSize: 60,
    fontWeight: 'lighter',
    lineJoin: 'round',
    strokeThickness: 12,
});

const skewText = new PIXI.Text('Coming Soon', skewStyle);

skewText.skew.set(0.65, -0.3);
skewText.anchor.set(0.5, 0.5);
skewText.x = 300;
skewText.y = 480;
skewText.position.set(app.screen.width /2, app.screen.height /1.5); // Center the text

app.stage.addChild(skewText);
