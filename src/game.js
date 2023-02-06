const game = {

    organizeLetters: function (array){
        let counts = {};
        array.forEach(element => {
            counts[element] = (counts[element] || 0) + 1;
        });
        let newArray = Object.entries(counts);
        let updatedArray = newArray.map((element) => {
            return element[0];
        })
        return updatedArray.sort().toString();
    },

    checkForAMatch: function (array, letter){
        let checkMatch = array.filter((element) => {
            return element === letter;
        })
        return checkMatch[0];
    }

}

export default game;