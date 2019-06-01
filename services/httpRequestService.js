import rp from 'request-promise';

class HttpRequestService {
  init(args) {
    super.init(args);
  }

  /**
   * Getter secret token.
   *
   * @returns {string}
   */
  request(method, uri, body) {
    const options = {
      method,
      uri,
      body,
      json: true,
    };

    return rp(options);
  }

  get(uri, body) {
    return request('GET', uri, body);
  }

  post(uri, body) {
    return request('POST', uri, body);
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
