

function chess() {
    var table = document.createElement('table'),
        symbol = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        chessBlack_1 = [
            '8', '&#9820', '&#9822', '&#9821', '&#9819', '&#9818', '&#9821', '&#9822', '&#9820', '8'
        ],
        chessWhrite_1 = [
            '1', '&#9814', '&#9816', '&#9815', '&#9813', '&#9812', '&#9815', '&#9816', '&#9814', '1'
        ],
        chessBlack_2 = [
            '7', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '7'
        ],
        chessWhrite_2 = [
            '2', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '2'
        ];

    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var tr = table.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var td = tr.insertCell(j);
            switch (i) {
                case 0:
                    td.innerText = symbol[j];
                    break;
                case 1:
                    td.innerHTML = chessBlack_1[j];
                    break;
                case 2:
                    td.innerHTML = chessBlack_2[j];
                    break;
                case 7:
                    td.innerHTML = chessWhrite_2[j];
                    break;
                case 8:
                    td.innerHTML = chessWhrite_1[j];
                    break;
                case 9:
                    td.innerText = symbol[j];
                    break;
                default:
                    if (j == 0 || j == 9) {
                        td.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.getElementsByTagName("div")[0].append(table);
}

chess();
