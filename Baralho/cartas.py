from random import choice as randItem

class Card():
    def __init__(self,val,suit) -> None:
        self.val = val;
        self.suit = suit;

    def __str__(self) -> str:
        return " of ".join(map(str, [self.val, self.suit]))
        


class Deck():
    def __init__(self) -> None:
        self.vals = {
            "A":1,
            "2":2,
            "3":3,
            "4":4,
            "5":5,
            "6":6,
            "7":7,
            "8":8,
            "9":9,
            "10":10,
            "J":11,
            "Q":12,
            "K":13,
        }
        self.suits = {
            "H": "Hearts",
            "S": "Spades",
            "D": "Diamonds",
            "C": "Clubs",
        }
        self.cards = [];
    
    def _add_card(self,val,suit):
        self.cards.append(Card(self.vals[val],self.suits[suit]))

    def _add_random_card(self):
        valkey = randItem(list(self.vals.keys()))
        val = self.vals[valkey]
        suitkey = randItem(list(self.suits.keys()))
        suit = self.suits[suitkey]
        self._add_card(valkey,suitkey);

    def _show_cards(self):
        for card in self.cards:
            print(card)

def main():
    myDeck = Deck();
    while True:
        print("===== BARAIO =====")
        myDeck._add_random_card();
        myDeck._show_cards();
        input("Continua no proximo episodio... ")
        print("\n"*50)

main();