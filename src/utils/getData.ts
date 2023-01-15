export const getData = (text: string) => {
  let requestOptions = {
    method: "GET",
  };

  fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=0895cbb5ad8c463ca78d2062e74f3423&lang=ru `,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log("error", error));
};
