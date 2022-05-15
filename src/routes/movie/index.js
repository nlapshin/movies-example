import model from './model.js'

export default {
  register(app) {
    app.get('/movie/list', function(req, res) {
      const movies = model.list()
  
      res.json({ success: true, data: { movies } })
    })

    app.get('/movie/search', function(req, res) {
      const { query } = req
      const { name } = query

      const movies = name ? model.searchByName(name) : model.list()
  
      res.json({ success: true, data: { movies } })
    })
  
    app.post('/movie/add', function(req, res) {
      const response = model.add(req.body)

      res.json(response)
    })
  }
}
