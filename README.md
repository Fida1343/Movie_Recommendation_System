# 🎬 CineMatch - Movie Recommendation System
A web-based movie recommendation system that suggests similar movies based on genre and rating similarity using content-based filtering algorithms.

## 🎯 About
CineMatch is a machine learning-powered movie recommendation system that helps users discover movies similar to their favorites. The system implements K-Nearest Neighbors(KNN) algorithm with Euclidean distance metric to analyze movie attributes like genre and ratings, providing personalized recommendations through content-based filtering.

## ✨ Features
- Browse through 50 popular movies across various genres
- Get 4 personalized movie recommendations based on similarity
- Clean and intuitive user interface
- Responsive design for all devices
- Fast and accurate recommendation algorithm
- Movie posters and detailed descriptions
- Genre-based filtering

## 🛠️ Technologies Used
- **HTML5** - Structure and layout
- **CSS3** - Styling and animations
- **JavaScript** - Logic and interactivity
- **Machine Learning Algorithms:**
  - K-Nearest Neighbors (KNN) - Recommendation engine
  - Content-Based Filtering - Similarity analysis
  - Euclidean Distance - Similarity metric
- **Data Normalization** - Feature scaling

## 💻 Usage
1. Open the application in your web browser
2. Select a movie from the dropdown menu
3. Click "Get Similar Movies" or press Enter
4. View your personalized recommendations with posters and descriptions
5. Click on any recommended movie to explore similar movies to that selection

## 🧮 Algorithm
The recommendation system uses a **content-based filtering** approach combined with **K-Nearest Neighbors (KNN)** machine learning algorithm:
1. **Feature Extraction**: Each movie is represented as a feature vector:
   - Genre (categorical → numerical mapping)
   - Rating (normalized to 0-1 scale)
2. **Similarity Calculation**: Implements **Euclidean Distance** metric to measure similarity between movies:
   ```
   distance = √[(genre₁ - genre₂)² + (rating₁ - rating₂)²]
   ```
3. **KNN Implementation**: For each selected movie:
   - Calculate distance to all other movies in the dataset
   - Sort movies by distance (ascending order)
   - Select K=4 nearest neighbors (most similar movies)
4. **Recommendation**: Return the top 6 movies with smallest Euclidean distance

This approach combines **supervised learning concepts** (KNN) with **distance-based similarity metrics** to provide accurate recommendations.

## 📁 Project Structure

```
Movie_Recommendation_System/
├── index.html              # Main landing page
├── result.html             # Recommendations display page
├── css/
│   ├── index.css          # Styles for landing page
│   └── result.css         # Styles for results page
├── js/
│   ├── dataset.js         # Movie data(50 movies)
│   ├── recommender.js     # Recommendation algorithm
│   └── main.js            # UI interactions
├── images/
│   └── posters/           # Movie poster images(50 images)
└── README.md              # Project documentation
```

## 📸 Screenshots
### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Add+Your+Screenshot+Here)
### Recommendations Page
![Recommendations](https://via.placeholder.com/800x400?text=Add+Your+Screenshot+Here)

## 🔮 Future Enhancements
- [ ] Add user ratings and reviews
- [ ] Implement collaborative filtering
- [ ] Add more movies to the database
- [ ] Include director and cast information
- [ ] Add search functionality
- [ ] Implement user accounts and watchlists
- [ ] Add movie trailers
- [ ] Include streaming platform information

## 📄 License
This project is licensed under the MIT License.

## 📧 Contact
**Fida Hussain**

- LinkedIn: [Fida Hussain](https://www.linkedin.com/in/fida-hussain-38511a2a6)
- GitHub: [@Fida1343](https://github.com/Fida1343)
- Email: fidahussain70040@gmail.com

## 🙏 Acknowledgments
- Movie data sourced from IMDb
- Poster images from various sources
- Inspired by popular recommendation systems like Netflix and Amazon

---

**Made with ❤️ by Fida Hussain**
