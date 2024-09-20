from random import choice

def main():
    mydict = {
        1: "A",
        2: "B"
    }
    print(choice(list(mydict.items())));

main();
