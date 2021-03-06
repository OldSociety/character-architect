/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 *
 */

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

/*
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append('Content-Type', 'application/json');

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);
    if (response.status === 204) {
      return null;
    }
    const payload = await response.json();
    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function listData(route, params, signal) {
  const url = new URL(`${API_BASE_URL}/pantheon`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function listMoons(params, signal) {
  const url = new URL(`${API_BASE_URL}/pantheon`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function listNations(params, signal) {
  const url = new URL(`${API_BASE_URL}/nations`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function listFactions(params, signal) {
  const url = new URL(`${API_BASE_URL}/factions`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function listPantheons(params, signal) {
  const url = new URL(`${API_BASE_URL}/pantheon`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function listPatrons(params, signal) {
  const url = new URL(`${API_BASE_URL}/pantheon`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function listHistory(params, signal) {
  const url = new URL(`${API_BASE_URL}/history`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}
export async function listAppendix(params, signal) {
  const url = new URL(`${API_BASE_URL}/appendix`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function listRaces(params, signal) {
  const url = new URL(`${API_BASE_URL}/races`);
  console.log('params', params)
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function readRace(id, params, signal) {
  const url = new URL(`${API_BASE_URL}/races/${id}`);
  if (params) {
 
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function readPantheon(id, params, signal) {
  const url = new URL(`${API_BASE_URL}/pantheon/${id}`);
  if (params) {
 
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function readFaction(id, params, signal) {
  const url = new URL(`${API_BASE_URL}/factions/${id}`);
  if (params) {
 
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function readNation(id, params, signal) {
  const url = new URL(`${API_BASE_URL}/nations/${id}`);
  if (params) {
 
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

export async function readAppendix(id, params, signal) {
  const url = new URL(`${API_BASE_URL}/appendix/${id}`);
  if (params) {
 
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString()),
    );
  }
  return await fetchJson(url, { headers, signal, method: 'GET' }, []);
}

//CALL API IS STRICTLY FOR TESTING

// function callAPI() {
//   fetch(`${API_BASE_URL}/testAPI`)
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }))
//       .catch(err => err)
// }
