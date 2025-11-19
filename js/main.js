const baseURL='http://localhost:5211/api/AktieHandel'

const app = Vue.createApp({
    data() {
        return {
            title:'Aktiehandler',
            allActiehandler:[],
            filtherSortedAktiehandler:[],
            aktieID:0,
            aktieNavn:'',
            antal:0,
            aktiehandelsPris:0,
            statusCode:''

        }
    },
    methods: {
        getAllAktiehandler(){
            console.log('Er i getAll')

            axios.get(baseURL).then(response =>{
                this.allActiehandler = response.data
                this.filtherSortedAktiehandler=this.allActiehandler

                this.statusCode= response.status
            })
            .catch(
                error=> {
                    console.log(error)
                }
            )
        },
        postAktiehandel(){
            console.log('er i post')

            axios.post(baseURL,{"aktieNavn":this.aktieNavn,"antal":this.antal,"handelspris":this.aktiehandelsPris})
            .then( response =>{
                console.log(response)
                this.statusCode = response.status
            }
            )
            .catch(
                error => 
                    console.log(error)
            )
        }
    }
})
