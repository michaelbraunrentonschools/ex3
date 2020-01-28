function doSomething () {

    let MIN = 1;
    let MAX = 100;

    let sum = 0;

    for (let i = MIN; i <= MAX; i++) {
        sum+=i;
    }
    game.splash("This sum was" + sum)
}
    
doSomething()

