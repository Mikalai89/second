"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,
};

for (let i = 0; i <=1; i++) {
    const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    const reiting = prompt("На сколько оцените его?", "");
    personalMovieDB.movies[lastFilm] = reiting;
}


// const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
// const reiting2 = prompt("На сколько оцените его?", "");
// personalMovieDB.movies[lastFilm2] = reiting2;



// console.log(personalMovieDB);
console.log(typeof(numberOfFilms));
