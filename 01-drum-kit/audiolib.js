window.audiolib = {
    82: "samples/cymbals_crash/crash_014.wav",
    84: "samples/cymbals_crash/crash_015.wav",
    89: "samples/cymbals_crash/crash_018.wav",
    85: "samples/cymbals_crash/crash_019.wav",
    73: "samples/cymbals_crash/crash_022.wav",
    79: "samples/cymbals_crash/crash_023.wav",

    70: "samples/cymbals_ride/ride_025.wav",
    71: "samples/cymbals_ride/ride_026.wav",
    72: "samples/cymbals_ride/ride_027.wav",
    74: "samples/cymbals_ride/ride_029.wav",
    75: "samples/cymbals_ride/ride_030.wav",
    76: "samples/cymbals_ride/ride_031.wav",

    86: "samples/high_hat/acc_hhcl_053.wav",
    66: "samples/high_hat/acc_hhcl_054.wav",
    78: "samples/high_hat/acc_hhcl_055.wav",
    77: "samples/high_hat/acc_hhcl_061.wav",
    188: "samples/high_hat/acc_hhcl_062.wav",
    190: "samples/high_hat/acc_hhcl_063.wav",

    // "": "samples/high_hat/acc_hhop_037.wav",
    // "": "samples/high_hat/acc_hhop_041.wav",
    // "": "samples/high_hat/acc_hhop_045.wav",
    // "": "samples/high_hat/acc_hhop_049.wav",

    // "": "samples/kicks/bright_kick_009.wav",
    // "": "samples/kicks/bright_kick_010.wav",
    // "": "samples/kicks/bright_kick_011.wav",
    // "": "samples/kicks/bright_kick_012.wav",

    // "": "samples/kicks/tight_kick_017.wav",
    // "": "samples/kicks/tight_kick_018.wav",
    // "": "samples/kicks/tight_kick_019.wav",
    // "": "samples/kicks/tight_kick_020.wav",
    // "": "samples/kicks/tight_kick_021.wav",

    192: "samples/percussion/bell_001.wav",

    48: "samples/percussion/agogo_001_a.wav",
    80: "samples/percussion/agogo_001_b.wav",
    189: "samples/percussion/bongo_001a.wav",
    219: "samples/percussion/bongo_001b.wav",
    187: "samples/percussion/guiro_001.wav",
    221: "samples/percussion/guiro_006.wav",
    186: "samples/percussion/timbale_004a.wav",
    191: "samples/percussion/timbale_004b.wav",
    222: "samples/percussion/claves_001.wav",
    220: "samples/percussion/sleigh_bell_003.wav",

    49: "samples/snares/acc_snare_r&p_015.wav",
    50: "samples/snares/acc_snare_r&p_020.wav",
    51: "samples/snares/acc_snare_r&p_021.wav",
    52: "samples/snares/acc_snare_r&p_022.wav",

    53: "samples/snares/elec_snare_big_003.wav",
    54: "samples/snares/elec_snare_big_004.wav",
    55: "samples/snares/elec_snare_high_001.wav",
    56: "samples/snares/elec_snare_high_007.wav",

    81: "samples/toms/1_Hi_Tom.wav",
    87: "samples/toms/1_Low_Tom.wav",
    69: "samples/toms/1_Mid_Tom.wav",
    65: "samples/toms/2_High_Tom.wav",
    83: "samples/toms/2_Low_Tom.wav",
    68: "samples/toms/2_Mid_Tom.wav",
    90: "samples/toms/3_High_Tom.wav",
    88: "samples/toms/3_Low_Tom.wav",
    67: "samples/toms/3_Mid_Tom.wav"
};

var body = document.querySelector('body');

Object.keys(window.audiolib).forEach(function(key) {
    let audio = document.createElement('audio');
    let parts = window.audiolib[key].split('/');
    let name = parts[parts.length - 1].replace('.wav', '').replace(/_/g, ' ');

    // console.log(`   "${name}": "${window.audiolib[key]}",`);

    let buttons = document.querySelectorAll(`div[data-key="${key}"]`);

    buttons.forEach(function(button){
        let caption = document.createElement('small');
        caption.innerText = name;
        button.appendChild(caption);
    });

    audio.setAttribute('data-key', key);
    audio.setAttribute('src', window.audiolib[key]);

    body.appendChild(audio);
})
