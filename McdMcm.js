const num1 = 34;
const num2 = 26;

function maxComDiv() {
    let maxCom = 0;
    if (num1 < num2) {
        let testCom = num1;
        do {
            if (num2 % testCom == 0) {
                maxCom = testCom;
            }else{
                do {
                    testCom--;
                } while (num1 % testCom != 0);
            }
        } while (maxCom == 0);
    }else{
        let testCom = num2;
        do {
            if (num1 % testCom == 0) {
                maxCom = testCom;
            }else{
                do {
                    testCom--;
                } while (num2 % testCom != 0);
            }
        } while (maxCom == 0);
    }

    console.log(maxCom);
}

function minComMul() {
    let minCom = 0;
    do {
        if (num1<num2) {
            if (num2%num1 == 0) {
                minCom = num2;
            }else{
                testMin = parseInt(num2/num1);
                do {
                    if(num1*testMin>num2){
                        let num2Acc = 1;
                        do {
                            if (num2*num2Acc==num1*testMin) {
                                minCom = num1*testMin;
                                num2Acc++;
                            }else{
                                num2Acc++;
                            }
                        } while (num2*num2Acc<=num1*testMin);
                        testMin++;
                    }else{
                        testMin++;
                    }
                } while (minCom == 0);
            }
        }else{
            if (num1%num2 == 0) {
                minCom = num1;
            }else{
                testMin = parseInt(num1/num2);
                do {
                    if(num2*testMin>num1){
                        let num1Acc = 1;
                        do {
                            if (num1*num1Acc==num2*testMin) {
                                minCom = num2*testMin;
                                num1Acc++;
                            }else{
                                num1Acc++;
                            }
                        } while (num1*num1Acc<=num2*testMin);
                        testMin++;
                    }else{
                        testMin++;
                    }
                } while (minCom == 0);
            }
        }
    } while (minCom==0);
    console.log(minCom);
}

maxComDiv();
minComMul();