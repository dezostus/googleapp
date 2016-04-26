# googleleap
## Simple Sprinkler
Simple Sprinkler используется для редактирования однородных данных на разных листах Таблицы. В примере рассмотрен вариант, при котором источником право является Таблица редактор.

### Пример данных листов Таблицы
#### Лист с именем Sheet1

A          | B   | C   | D   | E
:--------: | :-: | :-: | :-: | :-:
2016-02-05 | дло | дло | дло | дло
2016-02-04 | 908 | 098 | 098 | 098

#### Лист с именем Sheet2

A          | B    | C    | D    | E
:--------: | :--: | :--: | :--: | :--:
2016-02-05 | дло2 | дло2 | дло2 | дло2
2016-02-04 | 908  | 098  | 098  | 098

#### Лист-редактор

A          | B    | C    | D    | E
:--------: | :--: | :--: | :--: | :--:
2016-02-05 |      |      |      |
Sheet1     | дло  | дло  | дло  | дло
Sheet2     | дло2 | дло2 | дло2 | дло2

### Получение данных в "редактор"
Ячейка `A1` должна содержать в себе дату исследования данных

```javascript
function getDataToSheet() {
    var sh = SpreadsheetApp.openById(SHEET_EDITOR_ID).getSheets()[0];
    var date = sh.getRange('A1').getValue();
    var data = Sprinkler().setSource(SPREAD_OF_SHEETS_ID).getData(date);
    sh.getRange('A2:Z').clear();
    sh.getRange(2, 1, data.length, data[0].length).setValues(data);
}
```

### Запись данных из "редактора"
Ячейка `A1` должна содержать в себе дату исследования данных Функция имеет обратный вызов для получения отметок о том, какие номера строк были обновлены.

```javascript
function setDataToSheets() {
    var sh = SpreadsheetApp.openById(SHEET_EDITOR_ID).getSheets()[0];
    var data = sh.getDataRange().getValues();
    var date = data.shift()[0];
    var logs = [];
    Sprinkler().setSource(SPREAD_OF_SHEETS_ID).setData(date, data, function(l) {
        logs.push(JSON.stringify(l))
    });
}
```
