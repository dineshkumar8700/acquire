# 🎲 Acquire (Web Version)

A web implementation of the classic stock market strategy board game
**Acquire**.

Players place bricks on a board to form hotel chains, buy stocks, manage
mergers, and compete to build the highest net worth.

---

# 🎯 Project Objectives

This project is designed to strengthen understanding of:

- Client ↔ Server architecture
- HTTP fundamentals
- Hono (Deno framework)
- Game state management
- Turn-based systems
- Clean separation of frontend and backend logic

---

# 🧠 Core Game Mechanics

## 🗺 Board

- 9 × 12 grid
- Bricks connect horizontally and vertically

## 🏨 Hotels

- 6 hotel chains
- Each hotel has:
  - Brick count (size)
  - Stock value (based on size)
  - Available stocks

## 🧩 Bricks

- Each player starts with 6 bricks
- One brick placed per turn
- Player always refills back to 6 bricks

## 💰 Money

- Each player starts with ₹6000

## 📈 Stocks

- Max 3 stocks per turn
- Stocks can only be sold during merge
- Exchange allowed during merge (2:1 ratio)

## 🔄 Merging

When two hotels connect:

- Smaller hotel is acquired
- Majority and minority bonuses are paid
- Players choose to sell, exchange, or keep stocks
- Acquiring hotel absorbs bricks

---

# 🔁 Game Flow

## Game Start

1. Players join
2. Initial money distributed
3. Bricks distributed
4. Turn order decided

## Turn Structure

1. Player places one brick
2. Board updates
3. Hotel formation or merge resolved (if triggered)
4. Player may buy up to 3 stocks
5. Turn ends → next player

---

# 🏁 Game End Conditions

Game ends when:

- Any hotel reaches required maximum size(41)\
  OR
- Board is fully occupied

Final settlement:

- Majority & minority bonuses distributed
- All stocks sold at current value
- Highest total money wins

---

# 🎮 Game Modes

## 🌐 Multiplayer

- Players join through lobby
- Server maintains authoritative state
- Turn-based synchronization

## 🤖 Version 1 (Single Player)

- Player vs Computer
- 6 × 6 board
- 4 hotels
- ₹4000 starting money
- 4 bricks per player
- Faster gameplay

---

# 🏗 Architecture Overview

## Server Responsibilities

- Maintain full game state
- Validate moves
- Resolve merges
- Calculate stock prices & bonuses

## Client Responsibilities

- Render board
- Capture input
- Display updates

Game logic must never depend on UI.

---
