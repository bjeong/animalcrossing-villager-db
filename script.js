
const app = Vue.createApp({
  data() {
    return {
      /* in vue, the page reacts to the data, rather than the other way around*/
      villagers: null,    /* axios stores all the villagers here after fetching them */
      villager: null,     /* this variable updates to hold whatever villager is clicked on. */
      loading: true //activates the loading gif
    }
  },
  methods: {
    showVillager(id) { //show a single villager
      this.villager = this.villagers[id] //choose 1 villager from the list
      console.log(this.villager)
      /*Scroll to the top whenever a villager is chosen*/
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  },
  mounted() {
/*api key access code*/
    const options = {
      method: 'GET',
      headers: {
        'x-api-key': '8a393130-13c0-48a0-b2ad-d297817254ff',
        Authorization: 'Bearer 8a393130-13c0-48a0-b2ad-d297817254ff'
      }
    };

    axios.get('https://api.nookipedia.com/villagers', options)
      .then(response => {
        this.villagers = response.data,
          this.loading = false //stops the loading gif after all data has been fetched
      })
      .catch(error => console.log(error));
  }
}).mount('#app') //#app is activated once the page loads and will run mounted() and fetch the API