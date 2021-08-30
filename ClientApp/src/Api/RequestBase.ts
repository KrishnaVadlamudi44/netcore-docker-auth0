enum httpResponseCodes {
  success = 200,
  unauthorized = 400,
  serverError = 500,
  notFound = 404,
}

export const Get = async <T>(
  endPoint: string,
  queryParameters?: string
): Promise<T | null> => {
  try {
    endPoint = queryParameters ? `${endPoint}?${queryParameters}` : endPoint;
    const response = await fetch(endPoint, {
      method: 'GET',
      headers: getDefaultHeaders(),
    });

    if (response.ok && response.status === httpResponseCodes.success) {
      return response.json();
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const Post = async <R, T>(
  endPoint: string,
  payload: T
): Promise<R | null> => {
  try {
    const response = await fetch(endPoint, {
      method: 'POST',
      headers: getDefaultHeaders(),
      body: JSON.stringify(payload),
    });

    if (response.ok && response.status === httpResponseCodes.success) {
      return response.json();
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

const getDefaultHeaders = () => {
  let headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json, text/plain',
  });

  if (false) {
    headers.append('Authorization', '');
  }

  return headers;
};
