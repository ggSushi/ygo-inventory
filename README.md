# **Yu-Gi-Oh! Inventory Database (Local)**

This app is intended to be a personal inventory database of all current Yu-Gi-Oh! TCG cards currently owned by the user and implements the use of <a href="https://ygoprodeck.com/api-guide/">YGOPRODeck's API</a>. 

### **_Current Status_**
Searching through the API will show card results on the page with proper card colors and short descriptions of them on the card. Clicking into them will bring user into a more detailed card info page where you can store the card into the database with a quantity and location (locations are user-specific and must be adjusted to user's storage plan).

Going to the Inventory tab will now display the cards currently in user's database; sorted alphabetically. Clicking on each card shows the id of that item in the console, and will eventually pull up that card's information in a separate component.
-------
Search through YGOPRODeck's API is functional, as well as storing cards into local database.

### **_Function_**
The user will be able to:
- Search for the desired cards
- Save those cards with a set initial quantity to their database 
- Set/Change storage location of cards (User will need to have a storage system of some type already in mind. This is specific to the user)
- Build their currently owned decks within the app, using their own database as inventory for available cards
- Build concept decks using a mix of their own inventory and cards they will need in the future
- Create a wishlist of cards for future deck building/ collecting

### **_Technologies Used_**
- JavaScript, HTML, CSS
- NodeJS, ExpressJS
- React, React Redux, Redux Saga
- Axios
- PostgreSQL
- Material UI
- YGOPRODeck API

All of the above is already installed. All that is required is that you run the command below in terminal once you have this repo/template cloned to your device:
```javascript
npm install
```

After which, you can open this in code and type the following command to have it open up in your browser, localhost:5006.
```javascript
npm run server
npm run client
```

### **Device Prerequisites**
I have **Postgres** and **Postico** installed on my device to handle database SQL, while I also have **VS Code** as my chosen source code editor.