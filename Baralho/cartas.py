from random import choice as randItem

class Card():
    def __init__(self,val,suit,rep) -> None:
        self.val = val;
        self.rep = rep;
        self.suit = suit;

    def __str__(self) -> str:
        return " ".join(map(str, [self.rep, self.suit]))
        


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
            "H": "\u2665",
            "S": "\u2660",
            "D": "\u2666",
            "C": "\u2663"
        }
        self.cards = [];
    
    def _add_card(self,val,suit,rep):
        self.cards.append(Card(self.vals[val],self.suits[suit],rep))

    def _add_random_card(self):
        valkey = randItem(list(self.vals.keys()))
        suitkey = randItem(list(self.suits.keys()))
        rep = randItem(list(self.vals))
        self._add_card(valkey,suitkey,rep);

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