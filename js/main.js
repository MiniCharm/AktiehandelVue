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
            aktiHandelsPris:0,
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
        }
    }
})
