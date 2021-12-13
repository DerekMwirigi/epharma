export const AppUtils = {
    printSeperator: (seperator) => {
        var seperator_l = []
        var x = 0;
        while (x < 50) {
            seperator_l.push(seperator)
            x++;
        }
        console.log(seperator_l.join(''));
        
    },
    printLog: (obj, seperator = '*') => {
        AppUtils.printSeperator(seperator);
        console.log(obj);
        AppUtils.printSeperator(seperator);
    }
}