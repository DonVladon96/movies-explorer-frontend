class MainApi {
  constructor() {
    this.options = {
      baseUrl: "https://api.movie43.nomoredomains.rocks/movies",
      headers: {
        "Content-type": "application/json",
      },
    };
  }

  signup(user) {
    return fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify(user)
    }).then(this._getResponse);
  }

  signin(user) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify(user)
    }).then(this._getResponse);
  }

  getProfile() {
    const token = localStorage.getItem("token");
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  updateProfile(user) {
    const token = localStorage.getItem("token");
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user)
    }).then(this._getResponse);
  }

  saveMovies(data) {
    const token = localStorage.getItem("token");
    return fetch(`${this.options.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    }).then(this._getResponse);
  }

  getSaveMovies() {
    const token = localStorage.getItem("token");
    return fetch(`${this.options.baseUrl}/movies`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if(response.status === 401){
          localStorage.removeItem('token');
          return [];
        } else {
          return response.json();
        }
      })
      .catch(error => {
        console.error('getSaveMovies error',error);
      });
  }

  deleteSaveMovies(id) {
    const token = localStorage.getItem("token");
    return fetch(`${this.options.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }
}

export default new MainApi();
