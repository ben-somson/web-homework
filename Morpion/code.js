document.addEventListener("DOMContentLoaded", () => {
    // Initial clean up. DO NOT REMOVE.
    initialCleanup();
    // Hey! Pssst! In here ...
    let game = new Game();
    for (let div of document.querySelectorAll('#grid>div'))
        div.addEventListener('click', () => {
            game.set_color
                (div);
        })
    document.getElementById("reset").addEventListener('click', game.reset.bind(game))
    //ajouter une callback au bouton
});

function initialCleanup() {
    const nodesToRemove = [];
    document.getElementById("grid").childNodes.forEach((node, key) => {
        if (node.nodeType !== Node.ELEMENT_NODE) {
            nodesToRemove.push(node);
        }
    });
    for (const node of nodesToRemove) {
        node.remove();
    }
}

function isSubset(setA, setB) {
    for (let v of setA) {
        if (!setB.has(v)) return false;
    }
    return true;
}

class Game {
    // just like Python's __init__
    // NO NEED to pass 'self' in JavaScript
    constructor() {
        this.player = 1
        this.player1 = new Set()
        this.player2 = new Set()
    }

    display() {
        console.log(`[Player ${this.player}`)
    }

    reset() {
        for (let div of document.querySelectorAll('#grid>div')) {
            div.classList.remove('playerone')
            div.classList.remove('playertwo')
        }
        this.player = 1
        this.player1.clear()
        this.player2.clear()
        const element = document.getElementById("end_txt")
        element.remove()
    }

    set_color(elt) {
        let nbplayer = this.player
        if ((!(elt.classList.contains('playerone'))) && (!(elt.classList.contains('playertwo')))) {
            if (nbplayer == 1) {
                elt.classList.add('playerone');
                this.player = 2
                this.player1.add(parseInt(elt.id))
            }
            else if (nbplayer == 2) {
                elt.classList.add('playertwo');
                this.player = 1
                this.player2.add(parseInt(elt.id))
    
            }
        }
        this.check_win()
    }



    endgame() {
        const end_div = document.createElement('div')
        end_div.id = 'end_txt'
        const end_text = document.createTextNode(`le joueur ${this.player} a gagné`)
        end_div.appendChild(end_text)
        const currentDiv = document.getElementById("bouton")
        var parentDiv = document.getElementById("main")
        parentDiv.insertBefore(end_div, currentDiv);
    }

    check_win() {
        let cb1 = new Set([1, 2, 3])
        let cb2 = new Set([4, 5, 6])
        let cb3 = new Set([7, 8, 9])
        let cb4 = new Set([1, 4, 7])
        let cb5 = new Set([2, 5, 8])
        let cb6 = new Set([3, 6, 9])
        let cb7 = new Set([1, 5, 9])
        let cb8 = new Set([3, 5, 7])
        let cbwin = new Set([cb1, cb2, cb3, cb4, cb5, cb6, cb7, cb8])
        console.log(this.player1)
        if (this.player == 1) {
            for (let cb of cbwin) {
                if (isSubset(cb, this.player1)) {
                    this.endgame()
                    break
                }
            }
        }
        else if (this.player == 2) {
            for (let cb of cbwin) {
                if (isSubset(cb, this.player2)) {
                    this.endgame()
                    break
                }
            }
        }

    }
}