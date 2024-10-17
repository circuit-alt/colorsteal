// ==UserScript==
// @name         steal color
// @namespace    https://multiplayerpiano.org/#
// @version      1.0-github
// @description  steal colorssss >:)))))
// @author       circuit
// @match        https://multiplayerpiano.org/*
// @match        https://multiplayerpiano.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=multiplayerpiano.org
// @grant        none
// ==/UserScript==
var fave = [localStorage.fave]
MPP.client.on('a', function(m) {
    var args = m.a.split(' ');
    var cmd = args[0];
    // commands
    if (m.p.id == MPP.client.participantId) {
    if (cmd == "michael" && args[1] == "cheese") {
        MPP.chat.send("did you know michael cheese?")
            }

        if (cmd == "addfave") {
            var faves = fave.push(m.a.substring(8).trim())
            localStorage.setItem("fave", fave)
        }
        if (cmd == "faves") {
            MPP.chat.send(localStorage.fave)
        }
    if (cmd == "steal") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                color: MPP.client.ppl[args[1]].color
            }
        }]);
    }
    if (cmd == "reset") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                name: "circuit ⱍ",
                color: '#007bff'
            }
        }]);
    }
    if (cmd == "what's" && args[1] == "my" && args[2] == "color") {
        MPP.chat.send(MPP.client.ppl[MPP.client.participantId].color)
    }

    if (cmd == "settings") {
        MPP.chat.send(JSON.stringify(MPP.client.channel.settings))
    }
    if (cmd == "about") {
        MPP.chat.send(JSON.stringify(MPP.client.ppl[args[1]]))
    }
    if (cmd == "goto") {
        MPP.client.setChannel(args[1])
    }
    if (cmd == "whereami") {
        MPP.chat.send(MPP.client.channel._id)
    }
    if (cmd == "name") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                name: m.a.substring(5).trim()
            }
        }]);
    }
    if (cmd == "color") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                color: args[1]
            }
        }]);
    }
    }
    /* if (MPP.client.participantId == 'ebb6dfa96f1714ce66f648ad') {
        if (m.p.id == '753b232bbf78d992f2985169') {
            if (cmd == "say") {
                MPP.chat.send(m.a.substring(4).trim())
            }
        }
    } */
});
