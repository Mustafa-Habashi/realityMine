const element = document.querySelector('#app');
const pageData = JSON.parse(element.getAttribute('data-page'));
const metaDataResult = pageData.props?.history

fetch('https://realityflix.rmdev.zone/en_US/watch-history', {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Inertia': 'true',
    'Accept': 'application/json',
    'X-Inertia-Partial-Data': 'watchTime',
    'X-Inertia-Partial-Component': 'Dashboard'
  }
})
  .then(res => res.json())
  .then(data => {
    const apiItems = data?.props?.watchTime || [];

    const result = {
      items: apiItems.map(item => {
        const meta = metaDataResult[item.id] || {};
        return {
          id: item.id,
          date_watched: item.lastWatchedAt || null,
          watch_secs: item.watchSecs || 0,
          total_secs: meta.length ? meta.length * 60 : 0,
          title: meta.title ? meta.title.split(":")[0] : null,
          episode_title: meta.title || null,
          episode_number: item.episode || null,
          season_number: item.season || null
        };
      })
    };

    console.log("Result:", result);
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.error("Error failed to call fetch", err);
  });