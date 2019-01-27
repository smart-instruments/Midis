import rp from 'request-promise';

class HttpRequestService {
    /**
     * Getter secret token.
     *
     * @returns {string}
     */
  _request(method, uri, body) {
    const options = {
      method,
      uri,
      body,
      json: true,
    };

    return rp(options);
  }

  get(uri, body) {
    return this._request('GET', uri, body);
  }

  post(uri, body) {
    return _request('POST', uri, body);
  }

  postFile(uri, file) {
    const options = {
      method: 'POST',
      uri,
      formData: {
        file: {
          value: Buffer.from(file.data),
          options: {
            filename: file.name,
          },
        },
      },
      json: true,
    };

    return rp(options);
  }
}

export default HttpRequestService;
