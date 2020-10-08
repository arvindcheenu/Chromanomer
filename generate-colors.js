const fs = require('fs');
const {srgb, p3, asAlpha} = require('./utils/future-color');
const colorJSON = {};
const gray = {
    "black" : [0,0,0],
    "darkest-gray" : [0,0,0],
    "darker-gray" : [20.01,0,0],
    "dark-gray" : [26.68,0,0],
    "dimmest-gray" : [33.35,0,0],
    "dimmer-gray" : [40.02,0,0],
    "dim-gray" : [46.69,0,0],
    "gray" : [53.36,0,0],
    "pale-gray" : [60.03,0,0],
    "paler-gray" : [66.7,0,0],
    "palest-gray" : [73.37,0,0],
    "bright-gray" : [80.04,0,0],
    "brighter-gray" : [86.71,0,0],
    "brightest-gray" : [93.38,0,0],
    "white" : [100,0,0]
}
const alphas = {
    "clearest": 10,
    "clearer": 20,
    "clear": 30,
    "misty": 40,
    "mistier": 50,
    "mistiest": 60,
    "foggy": 70,
    "foggier": 80,
    "foggiest": 90,
    "base": 100,
}
const lightnesses = {
    "darkest": 7.25,
    "darker": 14.5,
    "dark": 21.75,
    "dimmest": 29,
    "dimmer": 36.25,
    "dim": 43.5,
    "base": 50,
    "pale": 57.85,
    "paler": 65.1,
    "palest": 72.5,
    "bright": 79.6,
    "brighter": 87.35,
    "brightest": 95.1,
}
const chromas = {
    "gloomiest": 9.25,
    "gloomier": 18.5,
    "gloomy": 27.75,
    "dullest": 37,
    "duller": 46.25,
    "dull": 55.5,
    "base": 66,
    "deep": 71.65,
    "deeper": 77.3,
    "deepest": 82.95,
    "vivid": 88.6,
    "vivider": 94.25,
    "vividest":100,
}
const hues = {
    "cerise-red": { base : 10 },
    "cinnabar-red": { base : 30 },
    "fiery-orange": { base : 50 },
    "copper-orange": { base : 70 },
    "luxor-gold": { base : 90 },
    "olive-green": { base : 110 },
    "forest-green": { base : 130 },
    "apple-green": { base : 150 },
    "sea-green": { base : 170 },
    "teal-green": { base : 190 },
    "pacific-blue": { base : 210 },
    "curious-blue": { base : 230 },
    "dodger-blue": { base : 250 },
    "azure-blue": { base : 270 },
    "royal-blue": { base : 290 },
    "amethyst-purple": { base : 310 },
    "fuchsia-pink": { base : 330 },
    "cerise-pink": { base : 350 }
}
for (const [_, object] of Object.entries(hues)) {
    object.warmest = object.base + 9;
    object.warmer = object.base + 6;
    object.warm = object.base + 3;
    object.cool = object.base - 3;
    object.cooler = object.base - 6;
    object.coolest = object.base - 9;
}
for (const [color, hueObject] of Object.entries(hues)) {
    Object.keys(hueObject).forEach(temperature => {
        let temp = (temperature === "base" ? "" : temperature + "-");
        Object.keys(alphas).forEach(alpha => {
            let transparency = (alpha === "base" ? "" : alpha + "-");        
            Object.keys(lightnesses).forEach(lightness => {
            let light = (lightness === "base" ? "" : lightness + "-");
                Object.keys(chromas).forEach(chrome => {
                    let chroma = (chrome === "base" ? "" : chrome + "-");
                    let fullColor = transparency + light + chroma + temp + color;
                    colorJSON[fullColor] = {};
                    colorJSON[fullColor]["lch"] = `lch(${lightnesses[lightness]} ${chromas[chrome]} ${hueObject[temperature]}${asAlpha(alphas[alpha])})`;
                    colorJSON[fullColor]["srgb"] = srgb(lightnesses[lightness], chromas[chrome], hueObject[temperature], alphas[alpha]);
                    colorJSON[fullColor]["p3"] = p3(lightnesses[lightness], chromas[chrome], hueObject[temperature], alphas[alpha]);
                })
            })
        })
    });
}
for (const [color, array] of Object.entries(gray)) {
    Object.keys(alphas).forEach(alpha => {
        let transparency = (alpha === "base" ? "" : alpha + "-");
        let fullColor = transparency + color;   
        colorJSON[fullColor] = {};
        colorJSON[fullColor]["lch"] = `lch(${array[0]} ${array[1]} ${array[2]}${asAlpha(alphas[alpha])})`;
        colorJSON[fullColor]["srgb"] = srgb(array[0], array[1], array[2], alphas[alpha]);
        colorJSON[fullColor]["p3"] = p3(array[0], array[1], array[2], alphas[alpha]); 
    })
}
colorJSON["transparent"] = {};
colorJSON["transparent"]["lch"] = 'transparent';
colorJSON["transparent"]["srgb"] = 'transparent';
colorJSON["transparent"]["p3"] = 'transparent';
let json = JSON.stringify(colorJSON);
fs.writeFile('coxy.names.json', json, 'utf8', function readFileCallback(err, data){
    if (err){ console.log(err); } else { console.log("Colors generated successfully!") }
})