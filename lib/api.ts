const Api = {
  post: (endpoint: string, body: { [key: string]: any }) => {
    return new Promise<any>((resolve, reject) => {
      fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          resolve(response.json());
        })
        .catch(reject);
    });
  },
};

export default Api;
