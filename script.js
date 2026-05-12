Vue.component('chuck-card', {
  props: ['icon_url', 'value'],
  template: `
    <div class="card h-100 shadow-sm">
      <img :src="icon_url" class="card-img-top chuck-img" alt="Chuck Norris" />
      <div class="card-body">
        <p class="card-text">{{ value }}</p>
      </div>
    </div>
  `
})

new Vue({
  el: '#app',
  data: {
    chuck: [
      {
        icon_url: "ChuckNorris.jpg",
        value: "Chuck Norris can skydive into outer space."
      },
      {
        icon_url: "ChuckNorris.jpg",
        value: "The chief export of Chuck Norris is pain."
      },
      {
        icon_url: "ChuckNorris.jpg",
        value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
      },
      {
        icon_url: "ChuckNorris.jpg",
        value: "Time waits for no man. Unless that man is Chuck Norris."
      },
      {
        icon_url: "ChuckNorris.jpg",
        value: "If you spell Chuck Norris in Scrabble, you win. Forever."
      },
    ]
  }
})