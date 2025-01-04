import React, { useEffect, useState } from "react";
import { Text, View, Modal } from "react-native";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { FlatGrid } from "react-native-super-grid";
import Card from "./Card";

/**
 * @description       Game Levels - There will be three game levels that will be played
 *                                  synchronously as the user progress pass the levels.
 *
 *                    Start Game  - User will begin the game by clicking the start button
 *                                  each time. This means every game the button reset to true/false.
 *
 *                    In-Depth    - The game will start with four cards and the user will progress
 *                                  through the levels gaining more and more cards as the user progresses
 *
 *                    Alerts      - The user will receive an alert after completing each level showing
 *                                  how they did. < 2 Minutes is Excellent, > 2 minutes is Great!
 *
 *                    Card        - This represents the card and handles the flipping of it and how the user
 *                                  interacts with the card. This will have a flip animation on it which will
 *                                  be used to animate the card as it is rotated/flipped.
 */

const CardImages = [
  {
    image: require("../assets/images/Matching_Cards/Level_One/BLUE_CARD.png"),
    matched: false,
  },
  {
    image: require("../assets/images/Matching_Cards/Level_One/ORANGE_CARD.png"),
    matched: false,
  },
  {
    image: require("../assets/images/Matching_Cards/Level_One/PINK_CARD.png"),
    matched: false,
  },
  {
    image: require("../assets/images/Matching_Cards/Level_One/RED_CARD.png"),
    matched: false,
  },
  {
    image: require("../assets/images/Matching_Cards/Level_One/WHITE_CARD.png"),
    matched: false,
  },
  {
    image: require("../assets/images/Matching_Cards/Level_One/YELLOW_CARD.png"),
    matched: false,
  },
];

const MatchingImagesMedium = [
  {
    name: "Arrow",
    image: require("../assets/images/Matching_Cards/Level_Two/Arrow.png"),
    id: 1,
  },
  {
    name: "Circle",
    image: require("../assets/images/Matching_Cards/Level_Two/Circle.png"),
    id: 2,
  },
  {
    name: "Cross",
    image: require("../assets/images/Matching_Cards/Level_Two/Cross.png"),
    id: 3,
  },
  {
    name: "Diamond",
    image: require("../assets/images/Matching_Cards/Level_Two/Diamond.png"),
    id: 4,
  },
  {
    name: "Half_Moon",
    image: require("../assets/images/Matching_Cards/Level_Two/Half_Moon.png"),
    id: 5,
  },
  {
    name: "Heart",
    image: require("../assets/images/Matching_Cards/Level_Two/Heart.png"),
    id: 6,
  },
  {
    name: "Octagon",
    image: require("../assets/images/Matching_Cards/Level_Two/Octagon.png"),
    id: 7,
  },
  {
    name: "Square",
    image: require("../assets/images/Matching_Cards/Level_Two/Square.png"),
    id: 8,
  },
  {
    name: "Star",
    image: require("../assets/images/Matching_Cards/Level_Two/Star.png"),
    id: 9,
  },
  {
    name: "Triangle",
    image: require("../assets/images/Matching_Cards/Level_Two/Triangle.png"),
    id: 10,
  },
];

const MatchingImagesHard = [
  {
    name: "Car",
    image: require("../assets/images/Matching_Cards/Level_Three/Car.png"),
    id: 1,
  },
  {
    name: "Cat",
    image: require("../assets/images/Matching_Cards/Level_Three/Cat.png"),
    id: 2,
  },
  {
    name: "Deer",
    image: require("../assets/images/Matching_Cards/Level_Three/Deer.png"),
    id: 3,
  },
  {
    name: "Dog",
    image: require("../assets/images/Matching_Cards/Level_Three/Dog.png"),
    id: 4,
  },
  {
    name: "Flower",
    image: require("../assets/images/Matching_Cards/Level_Three/Flower.png"),
    id: 5,
  },
  {
    name: "Guitar Player",
    image: require("../assets/images/Matching_Cards/Level_Three/GuitarPlayer.png"),
    id: 6,
  },
  {
    name: "Rink",
    image: require("../assets/images/Matching_Cards/Level_Three/Rink.png"),
    id: 7,
  },
  {
    name: "Tree",
    image: require("../assets/images/Matching_Cards/Level_Three/Tree.png"),
    id: 8,
  },
  {
    name: "Truck",
    image: require("../assets/images/Matching_Cards/Level_Three/Truck.png"),
    id: 9,
  },
];

// shuffle cards
// level 1 has 4-8 - colors
// level 2 has 8-12 - shapes
// Level 3 has 8-12 - Shapes and Colors

const CardDisplay = ({ isActive, level, difficulty, NextLevel }) => {
  // Let

  // All number of levels the user must complete.
  const [cardsLeft, setCardsLeft] = useState(1);
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(true);

  // Activates the Game
  useEffect(() => {
    if (!isActive) {
      loadCards();
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [isActive]);

  // This loads the cards into the card display view
  const loadCards = () => {
    if (difficulty === 1) {
      // Depending on the difficulty selected will depend on the rounds
      // that the user will play/experience
      const temp = CardImages.slice(0, level);

      const shuffleCards = [...temp, ...temp]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffleCards);
    }

    if (difficulty === 2) {
      // Depending on the difficulty selected will depend on the rounds
      // that the user will play/experience
      const temp = MatchingImagesMedium.slice(0, level);

      const shuffleCards = [...temp, ...temp]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffleCards);
    }

    if (difficulty === 3) {
      // Depending on the difficulty selected will depend on the rounds
      // that the user will play/experience
      const temp = MatchingImagesHard.slice(0, level - 1);

      const shuffleCards = [...temp, ...temp]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffleCards);
    }
  };

  // This fills the two choice options as the user selects there cards
  const handleChoice = (card) => {
    if (card != choiceOne && card != choiceTwo) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.image === choiceTwo.image) {
        // If Cards Match They Continue
        if (cards.length / 2 != cardsLeft) {
          setCardsLeft(cardsLeft + 1);
        } else {
          setCardsLeft(1);
          NextLevel();
          setTimeout(() => {
            resetTurn();
          }, 1000);
          return;
        }
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === choiceOne.image) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset Choices and Card Picking
  const resetTurn = () => {
    setDisabled(false);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          disabled={disabled}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
        />
      ))}
    </View>
  );
};

export default CardDisplay;
