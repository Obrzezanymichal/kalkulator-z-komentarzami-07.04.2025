# Kółko i krzyżyk - README - Jakub Gniewkowski
To prosty skrypt, który umożliwia grę w kółko i krzyżyk dla dwóch osób.

## Opis
To będzie krótki opis skryptu gry kółko i krzyżyk. Na samym końcu dowiesz sie jak grac.
## Jakie funkcje są w tym skrypcie?

- **handleCellClick(event)** - Obsługue kliknięcie w pole. Sprawdza wygraną, remis oraz zmiane gracza, na dodatek zmienia turę do odpowiedniego gracza po kliknięciu.
- **checkWin()** - Sprawdza, czy któryś z graczy spełnił warunki wygranej.
- **resetGame()** - Czyści planszę i ustawia wszystko od nowa, aby rozpocząć rozgrywkę ponownie.
- **drawWinningLine()** - Rysuje linię na planszy wzdłuż pól, które spełniły wymogi wygranej.
- **createBoard()** - Tworzy planszę, na której toczy się rozgrywka w dziewięciu polach.


## Jakie zmienne globalne występują w tym skrypcie?
- __*gameOver*__ - Zmienna, która określa kiedy występuje zakończenie rozgrywki.
- __*board*__ - Element HTML, w którym znajduję się plansza.
- __*gameBoard*__ - Tablica, która przechowuje aktualny stan planszy.
- __*messageTur*__ - Element HTML, w którym jest plansza.
- __*currentPlayer*__ - Zmienna, która wyznacza danego gracza.
- __*winningCombo*__ - Tablica, która zawiera zwycięzkie kombinacje.
- __*resertBtn*__ - Element HTML, w którym jest przycisk resetowania gry


## Jak grać?
Po uruchomieniu skryptu ujawi się plansza 3x3 Gracze na zmianę ustawiają swoje znaki ( X lub O ),
a w przypadku wygranej gra informuje o tym zwracając komunikat kto jest zwycięzcą oraz stawia czerwoną linię na polach, na których zostały spełnione wymogi wygranej.
