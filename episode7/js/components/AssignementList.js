import Assignement from "./Assignement.js";

export default {
    components: {
        Assignement
    },
    template: `
        <section v-show="assignements.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul>
               <assignement  
                    v-for="assignement in assignements" 
                    :key="assignement.id"
                    :assignement="assignement"
                ></assignement>    
            </ul>
        </section>
    `,
    
    props: {
        assignements: Array,
        title: String
    }
}