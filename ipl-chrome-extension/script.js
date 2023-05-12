async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=592ceb90-a46a-4725-bd63-284825845653&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      const relevantData = matchesList.map(
        (match) => `${match.name}, ${match.status}`
      );
      console.log(relevantData);
    });
}

getMatchData();
