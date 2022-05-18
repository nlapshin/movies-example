import validation from '../../validation/index.js'

const movies = [
  { name: 'Зеленая миля', country: 'USA', year: 1999, rating: 9.1 },
  { name: 'Список Шиндлера', country: 'USA', year: 1993, rating: 9 },
  { name: 'Побег из Шоушенка', country: 'USA', year: 1994, rating: 9 },
  { name: 'Властелин колец: Возвращение короля', country: 'USA', year: 2003, rating: 9 },
  { name: 'Форрест Гамп', country: 'USA', year: 1994, rating: 8.9 },
  { name: 'Властелин колец: Две крепости', country: 'USA', year: 2002, rating: 8.8 },
  { name: 'Властелин колец: Братство кольца', country: 'USA', year: 2001, rating: 8.8 },
  { name: '1+1', country: 'France', year: 2011, rating: 8.8 },
  { name: 'Криминальное чтиво', country: 'USA', year: 1994, rating: 8.7 },
  { name: 'Иван Васильевич меняет профессию', country: 'USSR', year: 1973, rating: 8.7 },
  { name: 'Матрица', country: 'USA', year: 1999, rating: 8.5 }
]

export default {
  list() {
    return movies
  },

  searchByName(name) {
    return movies.filter(movie => movie.name.toLowerCase().includes(name.toLowerCase()))
  },

  add(movie) {
    const validationError = this.validate(movie)

    if (validationError) {
      return { success: false, error: validationError }
    }
    
    movies.push(movie)

    return { success: true }
  },

  validate(movie) {
    if (!validation.isString(movie.name)) {
      return `Incorrect name`
    }

    if (!validation.isString(movie.country)) {
      return `Incorrect country`
    }

    if (!validation.isNumber(movie.year)) {
      return `Incorrect year`
    }

    if (!validation.isNumber(movie.rating)) {
      return `Incorrect rating`
    }

    return null
  }
}
