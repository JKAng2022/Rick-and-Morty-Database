# Rick and Morty Database

## Description

A database for Rick and Morty fans that showcases over 800 characters from the Rick and Morty show. Features
(1) Characters page: A dynamic search by name of character, with filters
(2) Episodes page: Episode name and air date as well as as list of characters that appear in each episode
(3) Locations page: List of all locations in the Rick and Morty Universe, as well as their inhabitants.
(4) Favourites page: Display all favourited characters in (1), (2) and (3) above.

### Technical Used

```
- React
- Bootstrap
- CSS
- Rick and Morty API
```

### Wireframes

![wireframe](https://user-images.githubusercontent.com/103444807/171367138-cd306c45-c6b2-42d8-b47b-b3c1a0b15b96.png)

### User Stories

```
User must be able to:

- Search for all characters in search bar
- Filter characters by gender and status
- View results from all pages
- Search for characters that appear in a specific episode or location

```

---

## Planning and Development Process

First, I explored the API to check the available information and what I wanted to present on the website. After that, I did a test fetch to see that it is working.

The rest of the project was built in pieces starting from the characters page, then the episodes and locations pages.

After the MVP was finished, I focused on additional functionality such as adding a character to favourites as well as styling.

### Challenges and solutions

(1) When typing in the search bar, the search bar seemed to hang and prevent me from typing. I realised that was because I had set the "loading" page to display when information was being fetched. It was able to work once I disabled that functionality.

(2) When making the reset filters, I realised that I would have to link the clearing of the filters with the settting of the labels back to their default selections, if not it would still display the wrong filters. I solved this by using the useRef() as a hook and setting an on-click that would set the `<select>` button back to the first selection.

(3) There was a bug where when there are no characters to display, the remaining characters would still remain there. I found out this was due to an error being thrown out when the fetch was a 404. I solved it by removing the error catch statement and also set the character cards to display only if they existed (i.e. truthy), if not, I would display "No characters available".

(4) I realised that using a for loop to pull from multiple APIs does not work. Solution: Use promise.all.

(5) When creating the favourites functionality, I realised that those characters tagged as favourites would be gone once I changed the filters or went to another page. This was because I was comparing objects that had identical key-value pairs inside them but they were not identical (reference issue). I solved this by using the .some method and using the object's id as the comparision point instead.

### Future Implementations

Right now, the specific card information is rather limited. I would like to add the episodes information to each specific card (with the link to the specific episodes). However, this would mean that the episodes page might need to be rewritten using params.

## APIs Used

Rick and Morty API - https://rickandmortyapi.com/

---

## Copyright

Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.

The API is open source and uses a BSD license.
