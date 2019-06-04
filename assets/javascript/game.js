$(document).ready(function () {
    var totalScore = $("#totalScore");
    var targetScore = $("#targetScore");
    var winsNumber = $("#winsNumber");
    var lossesNumber = $("#lossesNumber");
    var totalScoreN = 0;
    var lossesNumberN = 0;
    var winsNumberN = 0;
    var targetScoreN = Math.floor(Math.random() * 102) + 19;
    var counterCrystalOne = Math.floor(Math.random() * 12) + 1;
    var counterCrystalTwo = Math.floor(Math.random() * 12) + 1;
    var counterCrystalThree = Math.floor(Math.random() * 12) + 1;
    var counterCrystalFour = Math.floor(Math.random() * 12) + 1;

    targetScore.text(targetScoreN);

    function crystalFunction(crystalCounter){
        totalScoreN = crystalCounter + totalScoreN;
        if (totalScoreN === targetScoreN) {
            winsNumberN++;
            winsNumber.text(winsNumberN);
            totalScoreN=0;
            totalScore.text(totalScoreN);
            targetScoreN = Math.floor(Math.random() * 102) + 19;
            targetScore.text(targetScoreN);
            counterCrystalOne = Math.floor(Math.random() * 12) + 1;
            counterCrystalTwo = Math.floor(Math.random() * 12) + 1;
            counterCrystalThree = Math.floor(Math.random() * 12) + 1;
            counterCrystalFour = Math.floor(Math.random() * 12) + 1;

        }
        else if (totalScoreN > targetScoreN) {
            lossesNumberN++;
            lossesNumber.text(lossesNumberN);
            totalScoreN=0;
            totalScore.text(totalScoreN);
            targetScoreN = Math.floor(Math.random() * 102) + 19;
            targetScore.text(targetScoreN);
            counterCrystalOne = Math.floor(Math.random() * 12) + 1;
            counterCrystalTwo = Math.floor(Math.random() * 12) + 1;
            counterCrystalThree = Math.floor(Math.random() * 12) + 1;
            counterCrystalFour = Math.floor(Math.random() * 12) + 1;
        }
        else {
            totalScore.text(totalScoreN);
        }
    }
    $("#crystalOne").on("click", function () {
       crystalFunction(counterCrystalOne);
    });
    $("#crystalTwo").on("click", function () {
        crystalFunction(counterCrystalTwo);
    });
    $("#crystalThree").on("click", function () {
        crystalFunction(counterCrystalThree);
    });
    $("#crystalFour").on("click", function () {
        crystalFunction(counterCrystalThree);
    });
})