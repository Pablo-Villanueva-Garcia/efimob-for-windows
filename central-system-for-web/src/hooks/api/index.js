import { useEffect, useState } from "react";

const hostname = 'http://localhost:8001';

const options = {
  headers: {
    "Content-Type": "application/json",
    Accepts: "application/json",
  },
};

export const UseGet = (url) => {
  const [response, setResponse] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    setloading(true);
    fetch(hostname + url, {
      method: "GET",
      ...options,
    })
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
        setTimeout(() => {
          setloading(false);
        }, 1000);
      })
      .catch((error) => {
        setloading(false);
        seterror(error);
      });
  }, [url]);

  return {
    response,
    loading,
    error,
  };
};

export const UseGetOrganizationList = (listParams) => {
  let url = "/organization";

  const params = Object.keys(listParams)
    .filter((key) => listParams[key] !== undefined)
    .reduce((prev, next) => ({ ...prev, [next]: listParams[next] }), {});

  const querystring = new URLSearchParams(params).toString();

  if (querystring) {
    url = url + "?" + querystring;
  }
  return UseGet(url);
};

export const UseOrganization = (id) => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    fetch(hostname + "/organization/" + id, {
      method: "GET",
      ...options,
    })
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
      });
  }, [id]);

  return response;
};

export const UseCreateOrganization = () => {
  const [loading, setloading] = useState(false);
  return {
    createorganization: (body) => {
      setloading(true);
      return fetch(hostname + "/organization/", {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      })
        .then((response) => response.json())
        .then((response) => {
          setloading(false);
          return response;
        });
    },
    loading,
  };
};

export const UseEditOrganization = (id) => {
  const [loading, setloading] = useState(false);
  return {
    editorganization: (body) => {
      setloading(true);
      return fetch(hostname + "/organization/" + id, {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      })
        .then((response) => response.json())
        .then((response) => {
          setloading(false);
          return response;
        });
    },
    loading,
  };
};

export const UseDeleteOrganization = (id) => {
  return () =>
    fetch(hostname + "/organization/" + id, {
      method: "DELETE",
    });
};

export const UseGetChargetpointList = (listParams) => {
  let url = "/chargetpoint";

  const params = Object.keys(listParams)
    .filter((key) => listParams[key] !== undefined)
    .reduce((prev, next) => ({ ...prev, [next]: listParams[next] }), {});

  const querystring = new URLSearchParams(params).toString();

  if (querystring) {
    url = url + "?" + querystring;
  }
  return UseGet(url);
};

export const UseChargetpoint = (id) => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    fetch(hostname + "/chargetpoint/" + id, {
      method: "GET",
      ...options,
    })
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
      });
  }, [id]);

  return response;
};

export const UseCreateChargetpoint = () => {
  const [loading, setloading] = useState(false);
  return {
    createchargetpoint: (body) => {
      setloading(true);
      return fetch(hostname + "/chargetpoint/", {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      })
        .then((response) => response.json())
        .then((response) => {
          setloading(false);
          return response;
        });
    },
    loading,
  };
};

export const UseEditChargetpoint = (id) => {
  const [loading, setloading] = useState(false);
  return {
    editchargetpoint: (body) => {
      setloading(true);
      return fetch(hostname + "/chargetpoint/" + id, {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      })
        .then((response) => response.json())
        .then((response) => {
          setloading(false);
          return response;
        });
    },
    loading,
  };
};

export const UseDeleteChargetpoint = (id) => {
  return () =>
    fetch(hostname + "/chargetpoint/" + id, {
      method: "DELETE",
    });
};
