class ApiFilm {
  constructor() {
    this.options = {
      // baseUrl: "https://api.movie43.nomoredomains.rocks/movies",
      baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
      headers: {
        "Content-type": "application/json",
      },
    };
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this.options.baseUrl}`, {
      method: "GET",
      headers: this.options.headers
    })
      .then(response => {
        return this._getResponse(response);
      })
      .catch(error => {
        console.error('getMovies error', error);
      });
  }
}

export default new ApiFilm();
