let som = 0
let laatste_meting = 0
let meting = 0
let lijst = [
0,
0,
0,
0,
0,
0,
0,
0
]
while (true) {
    let list: number[] = []
    let metingen: number[] = []
    meting = pins.analogReadPin(AnalogPin.P0)
    laatste_meting = metingen[0]
    som += meting
    som += -1 * laatste_meting
    metingen.push(meting)
    list.removeAt(0)
}
